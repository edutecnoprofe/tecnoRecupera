# Recuperación TyD · 2.º ESO

Web interactiva de repaso para la recuperación del 3.er trimestre de Tecnología y Digitalización.
Incluye teoría, ejemplos y ejercicios (test + relacionar) para las unidades 1, 4, 5 y 6.

---

## 🗂 Estructura de archivos

```
web-recuperacion/
├── index.html          ← Página de inicio (login + selección de unidad)
├── unit.html           ← Página de unidad (teoría + ejemplo + ejercicios)
├── teacher.html        ← Panel del profesorado
├── css/style.css       ← Estilos
├── js/
│   ├── config.js       ← ⚙️ CONFIGURACIÓN (editar tras el setup)
│   ├── auth.js         ← Autenticación Google
│   ├── progress.js     ← Registro de progreso
│   ├── exercises.js    ← Motor de ejercicios
│   └── content/
│       ├── ut1.js      ← Contenido UT1: Búsqueda en Internet
│       ├── ut4.js      ← Contenido UT4: Estructuras
│       ├── ut5.js      ← Contenido UT5: Electricidad
│       └── ut6.js      ← Contenido UT6: Dibujo técnico
└── apps-script/
    └── Code.gs         ← Backend (Google Sheets)
```

---

## 🚀 Guía de configuración paso a paso

### PASO 1 — Subir a GitHub Pages

1. Ve a [github.com](https://github.com) e inicia sesión (o crea cuenta gratuita).
2. Crea un repositorio nuevo: por ejemplo `recuperacion-tyd2`.
3. Sube todos los archivos de esta carpeta al repositorio.
4. Ve a **Settings → Pages** y en *Source* elige `main` y la carpeta raíz `/`.
5. GitHub te dará la URL: `https://tu-usuario.github.io/recuperacion-tyd2/`

---

### PASO 2 — Google Apps Script (base de datos)

1. Ve a [script.google.com](https://script.google.com) con tu cuenta de Google del instituto.
2. Crea un **nuevo proyecto** y llámalo "TyD2 Progreso".
3. En el menú, ve a **Recursos → Hoja de cálculo de Drive vinculada** y crea una nueva hoja.
4. Borra el código de ejemplo y pega el contenido de `apps-script/Code.gs`.
5. **Cambia la contraseña**: en la línea `const TEACHER_PASSWORD = 'profe2025';`
   pon tu contraseña real.
6. Guarda (Ctrl+S).
7. Haz clic en **Implementar → Nueva implementación**:
   - Tipo: **Aplicación web**
   - Ejecutar como: **Yo (tu cuenta)**
   - Quién puede acceder: **Cualquier usuario**
8. Haz clic en **Implementar** y acepta los permisos.
9. **Copia la URL** que aparece (empieza por `https://script.google.com/macros/s/…/exec`).

---

### PASO 3 — Google Cloud Console (login con Google)

1. Ve a [console.cloud.google.com](https://console.cloud.google.com).
2. Crea un **nuevo proyecto** (p. ej. "TyD2 Recuperacion").
3. En el menú: **APIs y servicios → Pantalla de consentimiento OAuth**:
   - Tipo de usuario: **Externo**
   - Rellena el nombre de la app y tu email.
   - No añadas scopes adicionales. Guarda.
4. Ve a **APIs y servicios → Credenciales → Crear credencial → ID de cliente OAuth 2.0**:
   - Tipo: **Aplicación web**
   - Nombre: "TyD2 Web"
   - Orígenes autorizados: añade `https://tu-usuario.github.io`
   - URI de redireccionamiento: añade `https://tu-usuario.github.io/recuperacion-tyd2/`
5. Haz clic en **Crear** y **copia el ID de cliente** (termina en `.apps.googleusercontent.com`).

---

### PASO 4 — Editar `js/config.js`

Abre el archivo `js/config.js` y rellena los tres valores:

```javascript
const CONFIG = {
  GOOGLE_CLIENT_ID: 'TU_ID.apps.googleusercontent.com',  // del Paso 3
  APPS_SCRIPT_URL:  'https://script.google.com/macros/s/TU_ID/exec',  // del Paso 2
  TEACHER_PASSWORD: 'la-misma-que-pusiste-en-Code.gs',
  COURSE_NAME:      '2.º ESO — Tecnología y Digitalización',
  UNITS: ['ut1', 'ut4', 'ut5', 'ut6'],
};
```

Guarda el archivo y vuelve a subir `js/config.js` al repositorio de GitHub.

---

## 🧑‍🏫 Panel del profesorado

Accede a `https://tu-usuario.github.io/recuperacion-tyd2/teacher.html`
e introduce la contraseña configurada. Verás:

- Número de alumnos/as que han accedido.
- Unidades completadas y puntuación media.
- Tabla filtrable por alumno/a y por unidad.
- Los datos también están en tu Hoja de Cálculo de Google (Apps Script).

---

## 📱 Uso del alumnado

1. El alumnado accede a la URL del GitHub Pages.
2. Inicia sesión con su cuenta de Google del instituto (Google Classroom).
3. Elige una unidad: lee la teoría, repasa el ejemplo y hace los ejercicios.
4. Al terminar, ve su puntuación y puede repetir.
5. El progreso se guarda automáticamente.

---

## 🔧 Personalización

- **Añadir o editar ejercicios**: modifica los archivos `js/content/ut*.js`.
- **Cambiar la contraseña del profesor**: actualiza `TEACHER_PASSWORD` en `Code.gs`
  (y redistribuye el Apps Script) y en `config.js`.
- **Restringir el login a cuentas del instituto**: en Google Cloud Console,
  en la pantalla de consentimiento, cambia el tipo a **Interno** si todos los alumnos
  están en el mismo Google Workspace educativo.

---

## ❓ Preguntas frecuentes

**¿Funciona sin configurar el Google Cloud / Apps Script?**
Sí, parcialmente. Los ejercicios se muestran y el progreso se guarda en el
navegador del alumno/a. Pero no habrá login con Google ni panel del profesorado
hasta completar los pasos 2 y 3.

**¿Puede el alumnado repetir los ejercicios?**
Sí. Al recargar la página de la unidad, los ejercicios empiezan de cero.
El mejor resultado queda guardado localmente.

**¿Es seguro?**
Para un uso escolar, sí. La contraseña del profesor viaja cifrada (HTTPS)
al Apps Script. No se almacenan datos sensibles más allá de nombre, email y puntuaciones.
