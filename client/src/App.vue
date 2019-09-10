<template>
  <div id="app">
    <page-header />
    <router-view/>
    <footer />
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

</style>
