<template>
  <div id="app">
    <page-header />
    <router-view/>
    <footer />
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    PageHeader,
    Footer
  }
}
</script>

<style>

</style>
