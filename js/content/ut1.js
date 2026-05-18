// UT1 — Búsqueda y verificación de información en internet
const UT1 = {
  id: 'ut1',
  title: 'Búsqueda y verificación de información en internet',
  subtitle: 'Unidad 1',
  icon: '🔍',
  colorVar: '--ut1',

  theory: [
    {
      heading: 'Buscadores y cómo funcionan',
      html: `<p>Un <strong>buscador</strong> (Google, Bing, DuckDuckGo) rastrea millones de páginas web
      con programas llamados <em>arañas</em> y las clasifica según relevancia. Cuando buscas, el buscador
      no lee internet en tiempo real: consulta su propio índice ya guardado.</p>
      <p>No distingue mayúsculas ni tildes: <code>camión</code> y <code>CAMION</code> dan los mismos resultados.</p>`
    },
    {
      heading: 'Operadores de búsqueda avanzada',
      html: `<p>Los <strong>operadores</strong> afinan los resultados:</p>
      <ul>
        <li><code>"frase exacta"</code> — busca esas palabras juntas y en ese orden.</li>
        <li><code>filetype:pdf</code> — solo archivos de ese formato (pdf, doc, xls…).</li>
        <li><code>site:iesjarifa.es</code> — solo resultados de ese dominio.</li>
        <li><code>-palabra</code> — excluye resultados que contengan esa palabra.</li>
      </ul>`
    },
    {
      heading: 'Inteligencia Artificial en la búsqueda',
      html: `<p>Los <strong>asistentes de IA</strong> (ChatGPT, Gemini, Copilot) generan respuestas en lenguaje
      natural en vez de mostrarte enlaces. Son útiles para resumir o explicar, pero tienen limitaciones graves:</p>
      <ul>
        <li>Pueden <strong>alucinar</strong>: inventar datos, citas o hechos con total convicción.</li>
        <li>Su conocimiento tiene una <strong>fecha de corte</strong>: no conocen eventos recientes.</li>
        <li>No citan fuentes por defecto — siempre debes verificar lo que dicen.</li>
      </ul>`
    },
    {
      heading: 'Desinformación, fake news y verificación',
      html: `<p>No toda la información en internet es verdadera. Antes de compartir algo, comprueba:</p>
      <ul>
        <li><strong>Fuente</strong>: ¿quién publica esto? ¿tiene credibilidad?</li>
        <li><strong>Fecha</strong>: ¿es reciente o está descontextualizada?</li>
        <li><strong>Verificación cruzada</strong>: ¿lo confirman otras fuentes independientes?</li>
        <li><strong>Imagen inversa</strong>: busca la foto con Google Imágenes para saber si es original.</li>
      </ul>
      <p>Sitios de verificación: <em>Maldita.es, Newtral.es, FactCheck.org.</em></p>`
    },
    {
      heading: 'Burbuja de filtros y privacidad',
      html: `<p>Los buscadores y redes sociales usan algoritmos que te muestran contenido que ya te gusta.
      Esto crea una <strong>burbuja de filtros</strong>: ves solo lo que confirma tus ideas y dejas de ver
      perspectivas distintas.</p>
      <p>Además, cada búsqueda genera datos sobre ti. Para reducir el rastreo puedes usar buscadores
      como <strong>DuckDuckGo</strong> o navegar en modo privado (aunque este no es anónimo del todo).</p>`
    }
  ],

  example: {
    title: '💡 Ejemplo resuelto',
    body: `<p>Encuentras en redes sociales una noticia que dice que un famoso científico ha dicho que
    las vacunas causan daño. La foto parece real. ¿Cómo verificas si es verdad?</p>
    <div class="example-highlight">
      1. Busca el nombre del científico + la cita en Google con comillas.<br>
      2. Comprueba si algún medio de comunicación fiable lo ha publicado.<br>
      3. Busca la imagen en Google Imágenes (búsqueda inversa) para ver si es original.<br>
      4. Consulta Maldita.es o Newtral.es para ver si ya está verificado.
    </div>
    <p style="margin-top:.75rem">Si ninguna fuente fiable lo confirma y la imagen aparece en otro contexto, es desinformación.</p>`
  },

  exercises: [
    // ── BLOQUE 1: buscadores y operadores ─────────────────────────
    {
      id: 'q01',
      type: 'test',
      question: '¿Cuál es la diferencia entre buscar "camión" y "CAMION" en Google?',
      options: [
        { text: 'Google distingue mayúsculas y da resultados distintos.', correct: false,
          feedback: 'Incorrecto. Google ignora mayúsculas y tildes; los resultados son los mismos.' },
        { text: 'No hay diferencia: Google ignora mayúsculas y tildes.', correct: true,
          feedback: '¡Correcto! Google normaliza el texto, así que mayúsculas y acentos no cambian los resultados.' },
        { text: 'Solo cambia si la palabra tiene más de cinco letras.', correct: false,
          feedback: 'Incorrecto. La longitud no influye; Google ignora siempre mayúsculas y tildes.' }
      ]
    },
    {
      id: 'q02',
      type: 'test',
      question: 'Quieres buscar solo archivos PDF sobre energía solar. ¿Qué escribes en Google?',
      options: [
        { text: 'energía solar PDF documento', correct: false,
          feedback: 'Incorrecto. Escribir "PDF" como palabra no filtra por tipo de archivo. Usa el operador correcto.' },
        { text: 'energía solar filetype:pdf', correct: true,
          feedback: '¡Correcto! El operador filetype:pdf le dice a Google que muestre solo archivos PDF.' },
        { text: 'energía solar format:pdf', correct: false,
          feedback: 'Incorrecto. "format:pdf" no existe. El operador correcto es filetype:pdf.' }
      ]
    },
    {
      id: 'q03',
      type: 'test',
      question: 'Quieres buscar la frase exacta "cambio climático antropogénico" sin variaciones. ¿Cómo lo haces?',
      options: [
        { text: 'cambio climático antropogénico (sin nada más)', correct: false,
          feedback: 'Incorrecto. Sin comillas, Google puede mezclar resultados con otras combinaciones de palabras.' },
        { text: '"cambio climático antropogénico" entre comillas', correct: true,
          feedback: '¡Correcto! Las comillas obligan a Google a buscar esa frase exacta, en ese orden.' },
        { text: 'exact:cambio climático antropogénico', correct: false,
          feedback: 'Incorrecto. "exact:" no es un operador de Google. Las comillas dobles son la forma correcta.' }
      ]
    },
    {
      id: 'q04',
      type: 'test',
      question: 'Quieres buscar información sobre Python pero excluir resultados sobre la serpiente. ¿Qué usas?',
      options: [
        { text: 'Python sin serpiente', correct: false,
          feedback: 'Incorrecto. "sin" es una palabra normal para Google. Necesitas el operador de exclusión.' },
        { text: 'Python -serpiente', correct: true,
          feedback: '¡Correcto! El guion antes de una palabra excluye los resultados que la contienen.' },
        { text: 'Python NOT serpiente', correct: false,
          feedback: 'Incorrecto. "NOT" en mayúsculas no funciona en Google. El operador correcto es el guion (-).' }
      ]
    },
    {
      id: 'q05',
      type: 'test',
      question: '¿Qué hace el operador site: en Google?',
      options: [
        { text: 'Busca solo dentro de un sitio web concreto.', correct: true,
          feedback: '¡Correcto! site:iesjarifa.es mostraría solo resultados de esa web.' },
        { text: 'Abre directamente la página de ese sitio web.', correct: false,
          feedback: 'Incorrecto. site: no abre páginas; filtra los resultados de búsqueda a ese dominio.' },
        { text: 'Comprueba si un sitio web está activo o caído.', correct: false,
          feedback: 'Incorrecto. Para eso existen herramientas específicas; site: es un operador de filtrado.' }
      ]
    },
    {
      id: 'q06',
      type: 'matching',
      question: 'Relaciona cada operador de Google con su función:',
      pairs: [
        { left: '"entre comillas"',  right: 'Buscar frase exacta' },
        { left: 'filetype:pdf',      right: 'Solo archivos de ese formato' },
        { left: 'site:web.com',      right: 'Solo resultados de ese dominio' },
        { left: '-palabra',          right: 'Excluir esa palabra de los resultados' }
      ]
    },

    // ── BLOQUE 2: IA en la búsqueda ────────────────────────────────
    {
      id: 'q07',
      type: 'test',
      question: '¿Cuál es la principal limitación de los asistentes de IA como ChatGPT para buscar información?',
      options: [
        { text: 'Son muy lentos comparados con Google.', correct: false,
          feedback: 'Incorrecto. La velocidad no es el problema principal. El problema es la fiabilidad de la información.' },
        { text: 'Pueden inventar datos o citas con total convicción (alucinaciones).', correct: true,
          feedback: '¡Correcto! Los modelos de IA generan texto probable, no necesariamente verdadero. Siempre hay que verificar.' },
        { text: 'Solo funcionan en inglés.', correct: false,
          feedback: 'Incorrecto. Los modelos modernos funcionan en muchos idiomas. El problema es la fiabilidad, no el idioma.' }
      ]
    },
    {
      id: 'q08',
      type: 'test',
      question: 'Un asistente de IA te dice que un evento ocurrió el año pasado pero no encuentra fuente. ¿Qué debes hacer?',
      options: [
        { text: 'Confiar en la IA porque es una tecnología avanzada.', correct: false,
          feedback: 'Incorrecto. La sofisticación tecnológica no garantiza veracidad. Las IAs tienen fechas de corte y pueden alucinar.' },
        { text: 'Verificar el dato en una fuente fiable independiente.', correct: true,
          feedback: '¡Correcto! Siempre debes contrastar la información de una IA con fuentes externas y verificables.' },
        { text: 'Buscar otro asistente de IA que confirme lo mismo.', correct: false,
          feedback: 'Incorrecto. Dos IAs pueden generar el mismo error. La verificación debe ser con fuentes no generadas por IA.' }
      ]
    },
    {
      id: 'q09',
      type: 'test',
      question: '¿Qué significa que un modelo de IA tiene una "fecha de corte" (knowledge cutoff)?',
      options: [
        { text: 'Que el modelo deja de funcionar después de esa fecha.', correct: false,
          feedback: 'Incorrecto. El modelo sigue funcionando; lo que no tiene es información sobre eventos posteriores a esa fecha.' },
        { text: 'Que el modelo no tiene información sobre eventos ocurridos después de esa fecha.', correct: true,
          feedback: '¡Correcto! Los modelos se entrenan con datos hasta una fecha concreta y no conocen noticias más recientes.' },
        { text: 'Que el modelo solo responde durante un periodo limitado de tiempo.', correct: false,
          feedback: 'Incorrecto. No hay límite de tiempo de uso; el problema es el límite del conocimiento sobre el mundo.' }
      ]
    },
    {
      id: 'q10',
      type: 'test',
      question: '¿En qué se diferencia principalmente un buscador como Google de un asistente de IA como Gemini?',
      options: [
        { text: 'Google genera texto propio; Gemini devuelve enlaces.', correct: false,
          feedback: 'Incorrecto. Es al revés: Google devuelve enlaces a páginas; los asistentes de IA generan texto en lenguaje natural.' },
        { text: 'Google devuelve enlaces a páginas; Gemini genera respuestas en lenguaje natural.', correct: true,
          feedback: '¡Correcto! Los buscadores indexan y enlazan páginas; los asistentes de IA sintetizan y generan texto.' },
        { text: 'No hay diferencia práctica: ambos hacen lo mismo.', correct: false,
          feedback: 'Incorrecto. Su funcionamiento interno y tipo de resultado son muy distintos.' }
      ]
    },
    {
      id: 'q11',
      type: 'matching',
      question: 'Relaciona cada herramienta con su característica principal:',
      pairs: [
        { left: 'Google Search',  right: 'Devuelve enlaces indexados' },
        { left: 'ChatGPT',        right: 'Genera texto pero puede alucinar' },
        { left: 'DuckDuckGo',     right: 'Buscador sin rastreo del usuario' },
        { left: 'Google Imágenes',right: 'Permite búsqueda inversa de fotos' }
      ]
    },

    // ── BLOQUE 3: desinformación y verificación ────────────────────
    {
      id: 'q12',
      type: 'test',
      question: '¿Qué es una "fake news"?',
      options: [
        { text: 'Una noticia de un medio poco conocido.', correct: false,
          feedback: 'Incorrecto. Un medio pequeño no implica que sus noticias sean falsas. Las fake news son deliberadamente fabricadas.' },
        { text: 'Información falsa o engañosa presentada como noticia real.', correct: true,
          feedback: '¡Correcto! Las fake news se diseñan para parecer noticias auténticas y suelen difundirse rápido por redes sociales.' },
        { text: 'Noticias en inglés que no han sido traducidas.', correct: false,
          feedback: 'Incorrecto. El idioma no tiene nada que ver. Las fake news existen en todos los idiomas.' }
      ]
    },
    {
      id: 'q13',
      type: 'test',
      question: 'Encuentras una foto impactante en redes sociales. ¿Cómo verificas si es auténtica?',
      options: [
        { text: 'Si tiene muchos "me gusta", es real.', correct: false,
          feedback: 'Incorrecto. La popularidad no implica veracidad. Las imágenes falsas también se comparten masivamente.' },
        { text: 'Haces una búsqueda inversa de imágenes en Google o TinEye.', correct: true,
          feedback: '¡Correcto! La búsqueda inversa te muestra dónde apareció la imagen antes y si fue usada en otro contexto.' },
        { text: 'Si viene de un medio con logo, es real.', correct: false,
          feedback: 'Incorrecto. Los logotipos se falsifican fácilmente. La verificación requiere contrastar con la fuente original.' }
      ]
    },
    {
      id: 'q14',
      type: 'test',
      question: '¿Cuál de estas fuentes es más fiable para verificar una noticia?',
      options: [
        { text: 'Un blog personal sin autoría identificada.', correct: false,
          feedback: 'Incorrecto. Sin autoría y sin proceso editorial, la fiabilidad es muy baja.' },
        { text: 'Un sitio de verificación de hechos como Maldita.es o Newtral.es.', correct: true,
          feedback: '¡Correcto! Los fact-checkers profesionales contrastan con fuentes originales y documentan su metodología.' },
        { text: 'Un grupo de WhatsApp con muchos miembros.', correct: false,
          feedback: 'Incorrecto. El tamaño de un grupo no aporta credibilidad. WhatsApp es una vía muy habitual de difusión de bulos.' }
      ]
    },
    {
      id: 'q15',
      type: 'test',
      question: 'Una noticia tiene fecha de hace tres años pero se comparte como si fuera de hoy. ¿Qué tipo de desinformación es?',
      options: [
        { text: 'Contenido fabricado: inventado de cero.', correct: false,
          feedback: 'Incorrecto. El contenido puede ser real, pero se usa fuera de contexto temporal.' },
        { text: 'Contenido descontextualizado: real pero presentado de forma engañosa.', correct: true,
          feedback: '¡Correcto! Reutilizar contenido antiguo como si fuera actual es una forma habitual de desinformación.' },
        { text: 'Propaganda: contenido creado para influir políticamente.', correct: false,
          feedback: 'Incorrecto. La propaganda tiene intención política explícita. Aquí el problema es la descontextualización temporal.' }
      ]
    },
    {
      id: 'q16',
      type: 'test',
      question: '🔍 Busca en internet: ¿qué es un deepfake?',
      options: [
        { text: 'Un tipo de virus informático que borra archivos.', correct: false,
          feedback: 'Incorrecto. Un deepfake no es un virus. Es contenido audiovisual manipulado con inteligencia artificial.' },
        { text: 'Un vídeo o audio manipulado con IA para que parezca real aunque sea falso.', correct: true,
          feedback: '¡Correcto! Los deepfakes usan IA para crear vídeos falsos convincentes de personas diciendo o haciendo cosas que nunca ocurrieron.' },
        { text: 'Una página web que copia el diseño de otra para engañar.', correct: false,
          feedback: 'Incorrecto. Eso sería phishing. Un deepfake es un vídeo o audio generado o manipulado con IA.' }
      ]
    },
    {
      id: 'q17',
      type: 'matching',
      question: 'Relaciona cada concepto con su descripción:',
      pairs: [
        { left: 'Fake news',            right: 'Información falsa presentada como noticia' },
        { left: 'Deepfake',             right: 'Vídeo falso generado con IA' },
        { left: 'Búsqueda inversa',     right: 'Verificar el origen de una imagen' },
        { left: 'Verificación cruzada', right: 'Contrastar con varias fuentes independientes' }
      ]
    },

    // ── BLOQUE 4: burbuja de filtros y privacidad ──────────────────
    {
      id: 'q18',
      type: 'test',
      question: '¿Qué es la "burbuja de filtros"?',
      options: [
        { text: 'Un filtro de seguridad que bloquea contenido inapropiado.', correct: false,
          feedback: 'Incorrecto. El control parental bloquea contenido inapropiado. La burbuja de filtros es un fenómeno de los algoritmos.' },
        { text: 'El efecto por el que los algoritmos solo te muestran contenido que ya te gusta, limitando tu perspectiva.', correct: true,
          feedback: '¡Correcto! La burbuja de filtros hace que cada usuario vea una versión distinta de internet, adaptada a sus intereses y reforzando sus ideas previas.' },
        { text: 'Un tipo de antivirus que filtra el tráfico de red.', correct: false,
          feedback: 'Incorrecto. Un cortafuegos filtra tráfico de red. La burbuja de filtros es un fenómeno social de los algoritmos.' }
      ]
    },
    {
      id: 'q19',
      type: 'test',
      question: '¿Por qué dos personas pueden obtener resultados distintos en Google buscando lo mismo?',
      options: [
        { text: 'Porque Google aleatoriza los resultados para ser imparcial.', correct: false,
          feedback: 'Incorrecto. Google no aleatoriza; personaliza según historial, ubicación e intereses de cada usuario.' },
        { text: 'Porque Google personaliza los resultados según el historial y ubicación de cada usuario.', correct: true,
          feedback: '¡Correcto! El algoritmo de Google adapta los resultados a cada perfil, lo que puede crear burbujas informativas.' },
        { text: 'Porque cada usuario tiene una versión distinta de Google instalada.', correct: false,
          feedback: 'Incorrecto. No hay versiones distintas instaladas; la personalización ocurre en los servidores de Google.' }
      ]
    },
    {
      id: 'q20',
      type: 'test',
      question: '¿Qué ventaja tiene usar DuckDuckGo frente a Google?',
      options: [
        { text: 'Tiene más páginas indexadas.', correct: false,
          feedback: 'Incorrecto. Google indexa muchas más páginas. La ventaja de DuckDuckGo es otra.' },
        { text: 'No rastrea tu historial ni personaliza resultados por tu perfil.', correct: true,
          feedback: '¡Correcto! DuckDuckGo no guarda tu historial ni crea un perfil de usuario para mostrarte anuncios.' },
        { text: 'Permite descargar contenido protegido por derechos de autor.', correct: false,
          feedback: 'Incorrecto. DuckDuckGo no permite nada ilegal. Su diferencia es la privacidad, no saltarse derechos de autor.' }
      ]
    },
    {
      id: 'q21',
      type: 'test',
      question: '¿El modo incógnito o privado del navegador te hace completamente anónimo en internet?',
      options: [
        { text: 'Sí, nadie puede saber qué páginas visitas.', correct: false,
          feedback: 'Incorrecto. El modo incógnito solo evita que el navegador guarde historial local. Tu proveedor de internet y las webs que visitas sí pueden ver tu actividad.' },
        { text: 'No, solo evita que el navegador guarde historial en tu dispositivo.', correct: true,
          feedback: '¡Correcto! El modo privado borra historial local, pero no oculta tu actividad al proveedor de internet, a tu red escolar ni a las páginas que visitas.' },
        { text: 'Depende del navegador: en Chrome sí eres anónimo, en Firefox no.', correct: false,
          feedback: 'Incorrecto. En ningún navegador el modo incógnito proporciona anonimato completo.' }
      ]
    },
    {
      id: 'q22',
      type: 'test',
      question: '¿Cuál de estas acciones reduce mejor tu huella digital al buscar en internet?',
      options: [
        { text: 'Usar siempre el mismo dispositivo para todas las búsquedas.', correct: false,
          feedback: 'Incorrecto. Usar el mismo dispositivo facilita el seguimiento, no lo reduce.' },
        { text: 'Usar un buscador que no rastrea como DuckDuckGo y cerrar sesión de Google.', correct: true,
          feedback: '¡Correcto! Buscadores sin rastreo y no estar conectado a cuentas de Google reduce significativamente los datos que se recopilan sobre ti.' },
        { text: 'Buscar siempre en inglés para que no te identifiquen.', correct: false,
          feedback: 'Incorrecto. El idioma no afecta al rastreo. Los datos se recogen a partir de IP, cookies y cuenta de usuario.' }
      ]
    },
    {
      id: 'q23',
      type: 'matching',
      question: 'Relaciona cada término de privacidad con su significado:',
      pairs: [
        { left: 'Burbuja de filtros', right: 'Solo ves contenido que el algoritmo sabe que te gusta' },
        { left: 'Modo incógnito',     right: 'No guarda historial en el dispositivo, pero no es anónimo' },
        { left: 'Cookie',             right: 'Pequeño archivo que rastrea tu actividad en una web' },
        { left: 'Huella digital',     right: 'Rastro de datos que dejas al navegar' }
      ]
    },

    // ── BLOQUE 5: licencias y derechos de autor ────────────────────
    {
      id: 'q24',
      type: 'test',
      question: '🔍 Busca en internet: ¿puedes usar libremente cualquier imagen que encuentres en Google Imágenes para un trabajo?',
      options: [
        { text: 'Sí, si está en internet es de uso libre.', correct: false,
          feedback: 'Incorrecto. Que algo esté en internet no significa que sea de uso libre. La mayoría de imágenes tienen derechos de autor.' },
        { text: 'No, debes comprobar la licencia de cada imagen antes de usarla.', correct: true,
          feedback: '¡Correcto! Debes filtrar por licencia en Google Imágenes o usar repositorios de imágenes libres como Unsplash o Pixabay.' },
        { text: 'Sí, siempre que cites al autor.', correct: false,
          feedback: 'Incorrecto. Citar al autor no es suficiente para todos los usos. La licencia determina qué puedes hacer con la imagen.' }
      ]
    },
    {
      id: 'q25',
      type: 'test',
      question: '🔍 Busca en internet: ¿qué indica el símbolo Creative Commons "CC BY"?',
      options: [
        { text: 'Que la obra no se puede usar sin pagar.', correct: false,
          feedback: 'Incorrecto. Creative Commons BY es una de las licencias más permisivas: permite usar la obra libremente citando al autor.' },
        { text: 'Que puedes usar la obra libremente siempre que cites al autor.', correct: true,
          feedback: '¡Correcto! CC BY (Attribution) solo exige reconocer la autoría. Puedes copiar, distribuir y adaptar la obra.' },
        { text: 'Que la obra pertenece al dominio público y no tiene autor.', correct: false,
          feedback: 'Incorrecto. CC BY tiene autor identificado; el dominio público significa que los derechos han expirado.' }
      ]
    },
    {
      id: 'q26',
      type: 'test',
      question: '🔍 Busca en internet: quieres usar música de fondo para un vídeo de clase, ¿qué tipo de licencia debes buscar?',
      options: [
        { text: 'Cualquier canción de Spotify, porque es una plataforma legal.', correct: false,
          feedback: 'Incorrecto. Spotify es una plataforma de streaming. Las canciones tienen derechos de autor y no puedes usarlas en tus vídeos.' },
        { text: 'Música con licencia Creative Commons o de dominio público.', correct: true,
          feedback: '¡Correcto! Las licencias Creative Commons o el dominio público permiten reutilizar el contenido, a veces con condiciones como citar al autor.' },
        { text: 'Cualquier canción si el vídeo es para uso educativo.', correct: false,
          feedback: 'Incorrecto. El uso educativo tiene excepciones legales limitadas; lo más seguro es usar contenido con licencia libre.' }
      ]
    },
    {
      id: 'q27',
      type: 'matching',
      question: '🔍 Busca en internet: relaciona cada tipo de licencia con lo que permite:',
      pairs: [
        { left: 'Dominio público',         right: 'Uso libre sin restricciones, derechos expirados' },
        { left: 'CC BY',                   right: 'Uso libre citando al autor' },
        { left: 'CC BY-NC',                right: 'Uso libre sin fines comerciales citando al autor' },
        { left: 'Todos los derechos reservados', right: 'No se puede usar sin permiso del autor' }
      ]
    },

    // ── BLOQUE 6: preguntas integradoras ──────────────────────────
    {
      id: 'q28',
      type: 'test',
      question: 'Un compañero te envía por WhatsApp un vídeo donde un político dice algo escandaloso. ¿Cuál es el primer paso antes de compartirlo?',
      options: [
        { text: 'Compartirlo rápido para que todo el mundo lo vea.', correct: false,
          feedback: 'Incorrecto. Compartir sin verificar es una de las principales causas de propagación de desinformación.' },
        { text: 'Verificar si el vídeo es auténtico buscando en fuentes fiables y comprobando si es un deepfake.', correct: true,
          feedback: '¡Correcto! Antes de compartir cualquier contenido impactante, hay que verificar la fuente, la fecha y si la imagen o vídeo son auténticos.' },
        { text: 'Comentar que puede ser falso pero compartirlo igual por si acaso.', correct: false,
          feedback: 'Incorrecto. Compartir con duda también contribuye a la difusión de bulos, aunque añadas un aviso.' }
      ]
    },
    {
      id: 'q29',
      type: 'test',
      question: '🔍 Busca en internet: para un trabajo de tecnología necesitas imágenes de circuitos eléctricos, ¿dónde las buscas respetando los derechos de autor?',
      options: [
        { text: 'Copio las primeras imágenes de Google sin mirar la licencia.', correct: false,
          feedback: 'Incorrecto. Las imágenes de Google suelen tener derechos de autor. Debes filtrar por licencia o usar repositorios libres.' },
        { text: 'Busco en Wikimedia Commons o filtro Google Imágenes por licencia Creative Commons.', correct: true,
          feedback: '¡Correcto! Wikimedia Commons y el filtro de licencias de Google Imágenes te aseguran usar contenido que puedes utilizar legalmente.' },
        { text: 'Descargo las imágenes de cualquier web educativa porque son para un trabajo de clase.', correct: false,
          feedback: 'Incorrecto. El uso educativo personal no exime de respetar las licencias. Usa siempre contenido con licencia libre.' }
      ]
    },
    {
      id: 'q30',
      type: 'test',
      question: 'Buscas información sobre un medicamento y la IA te da una explicación muy detallada. ¿Qué haces?',
      options: [
        { text: 'La doy por buena porque la IA sabe mucho de medicina.', correct: false,
          feedback: 'Incorrecto. Las IAs pueden alucinar datos médicos con total convicción. En temas de salud, la verificación es crítica.' },
        { text: 'Contrasto la información con fuentes médicas oficiales como la web de la EMA o la AEMPS.', correct: true,
          feedback: '¡Correcto! Para información médica (y en general), la IA es un punto de partida, nunca el destino final. Verifica siempre en fuentes autorizadas.' },
        { text: 'Pregunto a otra IA a ver si coincide la respuesta.', correct: false,
          feedback: 'Incorrecto. Dos IAs pueden cometer el mismo error. La verificación debe hacerse con fuentes expertas, no con otro modelo de IA.' }
      ]
    }
  ]
};
