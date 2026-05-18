/**
 * TyD 2ºESO — Google Apps Script
 * ================================
 * Todo se gestiona via doGet() usando JSONP para compatibilidad
 * con GitHub Pages (evita los problemas de CORS con fetch+no-cors).
 *
 * Parámetros de entrada (query string):
 *   action=save   → guarda el resultado de un alumno
 *   action=read   → devuelve todos los datos (requiere token del profesor)
 *   callback=xxx  → nombre de la función JSONP
 *
 * CONFIGURACIÓN:
 *   1. Crea un proyecto en script.google.com vinculado a un Google Sheet.
 *   2. Pega este código. Cambia TEACHER_PASSWORD.
 *   3. Implementar → Nueva implementación → Aplicación web
 *        Ejecutar como: Yo
 *        Acceso: Cualquier usuario (incluso anónimo)
 *   4. Copia la URL de implementación → js/config.js → APPS_SCRIPT_URL
 *
 *   ⚠️  Cada vez que edites el código debes crear una NUEVA implementación
 *       (no "actualizar la existente") para que los cambios se apliquen.
 */

const TEACHER_PASSWORD = 'profe2025';   // ← Cámbiala por tu contraseña real
const SHEET_NAME       = 'Progreso';

// ── Punto de entrada único ────────────────────────────────────────────────
function doGet(e) {
  const action   = (e.parameter.action   || '').toLowerCase();
  const callback = e.parameter.callback  || '';

  if (action === 'save') {
    return _handleSave(e, callback);
  }

  if (action === 'read') {
    return _handleRead(e, callback);
  }

  // Sin acción → respuesta de diagnóstico
  return _jsonp(callback, { status: 'ok', message: 'TyD2 Apps Script activo.' });
}

// ── Guardar resultado de alumno ───────────────────────────────────────────
function _handleSave(e, callback) {
  try {
    const p = e.parameter;

    if (!p.email || !p.unit) {
      return _jsonp(callback, { error: 'Faltan parámetros obligatorios (email, unit).' });
    }

    const sheet = _getOrCreateSheet();

    // Cabeceras si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Nombre', 'Email', 'Unidad', 'Puntuación', 'Total', '%']);
      sheet.getRange(1, 1, 1, 7)
        .setFontWeight('bold')
        .setBackground('#4f46e5')
        .setFontColor('#ffffff');
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(),                   // Fecha (hora del servidor)
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

// ── Leer datos (panel del profesor) ──────────────────────────────────────
function _handleRead(e, callback) {
  const token = e.parameter.token || '';

  if (token !== TEACHER_PASSWORD) {
    return _jsonp(callback, { error: 'Contraseña incorrecta.' });
  }

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    if (!sheet || sheet.getLastRow() <= 1) {
      return _jsonp(callback, { data: [] });
    }

    const values  = sheet.getDataRange().getValues();
    const headers = values[0];
    const rows    = values.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => {
        // Convertir fechas a ISO string
        obj[h] = row[i] instanceof Date ? row[i].toISOString() : row[i];
      });
      return obj;
    });

    return _jsonp(callback, { data: rows });

  } catch (err) {
    return _jsonp(callback, { error: 'Error al leer: ' + err.message });
  }
}

// ── Utilidades ────────────────────────────────────────────────────────────

function _getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function _jsonp(callback, obj) {
  const json = JSON.stringify(obj);
  const output = callback
    ? callback + '(' + json + ')'
    : json;
  const mime = callback
    ? ContentService.MimeType.JAVASCRIPT
    : ContentService.MimeType.JSON;
  return ContentService.createTextOutput(output).setMimeType(mime);
}
