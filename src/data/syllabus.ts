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
    description: "Conceptos básicos de estadística.",
    theory: [
      "La estadística se divide en descriptiva e inferencial. Para comenzar, es crucial entender dos conceptos: Población y Muestra.",
      "Población: Es el conjunto total de individuos, objetos o eventos que tienen las mismas características y sobre el que estamos interesados en obtener conclusiones. (Ej. Todos los estudiantes de preparatoria en México).",
      "Muestra: Es un subconjunto representativo seleccionado de la población. Debido a que es difícil estudiar a toda la población, analizamos la muestra para inferir resultados. (Ej. 500 estudiantes de diversas preparatorias)."
    ],
    quiz: [
      {
        id: "q1_1",
        question: "Si queremos conocer el promedio de calificaciones de todos los alumnos de nuevo ingreso en una universidad y analizamos las calificaciones de 100 alumnos elegidos al azar, ¿qué representa el grupo de 100 alumnos?",
        options: ["Población", "Muestra", "Variable", "Dato atípico"],
        correctAnswer: 1,
        explanation: "Correcto. Como solo se analizó una parte del total (100 alumnos), esta representa una muestra."
      }
    ]
  },
  {
    id: 2,
    title: "Tipos de Variables",
    description: "Cualitativas y cuantitativas.",
    theory: [
      "Una variable estadística es una característica que puede fluctuar y cuya variación es susceptible de adoptar diferentes valores.",
      "Variables Cualitativas (Categóricas): Expresan cualidades, características o modalidades. Ejemplos: Color de ojos, estado civil, tipo de sangre. Se dividen en Ordinales (tienen un orden natural, como el grado escolar) y Nominales (sin orden, como el color favorito).",
      "Variables Cuantitativas (Numéricas): Se expresan mediante cantidades numéricas. Se dividen en Discretas (toman valores enteros, ej. número de hijos) y Continuas (toman valores infinitos en un intervalo, ej. peso o altura, 65.5 kg)."
    ],
    quiz: [
      {
        id: "q2_1",
        question: "¿Qué tipo de variable es 'el número de goles marcados en un partido de fútbol'?",
        options: ["Cualitativa nominal", "Cualitativa ordinal", "Cuantitativa continua", "Cuantitativa discreta"],
        correctAnswer: 3,
        explanation: "Correcto. Es una variable cuantitativa (números) y discreta porque solo puedes marcar enteros (0, 1, 2 goles, no 1.5 goles)."
      }
    ]
  },
  {
    id: 3,
    title: "Frecuencias",
    description: "Absoluta, relativa, acumulada...",
    theory: [
      "Las frecuencias nos ayudan a organizar los datos para ver cómo se distribuyen.",
      "Frecuencia Absoluta (f): Es el número de veces que aparece un determinado valor en un estudio estadístico.",
      "Frecuencia Relativa (fr): Es el cociente entre la frecuencia absoluta y el tamaño de la muestra (N). fr = f / N. A menudo se expresa como Porcentaje (fr * 100%).",
      "Frecuencia Acumulada (F): Es la suma de las frecuencias absolutas de todos los valores inferiores o iguales al valor considerado."
    ],
    quiz: [
      {
        id: "q3_1",
        question: "En una clase de 20 alumnos, 5 sacaron 10 de calificación. ¿Cuál es la frecuencia relativa (en porcentaje) de alumnos que sacaron 10?",
        options: ["5%", "20%", "25%", "50%"],
        correctAnswer: 2,
        explanation: "Correcto. La frecuencia relativa es 5 / 20 = 0.25, que multiplicado por 100 da 25%."
      }
    ]
  },
  {
    id: 4,
    title: "Gráficos Estadísticos",
    description: "Tabulares y representación visual",
    theory: [
      "Una vez organizadas las frecuencias en Tablas (Representación tabular), se pueden visualizar mediante gráficos.",
      "Gráfico de Barras: Se usa para variables cualitativas o cuantitativas discretas. Cada barra representa una categoría.",
      "Histograma: Se usa para variables continuas, agrupadas en intervalos (clases). Las barras están juntas.",
      "Gráfico Circular (Pastel): Útil para representar proporciones o porcentajes de un total (frecuencias relativas)."
    ],
    quiz: [
      {
        id: "q4_1",
        question: "¿Qué tipo de gráfico es el más adecuado para representar la distribución del 'tipo de sangre' de los donantes en un hospital?",
        options: ["Histograma de frecuencias", "Gráfico circular o de barras", "Polígono de frecuencias", "Diagrama de dispersión"],
        correctAnswer: 1,
        explanation: "Correcto. El tipo de sangre es una variable cualitativa nominal. Un gráfico de pastel o de barras es ideal para mostrar proporciones o conteos absolutos."
      }
    ]
  },
  {
    id: 5,
    title: "Medidas Centrales",
    description: "Media, Mediana y Moda",
    theory: [
      "Buscan resumir en un solo número el 'centro' de un conjunto de datos.",
      "Media (Promedio): Es la suma de todos los datos dividida entre el total de datos. (Ej. Calificaciones del semestre).",
      "Mediana: Es el valor que ocupa el lugar central de todos los datos cuando estos están ordenados de menor a mayor. Si los datos son un número par, es el promedio de los dos centrales.",
      "Moda: Es el valor que más se repite, es decir, el que tiene mayor frecuencia absoluta. Puede haber más de una moda."
    ],
    quiz: [
      {
        id: "q5_1",
        question: "Calcula la mediana de los siguientes datos: 10, 15, 12, 18, 14",
        options: ["14", "13.8", "12", "15"],
        correctAnswer: 0,
        explanation: "Correcto. Ordenando los datos: 10, 12, 14, 15, 18. El valor central es el tercero: 14."
      }
    ]
  },
  {
    id: 6,
    title: "Medidas de Dispersión",
    description: "Varianza y Desviación Estándar",
    theory: [
      "Indican qué tan separados o dispersos están los datos con respecto a la media.",
      "Varianza (σ² o s²): Es el promedio de las diferencias al cuadrado entre cada dato y la media. Al estar al cuadrado, la unidad de medida no es la original.",
      "Desviación Estándar (σ o s): Es la raíz cuadrada de la varianza. Esta medida sí está en las mismas unidades que los datos originales y nos dice, en promedio, qué tan alejados están los datos de la media."
    ],
    quiz: [
      {
        id: "q6_1",
        question: "Si la varianza de un conjunto de estaturas es de 25 cm², ¿cuál es su desviación estándar?",
        options: ["625 cm", "12.5 cm", "5 cm", " No se puede saber"],
        correctAnswer: 2,
        explanation: "Correcto. La desviación estándar es la raíz cuadrada de la varianza. √25 = 5 cm."
      }
    ]
  },
  {
    id: 7,
    title: "Percentiles",
    description: "Medidas de posición no central",
    theory: [
      "Los percentiles dividen una serie de datos ordenados en 100 partes iguales.",
      "Por ejemplo, el percentil 50 (P50) es exactamente igual a la mediana, ya que deja el 50% de los datos por debajo y el 50% por encima.",
      "El percentil 25 (P25) coincide con el Primer Cuartil (Q1) y el percentil 75 (P75) con el Tercer Cuartil (Q3).",
      "Son muy útiles en exámenes estandarizados. 'Estar en el percentil 90' significa que tu puntaje fue superior al 90% de los evaluados."
    ],
    quiz: [
      {
        id: "q7_1",
        question: "Si en el EXANI-II obtienes una calificación que te ubica en el percentil 85 de todos los aspirantes, ¿qué significa esto?",
        options: [
          "Que contestaste bien el 85% del examen.",
          "Que superaste al 85% de los aspirantes.",
          "Que reprobaste el examen.",
          "Que estás en el top 85."
        ],
        correctAnswer: 1,
        explanation: "Correcto. El percentil indica el porcentaje de datos que quedan por debajo de tu valor. Un P85 significa que tu puntaje es mayor al del 85% de los participantes."
      }
    ]
  },
  {
    id: 8,
    title: "Espacio Muestral",
    description: "Eventos y Teoría de Conjuntos",
    theory: [
      "Entramos a Probabilidad. Un 'experimento aleatorio' es aquel cuyo resultado no puede predecirse con certeza (ej. lanzar un dado).",
      "Espacio Muestral (S o Ω): Es el conjunto de todos los resultados posibles de un experimento aleatorio. Para un dado: S = {1, 2, 3, 4, 5, 6}. Su cardinalidad (número de elementos) es 6.",
      "Evento o Suceso (A, B...): Es cualquier subconjunto del espacio muestral. Ej. Evento A = 'Sacar número par' = {2, 4, 6}.",
      "Teoría de conjuntos: Unión (A U B, que pase A o B), Intersección (A ∩ B, que pasen ambos a la vez) y Complemento (A', que no pase A)."
    ],
    quiz: [
      {
        id: "q8_1",
        question: "Al lanzar dos monedas distintas al aire, ¿cuál es la cardinalidad de su espacio muestral?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 1,
        explanation: "Correcto. Las combinaciones son: (Águila, Águila), (Águila, Sol), (Sol, Águila), (Sol, Sol). En total 4."
      }
    ]
  },
  {
    id: 9,
    title: "Técnicas de Conteo",
    description: "Permutaciones y Combinaciones",
    theory: [
      "A veces el espacio muestral es tan grande que no podemos listar todo. Usamos técnicas de conteo.",
      "Principio multiplicativo: Si un evento ocurre de 'm' formas y otro de 'n' formas, juntos ocurren de m × n formas.",
      "Permutaciones (Importa el orden): Formas de ordenar 'r' de 'n' objetos distintivos. P(n,r) = n! / (n-r)!. Ej. Otorgar oro, plata y bronce a 10 corredores.",
      "Combinaciones (No importa el orden): Formas de elegir 'r' elementos de 'n'. C(n,r) = n! / (r! (n-r)!). Ej. Formar un comité de 3 personas de entre 10."
    ],
    quiz: [
      {
        id: "q9_1",
        question: "¿De cuántas formas se puede elegir a un presidente, un secretario y un tesorero de un grupo de 5 personas?",
        options: ["15", "60", "120", "10"],
        correctAnswer: 1,
        explanation: "Correcto. Importa el orden (los puestos son distintos). Es una permutación de 5 en 3: 5 * 4 * 3 = 60."
      }
    ]
  },
  {
    id: 10,
    title: "Axiomas de Prob.",
    description: "Reglas de la probabilidad clásica",
    theory: [
      "La probabilidad es una medida de la certeza de que ocurra un evento.",
      "Regla de Laplace: Probabilidad(A) = (Resultados favorables) / (Casos totales posibles).",
      "Axioma 1: La probabilidad siempre es un valor entre 0 y 1 (0 ≤ P(A) ≤ 1). Un evento imposible tiene probabilidad 0 y un evento seguro 1.",
      "Axioma 2: P(Espacio Muestral) = 1.",
      "Axioma 3: Si dos eventos A y B son mutuamente excluyentes (no pueden ocurrir al mismo tiempo), entonces P(A U B) = P(A) + P(B)."
    ],
    quiz: [
      {
        id: "q10_1",
        question: "Si lanzo un dado, ¿cuál es la probabilidad de que NO salga un 3?",
        options: ["1/6", "5/6", "6/6", "0"],
        correctAnswer: 1,
        explanation: "Correcto. Sacar 3 tiene probabilidad 1/6. Su evento complementario (no sacar 3) tiene probabilidad 1 - 1/6 = 5/6."
      }
    ]
  },
  {
    id: 11,
    title: "Distribuciones",
    description: "Tipos de distribuciones de probabilidad",
    theory: [
      "Una distribución describe cómo se reparten las probabilidades de los posibles resultados.",
      "Distribución Binomial: Para eventos con solo dos resultados posibles (éxito/fracaso), que se repiten 'n' veces de forma independiente.",
      "Distribución Normal (Campana de Gauss): La más importante para variables continuas. Simétrica alrededor de la media y la moda. El 68% de los datos caen a menos de 1 desviación estándar de la media.",
      "Distribución de Poisson: Útil para modelar el número de veces que ocurre un evento en un intervalo de tiempo o espacio (ej. número de clientes que llegan en 1 hora)."
    ],
    quiz: [
      {
        id: "q11_1",
        question: "¿Qué distribución de probabilidad se representa con la típica 'campana de Gauss'?",
        options: ["Binomial", "Poisson", "Normal", "Exponencial"],
        correctAnswer: 2,
        explanation: "Correcto. La distribución Normal es asintótica y simétrica, gráficamente se conoce como Campana de Gauss."
      }
    ]
  },
  {
    id: 12,
    title: "Simulador Final",
    description: "Autoevaluación tipo EXANI-II",
    theory: [
      "Has terminado toda la currícula y estás listo para poner a prueba tus conocimientos en un simulador real.",
      "Recordatorio antes del examen:",
      "- En probabilidad clásica lee siempre todas las opciones.",
      "- En estadística fíjate bien si te piden varianza (cuadrada) o la desviación.",
      "- En técnicas de conteo pregúntate primero: ¿Importa el orden?",
      "¡Mucho éxito!"
    ],
    quiz: [
      {
        id: "ex_1",
        question: "Cálcula la media de los siguientes datos: 15, 22, 13, 17, 12, 16, 21, 22, 11, 26, 23 (Ejemplo oficial EXANI-II)",
        options: ["16", "17", "18", "19"],
        correctAnswer: 2,
        explanation: "Correcto. La suma de los datos es 198, que dividido entre 11 (número total de datos) es 18."
      },
      {
        id: "ex_2",
        question: "De una población de 50 alumnos, se desea elegir un comité formado por 1 presidente, 1 vicepresidente y 1 vocal. ¿Cuál técnica usarás?",
        options: ["Probabilidad Binomial", "Combinaciones", "Permutaciones", "Ley de los grandes números"],
        correctAnswer: 2,
        explanation: "Correcto. Ya que los roles (presidente vs vocal) son distintos e importa el orden, requiere Permutaciones."
      }
    ]
  }
];
