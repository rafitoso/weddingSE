<template>
  <div id="app">
    <!-- To Top -->
    <a href="#gla_page" class="gla_top ti ti-angle-up gla_go"></a>
    <MainHeader></MainHeader>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    MainHeader,
    Footer
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
}
</style>
