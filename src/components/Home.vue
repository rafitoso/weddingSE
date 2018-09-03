<template>
  <div class="home">
    <slider></slider>
    <h1>{{ msg }}</h1>
    ICI

    <h2>TODO :</h2>
    <ul>
      <li>Acheter nom de domaine</li>
      <li>Acheter le template pour le site internet</li>
      <li>Intégrer dans Home.vue la single page choisi -> bien utiliser la segmentation par composant</li>
        <ul>
          <li>Composant header</li>
          <li>Composant footer</li>
          <li>Composant par section</li>
        </ul>
      <li>Voir comment présenter les chambres disponibles sur place</li>
    </ul>
  </div>
</template>

<script>
import Slider from '@/components/sections/Slider'

export default {
  name: 'Home',
  components: {
    Slider
  },
  props: {
    msg: {
      default: 'Bienvenue',
      type: String
    }
  },
  data () {
    return {
      // msg: this.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.home {
  text-align: left;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
