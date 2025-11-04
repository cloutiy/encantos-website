const productData = [
  {
    "name": "Bloqueador solar (100ml)",
    "description": "Fotoprotector solar natural FPS 50. Forma una pantalla bloqueadora que protege contra los rayos UVB. Resistente al agua, apto para piel sensible y grasa. Aplicar 10 minutos antes de la exposición al sol.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/CtSQF",
    "price": 70,
    "catalog_id": 10,
    "ingredients": "Aceite de aguaje, aceite de coco, aceite de ajonjoli, aceite de zanahoria, manteca de karite, sábila, oxido de zinc, vainilla.",
    "display_order": 1
  },
  {
    "name": "Bloqueador solar (30ml)",
    "description": "Tamaño práctico de nuestro fotoprotector solar natural FPS 50. Ideal para llevar a todas partes. Protección de amplio espectro, resistente al agua y apto para todo tipo de piel.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/GSdtB",
    "price": 25,
    "catalog_id": 11,
    "ingredients": "Aceite de aguaje, aceite de coco, aceite de ajonjoli, aceite de zanahoria, manteca de karite, sábila, oxido de zinc, vainilla.",
    "display_order": 2
  },
  {
    "name": "Shampoo botanico liquido (250ml)",
    "description": "Este shampoo limpia suavemente sin resecar, mientras nutre en profundidad con una poderosa mezcla de aceites amazónicos ricos en Omegas. Estimula el crecimiento, previene la caída y fortalece tanto el cuero cabelludo como las hebras desde la raíz. Hidrata, suaviza y controla el frizz, dejando el cabello manejable y con un brillo saludable.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/x4y89",
    "price": 47,
    "catalog_id": 48,
    "ingredients": "Agua destilada, SCI, glycerina liquida, goma xanthan, betaina de coco, aceites de ungurahui, sacha inchi, ricino y coco, aceites esenciales de romero, menta, lavanda, y hierba luisa, extracto de jengibre conservante natural.",
    "display_order": 3
  },
  {
    "name": "Acondicionador en crema (250ml)",
    "description": "Acondicionador en crema para un cabello suave, manejable y profundamente hidratado.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/kUsgB",
    "price": 47,
    "catalog_id": 5,
    "ingredients": "Aceite de ungurahui, aceite de coco y ricino, hidrolato de hierba luisa, manteca de cacao, vitamina E, aceite de aguaje, aloe vera, extractos de ortiga, verbena, romero y eucalipto, emulsionante natural, conservante natural.",
    "display_order": 4
  },
  {
    "name": "Pasta dental sin flúor (100gr)",
    "description": "Pasta dental vegana con carbonato de calcio, muña, sábila y betaina de coco. Tiene propiedades antiinflamatorias y antibacteriales. Limpia profundamente, elimina placa, previene caries y fortalece dientes y encías. Libre de flúor, parabenos, apta para veganos, celiacos, niños y adultos.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/1rIuz",
    "price": 30,
    "catalog_id": 43,
    "ingredients": "Carbonato de calcio, muña, sábila, betaina de coco, infución de muña infusión de anís, SCI, aceite esencial de clavo de olor, canela y menta, glicerina, aceite de ajonjolí.",
    "display_order": 5
  },
  {
    "name": "Pasta dental sin flúor  de menta + eucalipto (100gr)",
    "description": "Pasta dental vegana con carbonato de calcio, muña, sábila y betaina de coco. Tiene propiedades antiinflamatorias y antibacteriales. Limpia profundamente, elimina placa, previene caries y fortalece dientes y encías. Libre de flúor, parabenos, apta para veganos, celiacos, niños y adultos.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/8PG3u",
    "price": 30,
    "catalog_id": 44,
    "ingredients": "Carbonato de calcio, muña, sábila, betaina de coco, infución de muña infusión de anís, SCI, aceite esencial de eucalipto y menta, glicerina, aceite de ajonjolí.",
    "display_order": 6
  },
  {
    "name": "Lipstick multiuso (cattleya fucsia)",
    "description": "Pinta tus labios al máximo con este vibrante color fucsia. Labial nutritivo e hidratante formulado con manteca de cacao, aceite de coco, cera de abejas, polen, miel y pigmentos minerales. Es comestible, de aroma dulce, y se puede usar como rubor o sombra. Libre de químicos tóxicos. 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/BQrSs",
    "price": 27,
    "catalog_id": 29,
    "ingredients": "Manteca de cacao, aceite de aguaje ,aceite de coco,cera candelilla,aceite esencial de lavanda, oxido de zinc, recina de sangre de grado, pigmentos vegetal y mineral.",
    "display_order": 7
  },
  {
    "name": "Lipstick multiuso (coral pishcota)",
    "description": "Un tono coral suave y natural para labios hidratados y con color. Elaborado con ingredientes naturales como manteca de cacao y cera de abeja. Es comestible, nutritivo y multifuncional (labial, rubor, sombra). Libre de químicos tóxicos. Presentación de 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/TVa8x",
    "price": 27,
    "catalog_id": 30,
    "ingredients": "Manteca de cacao, aceite de aguaje ,aceite de coco,cera candelilla,aceite esencial de lavanda, oxido de zinc, recina de sangre de grado, pigmentos vegetal y mineral.",
    "display_order": 7
  },
  {
    "name": "Lipstick multiuso (rojo moshaka)",
    "description": "Un rojo intenso y clásico para un look audaz. Labial hidratante formulado con manteca de cacao, aceite de coco, cera de abejas, polen, miel y pigmentos minerales. Nutre, hidrata y pinta tus labios sin químicos tóxicos. Presentación de 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/wvASz",
    "price": 27,
    "catalog_id": 31,
    "ingredients": "Manteca de cacao, aceite de aguaje ,aceite de coco,cera candelilla,aceite esencial de lavanda, oxido de zinc, recina de sangre de grado, pigmentos vegetal y mineral.",
    "display_order": 8
  },
  {
    "name": "Pack \"yuyito kids\"",
    "description": "Pack especial para niños que incluye productos suaves y seguros para su cuidado diario.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/KhccL",
    "price": 55,
    "catalog_id": 41,
    "ingredients": "",
    "display_order": 9
  },
  {
    "name": "Aceite de aguaje (30ml)",
    "description": "Aceite nutritivo de aguaje, rico en beta-carotenos. Protege la piel del envejecimiento prematuro, ayuda a regenerar estrías y cicatrices, y aclara manchas. Un antioxidante natural que protege de los radicales libres y los rayos UV.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/Q4PyL",
    "price": 35,
    "catalog_id": 1,
    "ingredients": "Aceite de agaje prensado en frio.",
    "display_order": 10
  },
  {
    "name": "Aceite de cannabis 10% (10ml)",
    "description": "Aceite de cannabis con una concentración del 10%, ideal para uso terapéutico y relajante.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/fXIrV",
    "price": 250,
    "catalog_id": 2,
    "ingredients": "Aceite de cannabis prensado en frio.",
    "display_order": 11
  },
  {
    "name": "Aceite de cannabis 5% (10ml)",
    "description": "Aceite de cannabis con una concentración del 5%, perfecto para introducción y uso moderado.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/GiNsy",
    "price": 180,
    "catalog_id": 3,
    "ingredients": "Aceite de cannabis prensado en frio.",
    "display_order": 12
  },
  {
    "name": "Aceite de ungurahui (30ml)",
    "description": "Aceite nutritivo de ungurahui, excelente para tratamientos capilares y cuidado de la piel. Rico en ácidos grasos esenciales, hidrata y regenera profundamente.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/7WjpW",
    "price": 35,
    "catalog_id": 4,
    "ingredients": "Aceite de ungurahui prensado en frio.",
    "display_order": 13
  },
  {
    "name": "Bálsamo labial de achiote y cochinilla",
    "description": "Dale un color rojo natural a tus labios con este bálsamo nutritivo. Formulado con manteca de cacao, aceite de coco y aguaje para una hidratación profunda. Es comestible, con aroma a coco, y también funciona como rubor o sombra. Protege contra los rayos UV. Presentación de 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/sfMMc",
    "price": 18,
    "catalog_id": 6,
    "ingredients": "Manteca de cacao, cera de abeja, aceite de aguaje, polvo de achiote, cochinilla.",
    "display_order": 14
  },
  {
    "name": "Bálsamo labial de chocolate",
    "description": "Labios de chocolate, ideal para cuidar, hidratar y suavizar. Elaborado con manteca de cacao, polen de abeja, chocolate 100%, aceite de coco, cera de abeja y miel. Sella la humedad y protege del clima. Aroma delicioso a chocolate. Presentación de 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/JuMEz",
    "price": 15,
    "catalog_id": 7,
    "ingredients": "Manteca de cacao, polen de abeja, cacao 100%, aceite de coco, cera de abeja, miel de abeja.",
    "display_order": 15
  },
  {
    "name": "Bálsamo labial natural",
    "description": "Bálsamo labial hidratante con manteca de cacao, cera de abeja, miel de abeja, coco y vainilla. Muy eficaz para labios secos y partidos. Entrega humectación, protección UV y un aroma agradable a vainilla y coco. 100% natural. Presentación de 5 gr.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/Zzxqd",
    "price": 12,
    "catalog_id": 8,
    "ingredients": "Manteca de cacao, cera de abeja, miel de abeja, coco y extracto de vainilla amazónica. ",
    "display_order": 16
  },
  {
    "name": "Bloqueador solar \"yuyito kids\" (30gr)",
    "description": "Protector solar seguro y suave, formulado específicamente para la piel sensible de los niños. FPS 50, resistente al agua y con ingredientes naturales.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/3164C",
    "price": 15,
    "catalog_id": 9,
    "ingredients": "Aceite de aguaje, aceite de coco, aceite de ajonjoli, aceite de zanahoria, manteca de karite, sábila, oxido de zinc, vainilla.\nUso de 2 a 11 años.",
    "display_order": 17
  },
  {
    "name": "Crema de ungurahui y romero para cabello (50gr)",
    "description": "Tratamiento para cabellos fuertes y saludables. Evita la caída, fortalece la raíz, combate la caspa y aporta humectación y brillo. Repara las fibras capilares, estimula el crecimiento y protege de la radiación UV. Apto para damas y caballeros. Se puede usar para peinar.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/IpreD",
    "price": 45,
    "catalog_id": 12,
    "ingredients": "Sábila, aceite de ungurahui, aceite de ricino, hidrolato de romero, cera de abejas, aceite de ajonjolí, aceites esenciales de romero y canela.",
    "display_order": 18
  },
  {
    "name": "Crema nutritiva de aguaje (50gr)",
    "description": "Tratamiento antiestrías de uso nocturno. Regenera la piel, aclara manchas y calma irritaciones. Su alto contenido de antioxidantes y beta-carotenos protege del envejecimiento prematuro y de los rayos UV. Ayuda a producir colágeno para una piel más elástica.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/DHlOq",
    "price": 45,
    "catalog_id": 13,
    "ingredients": "Manteca de cacao, agua destilada, aceite de aguaje amazónica, aceite de coco, emulsificante natural.",
    "display_order": 19
  },
  {
    "name": "Desodorante activo en crema (85gr)",
    "description": "Neutraliza el olor todo el día de forma natural. Combate bacterias, es antiséptico y evita hongos. Formulado con carbón activo, aceites esenciales y arcilla. Libre de aluminio y químicos tóxicos. No causa irritación. Dura hasta 4 meses.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/4xEHO",
    "price": 40,
    "catalog_id": 14,
    "ingredients": "Aceites esenciales de lavanda, limón,  manteca de cacao, aceite de coco, polen de abeja, ricinoleato de zinc, sábila, aceite de copaiba, emulsificante natural.",
    "display_order": 20
  },
  {
    "name": "Desodorante en crema \"yuyito kids\" (30gr)",
    "description": "Desodorante suave en crema, formulado para ser seguro para la piel delicada de los niños. Con aceites esenciales de lavanda, canela y clavo de olor. Libre de aluminio.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/fNUdq",
    "price": 20,
    "catalog_id": 15,
    "ingredients": "Aceites  de manzanilla,  manteca de cacao, aceite de coco, polen de abeja, ricinoleato de zinc, sábila, aceite de copaiba, emulsificante natural.\nUso de 2 a 11 años.",
    "display_order": 21
  },
  {
    "name": "Desodorante en crema de carbón activado (85gr)",
    "description": "Desodorante natural con carbón activado para una purificación y control de olores superior. Neutraliza bacterias, es antiséptico y ayuda a quitar manchas. Libre de aluminio. Muy efectivo y no irritante.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/5QybP",
    "price": 40,
    "catalog_id": 16,
    "ingredients": "Aceites esencial de lavanda y limón, aceite de coco, manteca de cacao, polen de abejas, ricinoleato de zinc, sábila, aceite de copaiba, carbón activado, emulsificante natural.",
    "display_order": 22
  },
  {
    "name": "Jabón de cacao y aguaje (100gr)",
    "description": "Jabón humectante e hidratante que elimina impurezas y toxinas de la piel. Formulado con aceite de coco, manteca de cacao, cacao, café y aceite de aguaje. Deja la piel suave con un delicioso aroma a chocolate. Apto para pieles secas.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/1nXlg",
    "price": 13,
    "catalog_id": 17,
    "ingredients": "Glicerina, aceite de coco, manteca de cacao, aceite de aguaje.",
    "display_order": 23
  },
  {
    "name": "Jabón de cannabis y manzanilla (100gr)",
    "description": "Jabón antibacteriano y antiinflamatorio con cannabis y manzanilla. Ayuda a cicatrizar el acné, calma la comezón y las quemaduras solares. Relajante y emoliente, con un aroma fresco. Apto para piel mixta.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/8LiEs",
    "price": 13,
    "catalog_id": 18,
    "ingredients": "Glicerina, aloe vera, manteca de cacao, aceite de manzanilla, aceite de cannabis.",
    "display_order": 24
  },
  {
    "name": "Jabón de carbon activado (100gr)",
    "description": "Jabón antibacteriano ideal para el acné. Limpia profundamente, equilibra la grasa, elimina toxinas e impurezas. Actúa como un exfoliante suave gracias al carbón activado.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/OIZAS",
    "price": 10,
    "catalog_id": 19,
    "ingredients": "Glicerina, polvo de carbon activado.",
    "display_order": 25
  },
  {
    "name": "Jabón de curcuma (100gr)",
    "description": "Jabón de cúrcuma, conocido por sus propiedades antiinflamatorias y antioxidantes para una piel radiante.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/mc493",
    "price": 15,
    "catalog_id": 20,
    "ingredients": "Glicerina, aceite de coco, cúrcuma, sangre de grado.",
    "display_order": 26
  },
  {
    "name": "Jabón de espirulina (80gr)",
    "description": "Jabón regenerativo con manteca de cacao, sacha inchi, ungurahui y espirulina. Brinda una limpieza suave, reactiva las células de la piel, protege contra radicales libres y radiación UV, y estimula la producción de colágeno. Humectante, hidratante y relajante. Apto para piel mixta.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/98kxy",
    "price": 15,
    "catalog_id": 21,
    "ingredients": "Glicerina, aceite de almendra, sacha inchi, manteca de cacao, espirulina.",
    "display_order": 27
  },
  {
    "name": "Jabón de hierba luisa y limon (100gr)",
    "description": "Jabón emoliente y refrescante con aceite de coco, almendras, manteca de cacao y aceite esencial de limon. Perfecto para relajarse después de un día agotador; hidrata, desinflama, relaja y mejora el sueño. Ideal para una ducha nocturna. Aroma fresco.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/8DpwM",
    "price": 10,
    "catalog_id": 22,
    "ingredients": "Glicerina, hierba luisa, aceite de coco, aceite esencial de limon.",
    "display_order": 28
  },
  {
    "name": "Jabón de maracuya (100gr)",
    "description": "Jabón hidratante y humectante con manteca de cacao, aceite de coco y aceite esencial de canela. Rico en Vitamina C, deja tu piel fresca, suave y renovada con un dulce aroma a frutas. Apto para todo tipo de piel.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/5KMGn",
    "price": 10,
    "catalog_id": 23,
    "ingredients": "Glicerina, aceite de coco, manteca de cacao, aceite esencial de canela.",
    "display_order": 29
  },
  {
    "name": "Jabón de orquidea(100gr)",
    "description": "Jabón humectante e hidratante con aloe vera, aceite de aguaje, aceite de pepa de uvas y extracto de orquídeas. Previene el envejecimiento prematuro, regenera la piel dañada y la nutre con minerales como calcio, hierro, zinc y magnesio. Protege de los rayos UV. Apto para piel mixta.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/puutV",
    "price": 13,
    "catalog_id": 24,
    "ingredients": "Glicerina, aceite de pepa de uva, petalos de orquídea, aloe vera,aceite de aguaje.",
    "display_order": 30
  },
  {
    "name": "Jabón de ruda (100gr)",
    "description": "Jabón para protección y limpieza energética. Elaborado con ruda hembra y macho, salvia y romero. Ayuda a neutralizar energías negativas y contra el mal ojo. Para salud, trabajo y negocios.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/f9IIr",
    "price": 10,
    "catalog_id": 25,
    "ingredients": "Glicerina, aceite de coco, huayruro\nextractos de ruda, salvia y romero.",
    "display_order": 31
  },
  {
    "name": "Jabón exfoliante de cafe (100gr)",
    "description": "Jabón exfoliante con café, aceite de coco, manteca de cacao y aceite de pepas de uvas. Activa la circulación y ayuda a reducir la celulitis. La cafeína ayuda a eliminar toxinas y grasas, dejando la piel más tersa.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/XayUV",
    "price": 10,
    "catalog_id": 26,
    "ingredients": "Glicerina, café, aceite de coco, \nmanteca de cacao,\naceite de pepas de uva.",
    "display_order": 32
  },
  {
    "name": "Jabón para bebe y ninos (100gr)",
    "description": "Jabón suave y sanador con leche de coco, manzanilla y miel de abeja. Ideal para piel delicada y sensible. Super relajante, mantiene la piel suave y protegida. Libre de químicos tóxicos y aluminio.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/yzTqC",
    "price": 20,
    "catalog_id": 59,
    "ingredients": "Glicerina, manzanilla, \nmiel de abeja, leche de coco.\n",
    "display_order": 33
  },
  {
    "name": "Jabón para bebe y ninos (50gr)",
    "description": "Jabón suave y sanador con leche de coco, manzanilla y miel de abeja. Ideal para piel delicada y sensible. Super relajante, mantiene la piel suave y protegida. Libre de químicos tóxicos y aluminio.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/YaGP6",
    "price": 10,
    "catalog_id": 27,
    "ingredients": "Glicerina, manzanilla, \nmiel de abeja, leche de coco.\n",
    "display_order": 33
  },
  {
    "name": "Jabón sangre de grado, copaiba y arnica (100gr)",
    "description": "Jabón cicatrizante efectivo para heridas y acné inflamado. Ayuda a desinfectar, funciona como antiinflamatorio y regenera la piel. Atenúa manchas y cicatrices recientes. Humectante e hidratante natural.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/oOVJU",
    "price": 15,
    "catalog_id": 28,
    "ingredients": "Glicerina, arnica, cacao,\naceite de copaiba, aceite \nde oliva, sangre de grado.",
    "display_order": 34
  },
  {
    "name": "Locion de aguaje (30ml)",
    "description": "Loción tratamiento para cicatrices y manchas en la piel. Aclara las manchas, es antioxidante y regenera la piel. Proporciona hidratación, humectación y elasticidad. Tonifica, protege de los rayos UV y ayuda con la producción de colágeno. Se recomienda refrigerar.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/IqwYe",
    "price": 40,
    "catalog_id": 32,
    "ingredients": "Agua destilada, sábila, aceite de girasol, aceite de jasmin, aceite de aguaje amazónica, emulsificante.",
    "display_order": 35
  },
  {
    "name": "Locion de espirulina (30ml)",
    "description": "Loción formulada para pieles atópicas, sensibles y delicadas. De uso nocturno, ayuda a combatir la comezón de la dermatitis atópica. Brinda hidratación inmediata, previene el ingreso de alérgenos, protege de radiaciones solares y ayuda a cicatrizar el acné. Hipoalergénica. Refrigerar.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/9j5yu",
    "price": 40,
    "catalog_id": 33,
    "ingredients": "Agua destilada, espirulina, aloe vera, aceite de sacha inchi, aceite de girasol, emulsificante.",
    "display_order": 36
  },
  {
    "name": "Locion repelente (100ml)",
    "description": "Repelente natural super efectivo con aceites esenciales de romero, muña, clavo de olor, lavanda, hierva luisa y eucalipto. Apto para niños y adultos. Cubre la piel evitando picaduras por hasta 5 horas. Hidrata y es apto para todo tipo de piel.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/vCWsZ",
    "price": 25,
    "catalog_id": 35,
    "ingredients": "Emulsificante, aceites esenciales de romero, muña, clavo de olor, hidrolato de romero, lavanda, hierba luisa, eucalipto.",
    "display_order": 37
  },
  {
    "name": "Mascara de pestanas (maron)",
    "description": "Máscara de pestañas en color marrón para un look definido y natural.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/msC6B",
    "price": 27,
    "catalog_id": 36,
    "ingredients": "Aceite de ungurahui, cera candelilla, hidrolato de romero, cera carnahuba, extracto de manzanilla, emulsionante natural, vitamina E, aceite de jojoba, pigmento natural.",
    "display_order": 38
  },
  {
    "name": "Mascara de pestanas (negro)",
    "description": "Máscara de pestañas en color negro clásico para un impacto dramático.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/RLJG5",
    "price": 27,
    "catalog_id": 37,
    "ingredients": "Aceite de ungurahui, cera candelilla, hidrolato de romero, cera carnahuba, extracto de manzanilla, emulsionante natural, vitamina E, aceite de jojoba, pigmento natural negro.",
    "display_order": 39
  },
  {
    "name": "Mascarilla solida",
    "description": "Mascarilla facial sólida, fácil de aplicar y enjuagar, para un tratamiento práctico.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/hzjxZ",
    "price": 25,
    "catalog_id": 38,
    "ingredients": "Aceite de açai, carbón activado, almidon de arrurruz, arcilla, espirulina, avena, betaina de coco, manteca de cacao, glicerina.",
    "display_order": 40
  },
  {
    "name": "Oleo amazonico",
    "description": "Óleo amazónico, una mezcla de aceites preciosos de la selva para diversos usos nutritivos.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/1L4n6",
    "price": 55,
    "catalog_id": 39,
    "ingredients": "Aceites de jojoba, sacha inchi, ungurahui, aguaje y girasol, extractos de manzanilla y lavanda, aceite esencial de lavanda, macerado de vainilla amazónica, vitamina E.",
    "display_order": 41
  },
  {
    "name": "Orquídea cream antiedad (50gr)",
    "description": "Tratamiento anti-edad de lujo con aloe vera, manteca de cacao, aceite de aguaje, aceite de pepas de uvas, polen de abejas y extracto de orquídeas. Antioxidante, retrasa el envejecimiento, regula la pigmentación y nutre la piel con minerales. Deja la piel suave, luminosa y libre de impurezas.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/RejBR",
    "price": 45,
    "catalog_id": 40,
    "ingredients": "Aloe vera, manteca de cacao, \naceite de aguaje, aceite de \npepas de uvas, aceite de coco, \nextracto de orquideas, emulsificante, agua destilada, aceite esencial de lavanda.",
    "display_order": 42
  },
  {
    "name": "Pasta dental \"yuyito kids\" (30gr)",
    "description": "Pasta dental suave y segura para el cuidado dental de los más pequeños.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/eE17y",
    "price": 15,
    "catalog_id": 42,
    "ingredients": "Carbonato de calcio, sábila, betaina de coco, infución de muña, aceites esenciales de clavo de olor, canela y menta, aceite de ajonjolí, saborizante de fresa.\nUso de 2 a 11 años.",
    "display_order": 43
  },
  {
    "name": "Roll on analgesico con CBD (10gr)",
    "description": "Roll on analgésico con CBD para aliviar dolores musculares y articulares de forma localizada. Ayuda a aliviar contracturas y relajar músculos y articulaciones. Crema calmante recomendada para masajes.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/m1IxN",
    "price": 40,
    "catalog_id": 45,
    "ingredients": "CBD cannabidiol medicinal, extracto de manzanilla, aceite de copaiba, aceite de ajonjoli.",
    "display_order": 44
  },
  {
    "name": "Roll on para ojeras con CBD (10gr)",
    "description": "Roll on para el contorno de ojos con CBD, para reducir ojeras e hinchazón.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/MJPWr",
    "price": 35,
    "catalog_id": 46,
    "ingredients": "CBD, \naceite de girasol, extracto de manzanilla. ",
    "display_order": 45
  },
  {
    "name": "Shampoo herbal solido de romero y ungurahui (80gr)",
    "description": "Shampoo sólido herbal con romero y ungurahui. Hidrata, nutre y da brillo al cabello. Evita la caída, estimula el crecimiento y previene la caspa. La combinación de ungurahui, acai y linaza restaura cada fibra del pelo profundamente. Aroma a romero.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/nnxzG",
    "price": 28,
    "catalog_id": 47,
    "ingredients": "Aceites de acai, ungurahui, sacha inchi y coco, extracto de romero,  harinas de linaza, romero y menta, betaina de coco,\ntensoactivos naturales.",
    "display_order": 46
  },
  {
    "name": "Stick iluminador (dorado)",
    "description": "Stick iluminador en tono dorado para realzar los puntos altos del rostro.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/dG8mr",
    "price": 27,
    "catalog_id": 51,
    "ingredients": "Sangre de grado, manteca de cacao, cera abeja, almidon de arrurruz, oxido de zinc, aceite de açaí, aceite esencial de lavanda, pigmento natural.",
    "display_order": 47
  },
  {
    "name": "Stick iluminador (rosado perlado)",
    "description": "Stick iluminador en tono rosado perlado para un brillo suave y natural.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/wBxZ3",
    "price": 27,
    "catalog_id": 52,
    "ingredients": "Sangre de grado, manteca de cacao, cera abeja, almidon de arrurruz, oxido de zinc, aceite de açaí, aceite esencial de lavanda, pigmento natural.",
    "display_order": 48
  },
  {
    "name": "Unguento cannabis y manzanilla (50gr)",
    "description": "Ungüento para aliviar dolores en los músculos y sanar la piel. Calma irritación y prurito, ayuda a eliminar bacterias que causan acné. Recomendado para masajes calmantes y relajantes. Hidratante, reafirmante, regenerador y rico en ácidos grasos esenciales y Vitamina E. No contiene alcanfor.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/kqLrJ",
    "price": 45,
    "catalog_id": 53,
    "ingredients": "Cera de abeja, manteca de cacao, aceite de ungurahui, aceite de manzanilla, aceite de cannabis, sábila y aceite de ajonjolí. ",
    "display_order": 49
  },
  {
    "name": "Unguento de espirulina (50gr)",
    "description": "Ungüento nutritivo de espirulina para tratar y rejuvenecer la piel. Aporta flexibilidad, suavidad y elasticidad, ayudando a luchar contra el envejecimiento prematuro. Protege contra la radiación UV y es antiinflamatorio.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/AqRXf",
    "price": 50,
    "catalog_id": 54,
    "ingredients": "Cera de abejas, aloe vera, aceite de sacha inchi, aceite de ungurahui, espirulina.",
    "display_order": 50
  },
  {
    "name": "Unguento nutritivo de aguaje (50gr)",
    "description": "Ungüento profundamente nutritivo con aguaje para pieles secas o dañadas. Ayuda a regenerar estrías y cicatrices, aclara manchas y protege del envejecimiento prematuro.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/57Edf",
    "price": 45,
    "catalog_id": 55,
    "ingredients": "Cera de abeja, manteca de cacao, aceite de aguaje amazónica, aceite de jasmin.",
    "display_order": 51
  },
  {
    "name": "Unguento orquídea antiedad (50gr)",
    "description": "Ungüento antiedad con orquídea para una acción intensiva contra las arrugas. Nutre la piel con minerales, manteniéndola suave, luminosa y libre de impurezas.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/tRtgK",
    "price": 45,
    "catalog_id": 56,
    "ingredients": "Aloe vera, manteca de cacao,\naceite de aguaje, aceite de \npepas de uvas, polen de abejas, extracto de orquideas, cera abejas.",
    "display_order": 52
  },
  {
    "name": "Elixir capilar (30ml)",
    "description": "Formula botánica con ortiga y romero para estimular el crecimiento, manzanilla para suavizar y aceites de sacha inchi, ungurahui y palta para hidratar profundamente. Los aceites esenciales de menta y romero activan la circulación, mientras la glicerina sella la humedad.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/mJKx9",
    "price": 50,
    "catalog_id": 57,
    "ingredients": "Infusión de manzanilla, extracto de ortiga, extracto de romero, glicerina, aceites de sacha inchi, ungurahui y palta, aceites esenciales de menta y romero, agua destilada, emulsificantes naturales.",
    "display_order": 53
  },
  {
    "name": "Loción antiacné \"lux selva pura\" (30ml)",
    "description": "Formula botánica antiacné con acción reparadora a base de ingredientes botánicos. El aceite de sacha inchi y girasol nutre sin obstruir los poros, mientras el oleato y extracto de manzanilla calman la piel. La cúrcuma y la espirulina purifican, y la sangre de grado favorece la regeneración celular. Fórmula ligera con agua destilada y emulsificante natural.\nCombate granos e impurezas sin resecar, repara y regenera la piel dañada y calma rojeces e irritaciones.",
    "image": "https://encantos-automations-droppy.qsirhi.easypanel.host/$/BF9FU",
    "price": 50,
    "catalog_id": 58,
    "ingredients": "Aceites de sacha inchi y girasol, oleato de manzanilla, extractos de cúrcuma, espirulina y manzanilla, sangre de grado, agua destilada, emulsificante natural.",
    "display_order": 54
  }
];
