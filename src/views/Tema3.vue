<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de información aduanero

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los Sistemas de Información Aduaneros (SIA) son herramientas tecnológicas creadas para supervisar, organizar y mejorar los procesos de comercio exterior. Su función es agilizar el movimiento de mercancías, garantizar el cumplimiento de las normativas y reforzar la seguridad en las operaciones aduaneras.

    #t_3_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.1	Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema3/2.png", alt="Imagen decorativa")
      .col-lg-9
        p Un Sistema de Información Aduanero (SIA) es una plataforma tecnológica que facilita la gestión y automatización de procesos clave en el comercio exterior. Gracias a estas herramientas, tanto las autoridades aduaneras como los diferentes actores involucrados pueden manejar eficientemente tareas como la declaración de mercancías, el control de impuestos y aranceles, la supervisión de riesgos y fiscalización, y el intercambio de información con otros sistemas a nivel nacional e internacional.
        p.mb-0 La implementación de los sistemas de información aduanero ha traído beneficios como, por ejemplo:

    .row.justify-content-center.align-items-center.z-2
      .col-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/temas/tema3/20.png', alt='Imagen decorativa')
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordion-documents")
          div(titulo="Facilitación del comercio internacional")
            p.ms-lg-5.ps-lg-2 Incluye el nombre comercial y técnico del producto, códigos de referencia como SKU, serial o lote, y el modelo o versión si aplica. Estos datos permiten una trazabilidad precisa y facilitan la gestión logística. La claridad en la identificación evita confusiones en aduanas y garantiza que el producto cumpla con los registros requeridos por las autoridades.

          div(titulo="Mejora continua y adaptabilidad")
            p.ms-lg-5.ps-lg-2 No se limita a su implementación inicial, sino que se transforma constantemente para ajustarse a las necesidades cambiantes del sector. Gracias a su capacidad de mejora continua y adaptación a nuevas tecnologías y regulaciones, mantiene su eficiencia y relevancia. Esta flexibilidad permite que los países sigan el ritmo de las tendencias globales y conserven su posición como un actor fundamental en el comercio exterior.

          div(titulo="Aspectos sostenibles y ecológicos")
            p.ms-lg-5.ps-lg-2 Al optimizar los procesos, disminuye la dependencia del papel al reducir la documentación física, lo que contribuye a un menor impacto ambiental. Además, su eficiencia en la gestión del transporte de mercancías ayuda a disminuir las emisiones contaminantes, alineando las operaciones aduaneras con los objetivos internacionales de sostenibilidad y responsabilidad ecológica.

          div(titulo="Tendencias en desarrollo tecnológico")
            p.ms-lg-5.ps-lg-2 El uso de inteligencia artificial, blockchain y análisis predictivo se está investigando para optimizar la seguridad y la eficiencia en la gestión aduanera. La integración de estas tecnologías puede aportar ventajas como una mayor transparencia en los procesos y una reducción aún más significativa en los tiempos de operación

    Separador

    #t_3_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.2 Características

    p.mb-4.mb-lg-5 Los sistemas de información aduaneros actuales cuentan con características clave que los hacen imprescindibles para la administración eficiente del comercio exterior:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 7.
          span Características de los sistemas de información aduanero
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema3/3-mob.png', alt='Características de los sistemas de información aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema3/3.png', alt='Características de los sistemas de información aduanero')
        figcaption <strong>Fuente</strong>: SENA, 2025

    #t_3_3(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.3 Tipos
    
    p.mb-4.mb-lg-5 Los sistemas de información aduanero pueden clasificarse según su alcance, función y usuarios principales. A continuación, se presentan los principales tipos:

    .row.justify-content-center.align-items-center.mb-3.mb-lg-4.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Tabla 4. 
          span Tipos de sistemas de información aduanero.
        
        .tabla-d.color-acento-contenido.mb-2
          table.documents-table
            caption <strong>Fuente</strong>. Sena, 2025
            thead
              tr(style="background: #9FA3FF; color: #fff;")
                th Tipo
                th Descripción
                th Ejemplo
            tbody
              tr
                td(rowspan="3") <strong>Nivel de administración</strong>
                td Sistemas nacionales: plataformas implementadas por la autoridad aduanera de un país.
                td 
                  p SYGA (Colombia)
                  p.mb-0 CBP (EEUU)
              tr
                td Sistemas regionales: integran operaciones entre países de un bloque económico.
                td 
                  p SYGA (Colombia)
                  p.mb-0 CBP (EEUU)
              tr
                td Sistemas globales: plataformas internacionales para estandarizar procesos.
                td SAFE Framework (OMA)
              tr(style="background: #F4F5FF;")
                td(rowspan="3") <strong>Función principal</strong>
                td Sistemas globales: plataformas internacionales para estandarizar procesos.
                td Garantiza calidad y cumplimiento de estándares.
              tr(style="background: #F4F5FF;")
                td Sistemas de control: fiscalizar el movimiento de mercancías.
                td 
                  p Perfilamiento de riesgo. 
                  p.mb-0 Selectividad automatizada.
              tr(style="background: #F4F5FF;")
                td Sistemas de facilitación: agilizar comercio para operadores calificados.
                td 
                  p Canales rápidos.
                  p.mb-0 Despacho anticipado.
              tr
                td(rowspan="3") <strong>Tipo de usuario</strong>
                td Sistemas gubernamentales: autoridades aduaneras.
                td SYGA (Colombia)
              tr
                td Sistemas corporativos: empresas privadas.
                td <em>Oracle Trade Management</em>
              tr
                td Sistemas intermedios: agentes de aduana y logística.
                td <em>Software</em> especializado para agente.

              tr(style="background: #F4F5FF;")
                td(rowspan="3") <strong>Especializados</strong>
                td Ventanillas únicas: integración de trámites con otras entidades.
                td VUCE (Colombia)
              tr(style="background: #F4F5FF;")
                td Sistemas de tributación: gestión específica de impuestos.
                td TIM (Brasil)
  
              tr(style="background: #F4F5FF;")
                td Plataformas logísticas: seguimiento de carga.
                td Plataformas de <em>tracking</em>.

    Separador

    #t_3_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.4 Aplicaciones y funcionalidades

    h4.world-title.my-5 SYGA

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El Sistema de Información y Gestión Aduanera (SYGA) es una herramienta tecnológica desarrollada por la Dirección de Impuestos y Aduanas Nacionales (DIAN) de Colombia con el propósito de modernizar y mejorar la eficiencia en los procesos de control aduanero. SYGA tiene como objetivo automatizar todo el proceso de gestión aduanera, incorporando módulos para supervisión, auditoría y optimización del comercio. Además, adopta estándares internacionales establecidos por la Organización Mundial de Aduanas (OMA) para garantizar eficiencia y cumplimiento normativo.

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.align-items-center.factores-slider.z-2.mb-4.mb-lg-5
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/temas/tema3/5.png', alt='Imagen decorativa')

      .col-sm-8.col-md-10.col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/6.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 De importación
            ul.checklist
              li Registro de Declaración Andina de Valor (DAV).
              li Solicitud de levante.
              li Pago de tributos aduaneros.
              li Trámites para admisión temporal, perfeccionamiento activo.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/7.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 De exportación
            ul.checklist
              li  Registro de Declaración de Exportación (DUEX).
              li Certificados de origen.
              li Devolución de saldos a favor.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/8.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Operadores económicos
            ul.checklist
              li  Certificación OEA (Operador Económico Autorizado).
              li Registro de usuarios aduaneros.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/9.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Fiscalización y control
            ul.checklist
              li Solicitud de revisión documental o física.
              li Reclamos y recursos.
              li Consultas de estado.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema3/10.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Gestión de regímenes especiales
            ul.checklist
              li Zonas francas.
              li Depósitos habilitados.
              li Tránsito aduanero.

    p.mb-4.mb-lg-5 Según análisis realizado por la DIAN, podemos mencionar que SYGA ha reducido en 60 % los tiempos de procesamiento respecto al sistema anterior, convirtiéndose en la herramienta clave para el comercio exterior en Colombia.

    h4.world-title.my-5 VUCE

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-9
        p.mb-4 De acuerdo con su portal, la Ventanilla Única de Comercio Exterior –VUCE– es la principal herramienta de Facilitación del Comercio del País, a través de la cual se canalizan trámites de comercio exterior de 62.000 usuarios vinculados a 20 entidades del Estado, coordinadas por el Ministerio de Comercio, Industria y Turismo, con el fin de intercambiar información, eliminar redundancia de procedimientos, implementar controles eficientes y promover actuaciones administrativas transparente.
        .row.align-items-center
          .col-lg-3
            figure
              img(data-aos="fade-in")(src='@/assets/curso/temas/tema3/11.png' alt='Icon decarativo')
          .col-lg-9
            .p-4.bg-acento-contenido-ac5
              p.mb-0 Este sistema incorpora la firma digital para asegurar la protección tecnológica y legal de los trámites. Además, implementa el pago electrónico en línea, permitiendo agilizar las gestiones económicas ante las entidades correspondientes. El sistema VUCE ofrece a los usuarios las herramientas necesarias para realizar procesos electrónicos de exportación e importación con total confianza. Garantiza rapidez, precisión, disponibilidad y seguridad en cada trámite, asegurando la integridad de la información mediante el uso de firma electrónica.
      .col-lg-3
        figure
          img(data-aos="fade-in")(src='@/assets/curso/temas/tema3/12.png' alt='Icon decarativo')

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 8.
          span Principales trámites y servicios de la VUCE.
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema3/13-mob.png', alt='Características de los sistemas de información aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema3/13.png', alt='Características de los sistemas de información aduanero')
        figcaption <strong>Fuente</strong>: tomado y adoptado de trámites y servicios de la VUCE de Ventanilla Única de Comercio Exterior. https://www.vuce.gov.co/vuce/tramites-y-servicios-de-la-vuce

    Separador

    #t_3_5(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 3.5 Técnica de uso

    p.mb-4.mb-lg-5 Los sistemas de información aduaneros actuales utilizan métodos avanzados para mejorar la gestión de procesos, reforzar la seguridad y aumentar la eficiencia en el comercio exterior. A continuación, se destacan las principales técnicas empleadas:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 9.
          span Técnicas de uso.
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema3/14-mob.png', alt='Características de los sistemas de información aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema3/14.png', alt='Características de los sistemas de información aduanero')
        figcaption <strong>Fuente</strong>: tomado y ad






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
