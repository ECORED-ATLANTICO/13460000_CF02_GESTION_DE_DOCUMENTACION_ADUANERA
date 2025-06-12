<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-4.mb-lg-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/introduction/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este componente está diseñado para brindar los conocimientos fundamentales sobre la gestión eficiente de documentación en el ámbito aduanero. Se abordarán las fichas técnicas de mercancías, herramienta esencial para la correcta clasificación y manejo de productos, analizando su concepto, importancia, tipos y elementos clave. Además, se explorarán las metodologías y herramientas tecnológicas para la recopilación y registro de información, garantizando su integridad y confidencialidad en todos los procesos.

    p.mb-4.mb-lg-5 Asimismo, se profundizará en los sistemas de información aduaneros, examinando sus características, tipos, aplicaciones y funcionalidades. Se enseñarán técnicas para su uso adecuado y medidas para asegurar la protección de los datos, un aspecto crítico en el comercio exterior. Al finalizar, los aprendices contarán con las competencias necesarias para gestionar documentación aduanera de manera precisa, segura y conforme a la normativa vigente.
    
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
