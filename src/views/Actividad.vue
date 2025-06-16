<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fichas técnicas y sistemas de información aduanero.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Validar el conocimiento adquirido sobre fichas técnicas de mercancías y todo lo concerniente a sistemas de información aduanero.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué característica permite a los sistemas aduaneros adaptarse a cambios normativos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Automatización',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escalabilidad',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Interoperabilidad',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Trazabilidad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de ficha técnica describe la mercancía para su ingreso legal al país?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De importación',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Admisión temporal',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Depósito aduanero',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Peligrosas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'De acuerdo con el documento, ¿cuál no es un beneficio de los sistemas de información aduanero?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguridad',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Interoperabilidad',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de costos arancelarios',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Automatización',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué incluye el "uso y manejo" en una ficha técnica?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instrucciones de almacenamiento y transporte',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promociones de venta',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombres de competidores',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Precios en otros países',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: 'Las mercancías peligrosas requieren en su ficha técnica:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recetas médicas',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Hojas de seguridad (MSDS) y clase de riesgo',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Fotografías del producto',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Opiniones de clientes',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Qué es un Sistema de Información Aduanero (SIA)?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un software para diseño gráfico',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una red social para agentes aduaneros',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Una plataforma que gestiona procesos de comercio exterior',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Un sistema de mensajería interna',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: 'SYGA en Colombia se enfoca en',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gestionar redes sociales de la DIAN',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar tráfico vehicular en puertos',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Vender productos importados',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar procesos aduaneros y calcular impuestos',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: 'La Ventanilla Única de Comercio Exterior (VUCE) permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Comprar mercancías sin impuestos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Integrar trámites de múltiples entidades en un solo sistema',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar inspecciones aduaneras',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acortar la vida útil de los productos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: 'La trazabilidad en comercio exterior permite:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Seguir el producto desde origen hasta destino',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ocultar información del fabricante',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar el pago de impuestos',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir la calidad del producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué entidad colombiana está a cargo de SYGA?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ministerio de comercio exterior',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alcaldía de Bogotá',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Superintendencia de industria y comercio',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'DIAN',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué beneficio clave ofrece la ficha técnica en aduanas?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el peso del producto',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar cumplimiento regulatorio y agilizar despachos',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar el volumen de exportación',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar aranceles',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Qué es una ficha técnica de mercancías según la DIAN?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un documento financiero para calcular impuestos',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un detalle de las características físicas, técnicas y químicas de un producto',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un contrato entre importador y exportador',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una lista de precios de mercado',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Cuál de estos elementos NO es parte de una ficha técnica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificación arancelaria',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Datos del fabricante',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Historial crediticio del importador',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Información de seguridad',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: 'La interoperabilidad en los SIA se refiere a:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacidad de compartir datos con otras plataformas',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aislamiento de sistemas',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo para un país',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación de registros históricos',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué tipo de ficha técnica se usa para mercancías en tránsito temporal?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'De importación',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'De admisión temporal',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'De reembarque',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'De depósito aduanero',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: 'Un ejemplo de sistema regional es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'OEA',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SIDUNEA',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ICONTEC',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Naciones Unidas',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: 'El perfilamiento de riesgo en SIA sirve para:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la velocidad de procesamiento',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diseñar empaques',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Aumentar los aranceles',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Seleccionar mercancías para inspección basado en análisis predictivo',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Para un aguacate Hass, ¿qué dato es relevante en su ficha técnica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Número de empleados del fabricante',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Certificado fitosanitario (ICA)',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Color preferido por los consumidores',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicidad del producto',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'En el contexto de los Sistemas de Información Aduaneros (SIA), ¿qué tecnología se menciona como clave para garantizar la inviolabilidad de los certificados de origen?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Inteligencia Artificial',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Blockchain',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Realidad Virtual',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cloud Computing',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de los siguientes elementos es esencial en una ficha técnica de productos farmacéuticos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fecha de vencimiento y condiciones de almacenamiento',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio de venta en el mercado local',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombre del distribuidor minorista',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicidad del producto en medios digitales',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Excelente trabajo. Tiene un claro entendimiento sobre fichas técnicas y sistemas de información aduanero.',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! lo felicito, ha superado la actividad',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
