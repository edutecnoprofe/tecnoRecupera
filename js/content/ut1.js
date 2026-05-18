// UT1 — Búsqueda de información en Internet
const UT1 = {
  id: 'ut1',
  title: 'Búsqueda de información en Internet',
  subtitle: 'Unidad 1',
  icon: '🔍',
  colorVar: '--ut1',

  theory: [
    {
      heading: '¿Distingue Google las mayúsculas y los acentos?',
      html: `<p>No. Google trata igual <code>Mariposa</code>, <code>mariposa</code> y <code>maripósa</code>.
      Tampoco le importan los errores ortográficos leves: intenta adivinar lo que quieres decir.
      Esto significa que puedes escribir con total naturalidad, sin preocuparte por tildes ni mayúsculas.</p>`
    },
    {
      heading: 'Operadores de búsqueda',
      html: `<p>Los <strong>operadores</strong> son palabras especiales que le dicen a Google <em>cómo</em> buscar:</p>
      <ul>
        <li><code>filetype:pdf</code> — busca solo archivos de ese formato (pdf, doc, xls…)</li>
        <li><code>define:palabra</code> — muestra la definición directamente</li>
        <li><code>"frase exacta"</code> — busca esa frase tal cual, sin variaciones</li>
        <li><code>site:web.com</code> — busca solo dentro de ese sitio web</li>
      </ul>
      <p>Se escriben pegados a la palabra clave, sin espacios después de los dos puntos.</p>`
    },
    {
      heading: 'Google como calculadora',
      html: `<p>Puedes escribir operaciones matemáticas directamente en la barra de búsqueda y Google las resuelve.
      Respeta el <strong>orden de operaciones</strong>: primero las multiplicaciones y divisiones, después las sumas y restas.
      Por ejemplo: <code>3 + 4*2</code> → Google calcula 4×2=8 primero, luego suma 3, resultado: <strong>11</strong>.</p>`
    }
  ],

  example: {
    title: '💡 Ejemplo resuelto',
    body: `<p>Quieres encontrar documentos PDF sobre energía solar renovable para un trabajo del instituto.
    Buscas videotutoriales pero solo te aparecen artículos. ¿Cómo lo filtras?</p>
    <div class="example-highlight">energía solar renovable filetype:pdf</div>
    <p style="margin-top:.75rem">Google mostrará <em>solo</em> archivos PDF que contengan esas palabras.
    Si además quieres buscar esa frase exacta: <code>"energía solar renovable" filetype:pdf</code></p>`
  },

  exercises: [
    {
      id: 'q1',
      type: 'test',
      question: '¿Qué diferencia hay entre buscar "Mariposa" y "mariposa" en Google?',
      options: [
        {
          text: 'Google distingue mayúsculas y muestra resultados distintos.',
          correct: false,
          feedback: 'Incorrecto. Google ignora las mayúsculas y los acentos, por lo que los resultados son los mismos.'
        },
        {
          text: 'No hay diferencia: Google ignora mayúsculas y acentos.',
          correct: true,
          feedback: '¡Correcto! Google no distingue entre mayúsculas, minúsculas ni acentos. Puedes escribir con total naturalidad.'
        },
        {
          text: 'Solo cambia si hay errores ortográficos graves.',
          correct: false,
          feedback: 'Incorrecto. Ni siquiera los errores ortográficos leves cambian los resultados: Google intenta entender lo que buscas.'
        }
      ]
    },
    {
      id: 'q2',
      type: 'test',
      question: 'Quieres encontrar archivos PDF sobre destornilladores. ¿Qué escribes en Google?',
      options: [
        {
          text: 'destornilladores PDF formato archivo',
          correct: false,
          feedback: 'Incorrecto. Escribir "PDF" como palabra no filtra por tipo de archivo. Hay que usar el operador correcto.'
        },
        {
          text: 'destornilladores filetype:pdf',
          correct: true,
          feedback: '¡Correcto! El operador <code>filetype:pdf</code> le indica a Google que solo muestre archivos PDF.'
        },
        {
          text: 'buscar:pdf destornilladores',
          correct: false,
          feedback: 'Incorrecto. "buscar:pdf" no existe como operador de Google. El correcto es <code>filetype:pdf</code>.'
        }
      ]
    },
    {
      id: 'q3',
      type: 'test',
      question: 'Escribes "3 + 4*2" en la barra de búsqueda de Google. ¿Cuál es el resultado?',
      options: [
        {
          text: '14 — porque 3+4=7 y luego 7×2=14',
          correct: false,
          feedback: 'Incorrecto. Eso sería calcular de izquierda a derecha. Google respeta el orden de operaciones: primero multiplicaciones.'
        },
        {
          text: '11 — porque primero 4×2=8, luego 3+8=11',
          correct: true,
          feedback: '¡Correcto! El orden de operaciones indica que la multiplicación va antes que la suma. 4×2=8, y 3+8=11.'
        },
        {
          text: 'Google no puede hacer cálculos matemáticos.',
          correct: false,
          feedback: 'Incorrecto. Google tiene una calculadora integrada que respeta el orden de operaciones matemáticas.'
        }
      ]
    },
    {
      id: 'q4',
      type: 'test',
      question: '¿Cómo obtienes la definición de la palabra "algoritmo" directamente desde Google, sin entrar en ninguna web?',
      options: [
        {
          text: 'algoritmo qué significa',
          correct: false,
          feedback: 'Incorrecto. Aunque puede dar buenos resultados, no es el operador específico de definición. Prueba con el operador exacto.'
        },
        {
          text: 'define:algoritmo',
          correct: true,
          feedback: '¡Correcto! El operador <code>define:</code> hace que Google muestre la definición del diccionario directamente en los resultados.'
        },
        {
          text: 'algoritmo diccionario RAE',
          correct: false,
          feedback: 'Incorrecto. Eso te llevaría a la web de la RAE, pero no es el operador de Google para definiciones.'
        }
      ]
    },
    {
      id: 'q5',
      type: 'matching',
      question: 'Relaciona cada operador de Google con su función:',
      pairs: [
        { left: 'filetype:pdf',      right: 'Buscar solo archivos en ese formato' },
        { left: 'define:',           right: 'Ver la definición de una palabra' },
        { left: '"entre comillas"',  right: 'Buscar la frase exacta' },
        { left: 'site:',             right: 'Buscar solo dentro de una web' }
      ]
    }
  ]
};
