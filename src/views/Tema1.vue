<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comercio exterior
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el ámbito del comercio exterior, la ficha técnica se constituye en un documento fundamental. Para los actores comerciales (importadores/exportadores), representa un instrumento estandarizado que permite identificar eficientemente las especificaciones técnicas del producto. Desde la perspectiva logística, proporciona datos críticos que facilitan a los operadores de transporte, planificar y ejecutar el movimiento de mercancías de manera adecuada.

    Separador

    #t_1_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.1	Diferencias entre frutas y verduras

    .row.justify-content-center.align-items-center
      .col-8.col-sm-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema1/2.png', alt='Imagen decorativa')
      .col-lg-9
          p La ficha técnica de mercancías, conforme a la Dirección de Impuestos y Aduanas Nacionales (DIAN) de Colombia, es un documento detallado que describe las características físicas, técnicas, químicas y/o comerciales de un producto, necesario para su correcta clasificación arancelaria, valoración aduanera y verificación del cumplimiento de requisitos legales en operaciones de importación y exportación.
          p Además de ser el documento de identificación del producto en operaciones de comercio exterior, la ficha técnica cumple funciones estratégicas clave:
          ul.checklist.mb-0
            li Análisis de viabilidad: permite evaluar sostenibilidad, costos y factibilidad operativa.
            li Gestión de riesgos: facilita la creación de planes de acción optimizados.
            li Herramienta comercial: simplifica la búsqueda y comparación de productos por parte de clientes, establece estándares de calidad verificables.
            li Relaciones empresariales: fortalece la confianza entre exportadores e importadores.
            li Control financiero: ayuda a medir rentabilidad en toda la cadena (producción, distribución y comercio exterior).

    Separador

    #t_1_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.2	Elementos

    p La ficha técnica de mercancías, conforme a la Dirección de Impuestos y Aduanas Nacionales (DIAN) de Colombia, es un documento detallado que describe las características físicas, técnicas, químicas y/o comerciales de un producto, necesario para su correcta clasificación arancelaria, valoración aduanera y verificación del cumplimiento de requisitos legales en operaciones de importación y exportación.
    p.mb-4.mb-lg-5 Además de ser el documento de identificación del producto en operaciones de comercio exterior, la ficha técnica cumple funciones estratégicas clave:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 1.
          span Etapas del comercio exterior
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema1/3-mob.png', alt='Etapas del comercio exterior')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema1/3.png', alt='Etapas del comercio exterior')
        figcaption <strong>Fuente</strong>: SENA, 2025

    .row.justify-content-center.align-items-center.z-2
      .col-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema1/4.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-documents")
          div(titulo="Identificación del producto")
            p.ms-lg-5.ps-lg-2 Incluye el nombre comercial y técnico del producto, códigos de referencia como SKU, serial o lote, y el modelo o versión si aplica. Estos datos permiten una trazabilidad precisa y facilitan la gestión logística. La claridad en la identificación evita confusiones en aduanas y garantiza que el producto cumpla con los registros requeridos por las autoridades.

          div(titulo="Composición y características técnicas")
            p.ms-lg-5.ps-lg-2 Detalla los materiales o componentes con sus porcentajes, propiedades físicas y químicas (peso, dimensiones, pureza), y especificaciones técnicas según normas como ISO, INVIMA o ICONTEC. Esta información es vital para verificar la calidad del producto y su cumplimiento con regulaciones técnicas y sanitarias, asegurando su adecuado manejo y comercialización.

          div(titulo="Datos del fabricante/proveedor")
            p.ms-lg-5.ps-lg-2 Contiene la razón social y el país de origen del fabricante o proveedor, junto con sus certificaciones de producción. Estos datos son esenciales para validar la legitimidad del producto y su procedencia, además de respaldar su calidad mediante certificaciones reconocidas internacionalmente o por entidades locales como INVIMA o ANLA

          div(titulo="Clasificación arancelaria")
            p.ms-lg-5.ps-lg-2 Especifica la subpartida TARIC/NANDINA y los tratados de libre comercio aplicables. Esta clasificación determina los aranceles e impuestos, facilitando el despacho aduanero. Una correcta identificación arancelaria optimiza costos y evita sanciones por errores en la declaración, asegurando el cumplimiento de normativas internacionales y locales.

          div(titulo="Información de seguridad y regulaciones")
            p.ms-lg-5.ps-lg-2 Incluye pictogramas de riesgo si el producto es peligroso, así como registros sanitarios o ambientales (INVIMA, ANLA). Este apartado garantiza el manejo seguro del producto y su conformidad con regulaciones de salud y medio ambiente, previniendo riesgos durante el transporte, almacenamiento y uso final.

          div(titulo="Uso y manejo")
            p.ms-lg-5.ps-lg-2 Proporciona instrucciones de almacenamiento, transporte, vida útil y condiciones de conservación. Estas indicaciones son cruciales para mantener la integridad del producto y evitar deterioro. Su cumplimiento asegura que la mercancía llegue en óptimas condiciones al consumidor final, cumpliendo con estándares de calidad y seguridad.

    p.mb-4.mb-lg-5 Se presenta como ejemplo la ficha técnica del aguacate en la siguiente tabla:

    .row.justify-content-center.align-items-center.mb-3.mb-lg-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 1. 
          span Ejemplo ficha técnica del aguacate
        
        .tabla-d.color-acento-contenido.mb-2
          table.documents-table
            caption <strong>Fuente</strong>. Sena, 2025
            thead
              tr(style="background: #9FA3FF; color: #fff;")
                th(colspan="2") Criterio (según)
                th(colspan="3") Clasificación
                th(colspan="3") Ejemplo
            tbody
              tr
                td(colspan="2")(rowspan="4") Identificación
                td(colspan="3") Nombre comercial: aguacate Hass
                td(colspan="3")(rowspan="4") Trazabilidad desde cultivo hasta exportación.
              tr
                td(colspan="3") Nombre técnico: Persea americana var. Hass
              tr
                td(colspan="3") ELote: LOT-AG24-05
              tr
                td(colspan="3") SKU: AVO-HASS-001
                
              tr(style="background: #F4F5FF;")
                td(colspan="2")(rowspan="3") Composición y características
                td(colspan="3") Pulpa (65 %), semilla (20 %), cáscara (15 %)
                td(colspan="3")(rowspan="3") Garantiza calidad y cumplimiento de estándares.
              tr(style="background: #F4F5FF;")
                td(colspan="3") Peso: 200-300 g
              tr(style="background: #F4F5FF;")
                td(colspan="3") Normas: NTC 4086 (ICONTEC), FDA

              tr
                td(colspan="2")(rowspan="3") Fabricante/proveedor
                td(colspan="3") Razón social: AgroFruta S.A.
                td(colspan="3")(rowspan="3") Garantiza calidad y cumplimiento de estándares.
              tr
                td(colspan="3") País: Colombia
              tr
                td(colspan="3") Certificaciones: Global G.A.P., Fair Trade
                
              tr(style="background: #F4F5FF;")
                td(colspan="2")(rowspan="2") Clasificación arancelaria
                td(colspan="3") Subpartida: 0804.40.00 (NANDINA)
                td(colspan="3")(rowspan="2") Garantiza calidad y cumplimiento de estándares.
              tr(style="background: #F4F5FF;")
                td(colspan="3") TLC aplicable: Acuerdo Colombia-UE

              tr
                td(colspan="2")(rowspan="3") Seguridad y regulaciones
                td(colspan="3") Certificado fitosanitario (ICA)
                td(colspan="3")(rowspan="3") Garantiza calidad y cumplimiento de estándares.
              tr
                td(colspan="3") Libre de plagas (Anastrepha spp.)
              tr
                td(colspan="3") Cumple FDA/UE
                
              tr(style="background: #F4F5FF;")
                td(colspan="2")(rowspan="3") Uso y manejo
                td(colspan="3") Almacenamiento: 12-15 °C, humedad 85-90 %
                td(colspan="3")(rowspan="3") Garantiza calidad y cumplimiento de estándares.
              tr(style="background: #F4F5FF;")
                td(colspan="3") Vida útil: 30 días postcosecha
              tr(style="background: #F4F5FF;")
                td(colspan="3") Transporte: Refrigerado (4 °C)

    Separador

    .fullwidth-bg.fullwidth-bg--1
    #t_1_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.3	Importancia

    p.mb-4.mb-lg-5 Según Alexia Calderón (2025), en el ámbito del comercio internacional, la ficha técnica se convierte en un documento fundamental, ya que garantiza el cumplimiento de las normas, certificaciones y requisitos legales exigidos en cada mercado. Además, proporciona a importadores y exportadores una comprensión detallada de las propiedades y especificaciones del producto, lo que agiliza los procesos comerciales y previene conflictos o interpretaciones erróneas.

    .row.justify-content-center.align-items-center.z-2
      .col-sm-7.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/5.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3
            h5.text-center Cumplimiento regulatorio internacional
            ul.checklist
              li Funciona como documento acreditativo del cumplimiento de normativas sanitarias, de seguridad y calidad en diferentes mercados.
              li Permite demostrar al apego a regulaciones como <em>FDA</em> (EEUU), <em>CE</em> (Europa) o normas INVIMAS/ICA (Colombia).
              li Evita rechazos en aduanas por incumplimientos técnico.

      .col-sm-7.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/6.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3
            h5.text-center Facilitación el comercio
            ul.checklist
              li Agiliza los procesos de despacho aduanero al contener toda la información requerida.
              li Reduce tiempos de inspección y verificación en fronteras.
              li Disminuye costos operativos asociados a retrasos logísticos.

      .col-sm-7.col-lg-6.col-xl-4.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/7.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3.color-acento-contenido
            h5.text-center Herramienta contractual
            ul.checklist
              li Minimiza disputas comerciales por diferencias en características del producto.
              li Protege tanto a compradores como vendedores al definir parámetros medibles.

      .col-sm-7.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/8.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3.color-acento-contenido
            h5.text-center Competitividad internacional
            ul.checklist
              li Demuestra profesionalismo y capacidad técnica para mercados exigentes.
              li Permite acceder a preferencias arancelarias al probar origen y composición.
              li Facilita la homologación con estándares internacionales de calidad.

      .col-sm-7.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/9.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3.color-acento-contenido
            h5.text-center Gestión logística optimizada
            ul.checklist
              li Proporciona información crítica para transporte y almacenamiento.
              li Indica condiciones especiales de manejo (temperatura, humedad, etc.).
              li Precisa requisitos de embalaje y manipulación segura.

      .col-sm-7.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/10.png", alt="Imagen decorativa")
          .crd_hover_txt--body.px-3.color-acento-contenido
            h5.text-center Trazabilidad integral
            ul.checklist
              li Permite seguimiento completo desde origen hasta destino final.
              li Facilita procesos de <em>recall</em> o retiro del mercado cuando es necesario.
              li Apoya la gestión de calidad en cadenas globales de suministro.

    p.mt-4.mt-lg-5.mb-0 Se puede concluir que la ficha técnica ya no es solo un documento descriptivo, sino una herramienta legal y operativa para competir en el comercio global. Su elaboración precisa es estratégica para evitar riesgos y optimizar oportunidades de negocio.

    Separador

    .fullwidth-bg.fullwidth-bg--2
    #t_1_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 1.4	Tipos

    p.mb-4.mb-lg-5 La ficha técnica de mercancías varía según el régimen aduanero (importación, exportación, entre otros) y las características de la mercancía (origen, valor y composición). Estos factores determinan los requisitos y documentos necesarios para cumplir con las normativas, facilitando el control y la clasificación arancelaria. Cada caso exige una ficha específica para garantizar el correcto despacho y legalidad del proceso.

    h4.world-title.my-5 Según el régimen aduanero

    p.mb-4.mb-lg-5 Dependiendo del régimen aduanero bajo el cual se declare la mercancía, el tipo de ficha técnica puede variar.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 2.
          span Fichas técnicas según régimen aduanero
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema1/11-mob.png', alt='Fichas técnicas según régimen aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema1/11.png', alt='Fichas técnicas según régimen aduanero')
        figcaption <strong>Fuente</strong>: SENA, 2025

    h4.world-title.my-5 Según la naturaleza de la mercancía

    p.mb-4.mb-lg-5 La información requerida en una ficha técnica de mercancías según su naturaleza varía dependiendo de sus características físicas, químicas y regulatorias.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Fichas técnicas según naturaleza de la mercancía
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema1/12-mob.png', alt='Fichas técnicas según régimen aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema1/12.png', alt='Fichas técnicas según régimen aduanero')
        figcaption <strong>Fuente</strong>: SENA, 2025

    .tabla-d.color-acento-contenido.mb-2
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 2. 
        span Ejemplo de ficha técnica

      table.documents-table
        caption <strong>Fuente</strong>. Tomado de Internacionalmente, 2025
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Presentación comercial
        tbody
          tr
            td(colspan="3") Saco de polipropileno laminado y bolsa interior de polietileno por 25 kg neto.
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Condiciones de almacenamiento
        tbody
          tr
            td(colspan="3") Almacenar en un lugar fresco y seco a temperaturas inferiores a 30 °C y humedad relativa por debajo de 65 %, alejado de la luz directa del sol, de focos de contaminación y de humedad.
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Vida útil
        tbody
          tr
            td(colspan="3") 12 meses a las condiciones de almacenamiento especificadas, en su empaque original.
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Instrucciones de manejo
        tbody
          tr
            td(colspan="3") Después de abierto consumir en el menor tiempo posible y proteger de ambientes húmedos. En caso de derrames, limpiar inmediatamente desechando el material.
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Declaraciones de alérgenos
        tbody
          tr
            td(style="width: 10%;") No.
            td(style="width: 70%;") Alérgeno (L. Pub. 108-282/2004, Título II (USA, FALCPA); Reglamento (UE) N°1169/2011)
            td(style="width: 20%;") Código
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 1
            td(style="width: 70%; text-align: left") Apio y productos elaborados con él.
            td(style="width: 20%;") ?
          tr
            td(style="width: 10%;") 2
            td(style="width: 70%; text-align: left") Cereales que contienen gluten (trigo, centeno, cebada, avena, kamut o sus semillas híbridas) y productos derivados.
            td(style="width: 20%;") ?
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 3
            td(style="width: 70%; text-align: left") Crustáceos y productos elaborados con ellos.
            td(style="width: 20%;") ---
          tr
            td(style="width: 10%;") 4
            td(style="width: 70%; text-align: left") Huevos y productos elaborados con ellos.
            td(style="width: 20%;") ---
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 5
            td(style="width: 70%; text-align: left") Pescado y productos elaborados con él, excepto la gelatina de pescado utilizada como soporte para vitaminas.
            td(style="width: 20%;") ---
          tr
            td(style="width: 10%;") 6
            td(style="width: 70%; text-align: left") Cacahuetes (maní) y productos elaborados con ellos.
            td(style="width: 20%;") ?
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 7
            td(style="width: 70%; text-align: left") Soya y productos elaborados con ella.
            td(style="width: 20%;") ?
          tr
            td(style="width: 10%;") 8
            td(style="width: 70%; text-align: left") Leche y sus derivados (incluida la lactosa).
            td(style="width: 20%;") ?
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 9
            td(style="width: 70%; text-align: left") Frutos de cáscara (almendras, avellanas, nueces, anacardos, pacanas, nueces de Brasil, pistachos, macadamia).
            td(style="width: 20%;") ---
          tr
            td(style="width: 10%;") 10
            td(style="width: 70%; text-align: left") Mostaza y productos elaborados con ella.
            td(style="width: 20%;") ---
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 11
            td(style="width: 70%; text-align: left") Granos de sésamo (ajonjolí) y productos elaborados con ellos.
            td(style="width: 20%;") ---
          tr
            td(style="width: 10%;") 12
            td(style="width: 70%; text-align: left") Dióxido de azufre y sulfitos en concentraciones superiores a 10 mg/kg o 10 mg/L.
            td(style="width: 20%;") ?
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 13
            td(style="width: 70%; text-align: left") Altramuces y productos elaborados con ellos.
            td(style="width: 20%;") ---
          tr
            td(style="width: 10%;") 14
            td(style="width: 70%; text-align: left") Moluscos y productos elaborados con ellos.
            td(style="width: 20%;") ?
          tr(style="background: #F4F5FF;")
            td(style="width: 10%;") 15
            td(style="width: 70%; text-align: left") Otros alérgenos no contemplados en normativa pero de alto impacto clínico.
            td(style="width: 20%;")
          tr
            td(colspan="3")(style="text-align: left") (+) +++ Presencia, --- Ausencia, ? Puede contener trazas
        thead
          tr(style="background: #9FA3FF; color: #fff;")
            th(colspan="3") Observación
        tbody
          tr
            td(colspan="3")(style="text-align: left") Para los productos que se elaboran en nuestras instalaciones, existe la posibilidad de que estos u otros alérgenos se presenten debido a prácticas comunes de manufactura. Por tal motivo, se deben validar las fichas técnicas y/o tablas de ingredientes, además de revisar y validar los alérgenos en la etiqueta del producto final.
        

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
