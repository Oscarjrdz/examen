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
  quizOrange?: QuizQuestion[];
  quizPurple?: QuizQuestion[];
};

export type Subject = {
  id: string;
  title: string;
  description: string;
  levels: Level[];
};

import { transversales } from './syllabus-transversales';

export const subjects: Subject[] = [
  {
    id: "probabilidad",
    title: "Probabilidad y Estadística",
    description: "Estadística, Población, Conjuntos, Normal, etc.",
    levels: [
      {
        id: 1,
        title: "Población y Muestra",
        description: "Conceptos fundamentales",
        theory: [
          "El EXANI-II se basa estrictamente en la bibliografía de Mendenhall y Garza Olvera. La estadística descriptiva requiere diferenciar dos conceptos:",
          "Población (N): Conjunto TOTAL de elementos a estudiar. Estudiarla completa se llama 'Censo'.",
          "Muestra (n): Subconjunto REPRESENTATIVO de la población. Se usa cuando estudiar a toda la población es costoso."
        ],
        quiz: [
          {
            id: "q_1_1",
            question: "Una investigadora quiere conocer el nivel de estrés de los médicos en México. Para ello, selecciona a 300 médicos. ¿Qué concepto representan los 300 médicos?",
            options: ["Población", "Muestra", "Variable de estudio"],
            correctAnswer: 1,
            explanation: "Correcto. Los 300 médicos son solo una parte seleccionada del total, representan una muestra."
          }
        ],
        quizOrange: [
          {
            id: "q_1_2",
            question: "Nivel Naranja: Si un hospital tiene 10,000 médicos y tomamos a 50 de ellos que trabajan doble turno para un estudio, ¿qué afirmación es correcta?",
            options: ["Los 10,000 médicos son la muestra.", "Los 50 médicos son una población representativa.", "Los 50 médicos son la muestra del estudio."],
            correctAnswer: 2,
            explanation: "Correcto. El subconjunto seleccionado para el escrutinio se denomina Muestra."
          }
        ],
        quizPurple: [
          {
            id: "q_1_3",
            question: "Nivel Morado: En una investigación exhaustiva (censo) sobre la demografía de un país entero, ¿cuál es la relación entre la muestra (n) y la población (N)?",
            options: ["El tamaño de 'n' es igual a 'N' ya que se estudia a todos.", "El tamaño de 'n' debe ser la mitad de 'N'.", "Al hacer un censo, la población desaparece y se convierte en variable."],
            correctAnswer: 0,
            explanation: "Correcto. Como en un censo se entrevista a TODOS los elementos, la muestra es del mismo tamaño que la población entera."
          }
        ]
      },
      {
        id: 2,
        title: "Tipos de Variables",
        description: "Cualitativas y cuantitativas",
        theory: [
          "Variables Cualitativas (Cualidades): No se miden numéricamente. Nominales (sin orden, ej: Color) y Ordinales (con orden, ej: Nivel de estudios).",
          "Variables Cuantitativas (Números): Discretas (se cuentan en enteros, ej: Goles) y Continuas (se miden con decimales, ej: Peso, Tiempo)."
        ],
        quiz: [
          {
            id: "q_2_1",
            question: "¿Qué tipo de variable es 'la cantidad de goles que anota un equipo de fútbol en un torneo'?",
            options: ["Cuantitativa discreta", "Cuantitativa continua", "Cualitativa ordinal"],
            correctAnswer: 0,
            explanation: "Correcto. Los goles se cuentan en enteros (1, 2, 3). No existen medios goles."
          }
        ]
      },
      {
        id: 3,
        title: "Frecuencias",
        description: "Agrupación de datos",
        theory: [
          "Frecuencia Absoluta (f): El conteo total de veces que aparece un dato.",
          "Frecuencia Relativa (fr): Es la división de la frecuencia absoluta entre el número total de datos (f/n). A menudo en porcentaje (x100).",
          "Frecuencia Acumulada (F): Consiste en ir sumando progresivamente las frecuencias absolutas."
        ],
        quiz: [
          {
            id: "q_3_1",
            question: "En una encuesta a 50 personas sobre su mascota, 10 tienen gato. ¿Cuál es la frecuencia relativa en porcentaje de personas con gato?",
            options: ["10%", "20%", "40%"],
            correctAnswer: 1,
            explanation: "Correcto. Frecuencia relativa = (10 / 50) = 0.20, lo cual equivale al 20%."
          }
        ]
      },
      {
        id: 4,
        title: "Gráficos Estadísticos",
        description: "Visualización de frecuencias",
        theory: [
          "Gráfico de Barras: Se usa para variables Cualitativas o Cuantitativas Descretas. Las barras tienen separaciones.",
          "Histograma: Exclusivo para variables Cuantitativas Continuas organizadas por intervalos de clase. Las barras van pegadas.",
          "Gráfico de Pastel: Ideal para porcentajes."
        ],
        quiz: [
          {
            id: "q_4_1",
            question: "¿Qué gráfico usarías para representar pesos exactos (variable continua) de estudiantes agrupados en rangos de 5 kg?",
            options: ["Histograma", "Gráfica de barras", "Polígono de frecuencias absolutas"],
            correctAnswer: 0,
            explanation: "Correcto. Para continuas agrupadas en rangos, el Histograma es obligatorio."
          }
        ]
      },
      {
        id: 5,
        title: "Medidas Centrales",
        description: "Media, Mediana y Moda",
        theory: [
          "Media (Promedio): Suma de datos dividida entre el total. (Sensible a datos atípicos).",
          "Mediana (Me): Dato del centro ordenando de menor a mayor. Forma un promedio si son pares.",
          "Moda (Mo): Valor que más se repite."
        ],
        quiz: [
          {
            id: "q_5_1",
            question: "Calcula la mediana del siguiente conjunto ordenado: 10, 11, 14, 18.",
            options: ["11", "14", "12.5"],
            correctAnswer: 2,
            explanation: "Correcto. Al ser 4 datos, tomamos los dos del centro (11 y 14) y los promediamos: 12.5."
          }
        ]
      },
      {
        id: 6,
        title: "Dispersión",
        description: "Varianza y Desviación Estándar",
        theory: [
          "Varianza (σ²): Dispersión al cuadrado. No nos sirve para interpretarlo directamente en el problema base.",
          "Desviación Estándar (σ): La RAÍZ CUADRADA de la Varianza. Significa el promedio general de qué tan alejados están los datos respecto a su Media."
        ],
        quiz: [
          {
            id: "q_6_1",
            question: "La varianza del crecimiento poblacional de bacterias es de 144 cm². ¿Cuál será su desviación estándar?",
            options: ["12 cm", "72 cm", "144 cm"],
            correctAnswer: 0,
            explanation: "Correcto. La desviación estándar es la raíz cuadrada de la varianza. Raíz de 144 es 12."
          }
        ]
      },
      {
        id: 7,
        title: "Percentiles",
        description: "Posiciones relativas",
        theory: [
          "Percentil 50 (P50) es exactamente el medio. Esto significa que el Percentil 50 ES LO MISMO QUE LA MEDIANA.",
          "Primer Cuartil (Q1) = Percentil 25. Tercer Cuartil (Q3) = Percentil 75.",
          "Estar en el percentil 92 significa superar al 92%."
        ],
        quiz: [
          {
            id: "q_7_1",
            question: "Durante tu EXANI-II, si obtienes un puntaje que te ubica justo en el Segundo Cuartil (Q2), ¿con qué medida coincide?",
            options: ["Mediana", "Percentil 25", "Media o Promedio"],
            correctAnswer: 0,
            explanation: "Correcto. El Q2 corresponde al 50%, equivaliendo exactamente a la Mediana."
          }
        ]
      },
      {
        id: 8,
        title: "Conjuntos",
        description: "Espacio muestral y cardinalidad",
        theory: [
          "Espacio Muestral (S o Ω): Conjunto TOTAL de TODOS los resultados posibles de un experimento.",
          "Cardinalidad (n): Número elementos del espacio.",
          "Unión (A ∪ B): Todos. Intersección (A ∩ B): Acuerdos comunes en ambos."
        ],
        quiz: [
          {
            id: "q_8_1",
            question: "En un experimento se tiene urna A = {1, 2, 3} y urna B = {3, 4, 5}. ¿Cuál es la intersección (A ∩ B)?",
            options: ["{1, 2, 3, 4, 5}", "{3}", "{1, 2, 4, 5}"],
            correctAnswer: 1,
            explanation: "Correcto. La intersección significa 'elemento en común en ambos conjuntos al mismo tiempo', que es el 3."
          }
        ]
      },
      {
        id: 9,
        title: "Conteo y Factoriales",
        description: "Permutaciones vs Combinaciones",
        theory: [
          "PERMUTACIONES (SÍ importa el orden): Armar claves, contraseñas, premiaciones.",
          "COMBINACIONES (NO importa el orden): Equipos, comités, encuestas aleatorias."
        ],
        quiz: [
          {
            id: "q_9_1",
            question: "Se va a elegir al Gerente y al Sub-Gerente de la planta donde trabajan 15 personas. ¿Qué técnica usamos?",
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
          "1. La probabilidad P(A) SIEMPRE debe ser entre 0 y 1. Un evento imposible = 0. Un evento seguro = 1.",
          "2. La probabilidad de todo tu Espacio muestral (que suceda cualquier cosa) es 1 (o 100%)."
        ],
        quiz: [
          {
            id: "q_10_1",
            question: "Un estudiante calcula que la Probabilidad de un evento F es de 1.15. ¿Qué significa esto?",
            options: ["Altamente probable", "Un éxito rotundo", "El cálculo está mal"],
            correctAnswer: 2,
            explanation: "Correcto. P(A) JAMÁS puede exceder 1. El primer axioma lo prohíbe."
          }
        ]
      },
      {
        id: 11,
        title: "Distribuciones",
        description: "Normal, Binomial y Poisson",
        theory: [
          "Binomial: Un ensayo se repite 'n' veces con 2 resultados: Éxito o Fracaso.",
          "Poisson: Mide la ocurrencia de eventos raros en UN INTERVALO de TIEMPO o ESPACIO específico.",
          "Normal: Campana de Gauss para variables continuas. Simétrica."
        ],
        quiz: [
          {
            id: "q_11_1",
            question: "A un hospital general llegan en promedio 3 pacientes con fractura diariamente. Calcula la probabilidad de que lleguen 5 en un día.",
            options: ["Distribución Binomial", "Distribución de Poisson", "Distribución de Cauchy"],
            correctAnswer: 1,
            explanation: "Correcto. Al indicarse sucesos por un bloque temporal constante ('en un día'), se debe usar Poisson."
          }
        ]
      },
      {
        id: 12,
        title: "EXANI-II Sim.",
        description: "Ponte a prueba",
        theory: [
          "Simulador FINAL de la materia. Lee con atención las 3 opciones."
        ],
        quiz: [
          {
            id: "q_12_1",
            question: "¿De cuántas maneras diferentes se pueden sentar 5 personas en 5 asientos disponibles en primera fila?",
            options: ["120 formas", "25 formas", "5 formas"],
            correctAnswer: 0,
            explanation: "Correcto. Permutación (5x4x3x2x1) = 120."
          }
        ]
      }
    ]
  },
  {
    id: "administracion",
    title: "Administración",
    description: "Áreas, Planeación, Control, Enfoques",
    levels: [
      {
        id: 1,
        title: "Enfoques y Escuelas",
        description: "Fundamentos de la administración",
        theory: [
          "Todo parte de los diferentes Enfoques (Escuelas Clásicas y Modernas) citados por Münch y Chiavenato:",
          "• Científica (Taylor): Basada en medición, tiempos y movimientos para maximizar eficiencia obrera.",
          "• Clásica (Fayol): La universalidad de la administración y sus 14 principios, creando las 'áreas funcionales'.",
          "• Relaciones Humanas (Mayo): Énfasis en la motivación y psicología del trabajador (Experimento de Hawthorne).",
          "• Estructuralista (Weber): Modelo burocrático, reglas escritas estrictas e impersonales."
        ],
        quiz: [
          {
            id: "a_1_1",
            question: "La escuela de las Relaciones Humanas, iniciada por Elton Mayo, se enfoca principalmente en:",
            options: ["Los tiempos y movimientos de producción.", "El comportamiento humano y motivación.", "La burocracia gubernamental extrema."],
            correctAnswer: 1,
            explanation: "Correcto. Elton Mayo comprobó que factores psicológicos y el sentido de pertenencia impulsan más la productividad."
          }
        ],
        quizOrange: [
          {
            id: "a_1_2",
            question: "Nivel Naranja: Según Henri Fayol y la teoría Clásica de la administración, ¿cuál de los siguientes es considerado uno de sus 14 principios fundamentales?",
            options: ["La especialización excluye al jefe.", "La Unidad de Mando.", "Producción en serie sin pausas."],
            correctAnswer: 1,
            explanation: "Correcto. La Unidad de Mando (que cada empleado reciba órdenes de un solo superior) es un pilar de Fayol."
          }
        ],
        quizPurple: [
          {
            id: "a_1_3",
            question: "Nivel Morado: Max Weber formuló el modelo de la Burocracia ideal. ¿Qué riesgo principal detectaron posteriormente en organizaciones hiperburocratizadas?",
            options: ["Que las reglas escritas se vuelvan fines en sí mismas, retrasando las operaciones.", "Que haya rotación excesiva por falta de contratos.", "Que los métodos matemáticos no funcionen."],
            correctAnswer: 0,
            explanation: "Correcto. La 'jaula de hierro' o desplazamiento de objetivos significa que la burocracia se enfoca tanto en el reglamento que olvida su meta real."
          }
        ]
      },
      {
        id: 2,
        title: "Tipos de Empresas",
        description: "Clasificación de organizaciones",
        theory: [
          "Según la bibliografía oficial, las empresas se clasifican por:",
          "• Giro/Actividad: Industriales (Extractivas o Manufactureras), Comerciales (Mayoristas/Minoristas), o de Servicios.",
          "• Origen del Capital: Públicas (del Estado), Privadas (inversionistas), Mixtas.",
          "• Magnitud/Tamaño: Micro, Pequeña, Mediana y Grande (dependen usualmente del número de empleados o ventas)."
        ],
        quiz: [
          {
            id: "a_2_1",
            question: "Una zapatería que compra calzado por contenedores y se lo vende al cliente final directamente en su local es una empresa de giro...",
            options: ["Industrial manufacturera", "Comercial minorista", "Servicios"],
            correctAnswer: 1,
            explanation: "Correcto. Es comercial (vende un bien tangible sin procesarlo) y es minorista (venta al menudeo/cliente final)."
          }
        ]
      },
      {
        id: 3,
        title: "Recursos y Áreas",
        description: "Recursos empresariales",
        theory: [
          "Para que una organización funcione, utiliza 4 grandes recursos operados en Áreas Funcionales:",
          "1. RRHH (Recursos Humanos): El elemento vivo e inteligencia de la empresa. Selección, sueldos, capacitación.",
          "2. Finanzas (Recursos Financieros): El dinero en efectivo, créditos, inversiones y utilidades.",
          "3. Producción (Recursos Materiales e insumos): Transformación de materia prima a través de maquinaria.",
          "4. Mercadotecnia (Rec. Técnicos/Ventas): Estudios de mercado, software, publicidad, ventas y distribución."
        ],
        quiz: [
          {
            id: "a_3_1",
            question: "Según el ejemplo de reactivo OFICIAL del Ceneval: ¿Qué área es la encargada de la promoción, distribución y venta de lo fabricado?",
            options: ["Producción", "Finanzas", "Mercadotecnia"],
            correctAnswer: 2,
            explanation: "Correcto. La mercadotecnia abarca desde estudios de mercado hasta la publicidad y la distribución comercial."
          }
        ]
      },
      {
        id: 4,
        title: "Emprendimiento",
        description: "El arte del emprendedor",
        theory: [
          "Emprendedor: Individuo dispuesto a asumir riesgos económicos e identificar oportunidades comerciales.",
          "Los tipos de emprendedor varían:",
          "• Emprendedor social: Su meta es resolver un problema en la comunidad, no el lucro desmedido.",
          "• Intraemprendedor: Innova y crea valor *dentro* de una empresa que ya existe como si fuera empleado.",
          "• Emprendedor tecnológico: Busca disrupción en modelos de negocio con base tecnológica (Startups)."
        ],
        quiz: [
          {
            id: "a_4_1",
            question: "Un empleado de Google propone una nueva app de mapas interna y se le asigna un presupuesto para desarrollarla. Él actúa como:",
            options: ["Intraemprendedor", "Emprendedor social", "Empresario corporativo"],
            correctAnswer: 0,
            explanation: "Correcto. Desarrollar proyectos innovadores dentro del paraguas financiero de tu patrón se conoce como Intraemprendimiento."
          }
        ]
      },
      {
        id: 5,
        title: "Proceso Adm.",
        description: "Etapas y Fases (Fayol)",
        theory: [
          "Al menos 4 preguntas del EXANI-II se basan en el famoso Proceso Administrativo (las 'funciones' del administrador).",
          "Tiene DOS Fases Generales:",
          "1. FASE MECÁNICA (Estructural): Conformada por la PLANEACIÓN (¿Qué se va a hacer?) y la ORGANIZACIÓN (¿Cómo se dividirá el trabajo?). Es la etapa 'de escritorio'.",
          "2. FASE DINÁMICA (Operativa): Conformada por la DIRECCIÓN (¡Hacer que se cumpla!) y el CONTROL (¿Cómo se hizo?). Es la ejecución del día a día."
        ],
        quiz: [
          {
            id: "a_5_1",
            question: "¿Cuáles son las etapas que conforman la Fase Mecánica de toda organización?",
            options: ["Planeación y Organización", "Dirección y Control", "Organización y Dirección"],
            correctAnswer: 0,
            explanation: "Correcto. Las dos primeras partes (donde planeas y armas la estructura teórica) son la Planeación y la Organización."
          }
        ]
      },
      {
        id: 6,
        title: "Planeación",
        description: "Estrategia e inicio",
        theory: [
          "Es la parte más crítica de Robbins & Coulter. Contiene la creación de la Filosofía Corporativa.",
          "• Misión: La razón de ser HOY de la organización.",
          "• Visión: Hacia dónde queremos llegar a FUTURO.",
          "• Valores: Principios morales de comportamiento.",
          "• Objetivos (Metas cualificadas), Políticas (Guías de comportamiento flexible) y Reglas (Normas estrictas inviolables)."
        ],
        quiz: [
          {
            id: "a_6_1",
            question: "'Llegar a ser la panificadora más importante del mundo para el 2030'. Lo anterior corresponde a una:",
            options: ["Misión", "Visión", "Política corporativa"],
            correctAnswer: 1,
            explanation: "Correcto. Al plantear un estado deseado ideal a futuro, estamos hablando de la Visión de la empresa."
          }
        ]
      },
      {
        id: 7,
        title: "Organización",
        description: "División del trabajo",
        theory: [
          "Consiste en dividir el trabajo y atribuir responsabilidades o jerarquías.",
          "Departamentalización: Agrupar tareas similares. Sus tipos frecuentes son Funcional (Finanzas, RH), por Producto (Línea Hogar, Automotriz), por Zona Geográfica (Norte, Sur), y por Clientes (Niños, Dama, Caballero).",
          "Herramientas gráficas clave: El Organigrama muestra la estructura jerárquica y el Manual de Procedimientos documenta los procesos repetitivos."
        ],
        quiz: [
          {
            id: "a_7_1",
            question: "Líneas aéreas agrupa a su personal de ventas en 3 divisiones: Asistencia de Viajeros VIP, Vuelo Comercial, y Empresas Carga. ¿Qué criterio de departamentalización usa?",
            options: ["Por Producto", "Por Clientes", "Geográfica"],
            correctAnswer: 1,
            explanation: "Correcto. Al enfocarse en el tipo de entidad que lo compra (VIP, Comercial, Empresas) es departamentalización por Clientes."
          }
        ]
      },
      {
        id: 8,
        title: "Dirección",
        description: "Principios de liderazgo",
        theory: [
          "Es lograr que las personas hagan las cosas mediante motivación, comunicación y LIDERAZGO.",
          "Estilos de Liderazgo (Según Kurt Lewin):",
          "1. Autócrata: Impone y dicta su voluntad. Centralización pura.",
          "2. Demócrata (Participativo): Consulta a los subordinados para la toma de decisión, fomenta la comunicación de doble vía.",
          "3. Laissez-faire (Dejar hacer): Otorga libertad total a los trabajadores. Funciona bien con artistas o ingenieros calificados."
        ],
        quiz: [
          {
            id: "a_8_1",
            question: "Un coordinador de diseño deja que cada creativo decida el estilo y los horarios para entregar el arte final de un anuncio. Ejerce un liderazgo:",
            options: ["Autocrático", "Democrático", "Laissez-faire"],
            correctAnswer: 2,
            explanation: "Correcto. Dar rienda suelta a las decisiones en trabajadores independientes o artísticos es típico de Laissez-Faire."
          }
        ]
      },
      {
        id: 9,
        title: "Jerarquía Maslow",
        description: "Motivación en Dirección",
        theory: [
          "El EXANI-II en el bloque de Dirección frecuentemente consulta la Pirámide de Maslow de necesidades humanas para explicar la Motivación:",
          "Base: 1. Fisiológicas (Alimentación, aire) -> 2. Seguridad (Salud, empleo) -> 3. Sociales (Pertenencia, afecto) -> 4. Estima / Reconocimiento (Respeto, ascensos).",
          "Cúspide: 5. Autorrealización (Máximo desarrollo del potencial)."
        ],
        quiz: [
          {
            id: "a_9_1",
            question: "Una empresa decide pagar seguros médicos privados a sus empleados familiares. Según Maslow, ¿qué nivel de necesidad busca cubrir para motivarlos?",
            options: ["Necesidades fisiológicas", "Necesidades de estima", "Necesidades de seguridad"],
            correctAnswer: 2,
            explanation: "Correcto. Un seguro médico garantiza la certidumbre ante accidentes y bienestar a futuro, cubriendo el escalón de la seguridad."
          }
        ]
      },
      {
        id: 10,
        title: "Control (Concepto)",
        description: "Fase de retroalimentación",
        theory: [
          "El control cierra el ciclo administrativo comprobando que TODO haya salido acorde a la Planeación.",
          "Sus etapas son: ",
          "1) Establecimiento de Estándares (Ej. Tolerancia de 0% mermas)",
          "2) Medición de Resultados",
          "3) Corrección e Implementación",
          "4) Retroalimentación (Feedback vital hacia las áreas para no repetir errores)."
        ],
        quiz: [
          {
            id: "a_10_1",
            question: "Un banco evalúa las atenciones en caja de la semana pasada comparado con sus expectativas y elabora un informe correctivo. Está ejerciendo su etapa de:",
            options: ["Control", "Organización", "Planeación estratégica"],
            correctAnswer: 0,
            explanation: "Correcto. El solo hecho de evaluar resultados post-acción mediante comparativas corresponde a la fase de Control."
          }
        ]
      },
      {
        id: 11,
        title: "Técnicas de Control",
        description: "Herramientas de auditoría",
        theory: [
          "Existen técnicas específicas de control que aparecen en la bibliografía de Luna González:",
          "• Auditorías: Financieras o Administrativas, buscan evaluar metódicamente una labor.",
          "• Gráfica de Gantt: Cronograma obligatorio de proyectos (barras horizontales controlando Tiempos y Actividades).",
          "• Diagramas de control de Calidad: Diagrama Ishikawa (Espina de pescado Causa-Efecto) o Gráficas de Pareto (Regla del 80-20% de error)."
        ],
        quiz: [
          {
            id: "a_11_1",
            question: "¿Qué herramienta usarías para controlar de forma visual en un calendario los tiempos límite y avances de muchas tareas en un proyecto de software?",
            options: ["Diagrama de Ishikawa", "Gráfica de Gantt", "Organigrama funcional"],
            correctAnswer: 1,
            explanation: "Correcto. Gantt es un cronograma indispensable para medir el tiempo transcurrido versus el planeado de un proyecto complejo."
          }
        ]
      },
      {
        id: 12,
        title: "EXANI-II Sim.",
        description: "Simulador de Administración",
        theory: [
          "Estás cursando el final de tu preparación de Administración. ¡Felicidades! Lograste procesar la información de Münch y Robbins.",
          "Tips para tu examen:",
          "• Diferencia correctamente Misión de Visión.",
          "• Recuerda bien el orden de Maslow.",
          "• Áreas mecánicas (de escritorio) = Planeación + Organización. Todo lo demás es Dinámica."
        ],
        quiz: [
          {
            id: "a_12_1",
            question: "Una nueva clínica requiere que sus recepcionistas tengan un manual que documente paso a paso cómo admitir a pacientes para homologar el trabajo de todos. Pertenece a la etapa de:",
            options: ["Organización", "Control", "Dirección"],
            correctAnswer: 0,
            explanation: "Correcto. Los Manuales de Procedimientos y los Organigramas se estructuran al ensamblar los cimientos en la fase de Organización."
          }
        ]
      }
    ]
  },
  ...transversales
];
