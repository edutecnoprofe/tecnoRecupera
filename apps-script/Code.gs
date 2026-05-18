/**
 * TyD 2ºESO — Google Apps Script
 * ================================
 * Backend para el registro del progreso del alumnado.
 *
 * CONFIGURACIÓN:
 *   1. Crea un proyecto en script.google.com y enlázalo a un Google Sheet.
 *   2. Pega este código en el editor.
 *   3. Cambia TEACHER_PASSWORD por tu contraseña real (la misma que en config.js).
 *   4. Despliega como aplicación web:
 *        Implementar → Nueva implementación → Tipo: Aplicación web
 *        Ejecutar como: Yo (tu cuenta)
 *        Quién puede acceder: Cualquier usuario
 *   5. Copia la URL de implementación y pégala en js/config.js → APPS_SCRIPT_URL.
 */

// ── Configuración ──────────────────────────────────────────────────────────
const TEACHER_PASSWORD = 'profe2025';   // ← Cámbiala por tu contraseña real
const SHEET_NAME       = 'Progreso';

// ── POST: recibe el progreso de un alumno/a ────────────────────────────────
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = _getOrCreateSheet();

    // Cabeceras si la hoja está vacía
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Fecha', 'Nombre', 'Email', 'Unidad', 'Puntuación', 'Total', '%'
      ]);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    sheet.appendRow([
      new Date(data.date || new Date()),
      data.name    || '',
      data.email   || '',
      data.unit    || '',
      data.score   || 0,
      data.total   || 0,
      data.percent || 0,
    ]);

    return _json({ success: true });

  } catch (err) {
    return _json({ error: err.message });
  }
}

// ── GET: devuelve los datos al panel del profesor (JSONP) ──────────────────
function doGet(e) {
  const token    = e.parameter.token    || '';
  const callback = e.parameter.callback || '';

  // Verificar contraseña
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
        obj[h] = row[i] instanceof Date
          ? row[i].toISOString()
          : row[i];
      });
      return obj;
    });

    return _jsonp(callback, { data: rows });

  } catch (err) {
    return _jsonp(callback, { error: err.message });
  }
}

// ── Utilidades internas ────────────────────────────────────────────────────

function _getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
}

function _json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function _jsonp(callback, obj) {
  const json = JSON.stringify(obj);
  if (callback) {
    return ContentService
      .createTextOutput(`${callback}(${json})`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return _json(obj);
}
