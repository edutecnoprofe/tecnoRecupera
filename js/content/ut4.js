// UT4 — Estructuras
const UT4 = {
  id: 'ut4',
  title: 'Estructuras',
  subtitle: 'Unidad 4',
  icon: '🏗️',
  colorVar: '--ut4',

  theory: [
    {
      heading: '¿Qué es una estructura?',
      html: `<p>Una <strong>estructura</strong> es el conjunto de elementos que forman el armazón de un objeto u
      edificio para soportar cargas (pesos y fuerzas) sin romperse ni deformarse.
      Sin estructura, los objetos se derrumbarían bajo su propio peso.</p>
      <p>Los elementos estructurales más comunes en edificios y puentes son:</p>
      <ul>
        <li><strong>Columna / Pilar</strong>: elemento vertical que soporta el peso de arriba (trabaja a <em>compresión</em>).</li>
        <li><strong>Viga</strong>: elemento horizontal que recibe cargas y las transmite a las columnas (trabaja a <em>flexión</em>).</li>
        <li><strong>Diagonal / Arriostramiento</strong>: barra inclinada que rigidiza la estructura formando triángulos.</li>
        <li><strong>Zapata / Cimentación</strong>: base que reparte el peso sobre el terreno.</li>
      </ul>
      <div style="text-align:center;margin:1.2rem 0">
        <svg viewBox="0 0 400 280" width="100%" style="max-width:480px;font-family:inherit" aria-label="Diagrama de estructura con elementos etiquetados">
          <!-- suelo -->
          <rect x="20" y="245" width="360" height="12" fill="#b0906a" rx="3"/>
          <line x1="20" y1="257" x2="380" y2="257" stroke="#8a6a44" stroke-width="1.5"/>
          <!-- zapatas -->
          <rect x="52" y="232" width="36" height="14" fill="#9e8060" rx="2"/>
          <rect x="312" y="232" width="36" height="14" fill="#9e8060" rx="2"/>
          <!-- columna izquierda -->
          <rect x="62" y="90" width="16" height="142" fill="#4f46e5" rx="3"/>
          <!-- columna derecha -->
          <rect x="322" y="90" width="16" height="142" fill="#4f46e5" rx="3"/>
          <!-- viga superior -->
          <rect x="62" y="78" width="276" height="14" fill="#059669" rx="3"/>
          <!-- diagonal arriostramiento -->
          <line x1="78" y1="92" x2="322" y2="232" stroke="#d97706" stroke-width="5" stroke-linecap="round"/>
          <!-- carga flechas -->
          <line x1="200" y1="30" x2="200" y2="74" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr)"/>
          <line x1="140" y1="30" x2="140" y2="74" stroke="#dc2626" stroke-width="2" marker-end="url(#arr)"/>
          <line x1="260" y1="30" x2="260" y2="74" stroke="#dc2626" stroke-width="2" marker-end="url(#arr)"/>
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="6" orient="auto">
              <path d="M0,0 L3,6 L6,0" fill="#dc2626"/>
            </marker>
          </defs>
          <!-- etiqueta carga -->
          <text x="200" y="22" text-anchor="middle" font-size="11" fill="#dc2626" font-weight="bold">CARGA</text>
          <!-- etiqueta viga -->
          <rect x="130" y="55" width="44" height="17" rx="3" fill="#059669"/>
          <text x="152" y="67" text-anchor="middle" font-size="11" fill="white" font-weight="bold">VIGA</text>
          <!-- etiqueta columna izq -->
          <rect x="2" y="148" width="56" height="17" rx="3" fill="#4f46e5"/>
          <text x="30" y="160" text-anchor="middle" font-size="11" fill="white" font-weight="bold">COLUMNA</text>
          <line x1="58" y1="157" x2="62" y2="157" stroke="#4f46e5" stroke-width="1.5"/>
          <!-- etiqueta columna der -->
          <rect x="342" y="148" width="56" height="17" rx="3" fill="#4f46e5"/>
          <text x="370" y="160" text-anchor="middle" font-size="11" fill="white" font-weight="bold">COLUMNA</text>
          <line x1="338" y1="157" x2="342" y2="157" stroke="#4f46e5" stroke-width="1.5"/>
          <!-- etiqueta diagonal -->
          <rect x="136" y="168" width="72" height="17" rx="3" fill="#d97706"/>
          <text x="172" y="180" text-anchor="middle" font-size="11" fill="white" font-weight="bold">DIAGONAL</text>
          <!-- etiqueta zapata izq -->
          <rect x="2" y="228" width="50" height="17" rx="3" fill="#9e8060"/>
          <text x="27" y="240" text-anchor="middle" font-size="11" fill="white" font-weight="bold">ZAPATA</text>
          <line x1="52" y1="237" x2="62" y2="237" stroke="#9e8060" stroke-width="1.5"/>
          <!-- etiqueta zapata der -->
          <rect x="348" y="228" width="50" height="17" rx="3" fill="#9e8060"/>
          <text x="373" y="240" text-anchor="middle" font-size="11" fill="white" font-weight="bold">ZAPATA</text>
          <line x1="338" y1="237" x2="348" y2="237" stroke="#9e8060" stroke-width="1.5"/>
        </svg>
      </div>
      <p style="font-size:.85rem;color:var(--muted);text-align:center">
        Las flechas rojas representan la <strong style="color:#dc2626">carga</strong> que soporta la estructura.
        Cada elemento trabaja a un esfuerzo distinto según su posición y función.
      </p>`
    },
    {
      heading: 'Tipos de esfuerzos',
      html: `<p>Las fuerzas que actúan sobre una estructura provocan <strong>esfuerzos internos</strong>:</p>
      <ul>
        <li><strong>Compresión</strong> → la fuerza aplasta o comprime el elemento (ejemplo: columna).</li>
        <li><strong>Tracción</strong> → la fuerza estira el elemento (ejemplo: cable de puente).</li>
        <li><strong>Flexión</strong> → la fuerza dobla el elemento (ejemplo: viga horizontal con carga).</li>
        <li><strong>Torsión</strong> → la fuerza retuerce el elemento (ejemplo: tornillo al apretarlo).</li>
        <li><strong>Cortadura</strong> → la fuerza tiende a cortar el elemento (ejemplo: tijeras).</li>
      </ul>`
    },
    {
      heading: 'El triángulo: figura indeformable',
      html: `<p>El <strong>triángulo</strong> es la figura geométrica más <em>rígida e indeformable</em>:
      si sus lados están fijos, no se puede cambiar su forma sin romper alguno.
      Por eso se usa en puentes de celosía, torres de alta tensión y la Torre Eiffel.
      Un cuadrado o rectángulo sí se puede deformar en rombo sin romper nada.</p>`
    },
    {
      heading: 'Tipos de estructuras',
      html: `<ul>
        <li><strong>Masiva</strong>: grandes bloques de material sólido. Muy pesadas y resistentes. <em>Ejemplo: presas, pirámides.</em></li>
        <li><strong>Triangulada</strong>: barras unidas formando triángulos. Ligeras y muy rígidas. <em>Ejemplo: Torre Eiffel, puente de celosía.</em></li>
        <li><strong>Colgante</strong>: cargas suspendidas de cables en tracción. <em>Ejemplo: puente Golden Gate.</em></li>
        <li><strong>Laminar</strong>: planchas curvas o planas. Resistentes por su forma. <em>Ejemplo: cáscara de huevo, cúpula.</em></li>
      </ul>`
    }
  ],

  example: {
    title: '💡 Ejemplo 1 — Puente de Brooklyn: identificar esfuerzos',
    body: `<p>Imagina el puente de Brooklyn (Nueva York). Es un <strong>puente colgante</strong>.
    Las torres soportan <em>compresión</em> (todo el peso las aplasta hacia abajo).
    Los cables de los que cuelga el tablero trabajan a <em>tracción</em> (están estirados).
    Las vigas del tablero trabajan a <em>flexión</em> (el peso de los coches las dobla).
    Cada elemento tiene un esfuerzo diferente, y el material se elige en función de eso.</p>
    <div class="example-highlight">Torre → compresión | Cable → tracción | Viga → flexión</div>`
  },

  examples: [
    {
      title: '💡 Ejemplo 2 — Rigidizar una estantería con una diagonal',
      body: `<p>Tienes una estantería con patas rectangulares que se tambalea hacia los lados cuando la empujas.
      El rectángulo formado por las patas es <strong>deformable</strong>: puede convertirse en rombo sin romperse.</p>
      <p><strong>Solución:</strong> añadir una barra diagonal entre dos esquinas opuestas.</p>
      <div class="example-highlight">
        Rectángulo (deformable) → añades diagonal → 2 triángulos (indeformables)
      </div>
      <p style="margin-top:.75rem">La diagonal convierte el rectángulo en dos triángulos.
      El triángulo es la figura geométrica más rígida: con sus lados fijos, no puede cambiar de forma.
      Este principio se usa en la Torre Eiffel, puentes de celosía y torres eléctricas.</p>`
    },
    {
      title: '💡 Ejemplo 3 — Clasificar una estructura real',
      body: `<p>Observa estos tres objetos. ¿Qué tipo de estructura es cada uno?</p>
      <div class="example-highlight">
        🏛️ Pirámide de Giza → <strong>Masiva</strong>: bloques sólidos de piedra apilados.<br>
        🌉 Puente Golden Gate → <strong>Colgante</strong>: tablero suspendido de cables en tracción.<br>
        🥚 Cáscara de huevo → <strong>Laminar</strong>: fina lámina curva resistente por su forma.
      </div>
      <p style="margin-top:.75rem">Fíjate en que la cáscara de huevo es muy delgada pero aguanta mucho peso
      si la presión es perpendicular a su superficie. Su resistencia viene de la <em>geometría</em>, no del grosor.</p>`
    },
    {
      title: '💡 Ejemplo 4 — Factor de seguridad en un puente',
      body: `<p>Un ingeniero calcula que por un puente pasarán como máximo <strong>50 toneladas</strong> de carga.
      Aplica un <strong>factor de seguridad de 3</strong> para cubrir imprevistos (errores de cálculo, materiales defectuosos, sobrecargas accidentales).</p>
      <div class="example-highlight">
        Carga de diseño = 50 t × 3 = <strong>150 toneladas</strong>
      </div>
      <p style="margin-top:.75rem">El puente se construye para aguantar 150 t aunque nunca vaya a soportar más de 50 t.
      Este margen de seguridad es obligatorio en ingeniería civil y varía según el tipo de estructura y el riesgo para las personas.</p>`
    },
  ],

  exercises: [
    // ── BLOQUE 1: esfuerzos ───────────────────────────────────────
    {
      id: 'q01',
      type: 'test',
      question: 'Una columna que sostiene el techo de un edificio trabaja principalmente a:',
      options: [
        { text: 'Tracción — la columna está siendo estirada.', correct: false,
          feedback: 'Incorrecto. La tracción estira el elemento. El peso del techo comprime la columna hacia abajo.' },
        { text: 'Compresión — el peso del techo la aplasta hacia abajo.', correct: true,
          feedback: '¡Correcto! El peso actúa hacia abajo y la columna resiste siendo aplastada: eso es compresión.' },
        { text: 'Torsión — el techo la hace girar.', correct: false,
          feedback: 'Incorrecto. La torsión es un giro. Una carga vertical sobre una columna produce compresión.' }
      ]
    },
    {
      id: 'q02',
      type: 'test',
      question: 'Los cables de un puente colgante trabajan principalmente a:',
      options: [
        { text: 'Compresión — los cables soportan el peso aplastándose.', correct: false,
          feedback: 'Incorrecto. Los cables no pueden resistir compresión: se doblarían. Trabajan estirados.' },
        { text: 'Tracción — los cables están estirados soportando el peso del tablero.', correct: true,
          feedback: '¡Correcto! Los cables cuelgan el tablero y están permanentemente estirados: eso es tracción.' },
        { text: 'Flexión — los cables se doblan bajo el peso.', correct: false,
          feedback: 'Incorrecto. Los cables son flexibles y trabajan a tracción (estirados), no a flexión.' }
      ]
    },
    {
      id: 'q03',
      type: 'test',
      question: 'Una viga horizontal con un peso colgado en su extremo libre trabaja principalmente a:',
      options: [
        { text: 'Torsión — el peso la hace girar sobre sí misma.', correct: false,
          feedback: 'Incorrecto. Un peso colgado en el extremo dobla la viga, no la tuerce.' },
        { text: 'Tracción — el peso la estira longitudinalmente.', correct: false,
          feedback: 'Incorrecto. La tracción estira en dirección longitudinal. Un peso en el extremo dobla la viga.' },
        { text: 'Flexión — el peso la dobla hacia abajo.', correct: true,
          feedback: '¡Correcto! El peso en el extremo crea un momento que dobla la viga. Eso es flexión.' }
      ]
    },
    {
      id: 'q04',
      type: 'test',
      question: 'Cuando aprietas un tornillo con un destornillador, ¿a qué esfuerzo sometes el tornillo?',
      options: [
        { text: 'Compresión — el tornillo se aplasta.', correct: false,
          feedback: 'Incorrecto. Al apretar un tornillo lo haces girar sobre sí mismo. Eso es torsión.' },
        { text: 'Torsión — el tornillo se retuerce al girar.', correct: true,
          feedback: '¡Correcto! La torsión es el esfuerzo de giro alrededor del eje del elemento. El tornillo al apretarse sufre torsión.' },
        { text: 'Cortadura — el tornillo tiende a cortarse.', correct: false,
          feedback: 'Incorrecto. La cortadura ocurre cuando fuerzas opuestas tienden a cortar el elemento transversalmente.' }
      ]
    },
    {
      id: 'q05',
      type: 'test',
      question: '¿A qué esfuerzo trabajan las hojas de unas tijeras al cortar papel?',
      options: [
        { text: 'Flexión — las hojas se doblan.', correct: false,
          feedback: 'Incorrecto. Las tijeras no doblan el papel, lo cortan con dos fuerzas opuestas. Eso es cortadura.' },
        { text: 'Tracción — las hojas estiran el papel.', correct: false,
          feedback: 'Incorrecto. Las tijeras cortan aplicando fuerzas opuestas, no estirando. Eso es cortadura.' },
        { text: 'Cortadura — dos fuerzas opuestas tienden a cortar el material.', correct: true,
          feedback: '¡Correcto! La cortadura se produce cuando dos fuerzas opuestas actúan transversalmente sobre el material, como en las tijeras.' }
      ]
    },
    {
      id: 'q06',
      type: 'matching',
      question: 'Relaciona cada esfuerzo con su descripción:',
      pairs: [
        { left: 'Compresión', right: 'La fuerza aplasta el elemento' },
        { left: 'Tracción',   right: 'La fuerza estira el elemento' },
        { left: 'Flexión',    right: 'La fuerza dobla el elemento' },
        { left: 'Torsión',    right: 'La fuerza retuerce el elemento' }
      ]
    },
    {
      id: 'q07',
      type: 'matching',
      question: 'Relaciona cada elemento de estructura con el esfuerzo principal que soporta:',
      pairs: [
        { left: 'Cable de puente colgante', right: 'Tracción' },
        { left: 'Columna de edificio',      right: 'Compresión' },
        { left: 'Viga con carga central',   right: 'Flexión' },
        { left: 'Eje de motor al girar',    right: 'Torsión' }
      ]
    },

    // ── BLOQUE 2: tipos de estructuras ────────────────────────────
    {
      id: 'q08',
      type: 'test',
      question: '¿Cuál es la figura geométrica más rígida e indeformable, muy usada en estructuras?',
      options: [
        { text: 'El cuadrado, porque tiene cuatro lados iguales.', correct: false,
          feedback: 'Incorrecto. Un cuadrado se puede deformar en rombo sin romper ningún lado.' },
        { text: 'El círculo, porque no tiene ángulos.', correct: false,
          feedback: 'Incorrecto. El círculo es resistente en compresión pero no es la figura para crear rigidez en celosías.' },
        { text: 'El triángulo, porque sus lados no pueden moverse sin romperse.', correct: true,
          feedback: '¡Correcto! Con los tres lados fijos, el triángulo no puede deformarse. Por eso se usa en puentes y torres.' }
      ]
    },
    {
      id: 'q09',
      type: 'test',
      question: '¿Por qué la Torre Eiffel usa estructura triangulada?',
      options: [
        { text: 'Porque los triángulos son más baratos de fabricar.', correct: false,
          feedback: 'Incorrecto. El motivo no es económico. La triangulación aporta rigidez con poco material.' },
        { text: 'Porque el triángulo es la figura más rígida: permite construir una estructura ligera y muy estable.', correct: true,
          feedback: '¡Correcto! La celosía triangulada combina ligereza y rigidez: usa menos material que una estructura masiva pero es igualmente estable.' },
        { text: 'Porque es el único diseño posible para estructuras de metal.', correct: false,
          feedback: 'Incorrecto. Las estructuras de metal pueden tener muchas formas. La triangulación se elige por su rigidez.' }
      ]
    },
    {
      id: 'q10',
      type: 'test',
      question: '¿Cuál de estas es una estructura masiva?',
      options: [
        { text: 'El puente Golden Gate.', correct: false,
          feedback: 'Incorrecto. El puente Golden Gate es una estructura colgante.' },
        { text: 'Una presa de hormigón.', correct: true,
          feedback: '¡Correcto! Las presas están hechas de grandes bloques macizos de hormigón: son estructuras masivas.' },
        { text: 'Una cúpula de iglesia.', correct: false,
          feedback: 'Incorrecto. Una cúpula es una estructura laminar: su resistencia viene de la forma curva, no de su masa.' }
      ]
    },
    {
      id: 'q11',
      type: 'test',
      question: '¿Por qué la cáscara de huevo es resistente si es tan delgada?',
      options: [
        { text: 'Porque está hecha de un material muy duro.', correct: false,
          feedback: 'Incorrecto. La resistencia de la cáscara no viene del material sino de su forma curva continua.' },
        { text: 'Porque es una estructura laminar: su forma curva distribuye bien las cargas.', correct: true,
          feedback: '¡Correcto! Las estructuras laminares aprovechan la geometría para resistir. La curvatura distribuye la carga sin necesitar mucho grosor.' },
        { text: 'Porque tiene interior macizo que la refuerza.', correct: false,
          feedback: 'Incorrecto. La cáscara es hueca. Su resistencia viene de la forma, no del relleno.' }
      ]
    },
    {
      id: 'q12',
      type: 'test',
      question: 'Un puente colgante como el Golden Gate usa cables de acero para soportar el tablero. ¿Por qué acero y no madera?',
      options: [
        { text: 'Porque el acero es más barato.', correct: false,
          feedback: 'Incorrecto. El acero es más caro que la madera. Se elige porque resiste mucho mejor la tracción.' },
        { text: 'Porque el acero tiene muy alta resistencia a la tracción, soporta grandes esfuerzos de estiramiento.', correct: true,
          feedback: '¡Correcto! El acero es ideal para cables en tracción porque puede estirarse mucho antes de romperse.' },
        { text: 'Porque la madera no existe en tamaños suficientemente grandes.', correct: false,
          feedback: 'Incorrecto. Existen vigas de madera muy grandes. El problema es que la madera no resiste bien la tracción en cables.' }
      ]
    },
    {
      id: 'q13',
      type: 'matching',
      question: 'Relaciona cada tipo de estructura con su ejemplo más representativo:',
      pairs: [
        { left: 'Estructura masiva',      right: 'Presa o pirámide' },
        { left: 'Estructura triangulada', right: 'Torre Eiffel o puente de celosía' },
        { left: 'Estructura colgante',    right: 'Puente Golden Gate' },
        { left: 'Estructura laminar',     right: 'Cáscara de huevo o cúpula' }
      ]
    },

    // ── BLOQUE 3: cargas y estabilidad ────────────────────────────
    {
      id: 'q14',
      type: 'test',
      question: '¿Cuál es la diferencia entre una carga estática y una carga dinámica?',
      options: [
        { text: 'Las estáticas son pesadas y las dinámicas son ligeras.', correct: false,
          feedback: 'Incorrecto. La diferencia es el movimiento, no el peso.' },
        { text: 'Las estáticas no se mueven (peso propio, nieve); las dinámicas varían con el tiempo (viento, tráfico).', correct: true,
          feedback: '¡Correcto! Las cargas estáticas son constantes y las dinámicas cambian de posición o intensidad.' },
        { text: 'Las dinámicas solo las tienen los puentes.', correct: false,
          feedback: 'Incorrecto. Cualquier estructura puede recibir cargas dinámicas: viento, sismos, vibración de maquinaria.' }
      ]
    },
    {
      id: 'q15',
      type: 'test',
      question: '¿Por qué las bases de las columnas de un edificio se hacen más anchas (zapatas)?',
      options: [
        { text: 'Para decorar la parte inferior de la columna.', correct: false,
          feedback: 'Incorrecto. La zapata es funcional: reparte la carga sobre mayor superficie del terreno.' },
        { text: 'Para repartir el peso sobre una superficie mayor del terreno y evitar hundimientos.', correct: true,
          feedback: '¡Correcto! A mayor superficie de contacto, menor presión sobre el suelo. La zapata evita que la columna se hunda.' },
        { text: 'Para proteger la columna del agua de lluvia.', correct: false,
          feedback: 'Incorrecto. La impermeabilización es otra función; la zapata reparte la carga en el terreno.' }
      ]
    },
    {
      id: 'q16',
      type: 'test',
      question: '¿Qué ocurre con un cuadrado articulado en sus vértices cuando se aplica una fuerza lateral?',
      options: [
        { text: 'No se deforma porque tiene cuatro lados.', correct: false,
          feedback: 'Incorrecto. Un cuadrado articulado se deforma fácilmente en forma de rombo.' },
        { text: 'Se deforma en forma de rombo sin que se rompa ningún lado.', correct: true,
          feedback: '¡Correcto! Un cuadrado articulado no es rígido: puede cambiar de forma convirtiéndose en rombo.' },
        { text: 'Se parte por la mitad.', correct: false,
          feedback: 'Incorrecto. Con articulaciones, los lados giran pero no se rompen. La figura pierde forma pero no se fractura.' }
      ]
    },
    {
      id: 'q17',
      type: 'test',
      question: 'Para rigidizar un cuadrado articulado sin añadir material externo, ¿qué puedes hacer?',
      options: [
        { text: 'Convertirlo en dos triángulos añadiendo una diagonal.', correct: true,
          feedback: '¡Correcto! Añadir una diagonal divide el cuadrado en dos triángulos indeformables. Esta es la base de la triangulación en estructuras.' },
        { text: 'Pintarlo para que los vértices queden fijos.', correct: false,
          feedback: 'Incorrecto. La pintura no aporta rigidez estructural. La solución geométrica es la triangulación.' },
        { text: 'Añadir más cuadrados al lado.', correct: false,
          feedback: 'Incorrecto. Añadir más cuadrados articulados no los hace más rígidos: todos seguirían deformándose.' }
      ]
    },
    {
      id: 'q18',
      type: 'matching',
      question: 'Relaciona cada concepto de cargas con su ejemplo:',
      pairs: [
        { left: 'Carga estática',   right: 'Peso propio del edificio' },
        { left: 'Carga dinámica',   right: 'Viento o tráfico de vehículos' },
        { left: 'Carga puntual',    right: 'Peso de una persona en un punto' },
        { left: 'Carga distribuida',right: 'Peso de la nieve sobre toda la cubierta' }
      ]
    },

    // ── BLOQUE 4: materiales y propiedades ────────────────────────
    {
      id: 'q19',
      type: 'test',
      question: '¿Qué propiedad tiene el acero que lo hace ideal para cables de puentes colgantes?',
      options: [
        { text: 'Alta resistencia a la compresión.', correct: false,
          feedback: 'Incorrecto. El hormigón es mejor a compresión. El acero destaca por su resistencia a la tracción.' },
        { text: 'Alta resistencia a la tracción: aguanta grandes esfuerzos de estiramiento.', correct: true,
          feedback: '¡Correcto! El acero tiene gran resistencia a ser estirado (tracción), lo que lo hace perfecto para cables.' },
        { text: 'Es muy ligero, más que el aluminio.', correct: false,
          feedback: 'Incorrecto. El acero es más denso que el aluminio. Se usa en cables por su resistencia a la tracción, no por su peso.' }
      ]
    },
    {
      id: 'q20',
      type: 'test',
      question: '¿Por qué el hormigón se combina con barras de acero en el "hormigón armado"?',
      options: [
        { text: 'Para que el hormigón sea más barato.', correct: false,
          feedback: 'Incorrecto. Añadir acero encarece el hormigón. Se hace para mejorar sus propiedades mecánicas.' },
        { text: 'Porque el hormigón resiste bien la compresión pero mal la tracción; el acero aporta resistencia a la tracción.', correct: true,
          feedback: '¡Correcto! La combinación aprovecha lo mejor de cada material: hormigón en compresión, acero en tracción.' },
        { text: 'Para que el hormigón no se seque tan rápido.', correct: false,
          feedback: 'Incorrecto. El proceso de fraguado no tiene que ver con el armado. El acero mejora la resistencia mecánica.' }
      ]
    },
    {
      id: 'q21',
      type: 'test',
      question: '¿Cuál de estos materiales es más adecuado para construir una presa?',
      options: [
        { text: 'Acero, por su resistencia a la tracción.', correct: false,
          feedback: 'Incorrecto. Una presa necesita resistir el empuje del agua en compresión. El hormigón es más adecuado.' },
        { text: 'Hormigón en masa, porque resiste muy bien la compresión del agua.', correct: true,
          feedback: '¡Correcto! Las presas trabajan principalmente a compresión y el hormigón en masa es ideal para ello.' },
        { text: 'Madera, porque es natural y ecológica.', correct: false,
          feedback: 'Incorrecto. La madera no resiste bien la humedad continua ni las cargas de una presa grande.' }
      ]
    },
    {
      id: 'q22',
      type: 'matching',
      question: 'Relaciona cada material con su propiedad estructural más destacada:',
      pairs: [
        { left: 'Hormigón',  right: 'Alta resistencia a la compresión' },
        { left: 'Acero',     right: 'Alta resistencia a la tracción' },
        { left: 'Madera',    right: 'Ligera y resistente a flexión' },
        { left: 'Aluminio',  right: 'Ligero y resistente a la corrosión' }
      ]
    },

    // ── BLOQUE 5: aplicaciones y análisis ────────────────────────
    {
      id: 'q23',
      type: 'test',
      question: 'Un puente de celosía tiene muchas barras triangulares. ¿Cuál es la ventaja frente a un puente macizo?',
      options: [
        { text: 'Es más bonito visualmente.', correct: false,
          feedback: 'Incorrecto. La ventaja es técnica: la celosía usa mucho menos material y pesa menos manteniendo la rigidez.' },
        { text: 'Usa menos material pero mantiene la rigidez gracias a la triangulación.', correct: true,
          feedback: '¡Correcto! La celosía triangulada es el equilibrio perfecto entre ligereza y resistencia.' },
        { text: 'Es más sencillo de construir.', correct: false,
          feedback: 'Incorrecto. La celosía es más compleja de unir. La ventaja es la eficiencia estructural, no la sencillez.' }
      ]
    },
    {
      id: 'q24',
      type: 'test',
      question: 'La Sagrada Família de Gaudí usa columnas que se bifurcan en ramas hacia arriba. ¿Qué esfuerzo soportan principalmente?',
      options: [
        { text: 'Tracción — las ramas están estiradas hacia arriba.', correct: false,
          feedback: 'Incorrecto. Las ramas soportan el peso de la cubierta que empuja hacia abajo. Eso es compresión.' },
        { text: 'Compresión — soportan el peso de las bóvedas de arriba.', correct: true,
          feedback: '¡Correcto! Gaudí diseñó sus estructuras para que todo trabajara a compresión, aprovechando la forma parabólica.' },
        { text: 'Cortadura — las ramas se cortan bajo el peso.', correct: false,
          feedback: 'Incorrecto. La cortadura implica corte transversal. Las columnas de Gaudí trabajan a compresión axial.' }
      ]
    },
    {
      id: 'q25',
      type: 'test',
      question: '¿Qué es el "factor de seguridad" en ingeniería estructural?',
      options: [
        { text: 'El número de ingenieros que revisan el proyecto.', correct: false,
          feedback: 'Incorrecto. El factor de seguridad es un coeficiente matemático, no una cantidad de personas.' },
        { text: 'Un coeficiente que multiplica las cargas previstas para garantizar que la estructura resista más de lo necesario.', correct: true,
          feedback: '¡Correcto! Se diseña para soportar más carga de la esperada, por si hay errores de cálculo o situaciones imprevistas.' },
        { text: 'El seguro de responsabilidad civil de la constructora.', correct: false,
          feedback: 'Incorrecto. El factor de seguridad es un concepto técnico de cálculo, no un seguro legal.' }
      ]
    },
    {
      id: 'q26',
      type: 'test',
      question: 'En un edificio, ¿cuál de estos elementos es parte de la estructura?',
      options: [
        { text: 'Las ventanas de aluminio.', correct: false,
          feedback: 'Incorrecto. Las ventanas son elementos de cerramiento, no estructurales: no soportan cargas del edificio.' },
        { text: 'Los pilares de hormigón.', correct: true,
          feedback: '¡Correcto! Los pilares son elementos estructurales: transmiten las cargas de los forjados al suelo.' },
        { text: 'El papel pintado de las paredes.', correct: false,
          feedback: 'Incorrecto. El papel pintado es acabado decorativo, sin función estructural.' }
      ]
    },
    {
      id: 'q27',
      type: 'matching',
      question: 'Relaciona cada estructura famosa con su tipo:',
      pairs: [
        { left: 'Pirámide de Giza',    right: 'Estructura masiva' },
        { left: 'Torre Eiffel',        right: 'Estructura triangulada' },
        { left: 'Puente Golden Gate',  right: 'Estructura colgante' },
        { left: 'Cúpula del Panteón',  right: 'Estructura laminar' }
      ]
    },

    // ── BLOQUE 6: preguntas integradoras ─────────────────────────
    {
      id: 'q28',
      type: 'test',
      question: 'Un ingeniero diseña un puente y calcula que soportará 100 toneladas. Aplica un factor de seguridad de 3. ¿Para cuánto lo diseña realmente?',
      options: [
        { text: '103 toneladas.', correct: false,
          feedback: 'Incorrecto. Factor de seguridad es multiplicativo, no aditivo. 100 × 3 = 300 toneladas.' },
        { text: '300 toneladas.', correct: true,
          feedback: '¡Correcto! Factor de seguridad 3 significa diseñar para triplicar la carga prevista: 100 × 3 = 300 t.' },
        { text: '33 toneladas.', correct: false,
          feedback: 'Incorrecto. 100 / 3 = 33 sería dividir. El factor de seguridad multiplica la carga, no la divide.' }
      ]
    },
    {
      id: 'q29',
      type: 'test',
      question: 'El viento ejerce una fuerza lateral sobre un rascacielos. ¿Qué esfuerzo provoca principalmente en sus columnas?',
      options: [
        { text: 'Compresión vertical, igual que el peso propio.', correct: false,
          feedback: 'Incorrecto. El viento es horizontal; provoca flexión en las columnas, no solo compresión vertical.' },
        { text: 'Flexión — el viento dobla el edificio como si fuera una viga vertical.', correct: true,
          feedback: '¡Correcto! El viento hace que el edificio se doble como una viga empotrada en el suelo. La flexión es el esfuerzo dominante.' },
        { text: 'Torsión únicamente, porque el viento gira alrededor del edificio.', correct: false,
          feedback: 'Incorrecto. El viento puede causar algo de torsión pero principalmente produce flexión en la estructura.' }
      ]
    },
    {
      id: 'q30',
      type: 'test',
      question: 'Al diseñar un mueble estantería, ¿qué forma darías a las patas laterales para que no se venza hacia los lados?',
      options: [
        { text: 'Hacerlas más gordas, con más sección.', correct: false,
          feedback: 'Incorrecto. La sección mayor ayuda pero no resuelve la deformación lateral. La solución eficiente es triangular.' },
        { text: 'Añadir diagonales entre las patas para triangular la estructura.', correct: true,
          feedback: '¡Correcto! Un travesaño diagonal convierte el rectángulo en triángulos indeformables. Es la solución más eficiente.' },
        { text: 'Usar solo dos patas en vez de cuatro.', correct: false,
          feedback: 'Incorrecto. Reducir el número de patas hace la estructura menos estable, no más.' }
      ]
    }
  ]
};
