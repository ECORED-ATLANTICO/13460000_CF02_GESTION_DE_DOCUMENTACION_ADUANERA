<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Gestión de información

    img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10.col-xl-8
        div.banner-text-container
          p.mb-0 Haisan Abdel Malak (2022) define la gestión de la información como el proceso de gestión del ciclo de vida completo de la información, desde su identificación y recopilación hasta su eliminación mediante el archivo o la eliminación. engloba todos los datos físicos y electrónicos recopilados por una empresa de sus clientes, empleados y proveedores.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-4
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/2.png", alt="Imagen decorativa")
      .col-lg-6
        p maginemos que la información es como un tesoro. Pero, ¿de qué sirve tener un montón de tesoros si no sabes cuáles son valiosos, cómo encontrarlos o cómo usarlos? Ahí es donde entra la gestión de la información, que es como tener un mapa y una brújula para navegar por ese tesoro.
        p.mb-0 Así, la gestión de la información se convierte en un activo valioso para las empresas, una herramienta que permite tomar decisiones acertadas, anticiparse a los cambios y aprovechar las oportunidades. No es solo un medio para alcanzar el conocimiento, sino un camino en sí mismo hacia el éxito.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 4.
          span Aspectos importantes en la gestión de información.
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema2/3-mob.png', alt='Fichas técnicas según régimen aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema2/3.png', alt='Fichas técnicas según régimen aduanero')
        figcaption <strong>Fuente</strong>. tomado y adaptado de Introducción a la gestión de la información y del conocimiento en la empresa, por Universidad Politécnica de Valencia, 2022. https://riunet.upv.es/bitstreams/e0125038-9086-42d8-954e-4401b3f5637e/download

    Separador

    .fullwidth-bg.fullwidth-bg--1
    #t_2_1(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.1	Metodologías de recopilación de información

    p.mb-4.mb-lg-5 La recopilación de información consiste en obtener, filtrar y estructurar datos provenientes de diferentes fuentes, con el objetivo de utilizarlos para análisis, investigaciones o toma de decisiones específicas.

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 5.
          span Características principales de la recopilación de información.
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4-mob.png', alt='Fichas técnicas según régimen aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4.png', alt='Fichas técnicas según régimen aduanero')
        figcaption <strong>Fuente</strong>. tomado y adaptad

    p.mb-4.mb-lg-5 A continuación, se presentan las principales metodologías utilizadas en la recopilación de información:

    .row.justify-content-center.align-items-center.mb-3.mb-lg-4.z-2
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 3. 
        span Principales metodologías para la recopilación de información
      
      .tabla-d.color-acento-contenido.mb-2
        table.documents-table
          caption <strong>Fuente</strong>. Sena, 2025
          thead
            tr(style="background: #9FA3FF; color: #fff;")
              th(style="width: 25%;") Metodología
              th(style="width: 50%;") Descripción
              th(style="width: 25%;") Implementación
          tbody
            tr
              td(style="width: 25%;") Encuestas y cuestionarios
              td(style="width: 50%;") Es un mecanismo de recolección popular que permite obtener datos directamente de los sujetos de interés. Para garantizar de forma correcta su diseño es necesario tener en cuenta las variables requeridas y formular preguntas que permitan cumplir los objetivos. 
              td(style="width: 25%;") Formularios digitales (Google y Microsoft Forms, Typeform) o físicos.             
            tr(style="background: #F4F5FF;")
              td(style="width: 25%;") Entrevistas
              td(style="width: 50%;") Son un tipo de herramienta que se realiza de manera individual, y consiste en la aplicación de un cuestionario que puede ser estructurado o no. Antes de aplicarse se debe definir las variables a identificar para obtener los datos adecuados.
              td(style="width: 25%;") Entrevistas
            tr
              td(style="width: 25%;") Observación
              td(style="width: 50%;") Es una técnica simple que pretende reconocer el comportamiento del objeto de estudio de manera directa, y su aplicación no requiere gran disponibilidad de recursos. 
              td(style="width: 25%;") Recolección de datos en tiempo real.
            tr(style="background: #F4F5FF;")
              td(style="width: 25%;") Grupos focales
              td(style="width: 50%;") Consiste en desarrollar una entrevista colectiva que permite contrastar las respuestas de los participantes y fomentar la discusión sobre el tema tratado, de esta manera es posible enriquecer los datos y ver las diversas perspectivas sobre una problemática.
              td(style="width: 25%;") Entrevista grupal
            tr
              td(style="width: 25%;") Minería de datos
              td(style="width: 50%;") Es el proceso de descubrir patrones, correlaciones y tendencias ocultas en grandes conjuntos de datos mediante técnicas estadísticas.
              td(style="width: 25%;") Uso de IA y <em>machine learning.</em>            
            tr(style="background: #F4F5FF;")
              td(style="width: 25%;") <em>Web scraping</em>
              td(style="width: 50%;") Técnica para extraer información automatizada de sitios web mediante bots o scripts, convirtiendo datos no estructurados en estructurados.
              td(style="width: 25%;") Entrevista grupal
            tr
              td(style="width: 25%;") Minería de datos
              td(style="width: 50%;") Es la captura automática de datos mediante dispositivos físicos conectados a internet (sensores, wearables, cámaras inteligentes), que transmiten información en tiempo real.
              td(style="width: 25%;") Captura automática de datos mediante dispositivos conectados.

    Separador

    #t_2_2(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.2 Técnicas de diligenciamiento de registros

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-sm-8.col-md-6.col-lg-3
        figure
          img.mb-4.mb-lg-0(data-aos="fade-up")(src="@/assets/curso/temas/tema2/5.png", alt="Imagen decorativa")
      .col-lg-9
        p El diligenciamiento de registros no se trata simplemente de llenar casillas vacías; es un proceso que requiere estrategia y cuidado. Implica el uso de tecnologías avanzadas, normas claras y buenas prácticas para convertir los datos en recursos confiables y útiles. Para lograrlo, es fundamental contar con herramientas de validación, invertir en la formación constante del equipo y fomentar una cultura organizacional que valore la calidad de la información.
        p.mb-0 Entre las técnicas más utilizadas para el diligenciamiento de registros encontramos las siguientes:

    .fullwidth-bg.fullwidth-bg--4
    .row.justify-content-center.align-items-center.factores-slider.z-2
      .col-sm-8.col-lg-4.d-none.d-xl-block
        figure
          img(src='@/assets/curso/temas/tema2/6.png', alt='Imagen decorativa')

      .col-sm-8.col-md-10.col-xl-8.mb-3.mb-lg-0
        SlyderF(columnas="col-lg-6")
          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema2/7.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Sistemas de gestión de bases de datos
            ul.checklist
              li Bases de datos relacionales.
              li Bases de datos no relacionales.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema2/8.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Plataformas de formularios digitales
            ul.checklist
              li  Google Forms.
              li Microsoft Forms.
              li Jot Forms.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema2/9.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 <em>Software</em> ERP y CRM
            ul.checklist
              li  SAP.
              li Salesforce.
              li Odoo.

          .tarjeta.p-4.card-decoration.rounded-4.mx-2.my-3
            .row.justify-content-center.mb-3
              .col-5
                img.mb-2(src='@/assets/curso/temas/tema2/10.svg' alt='Icon decarativo')
            h5.bg-acento-contenido.text-center.p-2 Aplicaciones móviles de recolección
            ul.checklist
              li KoboToolbox.
              li Fulcrum.


    Separador

    #t_2_4(data-aos='zoom-in-right').titulo-segundo.color-acento-contenido.z-2
      h3 2.4	Principios de manejo confidencial de información

    p.mb-4.mb-lg-5 Preservar la confidencialidad de la información es esencial para empresas de cualquier tamaño. Una protección adecuada de los datos sensibles no solo ayuda a evitar posibles sanciones y multas, sino que también fortalece la confianza de clientes, empleados y otros actores clave en la organización.

    .row.justify-content-center.align-items-center.z-2.p-4.bg-mc.mb-4.mb-lg-5
      .col-lg-7
        p Esto implica que la información personal, los secretos y otros datos empresariales privados están resguardados contra accesos indebidos, divulgaciones no autorizadas y posibles robos.
        p Con el aumento en la frecuencia y sofisticación de las brechas de seguridad, las compañías deben adoptar estrategias de protección robustas para asegurarse de que la información que debe mantenerse privada realmente permanezca segura.
      .col-lg-3
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/11.png", alt="Imagen decorativa")

    p.mb-4.mb-lg-5 Los principios para el manejo de información confidencial son esenciales para asegurar la seguridad, precisión y privacidad de los datos sensibles dentro de cualquier organización. A continuación, se destacan los principios clave:

    .row.justify-content-center.align-items-center.z-2.mb-4.mb-lg-5
      .col-md-10.col-lg-12.col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 6.
          span  Principios para el manejo confidencial de información.
        img.mb-2.d-lg-none(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4-mob.png', alt='Fichas técnicas según régimen aduanero')
        img.mb-2.d-none.d-lg-block(data-aos="fade-up")(src='@/assets/curso/temas/tema2/4.png', alt='Fichas técnicas según régimen aduanero')
        figcaption <strong>Fuente</strong>. SENA, 2025

    .row.justify-content-center.align-items-center
      .col-lg-8
        p.mb-lg-4 La confidencialidad en el manejo de la información es esencial cuando se trata de proteger datos personales y corporativos. Su propósito es asegurar que la información sensible solo pueda ser vista o utilizada por personas y sistemas con la autorización adecuada. Es clave en distintos ámbitos, desde el cumplimiento de normativas legales hasta la seguridad dentro de las organizaciones y el uso de tecnología para resguardar datos. Mantener la confidencialidad no solo protege la privacidad, sino que también fortalece la confianza en el manejo responsable de la información.
      .col-lg-4
        figure
          img(data-aos="fade-up")(src="@/assets/curso/temas/tema2/12.png", alt="Imagen decorativa")


</template>

<script>
export default {
  name: 'Tema2',
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
