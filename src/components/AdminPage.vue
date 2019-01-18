<template>
  <div class="admin">
    <div class="gla_page_title gla_image_bck gla_wht_txt" data-color="#282828" style="background-color: rgb(40, 40, 40);">
      <div class="container text-left">
        <div class="row">
          
          <div class="col-md-12">
            <h1 class="gla_h1_title">Administration</h1>
            <h3>Gestion des invités</h3>
          </div>
          
         <!--  <div class="col-md-4">
            <div class="breadcrumbs">
              <a href="#">Home</a><a href="#">Shop</a><span>Shop Single</span>
            </div>
          </div> -->
          
        </div>
      </div>
    </div>

    <InviteList></InviteList>


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
    
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/5.4.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2JoZJ0V16n_3U8kkxxm_1zC8f4qwxFJc",
    authDomain: "weddingse-7decf.firebaseapp.com",
    databaseURL: "https://weddingse-7decf.firebaseio.com",
    projectId: "weddingse-7decf",
    storageBucket: "weddingse-7decf.appspot.com",
    messagingSenderId: "833808230985"
  };
  firebase.initializeApp(config);
</script>
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
