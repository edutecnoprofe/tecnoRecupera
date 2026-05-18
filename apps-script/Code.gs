/**
 * TyD 2ºESO — Google Apps Script
 * ================================
 * Parámetros de entrada (query string):
 *   action=save        → guarda resultado final de una unidad
 *   action=save_event  → guarda evento de progreso parcial
 *   action=read        → devuelve datos finales (requiere token)
 *   action=read_events → devuelve eventos de detalle (requiere token)
 *   callback=xxx       → función JSONP
 *
 * CONFIGURACIÓN:
 *   1. Crea un proyecto en script.google.com vinculado a un Google Sheet.
 *   2. Pega este código. Cambia TEACHER_PASSWORD.
 *   3. Implementar → Nueva implementación → Aplicación web
 *        Ejecutar como: Yo
 *        Acceso: Cualquier usuario (incluso anónimo)
 *   4. Copia la URL → js/config.js → APPS_SCRIPT_URL
 *
 *   ⚠️  Cada vez que edites el código crea una NUEVA implementación.
 */

const TEACHER_PASSWORD = 'profe2025';
const SHEET_NAME        = 'Progreso';
const DETAIL_SHEET_NAME = 'Detalle';

// ── Punto de entrada único ────────────────────────────────────────────────
function doGet(e) {
  const action   = (e.parameter.action || '').toLowerCase();
  const callback = e.parameter.callback || '';

  if (action === 'save')        return _handleSave(e, callback);
  if (action === 'save_event')  return _handleSaveEvent(e, callback);
  if (action === 'read_mine')   return _handleReadMine(e, callback);
  if (action === 'read')        return _handleRead(e, callback);
  if (action === 'read_events') return _handleReadEvents(e, callback);

  return _jsonp(callback, { status: 'ok', message: 'TyD2 Apps Script activo.' });
}

// ── Guardar resultado final de unidad ─────────────────────────────────────
function _handleSave(e, callback) {
  try {
    const p = e.parameter;
    if (!p.email || !p.unit) {
      return _jsonp(callback, { error: 'Faltan parámetros obligatorios (email, unit).' });
    }

    const sheet = _getOrCreateSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Unidad', 'Puntuación', 'Total', '%']);
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight('bold')
        .setBackground('#4f46e5')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      p.name    || 'Desconocido',
      p.email,
      p.unit,
      Number(p.score)   || 0,
      Number(p.total)   || 0,
      Number(p.percent) || 0,
    ]);

    return _jsonp(callback, { success: true });
  } catch (err) {
    return _jsonp(callback, { error: 'Error al guardar: ' + err.message });
  }
}

// ── Guardar evento de progreso parcial ────────────────────────────────────
function _handleSaveEvent(e, callback) {
  try {
    const p = e.parameter;
    if (!p.email || !p.unit || !p.type) {
      return _jsonp(callback, { error: 'Faltan parámetros (email, unit, type).' });
    }

    const sheet = _getOrCreateSheet(DETAIL_SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Unidad', 'Tipo', 'Detalle']);
      sheet.getRange(1, 1, 1, 6)
        .setFontWeight('bold')
        .setBackground('#0891b2')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),
      p.name   || 'Desconocido',
      p.email,
      p.unit,
      p.type,
      p.detail || '',
    ]);

    return _jsonp(callback, { success: true });
  } catch (err) {
    return _jsonp(callback, { error: 'Error al guardar evento: ' + err.message });
  }
}

// ── Leer historial propio del alumno (sin token) ──────────────────────────
function _handleReadMine(e, callback) {
  const email = (e.parameter.email || '').toLowerCase().trim();
  if (!email) {
    return _jsonp(callback, { error: 'Falta el parámetro email.' });
  }
  try {
    const results = { completed: [], events: [] };

    const progSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (progSheet && progSheet.getLastRow() > 1) {
      const vals    = progSheet.getDataRange().getValues();
      const headers = vals[0];
      vals.slice(1).forEach(row => {
        const obj = {};
        headers.forEach((h, i) => { obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i]; });
        if ((obj['Email'] || '').toLowerCase() === email) results.completed.push(obj);
      });
    }

    const detSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(DETAIL_SHEET_NAME);
    if (detSheet && detSheet.getLastRow() > 1) {
      const vals    = detSheet.getDataRange().getValues();
      const headers = vals[0];
      vals.slice(1).forEach(row => {
        const obj = {};
        headers.forEach((h, i) => { obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i]; });
        if ((obj['Email'] || '').toLowerCase() === email) results.events.push(obj);
      });
    }

    return _jsonp(callback, results);
  } catch (err) {
    return _jsonp(callback, { error: 'Error al leer historial: ' + err.message });
  }
}

// ── Leer resultados finales (panel profesor) ──────────────────────────────
function _handleRead(e, callback) {
  if (e.parameter.token !== TEACHER_PASSWORD) {
    return _jsonp(callback, { error: 'Contraseña incorrecta.' });
  }
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return _jsonp(callback, { data: [] });

    const values  = sheet.getDataRange().getValues();
    const headers = values[0];
    const rows    = values.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];
      });
      return obj;
    });
    return _jsonp(callback, { data: rows });
  } catch (err) {
    return _jsonp(callback, { error: 'Error al leer: ' + err.message });
  }
}

// ── Leer eventos de detalle (panel profesor) ──────────────────────────────
function _handleReadEvents(e, callback) {
  if (e.parameter.token !== TEACHER_PASSWORD) {
    return _jsonp(callback, { error: 'Contraseña incorrecta.' });
  }
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(DETAIL_SHEET_NAME);
    if (!sheet || sheet.getLastRow() <= 1) return _jsonp(callback, { data: [] });

    const values  = sheet.getDataRange().getValues();
    const headers = values[0];
    const rows    = values.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];
      });
      return obj;
    });
    return _jsonp(callback, { data: rows });
  } catch (err) {
    return _jsonp(callback, { error: 'Error al leer eventos: ' + err.message });
  }
}

// ── Utilidades ────────────────────────────────────────────────────────────
function _getOrCreateSheet(name) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(name) || ss.insertSheet(name);
}

function _jsonp(callback, obj) {
  const json   = JSON.stringify(obj);
  const output = callback ? callback + '(' + json + ')' : json;
  const mime   = callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON;
  return ContentService.createTextOutput(output).setMimeType(mime);
}
