// =====================================================
// progress.js — Registro de progreso del alumnado
// =====================================================

const Progress = (() => {
  const LOCAL_KEY = 'tyd2_progress';

  // ── Almacenamiento local ──────────────────────────

  function _getAll() {
    try {
      return JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
    } catch { return {}; }
  }

  function _saveAll(data) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
  }

  /**
   * Devuelve el progreso de una unidad para el usuario actual.
   * Estructura: { completed: bool, score: number, total: number, answers: [] }
   */
  function getUnit(unitId) {
    const all = _getAll();
    return all[unitId] || { completed: false, score: 0, total: 0, answers: [] };
  }

  /**
   * Guarda el resultado de una unidad completa.
   */
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

  /**
   * Devuelve el % completado de todas las unidades configuradas.
   */
  function overallPercent() {
    const all = _getAll();
    const units = CONFIG.UNITS;
    const done = units.filter(u => all[u] && all[u].completed).length;
    return Math.round((done / units.length) * 100);
  }

  // ── Envío al Apps Script (Google Sheets) ─────────

  /**
   * Envía el resultado de la unidad al Apps Script.
   * Usa fetch con mode: 'no-cors' (fire-and-forget) para evitar
   * problemas de CORS con Apps Script.
   */
  function sendToSheet(user, unitId, score, total) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) return;

    const body = {
      email:    user.email,
      name:     user.name,
      unit:     unitId,
      score,
      total,
      percent:  Math.round((score / total) * 100),
      date:     new Date().toISOString(),
    };

    fetch(CONFIG.APPS_SCRIPT_URL, {
      method:  'POST',
      mode:    'no-cors',    // necesario para Apps Script sin CORS configurado
      headers: { 'Content-Type': 'text/plain' },
      body:    JSON.stringify(body),
    }).catch(() => {
      // Silencioso: el resultado ya está guardado localmente
    });
  }

  // ── Lectura del panel de profesor (JSONP) ─────────

  /**
   * Obtiene todos los datos del Google Sheet via JSONP.
   * @param {string} token  - contraseña del profesor
   * @param {function} onSuccess - callback(data: Array)
   * @param {function} onError   - callback(msg: string)
   */
  function fetchTeacherData(token, onSuccess, onError) {
    if (!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes('TU_ID')) {
      onError('La URL del Apps Script no está configurada. Consulta el README.md.');
      return;
    }

    const callbackName = '__tyd2_cb_' + Date.now();
    const script = document.createElement('script');

    window[callbackName] = function (response) {
      delete window[callbackName];
      script.remove();
      if (response.error) {
        onError(response.error);
      } else {
        onSuccess(response.data || []);
      }
    };

    const url = CONFIG.APPS_SCRIPT_URL
      + '?callback=' + callbackName
      + '&token=' + encodeURIComponent(token);

    script.src = url;
    script.onerror = () => {
      delete window[callbackName];
      onError('No se pudo conectar con el servidor. Comprueba la URL del Apps Script.');
    };
    document.head.appendChild(script);

    // Timeout de seguridad
    setTimeout(() => {
      if (window[callbackName]) {
        delete window[callbackName];
        script.remove();
        onError('El servidor tardó demasiado en responder.');
      }
    }, 10000);
  }

  return { getUnit, saveUnit, overallPercent, sendToSheet, fetchTeacherData };
})();
