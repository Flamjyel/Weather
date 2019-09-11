<template>
  <div id="app">
    <page-header />
    <router-view/>
    <footer-page />
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import FooterPage from '@/components/FooterPage.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    FooterPage
  }
}
</script>

<style>
  body::before {
  content: '';
  position: fixed; /* Фиксируем на одном месте */
  left: 0; right: 0; /* Вся ширин */
  top: 0; bottom: 0; /* Вся высота */
  z-index: -1; /* Фон ниже текста */
  /* Параметры фона */
  background: url('assets/574.jpg') center / cover no-repeat;
  filter: blur(10px); /* Размытие */
  }
</style>
