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
      Sin estructura, los objetos se derrumbarían bajo su propio peso.</p>`
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
    title: '💡 Ejemplo resuelto',
    body: `<p>Imagina el puente de Brooklyn (Nueva York). Es un <strong>puente colgante</strong>.
    Las torres soportan <em>compresión</em> (todo el peso las aplasta hacia abajo).
    Los cables de los que cuelga el tablero trabajan a <em>tracción</em> (están estirados).
    Las vigas del tablero trabajan a <em>flexión</em> (el peso de los coches las dobla).
    Cada elemento tiene un esfuerzo diferente, y el material se elige en función de eso.</p>
    <div class="example-highlight">Torre → compresión | Cable → tracción | Viga → flexión</div>`
  },

  exercises: [
    {
      id: 'q1',
      type: 'test',
      question: 'Una columna que sostiene el techo de un edificio trabaja principalmente a:',
      options: [
        {
          text: 'Tracción — la columna está siendo estirada.',
          correct: false,
          feedback: 'Incorrecto. La tracción estira el elemento. El peso del techo comprime la columna hacia abajo, no la estira.'
        },
        {
          text: 'Compresión — el peso del techo la aplasta hacia abajo.',
          correct: true,
          feedback: '¡Correcto! El peso actúa hacia abajo y la columna resiste siendo aplastada: eso es compresión.'
        },
        {
          text: 'Torsión — el techo la hace girar.',
          correct: false,
          feedback: 'Incorrecto. La torsión es un giro (como cuando aprietas un tornillo). Una carga vertical sobre una columna produce compresión.'
        }
      ]
    },
    {
      id: 'q2',
      type: 'test',
      question: '¿Cuál es la figura geométrica más rígida e indeformable, muy usada en estructuras?',
      options: [
        {
          text: 'El cuadrado, porque tiene cuatro lados iguales.',
          correct: false,
          feedback: 'Incorrecto. Un cuadrado se puede deformar en rombo sin romper ningún lado. No es rígido.'
        },
        {
          text: 'El círculo, porque no tiene ángulos.',
          correct: false,
          feedback: 'Incorrecto. El círculo es resistente en compresión (como la cúpula), pero no es la figura que se usa para crear rigidez en celosías.'
        },
        {
          text: 'El triángulo, porque sus lados no pueden moverse sin romperse.',
          correct: true,
          feedback: '¡Correcto! Si los tres lados de un triángulo están fijos, la figura no puede deformarse. Por eso se usa en puentes y torres.'
        }
      ]
    },
    {
      id: 'q3',
      type: 'test',
      question: 'Los cables de un puente colgante trabajan principalmente a:',
      options: [
        {
          text: 'Compresión — los cables soportan el peso aplastándose.',
          correct: false,
          feedback: 'Incorrecto. La compresión aplasta. Los cables no pueden resistir compresión: se doblarían. Los cables resisten siendo estirados.'
        },
        {
          text: 'Tracción — los cables están estirados soportando el peso del tablero.',
          correct: true,
          feedback: '¡Correcto! Los cables cuelgan el tablero del puente y están permanentemente estirados: eso es tracción. Por eso se usan materiales de acero de alta resistencia.'
        },
        {
          text: 'Flexión — los cables se doblan bajo el peso.',
          correct: false,
          feedback: 'Incorrecto. Los cables son flexibles, no rígidos, y trabajan a tracción (estirados), no a flexión.'
        }
      ]
    },
    {
      id: 'q4',
      type: 'test',
      question: 'Una viga horizontal empotrada en la pared tiene un peso colgado en su extremo libre. ¿A qué esfuerzo trabaja principalmente la viga?',
      options: [
        {
          text: 'Torsión — el peso la hace girar sobre sí misma.',
          correct: false,
          feedback: 'Incorrecto. La torsión es un giro alrededor del eje del propio elemento. Un peso colgado en el extremo dobla la viga, no la tuerce.'
        },
        {
          text: 'Tracción — el peso la estira.',
          correct: false,
          feedback: 'Incorrecto. La tracción estira el elemento en dirección longitudinal. Un peso en el extremo de una viga la dobla.'
        },
        {
          text: 'Flexión — el peso la dobla hacia abajo.',
          correct: true,
          feedback: '¡Correcto! El peso en el extremo crea un momento que dobla la viga. Eso es flexión. La parte superior de la viga trabaja a compresión y la inferior a tracción.'
        }
      ]
    },
    {
      id: 'q5',
      type: 'matching',
      question: 'Relaciona cada tipo de estructura con su ejemplo más representativo:',
      pairs: [
        { left: 'Estructura masiva',      right: 'Presa o pirámide' },
        { left: 'Estructura triangulada', right: 'Torre Eiffel o puente de celosía' },
        { left: 'Estructura colgante',    right: 'Puente Golden Gate' },
        { left: 'Estructura laminar',     right: 'Cáscara de huevo o cúpula' }
      ]
    }
  ]
};
