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
    title: '💡 Ejemplo 1 — Ley de Ohm básica',
    body: `<p>Una pila de <strong>6 V</strong> está conectada a una bombilla cuya resistencia es de <strong>2 Ω</strong>.
    ¿Cuánta corriente circula por el circuito?</p>
    <div class="example-highlight">I = V / R = 6 V / 2 Ω = 3 A</div>
    <p style="margin-top:.75rem">Por el circuito circulan <strong>3 amperios</strong>.
    Para medir ese valor, intercalaríamos un amperímetro en serie en cualquier punto del circuito.</p>`
  },

  examples: [
    {
      title: '💡 Ejemplo 2 — Resistencias en serie y Ley de Ohm',
      body: `<p>Una pila de <strong>9 V</strong> alimenta un circuito con <strong>tres resistencias en serie</strong>
      de 1 Ω, 2 Ω y 3 Ω. ¿Cuánta corriente circula?</p>
      <p><strong>Paso 1:</strong> En serie, las resistencias se suman.</p>
      <div class="example-highlight">R_total = 1 + 2 + 3 = 6 Ω</div>
      <p style="margin-top:.75rem"><strong>Paso 2:</strong> Aplica la Ley de Ohm.</p>
      <div class="example-highlight">I = V / R = 9 V / 6 Ω = 1,5 A</div>
      <p style="margin-top:.75rem">Por el circuito circulan <strong>1,5 amperios</strong>.
      En serie, la misma corriente pasa por todos los componentes.</p>`
    },
    {
      title: '💡 Ejemplo 3 — Conectar amperímetro y voltímetro correctamente',
      body: `<p>Tienes una pila de 4,5 V y una resistencia de 9 Ω. Quieres medir tanto la intensidad como la tensión.</p>
      <div class="example-highlight">
        Amperímetro → en SERIE (intercalado en el cable del circuito)<br>
        Voltímetro  → en PARALELO (conectado a ambos extremos de la resistencia)
      </div>
      <p style="margin-top:.75rem">
        <strong>¿Por qué?</strong><br>
        El amperímetro tiene resistencia casi cero: si lo pones en paralelo, cortocircuita el componente.<br>
        El voltímetro tiene resistencia muy alta: si lo pones en serie, bloquea casi toda la corriente.
      </p>
      <p>Resultado esperado: I = 4,5 / 9 = <strong>0,5 A</strong> · V = <strong>4,5 V</strong></p>`
    },
    {
      title: '💡 Ejemplo 4 — Ahorro energético con bombillas LED',
      body: `<p>Una clase tiene <strong>12 fluorescentes de 36 W</strong> encendidos <strong>6 horas al día</strong>,
      200 días al año. Se sustituyen por <strong>LEDs de 10 W</strong> equivalentes. ¿Cuánto se ahorra?</p>
      <div class="example-highlight">
        Consumo fluorescente: 12 × 36 W × 6 h × 200 días = 518 400 Wh = <strong>518,4 kWh/año</strong><br>
        Consumo LED:          12 × 10 W × 6 h × 200 días = 144 000 Wh = <strong>144 kWh/año</strong><br>
        Ahorro: 518,4 − 144 = <strong>374,4 kWh/año</strong>
      </div>
      <p style="margin-top:.75rem">A 0,15 €/kWh, el ahorro es de unos <strong>56 € al año</strong> solo en esa clase.
      Los LEDs también duran ~3 veces más que los fluorescentes, reduciendo el coste de mantenimiento.</p>`
    },
  ],

  exercises: [
    // ── BLOQUE 1: componentes del circuito ────────────────────────
    {
      id: 'q01',
      type: 'test',
      question: '¿Qué componente proporciona la energía eléctrica en un circuito?',
      options: [
        { text: 'El interruptor.', correct: false,
          feedback: 'Incorrecto. El interruptor abre o cierra el circuito, pero no genera energía.' },
        { text: 'El generador (pila o batería).', correct: true,
          feedback: '¡Correcto! El generador (pila, batería, panel solar…) es la fuente de energía eléctrica del circuito.' },
        { text: 'El cable conductor.', correct: false,
          feedback: 'Incorrecto. Los cables transportan la corriente, pero no la generan.' }
      ]
    },
    {
      id: 'q02',
      type: 'test',
      question: '¿Qué ocurre si abres el interruptor de un circuito en serie?',
      options: [
        { text: 'Solo se apaga el receptor más cercano al interruptor.', correct: false,
          feedback: 'Incorrecto. En serie, todos los componentes forman una sola ruta. Si se interrumpe, deja de circular corriente por todo el circuito.' },
        { text: 'La corriente deja de circular por todo el circuito.', correct: true,
          feedback: '¡Correcto! En serie hay un solo camino para la corriente; si se abre el interruptor, el circuito queda interrumpido.' },
        { text: 'La corriente circula más rápido por el resto del circuito.', correct: false,
          feedback: 'Incorrecto. Si el circuito se abre, no hay circulación de corriente en ningún punto.' }
      ]
    },
    {
      id: 'q03',
      type: 'test',
      question: '¿Cuál de estos es un receptor eléctrico?',
      options: [
        { text: 'Un cable de cobre.', correct: false,
          feedback: 'Incorrecto. El cable es un conductor, no un receptor. El receptor consume energía eléctrica para transformarla.' },
        { text: 'Una pila de 9 V.', correct: false,
          feedback: 'Incorrecto. La pila es un generador, no un receptor. El receptor consume energía.' },
        { text: 'Un motor eléctrico.', correct: true,
          feedback: '¡Correcto! El motor es un receptor: consume energía eléctrica y la convierte en movimiento.' }
      ]
    },
    {
      id: 'q04',
      type: 'test',
      question: 'Para que un circuito funcione, debe estar:',
      options: [
        { text: 'Abierto — para que la corriente pueda entrar.', correct: false,
          feedback: 'Incorrecto. Un circuito abierto tiene una interrupción y no conduce corriente.' },
        { text: 'Cerrado — formando un camino continuo sin interrupciones.', correct: true,
          feedback: '¡Correcto! La corriente necesita un camino cerrado y continuo para circular.' },
        { text: 'Conectado a tierra siempre — sin tierra no funciona.', correct: false,
          feedback: 'Incorrecto. La toma de tierra es un elemento de seguridad, no necesario para que el circuito funcione.' }
      ]
    },
    {
      id: 'q05',
      type: 'matching',
      question: 'Relaciona cada componente con su función:',
      pairs: [
        { left: 'Generador',    right: 'Proporciona energía eléctrica' },
        { left: 'Conductor',    right: 'Transporta la corriente' },
        { left: 'Receptor',     right: 'Consume la energía eléctrica' },
        { left: 'Interruptor',  right: 'Abre o cierra el circuito' }
      ]
    },

    // ── BLOQUE 2: magnitudes y Ley de Ohm ────────────────────────
    {
      id: 'q06',
      type: 'test',
      question: '¿Cuál es la unidad de medida de la tensión eléctrica?',
      options: [
        { text: 'Amperio (A)', correct: false,
          feedback: 'Incorrecto. El amperio mide la intensidad de corriente, no la tensión.' },
        { text: 'Voltio (V)', correct: true,
          feedback: '¡Correcto! La tensión (o voltaje) se mide en voltios (V).' },
        { text: 'Ohmio (Ω)', correct: false,
          feedback: 'Incorrecto. El ohmio es la unidad de resistencia eléctrica.' }
      ]
    },
    {
      id: 'q07',
      type: 'test',
      question: 'Una pila de 12 V está conectada a una resistencia de 4 Ω. Usando I = V/R, ¿cuál es la intensidad?',
      options: [
        { text: '48 A — porque 12 × 4 = 48', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm para la intensidad es I = V / R (división, no multiplicación).' },
        { text: '3 A — porque 12 / 4 = 3', correct: true,
          feedback: '¡Correcto! I = V / R = 12 / 4 = 3 amperios.' },
        { text: '8 A — porque 12 − 4 = 8', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm no es una resta. I = V / R: 12 / 4 = 3 A.' }
      ]
    },
    {
      id: 'q08',
      type: 'test',
      question: 'Por una resistencia de 5 Ω circula una corriente de 2 A. ¿Cuál es la tensión aplicada?',
      options: [
        { text: '2,5 V — porque 5 / 2 = 2,5', correct: false,
          feedback: 'Incorrecto. Para calcular la tensión usa V = I × R: 2 × 5 = 10 V.' },
        { text: '10 V — porque V = I × R = 2 × 5', correct: true,
          feedback: '¡Correcto! V = I × R = 2 A × 5 Ω = 10 voltios.' },
        { text: '7 V — porque 5 + 2 = 7', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm no se calcula sumando. V = I × R = 2 × 5 = 10 V.' }
      ]
    },
    {
      id: 'q09',
      type: 'test',
      question: 'Una bombilla tiene una tensión de 6 V y por ella circula 0,5 A. ¿Cuál es su resistencia?',
      options: [
        { text: '3 Ω — porque 6 / 2 = 3', correct: false,
          feedback: 'Incorrecto. Usa R = V / I = 6 / 0,5 = 12 Ω.' },
        { text: '12 Ω — porque R = V / I = 6 / 0,5', correct: true,
          feedback: '¡Correcto! R = V / I = 6 V / 0,5 A = 12 ohmios.' },
        { text: '6,5 Ω — porque 6 + 0,5 = 6,5', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm no suma. R = V / I = 6 / 0,5 = 12 Ω.' }
      ]
    },
    {
      id: 'q10',
      type: 'test',
      question: '¿Qué le ocurre a la intensidad de corriente si duplicas la resistencia, manteniendo la misma tensión?',
      options: [
        { text: 'Se duplica también.', correct: false,
          feedback: 'Incorrecto. Según I = V/R, si R sube, I baja (relación inversa).' },
        { text: 'Se reduce a la mitad.', correct: true,
          feedback: '¡Correcto! I = V / R. Si R × 2, entonces I ÷ 2. La intensidad y la resistencia son inversamente proporcionales.' },
        { text: 'No cambia, depende solo de la tensión.', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm relaciona las tres magnitudes. Si cambia R, cambia I (con V constante).' }
      ]
    },
    {
      id: 'q11',
      type: 'matching',
      question: 'Relaciona cada magnitud eléctrica con su unidad de medida:',
      pairs: [
        { left: 'Tensión (voltaje)',       right: 'Voltio (V)' },
        { left: 'Intensidad de corriente', right: 'Amperio (A)' },
        { left: 'Resistencia eléctrica',   right: 'Ohmio (Ω)' }
      ]
    },

    // ── BLOQUE 3: instrumentos de medida ─────────────────────────
    {
      id: 'q12',
      type: 'test',
      question: '¿Cómo se conecta el amperímetro en un circuito?',
      options: [
        { text: 'En paralelo con el componente que se quiere medir.', correct: false,
          feedback: 'Incorrecto. Eso es el voltímetro. El amperímetro en paralelo podría averiarse por su bajísima resistencia interna.' },
        { text: 'En serie, intercalado en el circuito para que toda la corriente pase por él.', correct: true,
          feedback: '¡Correcto! El amperímetro va en serie para que la corriente lo atraviese y pueda medirla.' },
        { text: 'No importa la posición, siempre mide correctamente.', correct: false,
          feedback: 'Incorrecto. La posición es fundamental. Conectado en paralelo puede averiarse.' }
      ]
    },
    {
      id: 'q13',
      type: 'test',
      question: '¿Cómo se conecta el voltímetro para medir la tensión de una bombilla?',
      options: [
        { text: 'En serie, intercalado entre la pila y la bombilla.', correct: false,
          feedback: 'Incorrecto. El voltímetro en serie añadiría su alta resistencia al circuito y daría medidas erróneas.' },
        { text: 'En paralelo, conectando sus bornes a los dos extremos de la bombilla.', correct: true,
          feedback: '¡Correcto! El voltímetro se conecta en paralelo para medir la diferencia de potencial entre dos puntos.' },
        { text: 'Directamente a la pila, sin tocar la bombilla.', correct: false,
          feedback: 'Incorrecto. Así mediría la tensión de la pila, no la de la bombilla. Conecta en paralelo con la bombilla.' }
      ]
    },
    {
      id: 'q14',
      type: 'test',
      question: '¿Qué instrumento mide tanto tensión como intensidad y resistencia?',
      options: [
        { text: 'El polímetro (multímetro).', correct: true,
          feedback: '¡Correcto! El polímetro o multímetro es un instrumento versátil que puede medir voltaje, intensidad y resistencia según cómo se configure.' },
        { text: 'El voltímetro, porque es el más completo.', correct: false,
          feedback: 'Incorrecto. El voltímetro solo mide tensión. El que mide varias magnitudes es el multímetro.' },
        { text: 'El amperímetro, porque mide la corriente total.', correct: false,
          feedback: 'Incorrecto. El amperímetro solo mide intensidad. El multímetro es el que combina varias funciones.' }
      ]
    },
    {
      id: 'q15',
      type: 'matching',
      question: 'Relaciona cada instrumento con lo que mide y cómo se conecta:',
      pairs: [
        { left: 'Amperímetro', right: 'Intensidad — en serie' },
        { left: 'Voltímetro',  right: 'Tensión — en paralelo' },
        { left: 'Óhmetro',     right: 'Resistencia — con el circuito apagado' }
      ]
    },

    // ── BLOQUE 4: eficiencia energética y bombillas ───────────────
    {
      id: 'q16',
      type: 'test',
      question: '¿Qué tipo de bombilla tiene mayor duración y menor consumo energético?',
      options: [
        { text: 'La bombilla de incandescencia.', correct: false,
          feedback: 'Incorrecto. La incandescente dura solo ~1 000 h y convierte el 95% de la energía en calor.' },
        { text: 'La bombilla fluorescente.', correct: false,
          feedback: 'Incorrecto. La fluorescente es mejor que la incandescente, pero el LED la supera en duración y eficiencia.' },
        { text: 'La bombilla LED, con hasta 25 000 horas.', correct: true,
          feedback: '¡Correcto! El LED es el más eficiente: menor consumo y hasta 25 veces más duración que la incandescente.' }
      ]
    },
    {
      id: 'q17',
      type: 'test',
      question: 'Una bombilla incandescente de 100 W convierte el 95% de la energía en calor. ¿Cuántos vatios produce realmente en luz?',
      options: [
        { text: '95 W de luz.', correct: false,
          feedback: 'Incorrecto. El 95% es calor (95 W), solo el 5% restante es luz.' },
        { text: '5 W de luz.', correct: true,
          feedback: '¡Correcto! El 5% de 100 W = 5 W de luz útil. El 95% (95 W) se desperdicia en calor.' },
        { text: '50 W de luz.', correct: false,
          feedback: 'Incorrecto. Solo el 5% se convierte en luz, no el 50%.' }
      ]
    },
    {
      id: 'q18',
      type: 'test',
      question: 'Sustituyes 10 bombillas incandescentes de 60 W por bombillas LED equivalentes de 8 W. ¿Cuánta potencia ahorras?',
      options: [
        { text: '50 W en total.', correct: false,
          feedback: 'Incorrecto. Calcula el ahorro por bombilla (60−8 = 52 W) y multiplica por 10.' },
        { text: '520 W en total.', correct: true,
          feedback: '¡Correcto! Ahorro por bombilla: 60 − 8 = 52 W. En 10 bombillas: 52 × 10 = 520 W.' },
        { text: '600 W en total.', correct: false,
          feedback: 'Incorrecto. Eso sería el consumo anterior, no el ahorro. Resta el consumo LED al incandescente.' }
      ]
    },
    {
      id: 'q19',
      type: 'matching',
      question: 'Ordena las bombillas de menor a mayor eficiencia (relaciona con su duración aproximada):',
      pairs: [
        { left: 'Incandescencia', right: '~1 000 horas' },
        { left: 'Halógena',       right: '~2 000 horas' },
        { left: 'Fluorescente',   right: '~8 000 horas' },
        { left: 'LED',            right: '~25 000 horas' }
      ]
    },

    // ── BLOQUE 5: conductores, aislantes y seguridad ──────────────
    {
      id: 'q20',
      type: 'test',
      question: '¿Cuál de estos materiales es buen conductor eléctrico?',
      options: [
        { text: 'Madera seca.', correct: false,
          feedback: 'Incorrecto. La madera seca es aislante. No deja pasar la corriente con facilidad.' },
        { text: 'Plástico.', correct: false,
          feedback: 'Incorrecto. El plástico es aislante; por eso se usa para recubrir cables.' },
        { text: 'Cobre.', correct: true,
          feedback: '¡Correcto! El cobre es uno de los mejores conductores eléctricos, por eso los cables interiores son de cobre.' }
      ]
    },
    {
      id: 'q21',
      type: 'test',
      question: '¿Por qué los cables eléctricos están recubiertos de plástico?',
      options: [
        { text: 'Para que sean más resistentes mecánicamente.', correct: false,
          feedback: 'Incorrecto. La resistencia mecánica no es la función principal del recubrimiento plástico.' },
        { text: 'Para aislar el conductor y evitar descargas eléctricas o cortocircuitos.', correct: true,
          feedback: '¡Correcto! El plástico es aislante y evita que la corriente se escape o que dos cables se toquen accidentalmente.' },
        { text: 'Para que el cable sea más flexible.', correct: false,
          feedback: 'Incorrecto. La flexibilidad puede ser una consecuencia, pero la función principal del plástico es el aislamiento eléctrico.' }
      ]
    },
    {
      id: 'q22',
      type: 'test',
      question: '¿Para qué sirve el fusible en un circuito eléctrico?',
      options: [
        { text: 'Para aumentar la tensión cuando hay poca.', correct: false,
          feedback: 'Incorrecto. El fusible es un dispositivo de protección, no de regulación de tensión.' },
        { text: 'Para proteger el circuito: se funde si pasa demasiada corriente, cortando el circuito.', correct: true,
          feedback: '¡Correcto! El fusible es un elemento de seguridad que se rompe cuando la corriente supera un valor seguro.' },
        { text: 'Para medir la intensidad del circuito.', correct: false,
          feedback: 'Incorrecto. El amperímetro mide la intensidad. El fusible es un dispositivo de protección.' }
      ]
    },
    {
      id: 'q23',
      type: 'test',
      question: '¿Qué es un cortocircuito?',
      options: [
        { text: 'Cuando se conectan demasiados aparatos y la corriente baja mucho.', correct: false,
          feedback: 'Incorrecto. Al conectar más aparatos la corriente sube, no baja. Un cortocircuito es otra cosa.' },
        { text: 'Una conexión directa entre los bornes de la fuente sin resistencia, con corriente muy alta y peligrosa.', correct: true,
          feedback: '¡Correcto! Un cortocircuito ocurre cuando el hilo positivo y negativo se tocan directamente: la resistencia es casi cero y la corriente sube muchísimo.' },
        { text: 'Cuando el circuito se queda sin corriente por culpa de una pila agotada.', correct: false,
          feedback: 'Incorrecto. Eso es un circuito sin tensión. Un cortocircuito es una conexión directa entre bornes que causa corriente excesiva.' }
      ]
    },
    {
      id: 'q24',
      type: 'matching',
      question: 'Relaciona cada material con su comportamiento eléctrico:',
      pairs: [
        { left: 'Cobre',    right: 'Conductor — deja pasar la corriente fácilmente' },
        { left: 'Plástico', right: 'Aislante — no deja pasar la corriente' },
        { left: 'Carbono',  right: 'Semiconductor — conduce según las condiciones' },
        { left: 'Goma',     right: 'Aislante — se usa en guantes de protección' }
      ]
    },

    // ── BLOQUE 6: preguntas integradoras ─────────────────────────
    {
      id: 'q25',
      type: 'test',
      question: 'Un circuito tiene una pila de 9 V y tres resistencias de 3 Ω en serie. ¿Cuál es la intensidad total?',
      options: [
        { text: '3 A — porque 9 / 3 = 3 (usando solo una resistencia).', correct: false,
          feedback: 'Incorrecto. En serie las resistencias se suman: R_total = 3+3+3 = 9 Ω. I = 9 / 9 = 1 A.' },
        { text: '1 A — porque R_total = 9 Ω y I = 9 V / 9 Ω.', correct: true,
          feedback: '¡Correcto! En serie: R_total = 3+3+3 = 9 Ω. I = V/R = 9/9 = 1 amperio.' },
        { text: '27 A — porque 9 × 3 = 27.', correct: false,
          feedback: 'Incorrecto. La Ley de Ohm es I = V/R, no V×R. Además hay que sumar las resistencias en serie.' }
      ]
    },
    {
      id: 'q26',
      type: 'test',
      question: 'Quieres medir la tensión de una pila de petaca de 4,5 V con un polímetro. ¿Qué modo seleccionas?',
      options: [
        { text: 'Modo amperios (A), para ver si la pila tiene carga.', correct: false,
          feedback: 'Incorrecto. Para medir la tensión de la pila debes seleccionar el modo voltios (V) de corriente continua (DC).' },
        { text: 'Modo voltios DC (V —), porque la pila da corriente continua.', correct: true,
          feedback: '¡Correcto! Las pilas dan corriente continua (DC). Selecciona voltios DC y un rango superior a 4,5 V.' },
        { text: 'Modo ohmios (Ω), para medir su resistencia interna.', correct: false,
          feedback: 'Incorrecto. El modo ohmios mide resistencia, no tensión. Además no se usa en pilas con corriente.' }
      ]
    },
    {
      id: 'q27',
      type: 'test',
      question: 'En casa tienes instaladas 8 bombillas incandescentes de 60 W que están encendidas 5 horas al día. Si las cambias por LED de 8 W, ¿cuánta energía (en kWh) ahorras al día?',
      options: [
        { text: '2,08 kWh al día.', correct: true,
          feedback: '¡Correcto! Ahorro potencia: (60−8)×8 = 416 W = 0,416 kW. En 5 h: 0,416 × 5 = 2,08 kWh/día.' },
        { text: '0,32 kWh al día.', correct: false,
          feedback: 'Incorrecto. Calcula: ahorro por bombilla = 52 W, en 8 bombillas = 416 W. En 5 h = 2,08 kWh.' },
        { text: '24 kWh al día.', correct: false,
          feedback: 'Incorrecto. Ese sería un consumo exagerado. Revisa: 8 bombillas × 52 W ahorro × 5 h = 2 080 Wh = 2,08 kWh.' }
      ]
    },
    {
      id: 'q28',
      type: 'test',
      question: 'Un electricista conecta accidentalmente los dos cables de una pila directamente entre sí sin ningún receptor. ¿Qué ocurre?',
      options: [
        { text: 'No pasa nada, el circuito está completo.', correct: false,
          feedback: 'Incorrecto. Sin resistencia, la corriente que circula es enorme: se produce un cortocircuito.' },
        { text: 'Se produce un cortocircuito: corriente muy alta, calor excesivo, posible incendio.', correct: true,
          feedback: '¡Correcto! Sin resistencia R≈0, la intensidad I = V/R tiende a infinito. El calor puede fundir cables o provocar incendio.' },
        { text: 'La pila se carga más rápido.', correct: false,
          feedback: 'Incorrecto. Cortocircuitar una pila la descarga rápidamente y puede calentarse hasta explotar.' }
      ]
    },
    {
      id: 'q29',
      type: 'matching',
      question: 'Relaciona cada dispositivo de seguridad con su función:',
      pairs: [
        { left: 'Fusible',           right: 'Se funde si la corriente supera el límite' },
        { left: 'Interruptor diferencial', right: 'Detecta fugas de corriente a tierra' },
        { left: 'Toma de tierra',    right: 'Conduce la corriente peligrosa al suelo' },
        { left: 'Magnetotérmico',    right: 'Protege contra sobrecargas y cortocircuitos' }
      ]
    },
    {
      id: 'q30',
      type: 'test',
      question: '¿Por qué no debes tocar un enchufe con las manos mojadas?',
      options: [
        { text: 'Porque el agua estropea el plástico del enchufe.', correct: false,
          feedback: 'Incorrecto. El peligro no es para el enchufe sino para tu cuerpo.' },
        { text: 'Porque el agua (especialmente con sales) conduce la electricidad, aumentando el riesgo de electrocución.', correct: true,
          feedback: '¡Correcto! El agua pura es poco conductora, pero el agua corriente tiene sales y conduce bien. Tu cuerpo húmedo ofrece menos resistencia y la corriente puede fluir por él.' },
        { text: 'Porque el agua apaga el circuito y se puede romper el aparato.', correct: false,
          feedback: 'Incorrecto. El agua no apaga el circuito; al contrario, al ser conductora puede crear un camino peligroso a través de tu cuerpo.' }
      ]
    }
  ]
};
