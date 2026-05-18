// =====================================================
// auth.js — Autenticación con Google Identity Services
// =====================================================

const Auth = (() => {
  const SESSION_KEY = 'tyd2_user';

  /** Devuelve el usuario almacenado en sessionStorage, o null */
  function getUser() {
    try {
      return JSON.parse(sessionStorage.getItem(SESSION_KEY));
    } catch { return null; }
  }

  /** Guarda el usuario en sessionStorage */
  function setUser(user) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(user));
  }

  /** Borra la sesión */
  function clearUser() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  /**
   * Decodifica un JWT sin validar la firma (solo para obtener el payload).
   * La validación real la hace Google en el servidor cuando se usa el token.
   */
  function decodeJWT(token) {
    try {
      const payload = token.split('.')[1];
      const decoded = atob(payload.replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(decoded);
    } catch {
      return null;
    }
  }

  /**
   * Inicializa Google Identity Services.
   * Llámala después de que cargue el script accounts.google.com/gsi/client.
   * @param {function} onSuccess - Se llama con el objeto usuario al hacer login.
   */
  function init(onSuccess) {
    if (!window.google || !google.accounts) {
      console.warn('GIS no disponible. Comprueba que el script de Google está cargado.');
      return;
    }

    google.accounts.id.initialize({
      client_id: CONFIG.GOOGLE_CLIENT_ID,
      callback: (response) => {
        const payload = decodeJWT(response.credential);
        if (!payload) return;

        const user = {
          email: payload.email,
          name:  payload.name,
          picture: payload.picture,
          sub:   payload.sub,
        };
        setUser(user);
        onSuccess(user);
      },
      auto_select: true,       // Intenta seleccionar automáticamente si ya hay sesión
      cancel_on_tap_outside: false,
    });
  }

  /**
   * Renderiza el botón de "Iniciar sesión con Google" en el elemento dado.
   * @param {HTMLElement} container
   */
  function renderButton(container) {
    if (!window.google || !google.accounts) return;
    google.accounts.id.renderButton(container, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      locale: 'es',
      width: 280,
    });
  }

  /**
   * Muestra el one-tap prompt (ventana flotante).
   */
  function prompt() {
    if (!window.google || !google.accounts) return;
    google.accounts.id.prompt();
  }

  /**
   * Cierra la sesión.
   */
  function signOut() {
    if (window.google && google.accounts) {
      google.accounts.id.disableAutoSelect();
    }
    clearUser();
    window.location.href = 'index.html';
  }

  return { init, renderButton, prompt, getUser, setUser, signOut };
})();
