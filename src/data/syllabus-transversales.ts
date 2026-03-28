import type { Subject } from './syllabus';

export const transversales: Subject[] = [
  {
    id: "pensamiento-matematico",
    title: "Pensamiento Matemático",
    description: "Aritmética, Álgebra, Geometría, Estadística",
    levels: [
      {
        id: 1,
        title: "Razones y Proporciones",
        description: "Regla de 3 y Aritmética",
        theory: [
          "Una razón compara dos cantidades por cociente (Ej. 3/4). Una proporción es la igualdad de dos razones (a/b = c/d).",
          "Regla de tres directa: Si una cantidad sube, la otra también en la misma proporción.",
          "Regla de tres inversa: Si una cantidad sube, la otra baja (Ej. Más trabajadores, menos tiempo de obra)."
        ],
        quiz: [
          {
            id: "pm_1_1",
            question: "Un auto recorre 240 km con 20 litros de gasolina. ¿Cuántos litros necesitará para recorrer 360 km?",
            options: ["28 litros", "30 litros", "32 litros"],
            correctAnswer: 1,
            explanation: "Es regla de tres directa: (360 * 20) / 240 = 30."
          }
        ],
        quizOrange: [
          {
            id: "pm_1_2",
            question: "Nivel Naranja: 4 obreros construyen un muro en 12 horas. ¿Cuánto tardarán 6 obreros trabajando al mismo ritmo?",
            options: ["18 horas", "10 horas", "8 horas"],
            correctAnswer: 2,
            explanation: "Es regla de tres inversa. Más obreros = menos tiempo: (4 * 12) / 6 = 8 horas."
          }
        ],
        quizPurple: [
          {
            id: "pm_1_3",
            question: "Nivel Morado: Tres socios aportan $10,000, $15,000 y $25,000 para un negocio. Si la ganancia es de $100,000, ¿cuánto le corresponde al socio que aportó $15,000?",
            options: ["$30,000", "$15,000", "$45,000"],
            correctAnswer: 0,
            explanation: "La aportación total es $50,000. El socio 2 puso el 30% ($15,000 de $50k). El 30% de 100,000 es 30,000."
          }
        ]
      },
      {
        id: 2,
        title: "Porcentajes",
        description: "Aplicación de descuentos e IVA",
        theory: [
          "El porcentaje representa una fracción de 100 partes. El 25% equivale a multiplicar por 0.25 o dividir entre 4.",
          "Para sacar un precio con descuento, resta el porcentaje a 100% y multiplica. (Ej. 20% descuento = Precio * 0.80).",
          "Para un precio que YA tiene IVA, divide entre 1.16."
        ],
        quiz: [
          {
            id: "pm_2_1",
            question: "Una pantalla cuesta $5,000. Tiene el 15% de descuento. ¿Cuánto se debe pagar?",
            options: ["$4,250", "$4,500", "$4,750"],
            correctAnswer: 0,
            explanation: "Puedes multiplicar $5,000 * 0.85 = $4,250."
          }
        ]
      },
      {
        id: 3,
        title: "Jerarquía de Operaciones",
        description: "PEMDAS",
        theory: [
          "Orden correcto: 1) Paréntesis/Corchetes, 2) Exponentes/Raíces, 3) Multiplicación/División, 4) Suma/Resta.",
          "Si hay operaciones del mismo nivel (ej. divisiones y multiplicaciones juntas), se resuelven de IZQUIERDA a DERECHA."
        ],
        quiz: [
          {
            id: "pm_3_1",
            question: "¿Cuál es el resultado de: 10 + 2 × 5 - (4 ÷ 2)?",
            options: ["18", "58", "60"],
            correctAnswer: 0,
            explanation: "Primero paréntesis: (4/2)=2. Luego Multiplicación: 2x5=10. Queda: 10 + 10 - 2 = 18."
          }
        ]
      },
      {
        id: 4,
        title: "Ecuaciones Lineales",
        description: "Álgebra básica",
        theory: [
          "Ecuación de primer grado: La incógnita (letra) tiene exponente 1.",
          "Despejar consiste en pasar las operaciones al lado contrario haciendo su operación inversa: sumar pasa restando, multiplicar pasa dividiendo."
        ],
        quiz: [
          {
            id: "pm_4_1",
            question: "Resuelve: 3x - 5 = 10",
            options: ["x = 5", "x = -5", "x = 15"],
            correctAnswer: 0,
            explanation: "3x = 10 + 5 -> 3x = 15 -> x = 15/3 -> x = 5."
          }
        ]
      },
      {
        id: 5,
        title: "Sistemas de Ecuaciones",
        description: "Métodos de solución 2x2",
        theory: [
          "Permiten encontrar el valor de 2 incógnitas mediante 2 ecuaciones.",
          "Métodos comunes: Sustitución, Igualación, Suma/Resta (Reducción).",
          "En el EXANI, a veces es más rápido probar las opciones de respuesta en la ecuación que resolver todo el sistema desde cero."
        ],
        quiz: [
          {
            id: "pm_5_1",
            question: "Halla los valores que cumplen: x + y = 10, y x - y = 4",
            options: ["x=6, y=4", "x=7, y=3", "x=8, y=2"],
            correctAnswer: 1,
            explanation: "Si x=7 y y=3, la suma es 10 y la resta es 4."
          }
        ]
      },
      {
        id: 6,
        title: "Funciones Cuadráticas",
        description: "Vértices y forma gráfica",
        theory: [
          "La función cuadrática (ax² + bx + c) grafica como una Parábola.",
          "Si 'a' es positiva, abre hacia ARRIBA (forma de U). Si 'a' es negativa, abre hacia ABAJO (forma de campana).",
          "Las raíces (o soluciones) son los puntos donde la parábola corta el eje de las X."
        ],
        quiz: [
          {
            id: "pm_6_1",
            question: "En la función f(x) = -2x² + 4x - 1, la parábola abre hacia:",
            options: ["Arriba", "Abajo", "La izquierda"],
            correctAnswer: 1,
            explanation: "El término cuadrático ('a') es -2. Al ser negativo, abre hacia abajo."
          }
        ]
      },
      {
        id: 7,
        title: "Desigualdades (Inecuaciones)",
        description: "Mayor que y menor que",
        theory: [
          "Símbolos: > (mayor), < (menor), >= (mayor o igual), <= (menor o igual).",
          "La regla FUNDAMENTAL: Al multiplicar o dividir ambos lados de una desigualdad por un número NEGATIVO, el símbolo se INVIERTE."
        ],
        quiz: [
          {
            id: "pm_7_1",
            question: "Resuelve la inecuación: -2x > 10",
            options: ["x > -5", "x < -5", "x = -5"],
            correctAnswer: 1,
            explanation: "Al dividir entre -2, el símbolo '>' se invierte a '<'. Queda x < -5."
          }
        ]
      },
      {
        id: 8,
        title: "Áreas y Perímetros",
        description: "Figuras compuestas y sombreadas",
        theory: [
          "El perímetro es la suma de los bordes externos.",
          "Para sacar el área de una figura sombreada, generalmente se calcula el área de la figura MAYOR y se le RESTA el área de la figura blanca (hueca) de adentro."
        ],
        quiz: [
          {
            id: "pm_8_1",
            question: "Para sacar el área de un anillo (corona circular), debes restarle al círculo más grande...",
            options: ["La mitad de su perímetro", "El área del círculo más pequeño de adentro", "El cuadrado de su anchura"],
            correctAnswer: 1,
            explanation: "Área sombreada = Área figura grande - Área figura chica (el círculo blanco interno)."
          }
        ]
      },
      {
        id: 9,
        title: "Razones Trigonométricas",
        description: "SOH CAH TOA",
        theory: [
          "En triángulos rectángulos usamos la netmoteccia SOH CAH TOA:",
          "Seno = Opuesto / Hipotenusa",
          "Coseno = Adyacente / Hipotenusa",
          "Tangente = Opuesto / Adyacente."
        ],
        quiz: [
          {
            id: "pm_9_1",
            question: "¿A qué razón equivale dividir el Cateto Opuesto entre el Cateto Adyacente?",
            options: ["Seno", "Coseno", "Tangente"],
            correctAnswer: 2,
            explanation: "Según 'TOA', Tangente (T) es Opuesto (O) sobre Adyacente (A)."
          }
        ]
      },
      {
        id: 10,
        title: "Medidas de Tendencia Central",
        description: "Media, Mediana, Moda",
        theory: [
          "Media (Promedio): La sumatoria de todo entre el número total de datos.",
          "Mediana: El dato que queda exactamente a la mitad tras ordenarlos de menor a mayor.",
          "Moda: El valor que más se repite. Puede haber más de una (bimodal)."
        ],
        quiz: [
          {
            id: "pm_10_1",
            question: "De la serie de números (2, 5, 8, 3, 5), ordena y encuentra la Mediana.",
            options: ["4.6", "5", "3"],
            correctAnswer: 1,
            explanation: "Ordenados: 2, 3, 5, 5, 8. El del centro exacto es el 5."
          }
        ]
      },
      {
        id: 11,
        title: "Medidas de Dispersión",
        description: "Varianza y Desviación Estándar",
        theory: [
          "Nos dicen qué tan 'alejados' están los datos del promedio. Una dispersión muy alta significa que hay mucha desigualdad o inestabilidad.",
          "La Varianza es el cuadrado de las desviaciones. La Desviación Estándar (σ) es la RAÍZ CUADRADA de la Varianza."
        ],
        quiz: [
          {
            id: "pm_11_1",
            question: "Si calculas la varianza de un grupo de datos y da 25, ¿cuál es su Desviación Estándar?",
            options: ["625", "12.5", "5"],
            correctAnswer: 2,
            explanation: "La desviación estándar es la raíz cuadrada de la varianza. La raíz de 25 es 5."
          }
        ]
      },
      {
        id: 12,
        title: "Medidas de Posición",
        description: "Cuartiles y Percentiles",
        theory: [
          "Parten a los datos en fracciones uniformes tras ordenarlos.",
          "Cuartiles: Cortan en 4 partes (25%, 50%, 75%). ¡El Cuartil 2 es igual a la Mediana!",
          "Deciles: Cortan en 10 partes (10%, 20%).",
          "Percentiles: Cortan en 100 partes."
        ],
        quiz: [
          {
            id: "pm_12_1",
            question: "A la hora de interpretar pruebas de admisión, si Juan está en el 'Percentil 90', significa que:",
            options: ["Sacó 90 puntos en el examen", "Superó al 90% de los estudiantes evaluados", "Respondió el 90% de las preguntas"],
            correctAnswer: 1,
            explanation: "Los percentiles marcan posición. El percentil 90 deja por debajo de él al 90% de los resultados."
          }
        ]
      }
    ]
  },
  {
    id: "redaccion-indirecta",
    title: "Redacción Indirecta",
    description: "Gramática, Ortografía, Conectores",
    levels: [
      {
        id: 1,
        title: "Registro Lingüístico",
        description: "Formal, Informal y Culto",
        theory: [
          "Registro formal: Se usa distancia, no hay coloquialismos (Ej. Presentaciones laborales, cartas a directores).",
          "Registro informal/Coloquial: Cercanía, amistades, uso de jerga (Ej. WhatsApp con amigos).",
          "En el EXANI te piden identificar cuál oración es adecuada para un contexto oficial (se debe usar el tipo Formal)."
        ],
        quiz: [
          {
            id: "ri_1_1",
            question: "¿Cuál frase usarías para dirigirte al rector de una universidad solicitando una beca?",
            options: ["Qué onda, necesito apóyo para mis estudios.", "Me dirijo a usted con el propósito de solicitar el apoyo institucional...", "Porfa écheme la mano porque quiero aplicar mi talento aquí."],
            correctAnswer: 1,
            explanation: "Es el único enunciado con el registro Formal adecuado para una solicitud oficial."
          }
        ],
        quizOrange: [
          {
            id: "ri_1_2",
            question: "Nivel Naranja: Identifica el vicio del lenguaje llamado 'Barbarismo' en la oración:",
            options: ["Aprobastes el examen de ayer.", "Subió para arriba.", "Compramos unas cosas en la tienda."],
            correctAnswer: 0,
            explanation: "Añadir una 's' al final del verbo conjugado en pasado en la segunda persona (aprobaste) es un barbarismo."
          }
        ],
        quizPurple: [
          {
            id: "ri_1_3",
            question: "Nivel Morado: Selecciona el registro que pertenece a un enfoque académico expositivo:",
            options: ["Los átomos resultaron ser bien pequeñitos y locos.", "La estructura atómica comprende protones y neutrones en su núcleo.", "Ayer me enteré de lo que verdaderamente componen a los materiales."],
            correctAnswer: 1,
            explanation: "El lenguaje académico expositivo es objetivo, preciso y no utiliza adjetivos emocionales ni coloquialismos."
          }
        ]
      },
      {
        id: 2,
        title: "Concordancia Verbal",
        description: "Sujeto y Verbo",
        theory: [
          "El verbo debe coincidir en número y persona con su núcleo del sujeto.",
          "Atención con colectivos: 'La jauría de perros atacó' (jauría es singular, entonces es 'atacó', no 'atacaron')."
        ],
        quiz: [
          {
            id: "ri_2_1",
            question: "Completa la frase: 'El grupo de manifestantes _______ hacia el centro.'",
            options: ["Avanzaron", "Avanzó", "Han avanzado"],
            correctAnswer: 1,
            explanation: "El núcleo es 'El grupo' (singular), por lo que el verbo debe ser en singular: Avanzó."
          }
        ]
      },
      {
        id: 3,
        title: "Conectores Lógicos",
        description: "Causa, Consecuencia y Oposición",
        theory: [
          "Causales: porque, ya que, dado que. (Dan motivos).",
          "Consecutivos: por lo tanto, en consecuencia, así que. (Indican efecto).",
          "Adversativos u oposición: pero, sin embargo, no obstante, aunque."
        ],
        quiz: [
          {
            id: "ri_3_1",
            question: "Completa: 'No estudió para el examen, _________ obtuvo una calificación muy alta.'",
            options: ["por lo tanto", "sin embargo", "ya que"],
            correctAnswer: 1,
            explanation: "Indica una idea contraria a lo esperado (oposición). 'Sin embargo' conecta esto correctamente."
          }
        ]
      },
      {
        id: 4,
        title: "Signos de Puntuación I",
        description: "Uso de la Coma",
        theory: [
          "Coma Enumerativa: Para listas (A, B, C y D).",
          "Coma Vocativa: Aisla a quién le hablas ('Juan, ven acá').",
          "Coma Explicativa (Aposición): Para aclarar datos, va entre comas ('Monterrey, capital de NL, crece rápido')."
        ],
        quiz: [
          {
            id: "ri_4_1",
            question: "Identifica la frase con la coma explicativa escrita de manera correcta:",
            options: ["El perro, de mi tía mordió al cartero.", "Einstein, creador de la relatividad, fue alemán.", "María ven, rápido que la sopa se quema."],
            correctAnswer: 1,
            explanation: "La aclaración 'creador de la relatividad' va perfectamente encerrada entre dos comas."
          }
        ]
      },
      {
        id: 5,
        title: "Signos de Puntuación II",
        description: "Punto y Coma y Dos Puntos",
        theory: [
          "Punto y Coma (;): Separa elementos muy largos que ya tienen comas internas.",
          "Dos Puntos (:): Anuncian una cita textual, inician una enumeración o explican un efecto."
        ],
        quiz: [
          {
            id: "ri_5_1",
            question: "Completa con el signo correcto: 'Compramos tres sabores de pastel ___ fresa, vainilla y chocolate.'",
            options: ["Punto y coma (;)", "Coma (,)", "Dos puntos (:)"],
            correctAnswer: 2,
            explanation: "Los dos puntos anuncian el inicio de una enumeración derivada de lo mencionado."
          }
        ]
      },
      {
        id: 6,
        title: "Acentuación I",
        description: "Agudas, Graves y Esdrújulas",
        theory: [
          "Agudas: Tónica en la última, llevan tilde si terminan en N, S o Vocal (Canción, Jugó).",
          "Graves: Tónica en la penúltima, llevan tilde si terminan en cualquier Consonante QUE NO SEA N o S (Árbol, Lápiz).",
          "Esdrújulas: Tónica en la antepenúltima, SIEMPRE se acentúan (Médico, Pájaro)."
        ],
        quiz: [
          {
            id: "ri_6_1",
            question: "¿Por qué 'difícil' lleva acento ortográfico (tilde)?",
            options: ["Es aguda acabada en L", "Es grave acabada en consonante distinta de N o S", "Es esdrújula"],
            correctAnswer: 1,
            explanation: "Tiene la fuerza en la penúltima (fi) y no termina en n, s, ni vocal. Es grave."
          }
        ]
      },
      {
        id: 7,
        title: "Acentuación II",
        description: "Diacrítico y Hiatos",
        theory: [
          "Acento Diacrítico: Diferencia significados. 'Él' (persona) vs 'El' (artículo). 'Té' (bebida) vs 'Te' (pronombre).",
          "Hiatos: Rompen el diptongo separando vocales. Ejemplo: Ma-rí-a, Pa-ís."
        ],
        quiz: [
          {
            id: "ri_7_1",
            question: "Selecciona el enunciado correcto con uso de acento diacrítico:",
            options: ["Tu dejaste tú mochila allá.", "Él dijo que el carro era suyo.", "Dile que te sirva mas té."],
            correctAnswer: 1,
            explanation: "Él (pronombre = la persona) lleva tilde. 'el' carro (artículo) no lo lleva."
          }
        ]
      },
      {
        id: 8,
        title: "Grafofonética",
        description: "S, C y Z",
        theory: [
          "Terminaciones en -ción van con C cuando vienen de un -to/-dor (Invento->Invención).",
          "Terminaciones en -sión van con S cuando vienen de -so/-sor/-sivo/ (Compreso->Compresión).",
          "Z: Plurales cambian Z por C (Lápiz -> Lápices)."
        ],
        quiz: [
          {
            id: "ri_8_1",
            question: "A partir de 'agresor' e 'intento', sus derivados se escriben:",
            options: ["Agreción, Intensión", "Agresión, Intención", "Agreción, Intención"],
            correctAnswer: 1,
            explanation: "Agresor (-sor) se vuelve con 'S' (Agresión). Intento (-to) se vuelve con 'C' (Intención)."
          }
        ]
      },
      {
        id: 9,
        title: "Vicios del Lenguaje",
        description: "Pleonasmos y Cacofonía",
        theory: [
          "Pleonasmo: Usar palabras redundantes innecesarias. Ej: Subir para arriba, Jauría de perros, Persona humana.",
          "Cacofonía: Repetición repetitiva de sílabas que suena mal. Ej: Corre rápido Renato de rato en rato."
        ],
        quiz: [
          {
            id: "ri_9_1",
            question: "Identifica el pleonasmo (redundancia lógica) en la frase:",
            options: ["El agua estaba fría.", "Tuvimos una breve introducción corta.", "Le entregué los papeles a él."],
            correctAnswer: 1,
            explanation: "Una 'introducción' es inherently previa o breve, pero juntar 'breve' y 'corta' es repetición extrema del concepto."
          }
        ]
      },
      {
        id: 10,
        title: "Géneros Textuales",
        description: "Ensayos, Prólogos y Reseñas",
        theory: [
          "Ensayo: Texto argumentativo donde el autor da su OPINIÓN crítica de un tema.",
          "Prólogo: Texto al principio de un libro, usualmente escrito por otra persona para presentar la obra y al autor.",
          "Reseña: Resume y opina sobre una película/libro para recomendar (o no)."
        ],
        quiz: [
          {
            id: "ri_10_1",
            question: "Un texto firmado por un famoso autor en las primeras dos páginas de la novela debut de un amigo suyo se conoce como:",
            options: ["Ensayo", "Epílogo", "Prólogo"],
            correctAnswer: 2,
            explanation: "El prólogo, a diferencia de la introducción, suele ser literario y hecho por un presentador/evaluador externo."
          }
        ]
      },
      {
        id: 11,
        title: "Textos Periodísticos",
        description: "Noticia vs Crónica",
        theory: [
          "Noticia: Totalmente OBJETIVA. Responde Qué, Cómo, Cuándo, Dónde, Por qué.",
          "Crónica: Una narrativa de un evento paso a paso en orden cronológico. Contiene a menudo el punto de vista del periodista.",
          "Artículo de Opinión: Subjetivo. Refleja lo que piensa una persona sobre el hecho."
        ],
        quiz: [
          {
            id: "ri_11_1",
            question: "Un texto que narra, minuto a minuto, los eventos ocurridos dentro de un estadio durante la final, corresponde a:",
            options: ["Noticia corta", "Crónica", "Ensayo"],
            correctAnswer: 1,
            explanation: "El enfoque secuencial temporal detallado (el paso del tiempo) es característico de las crónicas."
          }
        ]
      },
      {
        id: 12,
        title: "Cohesión Textual",
        description: "Uso correcto de Preposiciones",
        theory: [
          "Preposiciones: A, ante, bajo, cabe, con, contra, de, desde, en, entre, hacia...",
          "Error común ('Dequeísmo'): Emplear 'de que' en lugar de sólo 'que'. Ejemplo malo: 'Pienso DE QUE vendrá'. Correcto: 'Pienso QUE vendrá'.",
          "Regla: Si puedes sustituirlo por 'ESO', fíjate cómo suena. 'Pienso ESO' suena bien. 'Pienso DE ESO' suena mal."
        ],
        quiz: [
          {
            id: "ri_12_1",
            question: "¿Qué oración es gramaticalmente correcta y no presenta dequeísmo?",
            options: ["Me alegra de que vinieras.", "Recuerdo de que llovía ese día.", "Estoy seguro de que ganaremos."],
            correctAnswer: 2,
            explanation: "Dices 'Estoy seguro DE ESO', por lo tanto llevar 'de que' aquí es correctísimo y no un error."
          }
        ]
      }
    ]
  },
  {
    id: "comprension-lectora",
    title: "Comprensión Lectora",
    description: "Análisis y lectura crítica",
    levels: [
      {
        id: 1,
        title: "Idea Principal vs Secundaria",
        description: "Identificación de Datos",
        theory: [
          "La idea principal es el mensaje central. Si lo quitas, el texto pierde sentido (normalmente en el primer párrafo o conclusión).",
          "Las ideas secundarias sirven solo para detallar, ejemplificar y expandir a la idea principal."
        ],
        quiz: [
          {
            id: "cl_1_1",
            question: "Si lees: 'El cambio climático provoca el deshielo (principal), por ejemplo los glaciares suizos han perdido tamaño en 2021 (secundario)'. El ejemplo es un dato...",
            options: ["Principal", "Evidencia de apoyo (secundario)", "Conclusión"],
            correctAnswer: 1,
            explanation: "El hecho de Suiza es sólo una pieza que soporta (secundario) la tesis macro (principal)."
          }
        ],
        quizOrange: [
          {
            id: "cl_1_2",
            question: "Nivel Naranja: ¿Qué elemento discursivo sirve habitualmente para ubicar rápidamente la posición de la idea principal en un texto científico?",
            options: ["Los marcadores o subtítulos.", "Las citas APA", "Las onomatopeyas"],
            correctAnswer: 0,
            explanation: "Estructurar en títulos/subtítulos encabeza la arquitectura de cómo viaja la tesis central."
          }
        ],
        quizPurple: [
          {
            id: "cl_1_3",
            question: "Nivel Morado: Con base en un modelo jerárquico de lectura, inferir una postura implícita se encuentra en el nivel...",
            options: ["Literal", "Analógico", "Inferencial"],
            correctAnswer: 2,
            explanation: "La comprensión inferencial requiere rastrear indicios, mientras que la literal busca lo explicitado."
          }
        ]
      },
      {
        id: 2,
        title: "Intención del Autor",
        description: "Clasificación de propósitos",
        theory: [
          "Textos descriptivos: Mostrar cómo es algo o alguien (Novelas, catálogos).",
          "Textos argumentativos: Convencer / persuadir de una idea mediante lógica (Debates, editoriales).",
          "Textos informativos: Exponer de forma neutral la evolución de hechos (Noticias).",
          "Identificar verbos te da la clave del propósito."
        ],
        quiz: [
          {
            id: "cl_2_1",
            question: "Si el texto contiene frases como 'es increíblemente negativo que el congreso fallara en la votación...', su tipo es predominante...",
            options: ["Informativo", "Descriptivo", "Argumentativo de opinión"],
            correctAnswer: 2,
            explanation: "Usar adjetivos como 'es negativo que fallaran' delata totalmente una editorial de opinión."
          }
        ]
      },
      {
        id: 3,
        title: "Inferencia y Sentido Figurado",
        description: "Interpretar entre líneas",
        theory: [
          "Inferir significa llegar a una conclusión que el texto no dice directamente pero que las pistas demuestran.",
          "Ejemplo: 'Temblando por las gélidas temperaturas, buscó su abrigo'. Inferencia obvia: hace mucho frío, sin que se diga directamente."
        ],
        quiz: [
          {
            id: "cl_3_1",
            question: "Texto: 'Luigi suspiró, recogió el ramo marchito y tiró el anillo a la basura mientras veía partir el tren'. Se infiere que...",
            options: ["El tren era rojo", "Luigi fue rechazado sentimentalmente", "El ramo tenía rosas"],
            correctAnswer: 1,
            explanation: "Ramo, anillo a la basura y tristeza implican fallo en la relación, ningún color se menciona."
          }
        ]
      },
      {
        id: 4,
        title: "Figuras Literarias Básicas",
        description: "Metáfora, Símil, Hipérbole",
        theory: [
          "Metáfora: Cambia el nombre de algo por otra cosa debido a su similitud. (Ej: 'Sus cabellos de oro').",
          "Símil: Una comparación usando la palabra 'como' o 'parecido a'. (Ej: 'Rápido como un rayo').",
          "Hipérbole: Una exageración masiva para dar impacto. (Ej: 'Lloró un océano de lágrimas')."
        ],
        quiz: [
          {
            id: "cl_4_1",
            question: "Identifica la Metáfora exacta:",
            options: ["Es alto como una montaña", "Las perlas de tu boca brillan al sonreír", "Me muero totalmente de risa contigo"],
            correctAnswer: 1,
            explanation: "'Alto como montaña' es Símil. 'Me muero' es Hipérbole. Llamarle 'perlas' a los dientes es una Metáfora perfecta."
          }
        ]
      },
      {
        id: 5,
        title: "Niveles de Lectura",
        description: "Literal a Crítico",
        theory: [
          "1. Lectura Literal: Extraer lo que está estrictamente escrito.",
          "2. Lectura Inferencial: Sacar suposiciones educadas no dichas.",
          "3. Lectura Crítico-Valorativa: Emitir juicios argumentados evaluando la verdad o peso de las fuentes del autor."
        ],
        quiz: [
          {
            id: "cl_5_1",
            question: "¿Qué tipo de lectura se aplica si analizas si la fuente citada por el autor es fiable y objetiva?",
            options: ["Inferencial", "Literal", "Crítica"],
            correctAnswer: 2,
            explanation: "Revisar los sesgos, la confiabilidad y la arquitectura ética de un texto es lectura puramente crítica."
          }
        ]
      },
      {
        id: 6,
        title: "El Ámbito Académico",
        description: "Monografía y Artículos",
        theory: [
          "Textos escolares: Monografías (investigación extensa de 1 solo tema), Artículos de Divulgación científica (pasar términos difíciles a lenguaje común para que el pueblo entienda)."
        ],
        quiz: [
          {
            id: "cl_6_1",
            question: "El objetivo de una revista de 'Divulgación científica' es:",
            options: ["Publicar secretos exclusivos solo para doctores", "Hacer accesibles temas de alto nivel científico al público en general", "Polemizar chismes"],
            correctAnswer: 1,
            explanation: "Divulgar es adaptar el rigor científico y presentarlo digerible y atractivo a la población."
          }
        ]
      },
      {
        id: 7,
        title: "El Ámbito Participativo",
        description: "Textos sociales",
        theory: [
          "Cuentan temas políticos, cívicos y sociales. Por ejemplo: Memorandos, convocatorias públicas, discursos y reglamentos.",
          "Reglamento: Tiene lenguaje jerárquico-imperativo (normas)."
        ],
        quiz: [
          {
            id: "cl_7_1",
            question: "El texto que informa reglas y consecuencias vinculatorias en el uso de espacios de una biblioteca, está en el ámbito:",
            options: ["Literario romántico", "De Participación social (Normativo)", "Académico divulgativo"],
            correctAnswer: 1,
            explanation: "Reglar comportamientos cívicos pertenece al ámbito participativo social y normativo."
          }
        ]
      },
      {
        id: 8,
        title: "El Ámbito Literario",
        description: "Poemas, Cuentos, Novela",
        theory: [
          "Estos textos rompen las reglas formales de coherencia para invocar estética y emociones (Función Poética del lenguaje).",
          "Incluyen recursos retóricos complejos y ficcionalidad voluntaria."
        ],
        quiz: [
          {
            id: "cl_8_1",
            question: "La intención más importante en un poema escrito en verso sobre el existencialismo, ¿cuál es?",
            options: ["Demostrar con gráficas", "Persuadir de un voto", "Expresar sentimientos a través de la experiencia estética"],
            correctAnswer: 2,
            explanation: "Transmite emociones usando las palabras como un vehículo artístico."
          }
        ]
      },
      {
        id: 9,
        title: "Análisis del Tono",
        description: "Sarcasmo e Ironía",
        theory: [
          "Tono: La 'vibra' del texto (Solemne, irónico, humorístico, de luto, triunfalista).",
          "Ironía: Decir lo contrario a lo que se espera para resaltar un defecto (Ej: '¡Ay qué genio debes de ser para reprobar con el libro abierto!')."
        ],
        quiz: [
          {
            id: "cl_9_1",
            question: "¿Qué tono domina en la frase: 'Maravilloso, el gobierno volvió a tapar un bache abriendo un cráter al lado'?",
            options: ["Feliz", "Melancólico", "Irónico o sarcástico"],
            correctAnswer: 2,
            explanation: "Usa palabras positivas para denotar molestia o queja evidente, lo cual es sarcasmo/ironía."
          }
        ]
      },
      {
        id: 10,
        title: "Macroestructuras",
        description: "Narrativas y sus tiempos",
        theory: [
          "Retrospección (Flashback): Saltar hacia atrás en el tiempo del texto para dar contexto.",
          "Sintetizar el texto requiere dominar la forma en la que la información principal fue distribuida."
        ],
        quiz: [
          {
            id: "cl_10_1",
            question: "Cuando un autor cuenta la muerte del rey en el primer párrafo, y emplea todo el libro en explicar cómo sucedió desde 10 años antes, hablamos de:",
            options: ["Plagio literario", "Una estructura temporal o 'Flashback' dominante", "Un texto argumentativo"],
            correctAnswer: 1,
            explanation: "Se saltó la estructura lineal (Inicio, Nudo, Desenlace) al arrancar con el final."
          }
        ]
      },
      {
        id: 11,
        title: "Polifonía Textual",
        description: "Voces y múltiples fuentes",
        theory: [
          "A veces un autor dialoga o se contesta con tesis de otros autores citándolo en el texto.",
          "Es vital identificar quién está hablando o qué bando de opinión resalta en cada de párrafo."
        ],
        quiz: [
          {
            id: "cl_11_1",
            question: "Si Juan escribe: 'Como señaló Descartes: Pienso luego existo, pero yo creo que hoy ya no sirve'. Hay inclusión de...",
            options: ["Una reseña literaria", "Una cita y refutación", "Plagio puro"],
            correctAnswer: 1,
            explanation: "Cita directamente la fuente y luego la confronta opinando contrario."
          }
        ]
      },
      {
        id: 12,
        title: "Paráfrasis",
        description: "Traducir con tus palabras",
        theory: [
          "Parafrasear es tomar las ideas de un autor y explicarlas usando tu propio vocabulario sin cambiar en absoluto la idea principal.",
          "No confundir con el 'Resumen' (que solo corta palabras pero deja igual el texto)."
        ],
        quiz: [
          {
            id: "cl_12_1",
            question: "Selecciona el mejor ejemplo de Paráfrasis de 'El sol brilla en lo alto para todos por igual'.",
            options: ["El sol brilla. Para todos.", "Las oportunidades y la luz nos llegan a todas las personas de manera equitativa.", "No me gusta el calor que hace en el sol."],
            correctAnswer: 1,
            explanation: "Convirtió la frase simbólica en un concepto interpretado sin la palabra sol, pero conservando su lección o idea original."
          }
        ]
      }
    ]
  },
  {
    id: "ingles",
    title: "Inglés - EXANI",
    description: "Reading & Grammar B1",
    levels: [
      {
        id: 1,
        title: "Presente Simple",
        description: "Rutinas y Hábitos",
        theory: [
          "Para rutinas y hechos reales. Al sujeto de la 3° persona del singular (He, She, It) se le añade 's' o 'es' al verbo.",
          "Ejemplo: 'She works every day' (Correcto) -> 'She work every day' (Incorrecto).",
          "Auxiliar negativo: don't y doesn't (para he/she/it)."
        ],
        quiz: [
          {
            id: "ing_1_1",
            question: "Choose the correct sentence:",
            options: ["He play soccer every weekend.", "He don't plays soccer.", "He plays soccer every weekend."],
            correctAnswer: 2,
            explanation: "En afirmaciones presentes para He/She/It se deba agregar la letra 'S'."
          }
        ],
        quizOrange: [
          {
            id: "ing_1_2",
            question: "Orange Level: Which sentence correctly uses the negative auxiliary in Simple Present?",
            options: ["She not go to the stadium.", "She doesn't goes to the stadium.", "She doesn't go to the stadium."],
            correctAnswer: 2,
            explanation: "El auxiliar 'doesn't' absorbe la 's', por lo que el verbo queda en forma base 'go'."
          }
        ],
        quizPurple: [
          {
            id: "ing_1_3",
            question: "Purple Level: Fill in the blank: Neither of the boys _____ interested in the new routine.",
            options: ["is", "are", "be"],
            correctAnswer: 0,
            explanation: "'Neither of the boys' acts grammatically as singular subject. 'Is' is correct in academic contexts."
          }
        ]
      },
      {
        id: 2,
        title: "Presente Continuo",
        description: "Lo que sucede AHORA",
        theory: [
          "Habla de acciones que ocurren en este preciso instante.",
          "Fórmula: Verbo 'to be' (am/is/are) + verbo terminado en -ing.",
          "Ejemplo: 'I am studying for the exam right now'."
        ],
        quiz: [
          {
            id: "ing_2_1",
            question: "Complete the sentence: Listen! The birds ____ outside the window.",
            options: ["sings", "is singing", "are singing"],
            correctAnswer: 2,
            explanation: "Birds es plural (they), lleva 'are' y the verb con -ing (singing)."
          }
        ]
      },
      {
        id: 3,
        title: "Pasado Simple",
        description: "Acciones finalizadas",
        theory: [
          "Verbos regulares terminan en '-ed' (worked, played). Verbos irregulares cambian (go -> went, eat -> ate).",
          "Auxiliar negativo para TODOS: 'didn't'. Cuando usas didn't, tu verbo principal DEBE volver a la normalidad.",
          "Ej: 'I didn't went' (MAL) -> 'I didn't go' (BIEN)."
        ],
        quiz: [
          {
            id: "ing_3_1",
            question: "Choose the correct negative sentence in Simple Past:",
            options: ["I didn't visited my grandma.", "We didn't eat pizza yesterday.", "They don't went to sleep."],
            correctAnswer: 1,
            explanation: "Se usa 'didn't' seguido del verbo en su forma base."
          }
        ]
      },
      {
        id: 4,
        title: "Pasado Continuo",
        description: "Acciones interrumpidas",
        theory: [
          "Refiere a algo que estaba rodeando el pasado. (I was watching TV when the phone rang).",
          "Fórmula: Verbo to be pasado (was / were) + verbo terminado en -ing.",
          "Marcadores clave: 'while' (mientras) y 'when' (cuando)."
        ],
        quiz: [
          {
            id: "ing_4_1",
            question: "Complete: I _____ _____ a shower when the lights went out.",
            options: ["was tooking", "were taking", "was taking"],
            correctAnswer: 2,
            explanation: "Para el pronombre 'I' corresponde 'was' y el verbo con 'ing'."
          }
        ]
      },
      {
        id: 5,
        title: "Futuro Simple (Will vs Going to)",
        description: "Promesas vs Planes",
        theory: [
          "'Will': Decisiones espontáneas, promesas o predicciones inseguras. (I will love you forever).",
          "'Be going to': Planes ya hechos asegurados o predicciones con evidencia directa. (Look at the clouds, it is going to rain)."
        ],
        quiz: [
          {
            id: "ing_5_1",
            question: "Si ya compraste los boletos de avión para ir a Francia mañana, tú dices:",
            options: ["I will travel to France tomorrow.", "I am going to travel to France tomorrow."],
            correctAnswer: 1,
            explanation: "Es un plan 100% certero (tienes boletos), así que 'going to' es lo natural."
          }
        ]
      },
      {
        id: 6,
        title: "Preposiciones IN / ON / AT",
        description: "Tiempo y lugar",
        theory: [
          "IN: Para lo grande y difuso: Meses (in May), Años (in 1999), Países (in Mexico), Etapas (in the morning).",
          "ON: Menos grande. Días de la semana (on Monday), Fechas completas con número (on May 4th), Superficies (on the table).",
          "AT: Preciso / Concreto. Horas puntuales (at 7:00 PM), lugares exactos locales (at the door/at the hospital)."
        ],
        quiz: [
          {
            id: "ing_6_1",
            question: "Complete the sentence: Her birthday is ____ December 25th, but the party is ____ January.",
            options: ["in / on", "on / in", "at / in"],
            correctAnswer: 1,
            explanation: "Cuando mencionas el día explícito '25th' usas 'on'. Cuando sólo mencionas el mes abierto 'January', usas 'in'."
          }
        ]
      },
      {
        id: 7,
        title: "Comparativos y Superlativos",
        description: "-ER vs -EST",
        theory: [
          "Comparativos (1 vs 1): Verbos cortos añaden '-er' (taller). Verbos largos usan 'more' (more expensive). Siempre llevan 'than'.",
          "Superlativos (1 vs Todos): Verbos cortos añaden '-est' (tallest). Verbos largos usan 'the most' (the most expensive)."
        ],
        quiz: [
          {
            id: "ing_7_1",
            question: "Choose the correct option: My house is ______ than yours, but Sarah's house is the ______ of all.",
            options: ["bigger / biggest", "more big / most big", "biggest / bigger"],
            correctAnswer: 0,
            explanation: "Big es corto, su comparativo es bigger, su superlativo es biggest."
          }
        ]
      },
      {
        id: 8,
        title: "Have to vs Must",
        description: "Obligaciones",
        theory: [
          "'Must': Es obligación interna severa u obligación moral fuerte. (I must stop smoking, I am dying).",
          "'Have to': Obligación externa impuesta (leyes, reglas escolares). (I have to wake up at 5 am for my job).",
          "'Don't have to': Significa que NO ESTÁS OBLIGADO, si quieres no lo haces."
        ],
        quiz: [
          {
            id: "ing_8_1",
            question: "You ______ wear a uniform in this school. It is the mandatory rule.",
            options: ["must", "have to", "might"],
            correctAnswer: 1,
            explanation: "Obligación externa y normativa escolar es preferiblemente 'have to' (tengo que hacerlo)."
          }
        ]
      },
      {
        id: 9,
        title: "First Conditional",
        description: "Si haces esto... pasará esto",
        theory: [
          "Condicionales (If). El primer condicional habla de causas MUY POSIBLES a futuro.",
          "Fórmula de la CONDICIÓN: If + Presente Simple.",
          "Fórmula del EFECTO: Will + Verbo original.",
          "Ej: If you study hard (Presente), you will pass the EXANI (Futuro)."
        ],
        quiz: [
          {
            id: "ing_9_1",
            question: "Complete the sentence: If it ______ tomorrow, we _____ stay at home.",
            options: ["rains / will", "will rain / rains", "rain / are going to"],
            correctAnswer: 0,
            explanation: "Causa en presente simple tipo (it rains) / Efecto en futuro pasará (we will stay)."
          }
        ]
      },
      {
        id: 10,
        title: "Pronombres Relativos",
        description: "Who, Which, That",
        theory: [
          "Who: Une oraciones refiriéndose a personas exclusivamente.",
          "Which: Une oraciones refiriéndose a animales o cosas inanimadas.",
          "That: Comodín que puede sustituir a who y which, pero no se debe usar después de comas."
        ],
        quiz: [
          {
            id: "ing_10_1",
            question: "The woman _____ is talking to the teacher is my mother.",
            options: ["which", "who", "whom"],
            correctAnswer: 1,
            explanation: "Como hablamos de una persona (woman) conectamos sus oraciones con 'who'."
          }
        ]
      },
      {
        id: 11,
        title: "Cuantificadores",
        description: "Much, Many, Some, Any",
        theory: [
          "Many: Cosas contables (Many cars, Many apples).",
          "Much: Cosas incontables (Much water, Much time, Much money).",
          "Some: Significa 'algo de' en afirmaciones positivas.",
          "Any: Significa 'algo/ningún' usado en preguntas e imposiciones negativas (I don't have ANY money)."
        ],
        quiz: [
          {
            id: "ing_11_1",
            question: "I ran out of sugar. Do we have ______ left in the kitchen?",
            options: ["some", "any", "many"],
            correctAnswer: 1,
            explanation: "Para preguntas, habitualmente se usa 'any'."
          }
        ]
      },
      {
        id: 12,
        title: "Phrasal Verbs Comunes",
        description: "Verbos de dos partes",
        theory: [
          "Son combinaciones de verbo + preposición que crean un significado TRADICIONALMENTE NUEVO.",
          "Look for: Buscar (no mirar para).",
          "Give up: Rendirse (no dar arriba).",
          "Take off: Despegar o Quitarse la ropa."
        ],
        quiz: [
          {
            id: "ing_12_1",
            question: "The teacher told us to ________ the unknown words in the dictionary.",
            options: ["look at", "look up", "look after"],
            correctAnswer: 1,
            explanation: "'Look up' significa buscar información específica en un compendio, libro o glosario."
          }
        ]
      }
    ]
  }
];
