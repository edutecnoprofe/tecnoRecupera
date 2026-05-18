// UT5 — Introducción a la electricidad
const UT5 = {
  id: 'ut5',
  title: 'Introducción a la electricidad',
  subtitle: 'Unidad 5',
  icon: '⚡',
  colorVar: '--ut5',

  theory: [
    {
      heading: 'Componentes básicos de un circuito',
      html: `<p>Un circuito eléctrico necesita al menos estos elementos:</p>
      <ul>
        <li><strong>Generador</strong> (pila, batería): proporciona la energía eléctrica.</li>
        <li><strong>Conductores</strong> (cables): transportan la corriente de un componente a otro.</li>
        <li><strong>Receptor</strong> (bombilla, motor, resistencia): consume la energía para producir luz, movimiento, calor…</li>
        <li><strong>Elemento de control</strong> (interruptor): abre o cierra el circuito.</li>
      </ul>
      <p>Para que la corriente circule, el circuito debe estar <em>cerrado</em> (sin interrupciones).</p>`
    },
    {
      heading: 'Magnitudes eléctricas y la Ley de Ohm',
      html: `<p>Las tres magnitudes fundamentales son:</p>
      <ul>
        <li><strong>Tensión (V)</strong>: la "fuerza" que empuja la corriente. Se mide en <em>voltios (V)</em>.</li>
        <li><strong>Intensidad (I)</strong>: la cantidad de corriente que circula. Se mide en <em>amperios (A)</em>.</li>
        <li><strong>Resistencia (R)</strong>: la oposición al paso de la corriente. Se mide en <em>ohmios (Ω)</em>.</li>
      </ul>
      <p>La <strong>Ley de Ohm</strong> relaciona las tres: <code>V = I × R</code><br>
      Para calcular la intensidad: <code>I = V / R</code></p>`
    },
    {
      heading: 'Instrumentos de medida',
      html: `<ul>
        <li><strong>Amperímetro</strong>: mide la intensidad (A). Se conecta en <em>serie</em>, intercalado en el circuito.</li>
        <li><strong>Voltímetro</strong>: mide la tensión (V). Se conecta en <em>paralelo</em>, entre dos puntos del circuito.</li>
      </ul>
      <p>Si conectas el amperímetro en paralelo, puede averiarse porque su resistencia interna es casi cero.</p>`
    },
    {
      heading: 'Tipos de bombillas y su duración',
      html: `<p>De menor a mayor duración (y eficiencia energética):</p>
      <ul>
        <li><strong>Incandescencia</strong>: 1 000 h. Muy ineficiente (95% del consumo es calor).</li>
        <li><strong>Halógena</strong>: 2 000 h. Similar a la incandescente pero algo mejor.</li>
        <li><strong>Fluorescente (bajo consumo)</strong>: 8 000 h. Mucho más eficiente.</li>
        <li><strong>LED</strong>: hasta 25 000 h. Máxima eficiencia y menor consumo.</li>
      </ul>`
    }
  ],

  example: {
    title: '💡 Ejemplo resuelto',
    body: `<p>Una pila de <strong>6 V</strong> está conectada a una bombilla cuya resistencia es de <strong>2 Ω</strong>.
    ¿Cuánta corriente circula por el circuito?</p>
    <div class="example-highlight">I = V / R = 6 V / 2 Ω = 3 A</div>
    <p style="margin-top:.75rem">Por el circuito circulan <strong>3 amperios</strong>.
    Para medir ese valor, intercalaríamos un amperímetro en serie en cualquier punto del circuito.</p>`
  },

  exercises: [
    {
      id: 'q1',
      type: 'test',
      question: '¿Qué tipo de bombilla tiene mayor duración y menor consumo energético?',
      options: [
        {
          text: 'La bombilla de incandescencia, porque lleva más tiempo en el mercado.',
          correct: false,
          feedback: 'Incorrecto. La bombilla de incandescencia es la menos eficiente: solo dura ~1 000 horas y convierte el 95% de la energía en calor.'
        },
        {
          text: 'La bombilla fluorescente, porque consume menos que la halógena.',
          correct: false,
          feedback: 'Incorrecto. La fluorescente es más eficiente que la incandescente y la halógena, pero el LED la supera en duración y eficiencia.'
        },
        {
          text: 'La bombilla LED, con hasta 25 000 horas de duración.',
          correct: true,
          feedback: '¡Correcto! El LED es el más eficiente: menor consumo y mayor duración (hasta 25 veces más que la incandescente).'
        }
      ]
    },
    {
      id: 'q2',
      type: 'test',
      question: '¿Cómo se conecta el amperímetro en un circuito para medir la intensidad?',
      options: [
        {
          text: 'En paralelo con la bombilla, conectando sus terminales a los dos extremos de la bombilla.',
          correct: false,
          feedback: 'Incorrecto. Eso es como se conecta el voltímetro. El amperímetro en paralelo podría averiarse, ya que su resistencia es casi cero y dejaría pasar demasiada corriente.'
        },
        {
          text: 'En serie, intercalado en el circuito para que toda la corriente pase por él.',
          correct: true,
          feedback: '¡Correcto! El amperímetro se intercala en el circuito (en serie) para que la corriente pase a través de él y pueda medirla.'
        },
        {
          text: 'No importa cómo se conecte, siempre da el mismo valor.',
          correct: false,
          feedback: 'Incorrecto. La posición del amperímetro es fundamental. Conectado en paralelo puede averiarse y dará lecturas incorrectas.'
        }
      ]
    },
    {
      id: 'q3',
      type: 'test',
      question: 'Una pila de 12 V está conectada a una resistencia de 4 Ω. Usando la Ley de Ohm (I = V/R), ¿cuál es la intensidad de corriente?',
      options: [
        {
          text: '48 A — porque 12 × 4 = 48',
          correct: false,
          feedback: 'Incorrecto. Eso sería V × R, pero la fórmula es I = V / R (división). Divide el voltaje entre la resistencia.'
        },
        {
          text: '3 A — porque 12 / 4 = 3',
          correct: true,
          feedback: '¡Correcto! Aplicando I = V / R: I = 12 / 4 = 3 amperios.'
        },
        {
          text: '8 A — porque 12 − 4 = 8',
          correct: false,
          feedback: 'Incorrecto. La Ley de Ohm no es una resta. La fórmula correcta es I = V / R: 12 / 4 = 3 A.'
        }
      ]
    },
    {
      id: 'q4',
      type: 'test',
      question: '¿Cuál de estos materiales es buen conductor de electricidad?',
      options: [
        {
          text: 'Madera',
          correct: false,
          feedback: 'Incorrecto. La madera es aislante (especialmente cuando está seca). No deja pasar la corriente eléctrica con facilidad.'
        },
        {
          text: 'Plástico',
          correct: false,
          feedback: 'Incorrecto. El plástico es un aislante muy utilizado precisamente para recubrir cables y evitar cortocircuitos.'
        },
        {
          text: 'Cobre',
          correct: true,
          feedback: '¡Correcto! El cobre es uno de los mejores conductores eléctricos. Por eso los cables eléctricos están hechos de cobre en su interior.'
        }
      ]
    },
    {
      id: 'q5',
      type: 'matching',
      question: 'Relaciona cada magnitud eléctrica con su unidad de medida:',
      pairs: [
        { left: 'Tensión (voltaje)',       right: 'Voltio (V)' },
        { left: 'Intensidad de corriente', right: 'Amperio (A)' },
        { left: 'Resistencia eléctrica',   right: 'Ohmio (Ω)' }
      ]
    }
  ]
};
