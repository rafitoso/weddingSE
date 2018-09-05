<template>
  <div class="admin">
    <h2>TODO :</h2>
    <ul>
      <li>Acheter nom de domaine</li>
      <li>Acheter le template pour le site internet</li>
      <li>
        <p>Formulaire RSVP</p>
        <ul>
          <li>Ajouter la possibilité de mettre des accompagnants et des enfants (nom et prénom pour chacun)</li>
          <li>Ajouter la possibilité de mettre un titre musical</li>
        </ul>
      </li>
      <li>Admin : Page liste invité, page de détails invité</li>
      <li>Voir comment présenter les chambres disponibles sur place</li>
    </ul>
    <InviteList></InviteList>
  </div>
</template>

<script>
import InviteList from '@/components/sections/InviteList'

export default {
  name: 'AdminPage',
  components: {
    InviteList
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
