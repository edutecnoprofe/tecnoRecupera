// =====================================================
// progress.js — Registro de progreso del alumnado
// =====================================================

const Progress = (() => {
  const LOCAL_KEY         = 'tyd2_progress';
  const IN_PROGRESS_KEY   = 'tyd2_inprogress';
  const VISITED_KEY       = 'tyd2_visited';
  const SHEET_ANSWERS_KEY = 'tyd2_sheet_answers';

  // ── Almacenamiento local ──────────────────────────

  function _getAll() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    } catch { return {}; }
  }

  function _saveAll(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }

  /** Devuelve el progreso de una unidad */
  function getUnit(unitId) {
    const all = _getAll();
    return all[unitId] || { completed: false, score: 0, total: 0, answers: [] };
  }

  /** Guarda el resultado de una unidad completa */
  function saveUnit(unitId, score, total, answers) {
    const all = _getAll();
    all[unitId] = {
      completed: true,
      score,
      total,
      answers,
      completedAt: new Date().toISOString(),
    };
    _saveAll(all);
  }

  // ── Progreso parcial (mid-ejercicios) ────────────

  /** Guarda el estado en curso: IDs de ejercicios seleccionados + respuestas dadas */
  function saveInProgress(unitId, exerciseIds, currentIdx, answers, score) {
    try {
      const all = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY)) || {};
      all[unitId] = { exerciseIds, currentIdx, answers, score, savedAt: new Date().toISOString() };
      localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify(all));
    } catch {}
  }

  /** Recupera el estado en curso de una unidad, o null */
  function getInProgress(unitId) {
    try {
      const all = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY)) || {};
      return all[unitId] || null;
    } catch { return null; }
  }

  /** Borra el estado en curso al completar */
  function clearInProgress(unitId) {
    try {
      const all = JSON.parse(localStorage.getItem(IN_PROGRESS_KEY)) || {};
      delete all[unitId];
      localStorage.setItem(IN_PROGRESS_KEY, JSON.stringify(all));
    } catch {}
  }

  // ── Secciones visitadas (teoría / ejemplo) ────────

  /** Marca una sección como visitada */
  function saveVisited(unitId, section) {
    try {
      const all = JSON.parse(localStorage.getItem(VISITED_KEY)) || {};
      if (!all[unitId]) all[unitId] = {};
      all[unitId][section] = true;
      localStorage.setItem(VISITED_KEY, JSON.stringify(all));
    } catch {}
  }

  /** Devuelve {teoria: bool, ejemplo: bool} para la unidad */
  function getVisited(unitId) {
    try {
      const all = JSON.parse(localStorage.getItem(VISITED_KEY)) || {};
      return all[unitId] || {};
    } catch { return {}; }
  }

  /** % global completado */
  function overallPercent() {
    const all = _getAll();
    const units = CONFIG.UNITS;
    const done = units.filter(u => all[u] && all[u].completed).length;
    return Math.round((done / units.length) * 100);
  }

  // ── Envío al Apps Script via JSONP (GET) ──────────
  //
  // fetch + mode:'no-cors' no funciona bien con los redirects de Apps Script.
  // JSONP (inyección de <script>) sigue los redirects del navegador de forma
  // nativa y no tiene problemas de CORS.

  function _jsonpCall(params, onDone) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) return;

    const cbName = '__tyd_cb_' + Date.now() + '_' + Math.random().toString(36).slice(2);
    const script  = document.createElement('script');

    window[cbName] = function (res) {
      delete window[cbName];
      script.remove();
      if (onDone) onDone(res);
    };

    params.callback = cbName;
    const qs = new URLSearchParams(params).toString();
    script.src = CONFIG.APPS_SCRIPT_URL + '?' + qs;
    script.onerror = () => { delete window[cbName]; script.remove(); };
    document.head.appendChild(script);

    // Timeout de seguridad
    setTimeout(() => {
      if (window[cbName]) { delete window[cbName]; script.remove(); }
    }, 15000);
  }

  /**
   * Envía el resultado final de la unidad al Apps Script (fire-and-forget).
   */
  function sendToSheet(user, unitId, score, total) {
    _jsonpCall({
      action:  'save',
      email:   user.email,
      name:    user.name,
      unit:    unitId,
      score:   score,
      total:   total,
      percent: Math.round((score / total) * 100),
      date:    new Date().toISOString(),
    });
  }

  /**
   * Envía un evento de progreso parcial al Apps Script (fire-and-forget).
   * @param {Object} user    - {email, name}
   * @param {string} unitId  - 'ut1', 'ut4'…
   * @param {string} type    - 'teoria', 'ejemplo', 'ejercicio'
   * @param {string} detail  - p.ej. 'q03:correcto' o 'q07:incorrecto'
   */
  function sendEvent(user, unitId, type, detail) {
    _jsonpCall({
      action: 'save_event',
      email:  user.email,
      name:   user.name,
      unit:   unitId,
      type:   type,
      detail: detail || '',
    });
  }

  // ── Lectura del panel de profesor ─────────────────

  /**
   * Obtiene el historial propio del alumno y siembra localStorage si está vacío.
   * Se llama al hacer login para sincronizar estado entre dispositivos.
   */
  function syncFromSheet(email, onDone) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) {
      if (onDone) onDone();
      return;
    }

    const cbName = '__tyd_mine_' + Date.now();
    const script  = document.createElement('script');

    window[cbName] = function (response) {
      delete window[cbName];
      script.remove();
      if (response.error || !response.events) { if (onDone) onDone(); return; }

      // Repoblar secciones visitadas desde eventos
      const visited = JSON.parse(localStorage.getItem(VISITED_KEY)) || {};
      response.events.forEach(ev => {
        const unit = ev['Unidad'];
        const type = ev['Tipo'];
        if (!unit) return;
        if (!visited[unit]) visited[unit] = {};
        if (type === 'teoria')  visited[unit].teoria  = true;
        if (type === 'ejemplo') visited[unit].ejemplo = true;
      });
      localStorage.setItem(VISITED_KEY, JSON.stringify(visited));

      // Repoblar unidades completadas desde progreso (si localStorage no las tiene ya)
      const all = _getAll();
      let changed = false;
      response.completed.forEach(row => {
        const unit = row['Unidad'];
        if (unit && !all[unit]) {
          all[unit] = {
            completed: true,
            score:  Number(row['Puntuación']) || 0,
            total:  Number(row['Total'])      || 0,
            completedAt: row['Fecha'] || new Date().toISOString(),
          };
          changed = true;
        }
      });
      if (changed) _saveAll(all);

      // Guardar respuestas de ejercicios por unidad para reconstruir inprogress
      const sheetAnswers = {};
      response.events.forEach(ev => {
        const unit   = ev['Unidad'];
        const type   = ev['Tipo'];
        const detail = ev['Detalle'] || '';
        if (type !== 'ejercicio' || !unit) return;
        const [qid, resultado] = detail.split(':');
        if (!qid) return;
        if (!sheetAnswers[unit]) sheetAnswers[unit] = [];
        // Guardar solo la última respuesta a cada pregunta (puede haber reintentos)
        const existing = sheetAnswers[unit].findIndex(a => a.id === qid);
        const entry = { id: qid, correct: resultado === 'correcto' };
        if (existing >= 0) sheetAnswers[unit][existing] = entry;
        else sheetAnswers[unit].push(entry);
      });
      try {
        localStorage.setItem(SHEET_ANSWERS_KEY, JSON.stringify(sheetAnswers));
      } catch {}

      if (onDone) onDone();
    };

    script.src = CONFIG.APPS_SCRIPT_URL
      + '?action=read_mine'
      + '&email='    + encodeURIComponent(email)
      + '&callback=' + cbName;
    script.onerror = () => { delete window[cbName]; script.remove(); if (onDone) onDone(); };
    document.head.appendChild(script);
    setTimeout(() => { if (window[cbName]) { delete window[cbName]; script.remove(); if (onDone) onDone(); } }, 10000);
  }

  /**
   * Obtiene todos los datos del Google Sheet via JSONP.
   * @param {string}   token      - contraseña del profesor
   * @param {function} onSuccess  - callback(data: Array)
   * @param {function} onError    - callback(msg: string)
   */
  function fetchTeacherData(token, onSuccess, onError) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) {
      onError('La URL del Apps Script no está configurada. Consulta el README.md.');
      return;
    }

    const cbName = '__tyd_teacher_' + Date.now();
    const script  = document.createElement('script');

    window[cbName] = function (response) {
      delete window[cbName];
      script.remove();
      if (response.error) {
        onError(response.error);
      } else {
        onSuccess(response.data || []);
      }
    };

    const url = CONFIG.APPS_SCRIPT_URL
      + '?action=read'
      + '&token='    + encodeURIComponent(token)
      + '&callback=' + cbName;

    script.src = url;
    script.onerror = () => {
      delete window[cbName];
      onError('No se pudo conectar con el servidor. Comprueba la URL del Apps Script.');
    };
    document.head.appendChild(script);

    setTimeout(() => {
      if (window[cbName]) {
        delete window[cbName];
        script.remove();
        onError('El servidor tardó demasiado en responder.');
      }
    }, 12000);
  }

  /**
   * Obtiene los eventos de detalle del Google Sheet via JSONP.
   */
  function fetchTeacherEvents(token, onSuccess, onError) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) {
      onError('URL del Apps Script no configurada.');
      return;
    }

    const cbName = '__tyd_events_' + Date.now();
    const script  = document.createElement('script');

    window[cbName] = function (response) {
      delete window[cbName];
      script.remove();
      if (response.error) { onError(response.error); }
      else { onSuccess(response.data || []); }
    };

    script.src = CONFIG.APPS_SCRIPT_URL
      + '?action=read_events'
      + '&token='    + encodeURIComponent(token)
      + '&callback=' + cbName;
    script.onerror = () => { delete window[cbName]; onError('Error de conexión.'); };
    document.head.appendChild(script);

    setTimeout(() => {
      if (window[cbName]) { delete window[cbName]; script.remove(); onError('Tiempo de espera agotado.'); }
    }, 12000);
  }

  /** Devuelve las respuestas del Sheet para una unidad [{id, correct}] */
  function getSheetAnswers(unitId) {
    try {
      const all = JSON.parse(localStorage.getItem(SHEET_ANSWERS_KEY)) || {};
      return all[unitId] || [];
    } catch { return []; }
  }

  return {
    getUnit, saveUnit, overallPercent,
    saveInProgress, getInProgress, clearInProgress,
    saveVisited, getVisited,
    getSheetAnswers,
    syncFromSheet,
    sendToSheet, sendEvent,
    fetchTeacherData, fetchTeacherEvents,
  };
})();
