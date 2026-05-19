// UT6 — Expresión y comunicación técnica (Dibujo técnico)
const UT6 = {
  id: 'ut6',
  title: 'Dibujo técnico: vistas',
  subtitle: 'Unidad 6',
  icon: '📐',
  colorVar: '--ut6',

  theory: [
    {
      heading: '¿Qué es el sistema diédrico?',
      html: `<p>El <strong>sistema diédrico</strong> es el método más usado en dibujo técnico para representar
      objetos tridimensionales (3D) sobre papel (2D). Consiste en obtener <strong>tres vistas</strong>
      proyectando el objeto sobre tres planos perpendiculares entre sí, como si lo metiéramos en una caja
      de cristal y dibujáramos lo que se ve en cada cara.</p>`
    },
    {
      heading: 'Las tres vistas principales',
      html: `<ul>
        <li><strong>Alzado</strong> (vista frontal): se ve el objeto <em>de frente</em>.
        Es la vista más importante y se coloca arriba a la izquierda en el papel.</li>
        <li><strong>Planta</strong> (vista superior): se ve el objeto <em>desde arriba</em>.
        Se coloca <em>debajo del alzado</em>.</li>
        <li><strong>Perfil</strong> (vista lateral): se ve el objeto <em>desde la derecha</em>.
        Se coloca <em>a la derecha del alzado</em>.</li>
      </ul>
      <p>Esta disposición no es arbitraria: permite relacionar las vistas entre sí mediante líneas de proyección.</p>`
    },
    {
      heading: 'Relaciones entre las vistas',
      html: `<p>Las vistas están relacionadas y deben ser coherentes:</p>
      <ul>
        <li>El <strong>alzado</strong> y la <strong>planta</strong> tienen la misma <em>anchura</em>.</li>
        <li>El <strong>alzado</strong> y el <strong>perfil</strong> tienen la misma <em>altura</em>.</li>
        <li>La <strong>planta</strong> y el <strong>perfil</strong> tienen la misma <em>profundidad</em>.</li>
      </ul>`
    },
    {
      heading: 'Tipos de líneas',
      html: `<ul>
        <li><strong>Línea continua gruesa</strong>: aristas visibles del objeto.</li>
        <li><strong>Línea discontinua</strong> (a trazos): aristas <em>ocultas</em>, que no se ven desde esa dirección.</li>
        <li><strong>Línea fina de trazo y punto</strong>: ejes de simetría.</li>
      </ul>`
    }
  ],

  example: {
    title: '💡 Ejemplo resuelto',
    body: `<p>Imagina un cubo de 4 cm de lado. Al obtener sus tres vistas:</p>
    <div class="example-highlight">Alzado  → cuadrado de 4×4 cm (visto de frente)
Planta  → cuadrado de 4×4 cm (visto desde arriba)
Perfil  → cuadrado de 4×4 cm (visto desde la derecha)</div>
    <p style="margin-top:.75rem">Las tres vistas son cuadrados idénticos. Fíjate que la anchura del alzado (4 cm)
    coincide con la anchura de la planta, y la altura del alzado (4 cm) coincide con la altura del perfil.</p>`
  },

  exercises: [
    {
      id: 'q1',
      type: 'test',
      question: '¿Desde qué dirección se obtiene el alzado de un objeto en el sistema diédrico?',
      options: [
        {
          text: 'Desde arriba, mirando el objeto hacia abajo.',
          correct: false,
          feedback: 'Incorrecto. Esa es la vista de planta (vista superior). El alzado se obtiene mirando de frente al objeto.'
        },
        {
          text: 'De frente, mirando el objeto horizontalmente.',
          correct: true,
          feedback: '¡Correcto! El alzado es la vista frontal: se obtiene mirando el objeto de frente. Es la vista más representativa del objeto.'
        },
        {
          text: 'Desde la derecha, mirando el objeto de lado.',
          correct: false,
          feedback: 'Incorrecto. Esa es la vista de perfil (vista lateral derecha). El alzado es siempre la vista frontal.'
        }
      ]
    },
    {
      id: 'q2',
      type: 'test',
      question: '¿Dónde se coloca la planta (vista desde arriba) respecto al alzado en un dibujo diédrico?',
      options: [
        {
          text: 'A la derecha del alzado.',
          correct: false,
          feedback: 'Incorrecto. A la derecha del alzado se coloca el perfil (vista lateral). La planta va debajo.'
        },
        {
          text: 'Debajo del alzado.',
          correct: true,
          feedback: '¡Correcto! La planta siempre se dibuja debajo del alzado, y ambas comparten la misma anchura para que las proyecciones sean coherentes.'
        },
        {
          text: 'Encima del alzado.',
          correct: false,
          feedback: 'Incorrecto. Encima del alzado no hay ninguna vista en el sistema diédrico estándar europeo. La planta va debajo.'
        }
      ]
    },
    {
      id: 'q3',
      type: 'test',
      question: '¿Cómo se representan las aristas u bordes que no son visibles desde una vista determinada?',
      options: [
        {
          text: 'Con línea continua gruesa, igual que las aristas visibles.',
          correct: false,
          feedback: 'Incorrecto. Las líneas continuas gruesas representan aristas visibles. Las ocultas necesitan un tipo de línea diferente para distinguirlas.'
        },
        {
          text: 'No se dibujan, solo se representan las aristas visibles.',
          correct: false,
          feedback: 'Incorrecto. En dibujo técnico sí se representan las aristas ocultas, pero con una línea especial que las distingue de las visibles.'
        },
        {
          text: 'Con línea discontinua (a trazos), para distinguirlas de las aristas visibles.',
          correct: true,
          feedback: '¡Correcto! Las aristas ocultas se representan con línea discontinua (a trazos). Esto permite dar información completa del objeto incluso desde esa vista.'
        }
      ]
    },
    {
      id: 'q4',
      type: 'test',
      question: 'El alzado de una pieza tiene una anchura de 8 cm. ¿Qué anchura tiene esa misma dimensión en la planta?',
      options: [
        {
          text: 'No se puede saber sin dibujar la planta.',
          correct: false,
          feedback: 'Incorrecto. Una de las reglas fundamentales del sistema diédrico es que el alzado y la planta tienen siempre la misma anchura.'
        },
        {
          text: '8 cm, porque alzado y planta comparten la misma anchura.',
          correct: true,
          feedback: '¡Correcto! En el sistema diédrico, las líneas de proyección verticales garantizan que alzado y planta tengan siempre la misma anchura.'
        },
        {
          text: 'La mitad, 4 cm, porque la planta es una sección del alzado.',
          correct: false,
          feedback: 'Incorrecto. La planta no es la mitad del alzado. Ambas vistas comparten la misma anchura: 8 cm.'
        }
      ]
    },
    {
      id: 'q5',
      type: 'matching',
      question: 'Relaciona cada vista con la dirección desde la que se observa el objeto:',
      pairs: [
        { left: 'Alzado',  right: 'Vista desde el frente' },
        { left: 'Planta',  right: 'Vista desde arriba' },
        { left: 'Perfil',  right: 'Vista desde la derecha' }
      ]
    }
  ]
};
