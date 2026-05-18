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
    // ── BLOQUE 1: vistas y su posición ───────────────────────────
    {
      id: 'q01',
      type: 'test',
      question: '¿Desde qué dirección se obtiene el alzado de un objeto en el sistema diédrico?',
      options: [
        { text: 'Desde arriba, mirando el objeto hacia abajo.', correct: false,
          feedback: 'Incorrecto. Esa es la vista de planta. El alzado se obtiene mirando de frente al objeto.' },
        { text: 'De frente, mirando el objeto horizontalmente.', correct: true,
          feedback: '¡Correcto! El alzado es la vista frontal: se obtiene mirando el objeto de frente.' },
        { text: 'Desde la derecha, mirando el objeto de lado.', correct: false,
          feedback: 'Incorrecto. Esa es la vista de perfil. El alzado es siempre la vista frontal.' }
      ]
    },
    {
      id: 'q02',
      type: 'test',
      question: '¿Dónde se coloca la planta respecto al alzado en un dibujo diédrico?',
      options: [
        { text: 'A la derecha del alzado.', correct: false,
          feedback: 'Incorrecto. A la derecha del alzado se coloca el perfil. La planta va debajo.' },
        { text: 'Debajo del alzado.', correct: true,
          feedback: '¡Correcto! La planta siempre se dibuja debajo del alzado, compartiendo la misma anchura.' },
        { text: 'Encima del alzado.', correct: false,
          feedback: 'Incorrecto. Encima del alzado no hay ninguna vista estándar. La planta va debajo.' }
      ]
    },
    {
      id: 'q03',
      type: 'test',
      question: '¿Dónde se coloca el perfil (vista lateral) en el sistema diédrico?',
      options: [
        { text: 'Debajo del alzado.', correct: false,
          feedback: 'Incorrecto. Debajo del alzado va la planta. El perfil se coloca a la derecha.' },
        { text: 'A la derecha del alzado.', correct: true,
          feedback: '¡Correcto! El perfil (vista lateral derecha) se dibuja a la derecha del alzado, compartiendo la misma altura.' },
        { text: 'Encima de la planta.', correct: false,
          feedback: 'Incorrecto. Encima de la planta está el alzado. El perfil va a la derecha del alzado.' }
      ]
    },
    {
      id: 'q04',
      type: 'test',
      question: '¿Cuál es la vista más representativa e importante de un objeto en el sistema diédrico?',
      options: [
        { text: 'La planta, porque muestra la forma desde arriba.', correct: false,
          feedback: 'Incorrecto. La planta es importante pero no es la vista principal. El alzado es la más representativa.' },
        { text: 'El alzado, porque muestra el objeto de frente y es la más informativa.', correct: true,
          feedback: '¡Correcto! El alzado es la vista frontal principal y se elige para mostrar la cara más característica del objeto.' },
        { text: 'El perfil, porque muestra la profundidad.', correct: false,
          feedback: 'Incorrecto. El perfil da información de profundidad, pero el alzado es la vista principal.' }
      ]
    },
    {
      id: 'q05',
      type: 'matching',
      question: 'Relaciona cada vista con la dirección desde la que se observa el objeto:',
      pairs: [
        { left: 'Alzado',  right: 'Vista desde el frente' },
        { left: 'Planta',  right: 'Vista desde arriba' },
        { left: 'Perfil',  right: 'Vista desde la derecha' }
      ]
    },
    {
      id: 'q06',
      type: 'matching',
      question: 'Relaciona cada vista con su posición en el papel:',
      pairs: [
        { left: 'Alzado',  right: 'Arriba a la izquierda' },
        { left: 'Planta',  right: 'Debajo del alzado' },
        { left: 'Perfil',  right: 'A la derecha del alzado' }
      ]
    },

    // ── BLOQUE 2: relaciones entre vistas ────────────────────────
    {
      id: 'q07',
      type: 'test',
      question: 'El alzado de una pieza tiene una anchura de 8 cm. ¿Qué anchura tiene esa dimensión en la planta?',
      options: [
        { text: 'No se puede saber sin dibujar la planta.', correct: false,
          feedback: 'Incorrecto. Una regla fundamental del sistema diédrico: alzado y planta tienen siempre la misma anchura.' },
        { text: '8 cm, porque alzado y planta comparten la misma anchura.', correct: true,
          feedback: '¡Correcto! Las líneas de proyección verticales garantizan que alzado y planta tengan la misma anchura.' },
        { text: 'La mitad, 4 cm.', correct: false,
          feedback: 'Incorrecto. La planta no escala la anchura del alzado. Ambas vistas comparten la misma anchura: 8 cm.' }
      ]
    },
    {
      id: 'q08',
      type: 'test',
      question: 'El alzado de una pieza tiene una altura de 6 cm. ¿Qué altura tiene el perfil?',
      options: [
        { text: '6 cm, porque alzado y perfil comparten la misma altura.', correct: true,
          feedback: '¡Correcto! Las líneas de proyección horizontales garantizan que alzado y perfil tengan la misma altura.' },
        { text: '3 cm — la mitad, porque el perfil es lateral.', correct: false,
          feedback: 'Incorrecto. El perfil no reduce la altura. Alzado y perfil comparten siempre la misma altura.' },
        { text: 'No se puede saber sin medir el objeto real.', correct: false,
          feedback: 'Incorrecto. La relación es directa: alzado y perfil tienen la misma altura en el sistema diédrico.' }
      ]
    },
    {
      id: 'q09',
      type: 'test',
      question: '¿Qué dimensión comparten la planta y el perfil?',
      options: [
        { text: 'La anchura.', correct: false,
          feedback: 'Incorrecto. La anchura la comparten alzado y planta. La planta y el perfil comparten la profundidad.' },
        { text: 'La altura.', correct: false,
          feedback: 'Incorrecto. La altura la comparten alzado y perfil. La planta y el perfil comparten la profundidad.' },
        { text: 'La profundidad.', correct: true,
          feedback: '¡Correcto! La planta muestra la profundidad (dimensión de delante a atrás) y el perfil también, y deben coincidir.' }
      ]
    },
    {
      id: 'q10',
      type: 'test',
      question: 'Si cambias la forma de la planta (vista desde arriba) de un objeto, ¿qué otras vistas podrían verse afectadas?',
      options: [
        { text: 'Solo la planta cambia; alzado y perfil no dependen de ella.', correct: false,
          feedback: 'Incorrecto. Las tres vistas representan el mismo objeto. Si cambias su forma, las otras vistas también cambian.' },
        { text: 'El alzado y el perfil también cambiarán, porque las tres vistas representan el mismo objeto.', correct: true,
          feedback: '¡Correcto! Las tres vistas son proyecciones del mismo objeto. Cualquier cambio en el objeto afecta a todas las vistas.' },
        { text: 'Solo cambia el perfil, porque está más cerca de la planta.', correct: false,
          feedback: 'Incorrecto. No hay una relación de "cercanía" entre vistas. Un cambio en el objeto afecta a las tres vistas.' }
      ]
    },
    {
      id: 'q11',
      type: 'matching',
      question: 'Relaciona cada par de vistas con la dimensión que comparten:',
      pairs: [
        { left: 'Alzado y Planta',   right: 'Comparten la anchura' },
        { left: 'Alzado y Perfil',   right: 'Comparten la altura' },
        { left: 'Planta y Perfil',   right: 'Comparten la profundidad' }
      ]
    },

    // ── BLOQUE 3: tipos de líneas ─────────────────────────────────
    {
      id: 'q12',
      type: 'test',
      question: '¿Cómo se representan las aristas ocultas en el dibujo técnico?',
      options: [
        { text: 'Con línea continua gruesa, igual que las aristas visibles.', correct: false,
          feedback: 'Incorrecto. Las líneas continuas gruesas son para aristas visibles. Las ocultas necesitan un tipo diferente.' },
        { text: 'No se dibujan, solo se representan las aristas visibles.', correct: false,
          feedback: 'Incorrecto. Las aristas ocultas sí se dibujan, pero con línea discontinua para distinguirlas.' },
        { text: 'Con línea discontinua (a trazos).', correct: true,
          feedback: '¡Correcto! Las aristas ocultas se representan con línea discontinua. Así se da información completa del objeto.' }
      ]
    },
    {
      id: 'q13',
      type: 'test',
      question: '¿Para qué se usa la línea de trazo y punto (fina) en dibujo técnico?',
      options: [
        { text: 'Para dibujar las aristas más importantes del objeto.', correct: false,
          feedback: 'Incorrecto. Las aristas visibles se dibujan con línea continua gruesa.' },
        { text: 'Para indicar ejes de simetría del objeto.', correct: true,
          feedback: '¡Correcto! La línea de trazo y punto fina se usa para ejes de simetría y ejes de revolución.' },
        { text: 'Para indicar medidas y cotas.', correct: false,
          feedback: 'Incorrecto. Las cotas se representan con líneas de cota y flechas. Los ejes de simetría llevan trazo y punto.' }
      ]
    },
    {
      id: 'q14',
      type: 'test',
      question: '¿Por qué es importante diferenciar líneas visibles de líneas ocultas en un plano técnico?',
      options: [
        { text: 'Por motivos estéticos: queda más bonito.', correct: false,
          feedback: 'Incorrecto. La diferencia es funcional: permite entender la geometría completa del objeto, incluyendo partes que no se ven desde esa vista.' },
        { text: 'Para dar información completa del objeto, incluyendo partes que no se ven desde esa dirección.', correct: true,
          feedback: '¡Correcto! Las líneas ocultas informan de aristas que existen en el objeto aunque no sean visibles desde esa vista, evitando ambigüedades.' },
        { text: 'Porque la normativa lo exige sin razón técnica real.', correct: false,
          feedback: 'Incorrecto. La normativa existe porque tiene una razón técnica: comunicar con precisión la geometría completa del objeto.' }
      ]
    },
    {
      id: 'q15',
      type: 'matching',
      question: 'Relaciona cada tipo de línea con su significado en dibujo técnico:',
      pairs: [
        { left: 'Línea continua gruesa',        right: 'Aristas visibles' },
        { left: 'Línea discontinua (trazos)',    right: 'Aristas ocultas' },
        { left: 'Línea trazo y punto fina',      right: 'Eje de simetría' }
      ]
    },

    // ── BLOQUE 4: análisis de vistas ─────────────────────────────
    {
      id: 'q16',
      type: 'test',
      question: 'El alzado de un objeto es un rectángulo y la planta es un círculo. ¿Qué forma tiene probablemente el objeto?',
      options: [
        { text: 'Un cubo.', correct: false,
          feedback: 'Incorrecto. Un cubo daría cuadrados en las tres vistas, no un círculo en la planta.' },
        { text: 'Un cilindro.', correct: true,
          feedback: '¡Correcto! Un cilindro tiene alzado rectangular (su cara lateral) y planta circular (su base vista desde arriba).' },
        { text: 'Una esfera.', correct: false,
          feedback: 'Incorrecto. Una esfera daría círculos en las tres vistas, no un rectángulo en el alzado.' }
      ]
    },
    {
      id: 'q17',
      type: 'test',
      question: 'Las tres vistas de un objeto son cuadrados idénticos. ¿Qué forma tiene ese objeto?',
      options: [
        { text: 'Una pirámide cuadrada.', correct: false,
          feedback: 'Incorrecto. Una pirámide daría triángulos en el alzado y el perfil, no cuadrados en las tres vistas.' },
        { text: 'Un cubo.', correct: true,
          feedback: '¡Correcto! Un cubo visto desde el frente, arriba y lado da cuadrados idénticos en las tres vistas.' },
        { text: 'Un cilindro.', correct: false,
          feedback: 'Incorrecto. Un cilindro da un rectángulo en el alzado y perfil, y un círculo en la planta.' }
      ]
    },
    {
      id: 'q18',
      type: 'test',
      question: 'En la planta de una pieza hay una línea discontinua. ¿Qué indica?',
      options: [
        { text: 'Una arista que no existe en el objeto real.', correct: false,
          feedback: 'Incorrecto. Las líneas discontinuas representan aristas reales del objeto, pero que no se ven desde esa vista.' },
        { text: 'Una arista que existe en el objeto pero que no es visible desde arriba.', correct: true,
          feedback: '¡Correcto! La línea discontinua en la planta indica que hay una arista real en el objeto que queda oculta al verlo desde arriba.' },
        { text: 'Un error de dibujo que debe corregirse.', correct: false,
          feedback: 'Incorrecto. La línea discontinua es correcta y necesaria para representar aristas ocultas según la normativa.' }
      ]
    },
    {
      id: 'q19',
      type: 'test',
      question: '¿Qué forma tendría la planta de un cono circular (como un cucurucho) apoyado sobre su base?',
      options: [
        { text: 'Un triángulo.', correct: false,
          feedback: 'Incorrecto. El triángulo aparecería en el alzado. Desde arriba, el cono muestra su base circular y el punto del vértice en el centro.' },
        { text: 'Un círculo con un punto en el centro.', correct: true,
          feedback: '¡Correcto! Desde arriba se ve la base circular y el vértice aparece como un punto en el centro.' },
        { text: 'Un cuadrado.', correct: false,
          feedback: 'Incorrecto. El cono es una figura de revolución basada en un círculo. Ninguna de sus vistas muestra cuadrados.' }
      ]
    },
    {
      id: 'q20',
      type: 'matching',
      question: 'Relaciona cada objeto con la forma de su planta (vista desde arriba):',
      pairs: [
        { left: 'Cubo',       right: 'Cuadrado' },
        { left: 'Cilindro',   right: 'Círculo' },
        { left: 'Pirámide cuadrada', right: 'Cuadrado con diagonales' },
        { left: 'Esfera',     right: 'Círculo (igual en todas las vistas)' }
      ]
    },

    // ── BLOQUE 5: escalas y acotación ────────────────────────────
    {
      id: 'q21',
      type: 'test',
      question: '¿Qué significa que un dibujo está a escala 1:2?',
      options: [
        { text: 'El dibujo es el doble de grande que el objeto real.', correct: false,
          feedback: 'Incorrecto. Escala 1:2 significa que el dibujo es la mitad que el real. La escala 2:1 sería el doble.' },
        { text: 'El dibujo es la mitad del tamaño real del objeto.', correct: true,
          feedback: '¡Correcto! 1:2 = 1 cm en el dibujo equivale a 2 cm en la realidad. El dibujo está reducido a la mitad.' },
        { text: 'El objeto tiene dos veces el tamaño del dibujo, o sea, son iguales.', correct: false,
          feedback: 'Incorrecto. 1:2 no significa que sean iguales. 1 cm dibujo = 2 cm real, así que el dibujo es la mitad.' }
      ]
    },
    {
      id: 'q22',
      type: 'test',
      question: 'Un tornillo mide 30 mm de largo. Lo dibujas a escala 2:1. ¿Cuánto mide en el dibujo?',
      options: [
        { text: '15 mm.', correct: false,
          feedback: 'Incorrecto. Escala 2:1 amplía el objeto. 30 × 2 = 60 mm.' },
        { text: '60 mm.', correct: true,
          feedback: '¡Correcto! Escala 2:1: por cada 2 mm en el dibujo hay 1 mm real. 30 mm real × 2 = 60 mm en el dibujo.' },
        { text: '30 mm — igual que el original.', correct: false,
          feedback: 'Incorrecto. Eso sería escala 1:1 (natural). Escala 2:1 amplía el objeto al doble: 60 mm.' }
      ]
    },
    {
      id: 'q23',
      type: 'test',
      question: '¿Qué es una cota en un plano técnico?',
      options: [
        { text: 'La escala a la que está dibujado el plano.', correct: false,
          feedback: 'Incorrecto. La escala es la relación dibujo/real. La cota es la medida real del objeto indicada en el plano.' },
        { text: 'La medida real del objeto indicada con líneas y flechas en el dibujo.', correct: true,
          feedback: '¡Correcto! Las cotas indican las dimensiones reales del objeto (independientemente de la escala del dibujo).' },
        { text: 'El nombre del material con el que está fabricado el objeto.', correct: false,
          feedback: 'Incorrecto. El material se indica en el cajetín o en notas técnicas. Las cotas son las dimensiones.' }
      ]
    },
    {
      id: 'q24',
      type: 'matching',
      question: 'Relaciona cada escala con lo que significa:',
      pairs: [
        { left: 'Escala 1:1',  right: 'Tamaño natural (dibujo = realidad)' },
        { left: 'Escala 1:2',  right: 'Reducción a la mitad' },
        { left: 'Escala 1:10', right: 'Reducción a una décima parte' },
        { left: 'Escala 2:1',  right: 'Ampliación al doble' }
      ]
    },

    // ── BLOQUE 6: preguntas integradoras ─────────────────────────
    {
      id: 'q25',
      type: 'test',
      question: 'En un plano, el alzado muestra 5 cm de anchura y 3 cm de altura. ¿Cuánto mide de anchura la planta en el mismo plano?',
      options: [
        { text: '3 cm — igual que la altura del alzado.', correct: false,
          feedback: 'Incorrecto. La planta comparte la anchura con el alzado, no la altura.' },
        { text: '5 cm — igual que la anchura del alzado.', correct: true,
          feedback: '¡Correcto! Planta y alzado comparten la anchura. Si el alzado mide 5 cm de ancho, la planta también.' },
        { text: 'No se puede saber sin más datos.', correct: false,
          feedback: 'Incorrecto. La relación es directa: alzado y planta siempre comparten la anchura.' }
      ]
    },
    {
      id: 'q26',
      type: 'test',
      question: 'Encuentras en un plano una arista representada en línea discontinua en el alzado. ¿Qué significa?',
      options: [
        { text: 'Es una arista que el dibujante añadió por error.', correct: false,
          feedback: 'Incorrecto. La línea discontinua es parte del código normalizado del dibujo técnico, no un error.' },
        { text: 'Es una arista real del objeto que no es visible desde el frente.', correct: true,
          feedback: '¡Correcto! La línea discontinua en el alzado indica que esa arista existe pero queda oculta al ver el objeto de frente.' },
        { text: 'Es una línea de simetría del objeto.', correct: false,
          feedback: 'Incorrecto. Los ejes de simetría se representan con línea de trazo y punto fina, no discontinua.' }
      ]
    },
    {
      id: 'q27',
      type: 'test',
      question: 'Un plano usa escala 1:5 y la pieza mide 12 cm en el dibujo. ¿Cuánto mide la pieza real?',
      options: [
        { text: '2,4 cm.', correct: false,
          feedback: 'Incorrecto. Escala 1:5 significa 1 cm dibujo = 5 cm real. 12 × 5 = 60 cm.' },
        { text: '60 cm.', correct: true,
          feedback: '¡Correcto! Escala 1:5: cada cm del dibujo son 5 cm reales. 12 cm × 5 = 60 cm reales.' },
        { text: '17 cm.', correct: false,
          feedback: 'Incorrecto. No se suma la escala. Se multiplica: 12 cm × 5 = 60 cm.' }
      ]
    },
    {
      id: 'q28',
      type: 'test',
      question: '¿Por qué en los planos técnicos se usan escalas en vez de dibujar siempre a tamaño real?',
      options: [
        { text: 'Porque las escalas hacen el dibujo más bonito.', correct: false,
          feedback: 'Incorrecto. La estética no es la razón. La escala permite representar objetos muy grandes o muy pequeños en un papel estándar.' },
        { text: 'Para poder representar en papel objetos muy grandes (edificios) o muy pequeños (tornillos, chips).', correct: true,
          feedback: '¡Correcto! Un edificio de 30 m no cabe en un folio a escala real. Una escala 1:100 lo reduce a 30 cm en el papel.' },
        { text: 'Porque las impresoras no pueden imprimir a tamaño real.', correct: false,
          feedback: 'Incorrecto. Existen plóters que imprimen en papel grande. El motivo de las escalas es la representación de cualquier tamaño en papel estándar.' }
      ]
    },
    {
      id: 'q29',
      type: 'matching',
      question: 'Relaciona cada término de dibujo técnico con su definición:',
      pairs: [
        { left: 'Alzado',      right: 'Vista frontal del objeto' },
        { left: 'Cota',        right: 'Dimensión real indicada en el plano' },
        { left: 'Escala',      right: 'Relación entre tamaño del dibujo y el real' },
        { left: 'Línea oculta',right: 'Arista que no se ve desde esa vista' }
      ]
    },
    {
      id: 'q30',
      type: 'test',
      question: 'Tienes un objeto con un agujero cilíndrico en el interior que no se ve desde ninguna de las tres vistas. ¿Cómo lo representas?',
      options: [
        { text: 'No se puede representar ese agujero en el sistema diédrico.', correct: false,
          feedback: 'Incorrecto. El sistema diédrico sí puede representar geometrías internas mediante líneas ocultas o secciones.' },
        { text: 'Con líneas discontinuas en las vistas donde el agujero quedaría oculto.', correct: true,
          feedback: '¡Correcto! Los elementos interiores ocultos se representan con línea discontinua. Si es muy complejo, se hace una sección.' },
        { text: 'Dibujando solo las partes externas y anotando "tiene agujero interior".', correct: false,
          feedback: 'Incorrecto. Los planos técnicos deben ser precisos y completos sin depender de notas ambiguas. Las líneas ocultas son el método correcto.' }
      ]
    }
  ]
};
