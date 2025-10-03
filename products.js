const products = [
  {
    "name": "Aceite de aguaje (30ml)",
    "description": "Aceite nutritivo de aguaje, rico en beta-carotenos. Protege la piel del envejecimiento prematuro, ayuda a regenerar estrías y cicatrices, y aclara manchas. Un antioxidante natural que protege de los radicales libres y los rayos UV.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-099_HRU_E.png",
    "price": 35,
    "id": 1
  },
  {
    "name": "Aceite de cannabis 10% (10ml)",
    "description": "Aceite de cannabis con una concentración del 10%, ideal para uso terapéutico y relajante.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-088_5oDL-.png",
    "price": 250,
    "id": 2
  },
  {
    "name": "Aceite de cannabis 5% (10ml)",
    "description": "Aceite de cannabis con una concentración del 5%, perfecto para introducción y uso moderado.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-089_V5RQ4.png",
    "price": 180,
    "id": 3
  },
  {
    "name": "Aceite de ungurahui (30ml)",
    "description": "Aceite nutritivo de ungurahui, excelente para tratamientos capilares y cuidado de la piel. Rico en ácidos grasos esenciales, hidrata y regenera profundamente.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-138_27Md2.png",
    "price": 35,
    "id": 4
  },
  {
    "name": "Acondicionador en crema (100ml)",
    "description": "Acondicionador en crema para un cabello suave, manejable y profundamente hidratado.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250920_151712_FDXp4.jpg",
    "price": 30,
    "id": 5
  },
  {
    "name": "Bálsamo labial de achiote y cochinilla",
    "description": "Dale un color rojo natural a tus labios con este bálsamo nutritivo. Formulado con manteca de cacao, aceite de coco y aguaje para una hidratación profunda. Es comestible, con aroma a coco, y también funciona como rubor o sombra. Protege contra los rayos UV. Presentación de 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250623_131657(0)_dv1ig.jpg",
    "price": 18,
    "id": 6
  },
  {
    "name": "Bálsamo labial de chocolate",
    "description": "Labios de chocolate, ideal para cuidar, hidratar y suavizar. Elaborado con manteca de cacao, polen de abeja, chocolate 100%, aceite de coco, cera de abeja y miel. Sella la humedad y protege del clima. Aroma delicioso a chocolate. Presentación de 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_6024_y_FBv.jpg",
    "price": 15,
    "id": 7
  },
  {
    "name": "Bálsamo labial natural",
    "description": "Bálsamo labial hidratante con manteca de cacao, cera de abeja, miel de abeja, coco y vainilla. Muy eficaz para labios secos y partidos. Entrega humectación, protección UV y un aroma agradable a vainilla y coco. 100% natural. Presentación de 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_5160_dvnwt.jpg",
    "price": 12,
    "id": 8
  },
  {
    "name": "Bloqueador solar \"yuyito kids\" (30gr)",
    "description": "Protector solar seguro y suave, formulado específicamente para la piel sensible de los niños. FPS 50, resistente al agua y con ingredientes naturales.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-117_C8UvB.png",
    "price": 15,
    "id": 9
  },
  {
    "name": "Bloqueador solar (100ml)",
    "description": "Fotoprotector solar natural FPS 50. Forma una pantalla bloqueadora que protege contra los rayos UVB. Resistente al agua, apto para piel sensible y grasa. Aplicar 10 minutos antes de la exposición al sol.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-054_zt18B.png",
    "price": 70,
    "id": 10
  },
  {
    "name": "Bloqueador solar (30ml)",
    "description": "Tamaño práctico de nuestro fotoprotector solar natural FPS 50. Ideal para llevar a todas partes. Protección de amplio espectro, resistente al agua y apto para todo tipo de piel.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-054_Oliof.png",
    "price": 25,
    "id": 11
  },
  {
    "name": "Crema de ungurahui y romero para cabello (50gr)",
    "description": "Tratamiento para cabellos fuertes y saludables. Evita la caída, fortalece la raíz, combate la caspa y aporta humectación y brillo. Repara las fibras capilares, estimula el crecimiento y protege de la radiación UV. Apto para damas y caballeros. Se puede usar para peinar.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250104_103700(1)_oMslK.jpg",
    "price": 45,
    "id": 12
  },
  {
    "name": "Crema nutritiva de aguaje (50gr)",
    "description": "Tratamiento antiestrías de uso nocturno. Regenera la piel, aclara manchas y calma irritaciones. Su alto contenido de antioxidantes y beta-carotenos protege del envejecimiento prematuro y de los rayos UV. Ayuda a producir colágeno para una piel más elástica.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-097_oSi04.png",
    "price": 45,
    "id": 13
  },
  {
    "name": "Desodorante activo en crema (85gr)",
    "description": "Neutraliza el olor todo el día de forma natural. Combate bacterias, es antiséptico y evita hongos. Formulado con carbón activo, aceites esenciales y arcilla. Libre de aluminio y químicos tóxicos. No causa irritación. Dura hasta 4 meses.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-051_7zQSr.png",
    "price": 40,
    "id": 14
  },
  {
    "name": "Desodorante en crema \"yuyito kids\" (30gr)",
    "description": "Desodorante suave en crema, formulado para ser seguro para la piel delicada de los niños. Con aceites esenciales de lavanda, canela y clavo de olor. Libre de aluminio.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-114_U9wIh.png",
    "price": 20,
    "id": 15
  },
  {
    "name": "Desodorante en crema de carbón activado (85gr)",
    "description": "Desodorante natural con carbón activado para una purificación y control de olores superior. Neutraliza bacterias, es antiséptico y ayuda a quitar manchas. Libre de aluminio. Muy efectivo y no irritante.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/",
    "price": 40,
    "id": 16
  },
  {
    "name": "Jabón de cacao y aguaje (100gr)",
    "description": "Jabón humectante e hidratante que elimina impurezas y toxinas de la piel. Formulado con aceite de coco, manteca de cacao, cacao, café y aceite de aguaje. Deja la piel suave con un delicioso aroma a chocolate. Apto para pieles secas.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_5173_pn6MR.jpg",
    "price": 13,
    "id": 17
  },
  {
    "name": "Jabón de cannabis y manzanilla (100gr)",
    "description": "Jabón antibacteriano y antiinflamatorio con cannabis y manzanilla. Ayuda a cicatrizar el acné, calma la comezón y las quemaduras solares. Relajante y emoliente, con un aroma fresco. Apto para piel mixta.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/",
    "price": 13,
    "id": 18
  },
  {
    "name": "Jabón de carbon activado (100gr)",
    "description": "Jabón antibacteriano ideal para el acné. Limpia profundamente, equilibra la grasa, elimina toxinas e impurezas. Actúa como un exfoliante suave gracias al carbón activado.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/",
    "price": 10,
    "id": 19
  },
  {
    "name": "Jabón de curcuma (100gr)",
    "description": "Jabón de cúrcuma, conocido por sus propiedades antiinflamatorias y antioxidantes para una piel radiante.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250104_105413_1__IedOH.jpg",
    "price": 15,
    "id": 20
  },
  {
    "name": "Jabón de espirulina (80gr)",
    "description": "Jabón regenerativo con manteca de cacao, sacha inchi, ungurahui y espirulina. Brinda una limpieza suave, reactiva las células de la piel, protege contra radicales libres y radiación UV, y estimula la producción de colágeno. Humectante, hidratante y relajante. Apto para piel mixta.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_6978__czCD.jpg",
    "price": 15,
    "id": 21
  },
  {
    "name": "Jabón de hierba luisa y limon (100gr)",
    "description": "Jabón emoliente y refrescante con aceite de coco, almendras, manteca de cacao y aceite esencial de naranja. Perfecto para relajarse después de un día agotador; hidrata, desinflama, relaja y mejora el sueño. Ideal para una ducha nocturna. Aroma fresco.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_5134_SQXpt.jpg",
    "price": 10,
    "id": 22
  },
  {
    "name": "Jabón de maracuya (100gr)",
    "description": "Jabón hidratante y humectante con manteca de cacao, aceite de coco y aceite esencial de canela. Rico en Vitamina C, deja tu piel fresca, suave y renovada con un dulce aroma a frutas. Apto para todo tipo de piel.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/",
    "price": 10,
    "id": 23
  },
  {
    "name": "Jabón de orquidea (100gr)",
    "description": "Jabón humectante e hidratante con aloe vera, aceite de aguaje, aceite de pepa de uvas y extracto de orquídeas. Previene el envejecimiento prematuro, regenera la piel dañada y la nutre con minerales como calcio, hierro, zinc y magnesio. Protege de los rayos UV. Apto para piel mixta.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_4675_cI5Ph.jpg",
    "price": 13,
    "id": 24
  },
  {
    "name": "Jabón de ruda (100gr)",
    "description": "Jabón para protección y limpieza energética. Elaborado con ruda hembra y macho, salvia y romero. Ayuda a neutralizar energías negativas y contra el mal ojo. Para salud, trabajo y negocios.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20241219_081205_zlN8C.jpg",
    "price": 10,
    "id": 25
  },
  {
    "name": "Jabón exfoliante de cafe (100gr)",
    "description": "Jabón exfoliante con café, aceite de coco, manteca de cacao y aceite de pepas de uvas. Activa la circulación y ayuda a reducir la celulitis. La cafeína ayuda a eliminar toxinas y grasas, dejando la piel más tersa.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/",
    "price": 10,
    "id": 26
  },
  {
    "name": "Jabón para bebe y ninos (50gr)",
    "description": "Jabón suave y sanador con leche de coco, manzanilla y miel de abeja. Ideal para piel delicada y sensible. Super relajante, mantiene la piel suave y protegida. Libre de químicos tóxicos y aluminio.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-04-26 at 21.33.41_li09r.jpg",
    "price": 10,
    "id": 27
  },
  {
    "name": "Jabón sangre de grado, copaiba y arnica (100gr)",
    "description": "Jabón cicatrizante efectivo para heridas y acné inflamado. Ayuda a desinfectar, funciona como antiinflamatorio y regenera la piel. Atenúa manchas y cicatrices recientes. Humectante e hidratante natural.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/extracted_images-152_3l5j6.png",
    "price": 15,
    "id": 28
  },
  {
    "name": "Labial (cattleya fucsia)",
    "description": "Pinta tus labios al máximo con este vibrante color fucsia. Labial nutritivo e hidratante formulado con manteca de cacao, aceite de coco, cera de abejas, polen, miel y pigmentos minerales. Es comestible, de aroma dulce, y se puede usar como rubor o sombra. Libre de químicos tóxicos. 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250916_134118(1)_yiAqQ.jpg",
    "price": 27,
    "id": 29
  },
  {
    "name": "Labial (coral pishcota)",
    "description": "Un tono coral suave y natural para labios hidratados y con color. Elaborado con ingredientes naturales como manteca de cacao y cera de abeja. Es comestible, nutritivo y multifuncional (labial, rubor, sombra). Libre de químicos tóxicos. Presentación de 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250623_131205(1)_hD-vd.jpg",
    "price": 27,
    "id": 30
  },
  {
    "name": "Labial (rojo moshaka)",
    "description": "Un rojo intenso y clásico para un look audaz. Labial hidratante formulado con manteca de cacao, aceite de coco, cera de abejas, polen, miel y pigmentos minerales. Nutre, hidrata y pinta tus labios sin químicos tóxicos. Presentación de 5 gr.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250916_133431(1)__FhUR.jpg",
    "price": 27,
    "id": 31
  },
  {
    "name": "Locion de aguaje (30ml)",
    "description": "Loción tratamiento para cicatrices y manchas en la piel. Aclara las manchas, es antioxidante y regenera la piel. Proporciona hidratación, humectación y elasticidad. Tonifica, protege de los rayos UV y ayuda con la producción de colágeno. Se recomienda refrigerar.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250904_140521(1)__Deuy.jpg",
    "price": 40,
    "id": 32
  },
  {
    "name": "Locion de espirulina (30ml)",
    "description": "Loción formulada para pieles atópicas, sensibles y delicadas. De uso nocturno, ayuda a combatir la comezón de la dermatitis atópica. Brinda hidratación inmediata, previene el ingreso de alérgenos, protege de radiaciones solares y ayuda a cicatrizar el acné. Hipoalergénica. Refrigerar.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-09-29 at 14.31.37_5586b738_vk-74.jpg",
    "price": 40,
    "id": 33
  },
  {
    "name": "Locion de ungurahui (30ml)",
    "description": "Loción nutritiva de ungurahui para restaurar la suavidad y elasticidad de la piel. Rica en ácidos grasos esenciales.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250904_140521_bqWvv.jpg",
    "price": 40,
    "id": 34
  },
  {
    "name": "Locion repelente (100ml)",
    "description": "Repelente natural super efectivo con aceites esenciales de romero, muña, clavo de olor, lavanda, hierva luisa y eucalipto. Apto para niños y adultos. Cubre la piel evitando picaduras por hasta 5 horas. Hidrata y es apto para todo tipo de piel.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250104_104638_t3bg2.jpg",
    "price": 25,
    "id": 35
  },
  {
    "name": "Mascara de pestanas (maron)",
    "description": "Máscara de pestañas en color marrón para un look definido y natural.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-09-29 at 14.31.36_51a20a8f_7XXA6.jpg",
    "price": 27,
    "id": 36
  },
  {
    "name": "Mascara de pestanas (negro)",
    "description": "Máscara de pestañas en color negro clásico para un impacto dramático.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-09-29 at 14.31.36_669f8a39_STx_5.jpg",
    "price": 27,
    "id": 37
  },
  {
    "name": "Mascarilla solida",
    "description": "Mascarilla facial sólida, fácil de aplicar y enjuagar, para un tratamiento práctico.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/Imagen de WhatsApp 2024-08-13 a las 11.32.43_a1e1d1dd(1)_8FEXE.jpg",
    "price": 25,
    "id": 38
  },
  {
    "name": "Orquídea cream antiedad (50gr)",
    "description": "Tratamiento anti-edad de lujo con aloe vera, manteca de cacao, aceite de aguaje, aceite de pepas de uvas, polen de abejas y extracto de orquídeas. Antioxidante, retrasa el envejecimiento, regula la pigmentación y nutre la piel con minerales. Deja la piel suave, luminosa y libre de impurezas.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250104_103233_Z6as4.jpg",
    "price": 45,
    "id": 39
  },
  {
    "name": "Pack \"yuyito kids\"",
    "description": "Pack especial para niños que incluye productos suaves y seguros para su cuidado diario.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250407_115902_IHZOW.jpg",
    "price": 55,
    "id": 40
  },
  {
    "name": "Pasta dental \"yuyito kids\" (30gr)",
    "description": "Pasta dental suave y segura para el cuidado dental de los más pequeños.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250602_173720(1)_bff6R.jpg",
    "price": 15,
    "id": 41
  },
  {
    "name": "Pasta dental vegano sin flúor (100gr)",
    "description": "Pasta dental vegana con carbonato de calcio, muña, sábila y betaina de coco. Tiene propiedades antiinflamatorias y antibacteriales. Limpia profundamente, elimina placa, previene caries y fortalece dientes y encías. Libre de flúor, parabenos, apta para veganos, celiacos, niños y adultos.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_6863_TRjUc.jpg",
    "price": 30,
    "id": 42
  },
  {
    "name": "Roll on analgesico con CBD (10gr)",
    "description": "Roll on analgésico con CBD para aliviar dolores musculares y articulares de forma localizada. Ayuda a aliviar contracturas y relajar músculos y articulaciones. Crema calmante recomendada para masajes.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250328_125825_xWieK.jpg",
    "price": 40,
    "id": 43
  },
  {
    "name": "Roll on para ojeras con CBD (10gr)",
    "description": "Roll on para el contorno de ojos con CBD, para reducir ojeras e hinchazón.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250328_125808_XJMUf.jpg",
    "price": 35,
    "id": 44
  },
  {
    "name": "Shampoo herbal solido de romero y ungurahui (80gr)",
    "description": "Shampoo sólido herbal con romero y ungurahui. Hidrata, nutre y da brillo al cabello. Evita la caída, estimula el crecimiento y previene la caspa. La combinación de ungurahui, acai y linaza restaura cada fibra del pelo profundamente. Aroma a romero.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/IMG_6934_MeDr5.jpg",
    "price": 28,
    "id": 45
  },
  {
    "name": "Stick herbal multifuncional (coral)",
    "description": "Stick multifuncional en tono coral para dar color a labios y mejillas. Formulado con ingredientes naturales nutritivos.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250623_131205_k5ooA.jpg",
    "price": 27,
    "id": 46
  },
  {
    "name": "Stick herbal multifuncional (rojo)",
    "description": "Stick multifuncional en tono rojo para un look vibrante en labios y mejillas. Formulado con ingredientes naturales nutritivos.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250916_133453_MSBOA.jpg",
    "price": 27,
    "id": 47
  },
  {
    "name": "Stick iluminador (dorado)",
    "description": "Stick iluminador en tono dorado para realzar los puntos altos del rostro.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250623_131122_IeUip.jpg",
    "price": 27,
    "id": 48
  },
  {
    "name": "Stick iluminador (rosado perlado)",
    "description": "Stick iluminador en tono rosado perlado para un brillo suave y natural.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250623_131122_i8Fhk.jpg",
    "price": 27,
    "id": 49
  },
  {
    "name": "Unguento cannabis y manzanilla (50gr)",
    "description": "Ungüento para aliviar dolores en los músculos y sanar la piel. Calma irritación y prurito, ayuda a eliminar bacterias que causan acné. Recomendado para masajes calmantes y relajantes. Hidratante, reafirmante, regenerador y rico en ácidos grasos esenciales y Vitamina E. No contiene alcanfor.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250112_071508_BjAEU.jpg",
    "price": 45,
    "id": 50
  },
  {
    "name": "Unguento de espirulina (50gr)",
    "description": "Ungüento nutritivo de espirulina para tratar y rejuvenecer la piel. Aporta flexibilidad, suavidad y elasticidad, ayudando a luchar contra el envejecimiento prematuro. Protege contra la radiación UV y es antiinflamatorio.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-09-29 at 14.31.36_7d83b07c_adm4P.jpg",
    "price": 50,
    "id": 51
  },
  {
    "name": "Unguento nutritivo de aguaje (50gr)",
    "description": "Ungüento profundamente nutritivo con aguaje para pieles secas o dañadas. Ayuda a regenerar estrías y cicatrices, aclara manchas y protege del envejecimiento prematuro.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250112_071433_DLmuN.jpg",
    "price": 45,
    "id": 52
  },
  {
    "name": "Unguento orquídea antiedad (50gr)",
    "description": "Ungüento antiedad con orquídea para una acción intensiva contra las arrugas. Nutre la piel con minerales, manteniéndola suave, luminosa y libre de impurezas.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/20250112_071850_sH9of.jpg",
    "price": 45,
    "id": 53
  },
  {
    "name": "Oleo amazonico",
    "description": "Óleo amazónico, una mezcla de aceites preciosos de la selva para diversos usos nutritivos.",
    "image": "https://encantos-automations-nocodb.qsirhi.easypanel.host/download/noco/p5l7gx1ys8m94lv/mhka9cevgz62vu6/cedyy885kd8d4xu/WhatsApp Image 2025-09-29 at 14.31.33_67cb788e_1AIOB.jpg",
    "price": 55,
    "id": 54
  }
];
