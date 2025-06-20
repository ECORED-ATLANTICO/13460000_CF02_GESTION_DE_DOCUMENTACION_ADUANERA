<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8.mb-4.mb-lg-0
          .bloque-texto-a__texto.p-4
            p.mb-0 Este componente está diseñado para brindar los conocimientos fundamentales sobre la gestión eficiente de documentación en el ámbito aduanero. Se abordarán las fichas técnicas de mercancías, herramienta esencial para la correcta clasificación y manejo de productos, analizando su concepto, importancia, tipos y elementos clave. Además, se explorarán las metodologías y herramientas tecnológicas para la recopilación y registro de información, garantizando su integridad y confidencialidad en todos los procesos.
        .col-lg-4.mb-4.mb-lg-0
          figure
            img.mb-4.mb-lg-0(data-aos="fade-up")(src='@/assets/curso/introduction/1.png', alt='Imagen decorativa')

    p.mb-4.mb-lg-5 Asimismo, se profundizará en los sistemas de información aduaneros, examinando sus características, tipos, aplicaciones y funcionalidades. Se enseñarán técnicas para su uso adecuado y medidas para asegurar la protección de los datos, un aspecto crítico en el comercio exterior. Al finalizar, los aprendices contarán con las competencias necesarias para gestionar documentación aduanera de manera precisa, segura y conforme a la normativa vigente.
    
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/w8Q9hokKR74" title="Gestión de documentación aduanera" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
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
