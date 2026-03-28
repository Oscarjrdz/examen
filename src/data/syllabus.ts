export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type Level = {
  id: number;
  title: string;
  description: string;
  theory: string[];
  quiz: QuizQuestion[];
};

export const syllabus: Level[] = [
  {
    id: 1,
    title: "Población y Muestra",
    description: "Conceptos fundamentales",
    theory: [
      "El EXANI-II se basa estrictamente en la bibliografía de Mendenhall y Garza Olvera. La base de la estadística descriptiva requiere diferenciar dos conceptos universales:",
      "Población (N): Es el conjunto TOTAL de elementos a estudiar. Ejemplo: Todos los votantes registrados en un país. Estudiarla completa se llama 'Censo'.",
      "Muestra (n): Es un subconjunto REPRESENTATIVO de la población. Se usa cuando estudiar a toda la población es caro o imposible. Ejemplo: Encuestar a 1,000 votantes al azar."
    ],
    quiz: [
      {
        id: "q_1_1",
        question: "Una investigadora quiere conocer el nivel de estrés de los médicos en México. Para ello, selecciona a 300 médicos de distintos hospitales del país. ¿Qué concepto estadístico representan los 300 médicos?",
        options: ["Población", "Muestra", "Variable de estudio"],
        correctAnswer: 1,
        explanation: "Correcto. Como los 300 médicos son solo una parte seleccionada del total (todos los médicos en México), representan una muestra representativa."
      },
      {
        id: "q_1_2",
        question: "En una fábrica de focos se revisa la calidad de 50 piezas de cada lote de 10,000 focos que se produce. ¿Qué representa el lote entero de 10,000 focos?",
        options: ["Censo", "Muestra", "Población"],
        correctAnswer: 2,
        explanation: "Correcto. El lote total del cual se extraen las piezas a revisar es la Población."
      }
    ]
  },
  {
    id: 2,
    title: "Tipos de Variables",
    description: "Cualitativas y cuantitativas",
    theory: [
      "Seguro vendrá al menos un reactivo de este tema. Una variable estadística es la característica que estamos midiendo.",
      "Variables Cualitativas (Letras o cualidades): No se pueden medir numéricamente. \n• Nominales: No hay orden (Ej. Color de piel, Estado civil).\n• Ordinales: Hay un orden jerárquico (Ej. Nivel de estudios: básico, medio, superior).",
      "Variables Cuantitativas (Números): \n• Discretas: Valores enteros, se 'cuentan' (Ej. Número de hijos: 1, 2, no puedes tener 1.5). \n• Continuas: Valores con decimales, se 'miden' (Ej. Peso: 65.4 kg, Tiempo: 12.3 seg)."
    ],
    quiz: [
      {
        id: "q_2_1",
        question: "¿Qué tipo de variable es 'la cantidad de goles que anota un equipo de fútbol en un torneo'?",
        options: ["Cuantitativa discreta", "Cuantitativa continua", "Cualitativa ordinal"],
        correctAnswer: 0,
        explanation: "Correcto. Los goles se cuentan en enteros (1, 2, 3 goles). No existen los goles decimales o medios goles, por lo que es cuantitativa discreta."
      },
      {
        id: "q_2_2",
        question: "Se clasifica una encuesta de satisfacción en: 'Muy malo', 'Malo', 'Regular', 'Bueno', 'Excelente'. Esta variable es...",
        options: ["Cualitativa nominal", "Cualitativa ordinal", "Cuantitativa discreta"],
        correctAnswer: 1,
        explanation: "Correcto. Al tratarse de categorías que expresan una cualidad, y que tienen un orden lógico implícito, se trata de una variable cualitativa ordinal."
      }
    ]
  },
  {
    id: 3,
    title: "Frecuencias",
    description: "Agrupación de datos",
    theory: [
      "Para organizar los datos utilizamos tablas de frecuencias.",
      "• Frecuencia Absoluta (f): El conteo total de las veces que aparece un dato.",
      "• Frecuencia Relativa (fr): Es la división de la frecuencia absoluta entre el número total de datos (f/n). A menudo se expresa en porcentaje multiplicándola por 100.",
      "• Frecuencia Acumulada (F): Consiste en ir sumando progresivamente las frecuencias absolutas desde el primer dato hasta el último."
    ],
    quiz: [
      {
        id: "q_3_1",
        question: "En una encuesta a 50 personas sobre su mascota, 10 tienen gato y 40 tienen perro. ¿Cuál es la frecuencia relativa en porcentaje de las personas con gato?",
        options: ["10%", "20%", "40%"],
        correctAnswer: 1,
        explanation: "Correcto. La frecuencia relativa se calcula dividiendo la frecuencia absoluta (10 gatos) entre el total (50). 10 / 50 = 0.20, lo cual equivale al 20%."
      }
    ]
  },
  {
    id: 4,
    title: "Gráficos Estadísticos",
    description: "Visualización de frecuencias",
    theory: [
      "Cada tipo de variable requiere un gráfico específico según Lipschutz y Ceneval:",
      "Gráfico de Barras: Se usa siempre para variables Cualitativas o Cuantitativas Descretas. Las barras tienen separaciones.",
      "Histograma: Exclusivísimo para variables Cuantitativas Continuas organizadas por intervalos de clase (como rangos de edad de 10-15, 15-20). Las barras van pegadas entre sí.",
      "Gráfico de Pastel (Circular): Ideal para mostrar las frecuencias relativas (porcentajes) de un todo."
    ],
    quiz: [
      {
        id: "q_4_1",
        question: "¿Qué gráfico usarías para representar los pesos exactos (variable continua) de 2,000 estudiantes de nuevo ingreso agrupados en rangos de 5 kg?",
        options: ["Histograma", "Gráfica de barras", "Polígono de frecuencias absolutas"],
        correctAnswer: 0,
        explanation: "Correcto. Para datos cuantitativos continuos que están estrechamente unidos o agrupados en rangos (15 a 20 kilos), el Histograma es obligatorio."
      }
    ]
  },
  {
    id: 5,
    title: "Medidas Centrales",
    description: "Media, Mediana y Moda",
    theory: [
      "Conocidas como medidas de tendencia central.",
      "La Media (x̄ o Promedio): Se calcula sumando todos los datos numéricos y dividiendo entre el total de observaciones. (Cuidado: es muy sensible a datos atípicos extremos, un '0' baja todo el promedio).",
      "La Mediana (Me): Es literalmente el dato del centro cuando los ordenas de menor a mayor. Si tienes datos pares (ej. 4 datos), sumas los dos del centro y sacas tú promedio.",
      "La Moda (Mo): Simplemente el valor que más se repite. (Puede haber series 'bimodales' si hay 2 que se repiten lo mismo)."
    ],
    quiz: [
      {
        id: "q_5_1",
        question: "En el examen de la guía oficial de Ceneval te piden calcular la Media de: 15, 22, 13, 17, 12, 16, 21, 22, 11, 26, 23. ¿Cuál es el resultado?",
        options: ["17", "18", "22"],
        correctAnswer: 1,
        explanation: "Correcto. Si sumas los 11 valores (total 198) y los divides entre 11, el resultado exacto es 18."
      },
      {
        id: "q_5_2",
        question: "Calcula la mediana del siguiente conjunto ordenado: 10, 11, 14, 18.",
        options: ["11", "14", "12.5"],
        correctAnswer: 2,
        explanation: "Correcto. Al ser 4 datos (número par), identificamos los dos del centro que son 11 y 14. Su promedio es (11 + 14) / 2 = 12.5."
      }
    ]
  },
  {
    id: 6,
    title: "Dispersión",
    description: "Varianza y Desviación Estándar",
    theory: [
      "Las medidas de dispersión nos dicen si los datos están muy juntos o muy separados entre sí.",
      "Varianza (σ²): Mide la dispersión elevando al cuadrado las diferencias entre cada dato y la media. Como está al cuadrado, NO nos sirve para interpretarlo directamente en el problema base (Ej. pesos al cuadrado).",
      "Desviación Estándar (σ): ¡Es la favorita del examen! Es simplemente la RAÍZ CUADRADA de la Varianza. Significa el promedio general de qué tan alejados están los datos respecto a su Media (promedio)."
    ],
    quiz: [
      {
        id: "q_6_1",
        question: "Un grupo de científicos calcula que la varianza del crecimiento poblacional de bacterias es de 144 cm². ¿Cuál será su desviación estándar?",
        options: ["12 cm", "72 cm", "144 cm"],
        correctAnswer: 0,
        explanation: "Correcto. La desviación estándar siempres es la raíz cuadrada de la varianza. La raíz de 144 es 12."
      }
    ]
  },
  {
    id: 7,
    title: "Percentiles",
    description: "Posiciones relativas",
    theory: [
      "Los percentiles y cuartiles (Medidas de Posición) te ayudan a saber en qué porcentaje un dato supera al resto de la distribución.",
      "Si la lista de calificaciones se divide en 100 partes iguales, el Percentil 50 (P50) es exactamente el medio. Esto significa que el Percentil 50 ES LO MISMO QUE LA MEDIANA.",
      "El Primer Cuartil (Q1) es equivalente al Percentil 25. El Tercer Cuartil (Q3) al Percentil 75.",
      "Nota para tu examen: Obtener el percentil 92 de aciertos significa que fuiste mejor que el 92% de los aspirantes."
    ],
    quiz: [
      {
        id: "q_7_1",
        question: "Durante tu EXANI-II, si obtienes un puntaje que te ubica justo en el Segundo Cuartil (Q2), ¿con qué medida coincide esto exactamente?",
        options: ["Mediana", "Percentil 25", "Media o Promedio"],
        correctAnswer: 0,
        explanation: "Correcto. Q1 = 25%, Q2 = 50%, Q3 = 75%. Como el Q2 corresponde al 50%, representa y equivale exactamente al valor de la Mediana."
      }
    ]
  },
  {
    id: 8,
    title: "Conjuntos",
    description: "Espacio muestral y cardinalidad",
    theory: [
      "¡Entramos al módulo de 12 reactivos de Probabilidad! El concepto base es el 'Experimento Aleatorio' (tirar dados, monedas...).",
      "Espacio Muestral (S o Ω): Es el conjunto TOTAL de TODOS los resultados posibles de dicho experimento.",
      "Cardinalidad (n): El simple conteo del número elementos del espacio. Al lanzar una moneda, S = {Cara, Cruz}, y su Cardinalidad n(S) = 2.",
      "Teoría de Conjuntos:\n• Unión (A ∪ B): Todos los elementos de A y de B juntos.\n• Intersección (A ∩ B): SOLO los elementos que están en A y B al MINSMO tiempo.\n• Complemento (A'): Lo que le falta a A para ser el espacio entero."
    ],
    quiz: [
      {
        id: "q_8_1",
        question: "Diga la cardinalidad del espacio muestral al lanzar un dado normal de seis caras.",
        options: ["1", "6", "36"],
        correctAnswer: 1,
        explanation: "Correcto. El Espacio Muestral es {1, 2, 3, 4, 5, 6}, contando los elementos vemos que su tamaño o cardinalidad es de 6."
      },
      {
        id: "q_8_2",
        question: "En un experimento se tiene la urna A = {1, 2, 3} y la urna B = {3, 4, 5}. ¿Cuál es la intersección (A ∩ B)?",
        options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}"],
        correctAnswer: 1,
        explanation: "Correcto. La intersección significa 'elemento en común en ambos conjuntos al mismo tiempo', que en este caso es solo el número 3."
      }
    ]
  },
  {
    id: 9,
    title: "Conteo y Factoriales",
    description: "Permutaciones vs Combinaciones",
    theory: [
      "Cuando los espacios muestrales son de miles de posibilidades usamos Factoriales (!). El factorial de n (n!) es multiplicar: 4! = 4x3x2x1 = 24.",
      "TRUCO EXANI: Siempre pregúntate si '¿Importa el orden?'.",
      "PERMUTACIONES (SÍ importa el orden): Sirven para armar claves, contraseñas, sillas en línea, premiaciones (1er, 2do y 3er lugar).",
      "COMBINACIONES (NO importa el orden): Sirven para licuados de frutas, conformar comités, equipos, tomar cartas aleatorias. (Tener a Juan y Pedro en tu equipo es igual a tener a Pedro y Juan)."
    ],
    quiz: [
      {
        id: "q_9_1",
        question: "Un entrenador quiere tomar del banquillo de 8 jugadores, a 2 para formar una barrera en un tiro libre. ¿Es combinación o permutación?",
        options: ["Permutación, porque hay jerarquías.", "Combinación, porque el orden no importa.", "Ninguna, aplica teorema de Bayes."],
        correctAnswer: 1,
        explanation: "Correcto. Al formar una barrera el jugador A a la derecha y B a la izquierda es la misma barrera formada por las mismas dos personas. Es una Combinación."
      },
      {
        id: "q_9_2",
        question: "Se va a elegir al Gerente y al Sub-Gerente general de la planta donde trabajan 15 personas. Para saber las formas en hacerlo usamos...",
        options: ["Una Combinación", "Una Permutación", "Una Distribución normal"],
        correctAnswer: 1,
        explanation: "Correcto. Los cargos son distintos, así que el orden SÍ importa (ser gerente no es lo mismo que subgerente). Usamos Permutación."
      }
    ]
  },
  {
    id: 10,
    title: "Axiomas de L.",
    description: "Las 3 leyes inquebrantables",
    theory: [
      "La probabilidad P(A) de que suceda un evento de calculará (Regla de Laplace) al divdir Casos Favorables entre Casos Totales.",
      "Reglas de Kolmogorov o Axiomas (memorízalas porque de esto sale mucha teoría):",
      "1. La probabilidad P(A) SIEMPRE debe ser entre 0 y 1. Un evento imposible = 0. Un evento seguro = 1. Jamás existirá probabilidad negativa ni mayor a 1 (o mayor a 100%).",
      "2. La probabilidad de todo tu Espacio muestral (que suceda cualquier cosa) es exactamente 1 o 100%.",
      "3. Si dos eventos no pueden suceder al mismo tiempo (Excluyentes: ej. sacar águila y sol en 1 volado al mismo tiempo), la probabilidad se suma."
    ],
    quiz: [
      {
        id: "q_10_1",
        question: "Al hacer los cálculos de su examen en un ejercicio, un aspirante encuentra que la Probabilidad de un evento F es de 1.15. ¿Qué significa esto?",
        options: ["Es altamente probable que el evento suceda.", "El evento será un éxito rotundo.", "El cálculo está mal, viola el primer axioma."],
        correctAnswer: 2,
        explanation: "Correcto. La probabilidad P(A) JAMÁS puede exceder el número 1. Si los cálculos arrojan valores como 1.15, se realizó algo de manera incorrecta."
      }
    ]
  },
  {
    id: 11,
    title: "Distribuciones",
    description: "Normal, Binomial y Poisson",
    theory: [
      "Según Garza Olvera, necesitas identificar de lejos de qué modelo hablas para no equivocarte de fórmula:",
      "• Distribución Binomial: Cuando UN MISMO ensayo se repite 'n' veces y ÚNICAMENTE hay 2 resultados posibles: Éxito o Fracaso. (Ej. Vender o no el producto, nacer niño o niña en 10 embarazos).",
      "• Distribución Poisson: Mide la ocurrencia de eventos raros en UN RANGO de TIEMPO o ESPACIO específico. (Ej. # de accidentes en la Av. Juárez en 1 semana).",
      "• Distribución Normal: Famosa Campana de Gauss. Se usa en variables continuas (como peso, altura, CI). Aquí, la Moda, Media y Mediana valen exactamente lo mismo en el centro."
    ],
    quiz: [
      {
        id: "q_11_1",
        question: "A un hospital general llegan en promedio un flujo de 3 pacientes con rotura de ligamentos diarios. Te piden calcular la probabilidad de que lleguen 5 en un día. ¿Qué distribución es?",
        options: ["Distribución Binomial", "Distribución de Poisson", "Distribución de T de Student"],
        correctAnswer: 1,
        explanation: "Correcto. Al indicarse sucesos por un bloque temporal constante (diariamente o 'en un día'), se debe usar la de Poisson (lambda)."
      },
      {
        id: "q_11_2",
        question: "Característica clave de la Distribución Normal en su gráfica (Campana de Gauss):",
        options: ["La media, la mediana y la moda coinciden al centro.", "Los datos sólo toman valores discretos (enteros).", "Tienen probabilidad siempre negativa."],
        correctAnswer: 0,
        explanation: "Correcto. En la distribución normal estándar la curva es 100% simétrica, por lo cual coinciden media, moda y mediana en su cúspide."
      }
    ]
  },
  {
    id: 12,
    title: "EXANI-II Sim.",
    description: "Simulador definitivo de 3 opciones",
    theory: [
      "¡Felicidades por llegar al Simulador Final del EXANI-II!",
      "Hemos validado toda la arquitectura de tus conocimientos, siguiendo los lineamientos de los manuales de PEARSON, McGraw Hill y CENGAGE Learning que dicta el Ceneval.",
      "Recuerda: El examen real solo incluirá opciones de respuesta A, B, y C. Lee tu pregunta con atención, respira hondo y aplica la lógica que te ha traído hasta acá.",
      "¡Demuestra que esa plaza en la licenciatura ya es tuya!"
    ],
    quiz: [
      {
        id: "q_12_1",
        question: "¿De cuántas maneras diferentes se pueden sentar 5 personas en 5 asientos disponibles en la primera fila de un cine?",
        options: ["120 formas", "25 formas", "5 formas"],
        correctAnswer: 0,
        explanation: "Correcto. Importa el orden, al sentarse una, la siguiente silla solo tiene 4 lugares posibles (Permutación o 5!): 5 x 4 x 3 x 2 x 1 = 120."
      },
      {
        id: "q_12_2",
        question: "Determina cuál es la Moda del siguiente conjunto de colores elegidos por alumnos: {Rojo, Verde, Azul, Verde, Negro, Amarillo, Verde, Rojo}.",
        options: ["Azul", "Rojo", "Verde"],
        correctAnswer: 2,
        explanation: "Correcto. La moda es el dato de mayor frecuencia absoluta. 'Verde' aparece 3 veces, siendo la más alta."
      },
      {
        id: "q_12_3",
        question: "Al lanzar dos dados legales, ¿cuál es el número total de resultados que componen nuestro espacio muestral? \n(Principio multiplicativo)",
        options: ["6", "12", "36"],
        correctAnswer: 2,
        explanation: "Correcto. Dado 1 tiene 6 resultados. Dado 2 tiene 6 resultados. Por principio multiplicativo: 6 x 6 = 36 respuestas diferentes."
      }
    ]
  }
];
