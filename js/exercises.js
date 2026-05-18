// =====================================================
// exercises.js — Motor de ejercicios (test + matching)
// =====================================================

const ExerciseEngine = (() => {

  // ── Estado ────────────────────────────────────────

  let state = {
    unit:        null,   // objeto de contenido (ut1, ut4…)
    exercises:   [],
    current:     0,
    answers:     [],     // { id, correct, userAnswer }
    score:       0,
    onComplete:  null,   // callback cuando se acaban todos los ejercicios
    colorVar:    '--primary',
  };

  // ── Utilidades ────────────────────────────────────

  function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
  }

  function getUnitColor() {
    return `var(${state.colorVar})`;
  }

  // ── Inicialización ────────────────────────────────

  /**
   * Arranca el motor con la unidad dada.
   * @param {Object} unit        - Objeto con exercises[], colorVar, etc.
   * @param {HTMLElement} mount  - Elemento donde renderizar
   * @param {Function} onComplete - Llamada con (score, total, answers) al terminar
   */
  function start(unit, mount, onComplete) {
    state.unit       = unit;
    state.onComplete = onComplete;
    state.colorVar   = unit.colorVar || '--primary';
    state.mount      = mount;

    const saved = Progress.getInProgress(unit.id);

    if (saved && saved.currentIdx > 0) {
      // Hay progreso guardado — preguntar si continuar
      const pool = unit.exercises || [];
      const restored = saved.exerciseIds
        .map(id => pool.find(e => e.id === id))
        .filter(Boolean);

      mount.innerHTML = `
        <div class="results-card" style="text-align:center">
          <div style="font-size:2.5rem">⏸️</div>
          <div style="font-size:1.1rem;font-weight:600;margin:.75rem 0">
            Dejaste esta unidad a medias
          </div>
          <div style="color:var(--muted);font-size:.9rem;margin-bottom:1.25rem">
            Llevas <strong>${saved.currentIdx} de ${restored.length}</strong> ejercicios
            (${saved.score} correctos)
          </div>
          <div style="display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap">
            <button class="btn btn-primary" id="btn-continue"
                    style="background:var(${unit.colorVar})">
              ▶ Continuar donde lo dejé
            </button>
            <button class="btn btn-ghost" id="btn-restart">
              🔁 Empezar de nuevo
            </button>
          </div>
        </div>`;

      document.getElementById('btn-continue').addEventListener('click', () => {
        state.exercises = restored;
        state.current   = saved.currentIdx;
        state.answers   = saved.answers;
        state.score     = saved.score;
        renderCurrentExercise();
      });

      document.getElementById('btn-restart').addEventListener('click', () => {
        Progress.clearInProgress(unit.id);
        _freshStart();
      });
    } else {
      _freshStart();
    }
  }

  function _freshStart() {
    const pool      = state.unit.exercises || [];
    state.exercises = shuffle(pool).slice(0, Math.min(10, pool.length));
    state.current   = 0;
    state.answers   = [];
    state.score     = 0;
    renderCurrentExercise();
  }

  // ── Renderizado principal ─────────────────────────

  function renderCurrentExercise() {
    const total = state.exercises.length;
    const idx   = state.current;

    if (idx >= total) {
      renderResults();
      return;
    }

    const ex = state.exercises[idx];
    const pct = Math.round((idx / total) * 100);

    state.mount.innerHTML = `
      <div class="exercise-progress">
        <div class="exercise-progress-bar">
          <div class="exercise-progress-fill" style="width:${pct}%"></div>
        </div>
        <span class="exercise-progress-label">
          ${idx + 1} / ${total}
        </span>
      </div>
      <div class="exercise-card" id="ex-card"></div>
    `;

    const card = document.getElementById('ex-card');
    card.innerHTML = `
      <div class="exercise-num">Ejercicio ${idx + 1}</div>
      <div class="exercise-question">${ex.question}</div>
      <div id="ex-body"></div>
      <div id="ex-feedback" class="feedback-box"></div>
      <div class="next-btn-wrap" id="ex-next-wrap" style="display:none">
        <button class="btn btn-primary" id="ex-next-btn"
                style="background:${getUnitColor()}">
          ${idx + 1 < total ? 'Siguiente ejercicio →' : 'Ver resultados'}
        </button>
      </div>
    `;

    if (ex.type === 'test') {
      renderTest(ex, document.getElementById('ex-body'));
    } else if (ex.type === 'matching') {
      renderMatching(ex, document.getElementById('ex-body'));
    }

    document.getElementById('ex-next-btn')?.addEventListener('click', nextExercise);
  }

  // ── Test (opción múltiple) ────────────────────────

  function renderTest(ex, body) {
    const letters = ['A', 'B', 'C', 'D'];
    const opts = ex.options.map((o, i) => `
      <button class="option-btn" data-idx="${i}">
        <span class="option-letter">${letters[i]}</span>
        <span>${o.text}</span>
      </button>
    `).join('');

    body.innerHTML = `<div class="options-list">${opts}</div>`;

    body.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => handleTestAnswer(ex, parseInt(btn.dataset.idx)));
    });
  }

  function handleTestAnswer(ex, idx) {
    const option  = ex.options[idx];
    const buttons = state.mount.querySelectorAll('.option-btn');
    const feedback = document.getElementById('ex-feedback');

    // Deshabilitar todos los botones
    buttons.forEach(b => b.disabled = true);

    // Marcar correcto/incorrecto
    buttons[idx].classList.add(option.correct ? 'correct' : 'incorrect');
    if (!option.correct) {
      // Mostrar también cuál era la correcta
      ex.options.forEach((o, i) => {
        if (o.correct) buttons[i].classList.add('correct');
      });
    }

    // Feedback
    feedback.className = `feedback-box ${option.correct ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
      <strong>${option.correct ? '✅ ¡Correcto!' : '❌ Incorrecto'}</strong>
      ${option.feedback}
    `;

    // Registrar
    const isCorrect = option.correct;
    if (isCorrect) state.score++;
    state.answers.push({ id: ex.id, correct: isCorrect, userAnswer: option.text });

    // Guardar progreso parcial en localStorage
    Progress.saveInProgress(
      state.unit.id,
      state.exercises.map(e => e.id),
      state.current + 1,
      state.answers,
      state.score
    );

    // Evento parcial al Apps Script
    const user = typeof Auth !== 'undefined' ? Auth.getUser() : null;
    if (user && state.unit) {
      Progress.sendEvent(user, state.unit.id, 'ejercicio',
        ex.id + ':' + (isCorrect ? 'correcto' : 'incorrecto'));
    }

    // Mostrar botón "Siguiente"
    document.getElementById('ex-next-wrap').style.display = 'flex';
  }

  // ── Matching (unir con clic) ──────────────────────

  function renderMatching(ex, body) {
    const pairs   = ex.pairs;
    const lefts   = pairs.map(p => p.left);
    const rights  = shuffle(pairs.map(p => p.right));

    // Mapa correcto: left → right
    const correctMap = {};
    pairs.forEach(p => { correctMap[p.left] = p.right; });

    // Estado del matching
    const matchState = {
      selected: null,      // left item actualmente seleccionado
      matched:  {},        // left → right (ya conectados)
      correct:  0,
    };

    body.innerHTML = `
      <p class="matching-instructions">
        👆 Haz clic en un término de la izquierda y luego en su definición de la derecha.
      </p>
      <div class="matching-grid">
        <div class="matching-col">
          <div class="matching-col-title">Término</div>
          ${lefts.map(l => `
            <div class="match-item left-item" data-value="${l}">${l}</div>
          `).join('')}
        </div>
        <div class="matching-col">
          <div class="matching-col-title">Definición</div>
          ${rights.map(r => `
            <div class="match-item right-item" data-value="${r}">${r}</div>
          `).join('')}
        </div>
      </div>
      <div id="match-status" style="font-size:.85rem;color:var(--muted);margin-top:.5rem">
        Emparejados: 0 / ${pairs.length}
      </div>
    `;

    // Listeners izquierda
    body.querySelectorAll('.left-item').forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('matched-correct') || item.classList.contains('locked')) return;

        // Deseleccionar anterior
        body.querySelectorAll('.left-item').forEach(i => i.classList.remove('selected'));
        matchState.selected = item.dataset.value;
        item.classList.add('selected');
      });
    });

    // Listeners derecha
    body.querySelectorAll('.right-item').forEach(item => {
      item.addEventListener('click', () => {
        if (!matchState.selected) return;
        if (item.classList.contains('matched-correct') || item.classList.contains('locked')) return;

        const leftVal  = matchState.selected;
        const rightVal = item.dataset.value;
        const leftEl   = body.querySelector(`.left-item[data-value="${CSS.escape(leftVal)}"]`);

        const isCorrect = correctMap[leftVal] === rightVal;

        if (isCorrect) {
          leftEl.classList.remove('selected');
          leftEl.classList.add('matched-correct', 'locked');
          item.classList.add('matched-correct', 'locked');
          matchState.matched[leftVal] = rightVal;
          matchState.selected = null;
          matchState.correct++;

          document.getElementById('match-status').textContent =
            `Emparejados: ${matchState.correct} / ${pairs.length}`;

          // ¿Terminamos?
          if (matchState.correct === pairs.length) {
            finishMatching(ex, matchState, body);
          }
        } else {
          // Feedback negativo: shake y quitar selección
          item.classList.add('matched-incorrect');
          setTimeout(() => item.classList.remove('matched-incorrect'), 400);
          leftEl.classList.remove('selected');
          matchState.selected = null;
        }
      });
    });
  }

  function finishMatching(ex, matchState, body) {
    // Todos correctos (el matching solo avanza si son correctos)
    const feedback = document.getElementById('ex-feedback');
    feedback.className = 'feedback-box correct';
    feedback.innerHTML = `<strong>✅ ¡Perfecto!</strong> Has relacionado correctamente todos los pares.`;

    state.score++;
    state.answers.push({
      id: ex.id,
      correct: true,
      userAnswer: 'Matching completado',
    });

    // Guardar progreso parcial en localStorage
    Progress.saveInProgress(
      state.unit.id,
      state.exercises.map(e => e.id),
      state.current + 1,
      state.answers,
      state.score
    );

    // Evento parcial al Apps Script
    const user = typeof Auth !== 'undefined' ? Auth.getUser() : null;
    if (user && state.unit) {
      Progress.sendEvent(user, state.unit.id, 'ejercicio', ex.id + ':correcto');
    }

    document.getElementById('ex-next-wrap').style.display = 'flex';
  }

  // ── Avance ───────────────────────────────────────

  function nextExercise() {
    state.current++;
    renderCurrentExercise();
  }

  // ── Resultados ───────────────────────────────────

  function renderResults() {
    const total = state.exercises.length;
    const score = state.score;
    const pct   = Math.round((score / total) * 100);

    let emoji, msg;
    if (pct === 100)      { emoji = '🏆'; msg = '¡Perfecto! Has contestado todo correctamente.'; }
    else if (pct >= 80)   { emoji = '🌟'; msg = 'Muy bien, dominas bien la mayor parte del tema.'; }
    else if (pct >= 60)   { emoji = '👍'; msg = 'Bien encaminado. Repasa los ejercicios que fallaste.'; }
    else if (pct >= 40)   { emoji = '📚'; msg = 'Hay partes del tema que necesitan más repaso.'; }
    else                  { emoji = '💪'; msg = 'Vuelve a leer la teoría y el ejemplo, ¡tú puedes!'; }

    state.mount.innerHTML = `
      <div class="results-card">
        <div class="results-emoji">${emoji}</div>
        <div class="results-score">${score}/${total}</div>
        <div class="results-label">${pct}% de acierto</div>
        <div class="results-message">${msg}</div>
        <div class="results-actions">
          <button class="btn btn-ghost" onclick="location.reload()">
            🔁 Repetir ejercicios
          </button>
          <a href="index.html" class="btn btn-primary"
             style="background:var(${state.colorVar})">
            🏠 Volver al inicio
          </a>
        </div>
      </div>
    `;

    // Guardar resultado final y limpiar progreso parcial
    Progress.saveUnit(state.unit.id, score, total, state.answers);
    Progress.clearInProgress(state.unit.id);
    const user = Auth.getUser();
    if (user) {
      Progress.sendToSheet(user, state.unit.id, score, total);
    }

    // Callback externo
    if (typeof state.onComplete === 'function') {
      state.onComplete(score, total, state.answers);
    }
  }

  return { start };
})();
