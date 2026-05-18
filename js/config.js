// =====================================================
// CONFIGURACIÓN — edita estos valores tras el setup
// =====================================================

const CONFIG = {
  // ID de cliente OAuth 2.0 de Google Cloud Console
  // Obtén uno en: https://console.cloud.google.com/
  // (Sigue el README.md para el paso a paso)
  GOOGLE_CLIENT_ID: '884696239332-71uou3nk3hec8r2sj75hdnh40oibsmle.apps.googleusercontent.com',

  // URL del Google Apps Script desplegado como aplicación web
  // (Sigue el README.md — sección "Apps Script")
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbx-H59pSHSOW7aFk0eS38xWM9KNJ8ZDcv7q0LuMHLso-CsfnKThi5kyQMhAhHmDoNMTsA/exec',

  // Contraseña del panel de profesor
  // Se envía al Apps Script para verificación — cámbiala también en Code.gs
  TEACHER_PASSWORD: 'profe2025',

  // Nombre del curso (aparece en la web)
  COURSE_NAME: '2.º ESO — Tecnología y Digitalización',

  // Unidades activas (en orden de aparición)
  UNITS: ['ut1', 'ut4', 'ut5', 'ut6'],
};
