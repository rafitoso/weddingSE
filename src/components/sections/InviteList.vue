<template>
	<section class="gla_section">
        <div class="container">
          <InviteFormType v-if="addingInvite != false" v-bind:invite="newInvite" v-on:add-invite="addInvite" v-on:cancel-add-invite="stopAddingInvite"></InviteFormType>


          <InviteFormType v-if="editingInvite != null" v-bind:invite="editingInvite" v-on:modify-invite="updateInvite" v-on:cancel-modify-invite="stopModifyingInvite"></InviteFormType>


    			<div class="panel panel-default" v-if="editingInvite == null">
    				<div class="panel-heading">
    					<h3 class="panel-title">
                Liste des invités
                <span class="pull-right"><button class="btn btn-default btn-xs" v-on:click="showAddInvite"><span class="fa fa-plus"></span></button></span>
              </h3>
    				</div>
    	      <div class="panel-body">
    					<table class="table table-striped">
    					  <thead>
    					    <tr>
    					    	<th>Invité</th>
                    <th>Présence</th>
    					    	<th>Email</th>
                    <th>Téléphone</th>
    					    	<th>Actions</th>
    					    </tr>
    					  </thead>
    					  <tbody>
    					    <tr v-for="invite in invites" v-on:click="editInvite(invite)" class="tr-invite">
    					    	<td>{{invite.Prenom}} {{invite.Nom}}</td>
                    <td>
                      <span v-if="invite.Statut && invite.Statut == 'A inviter'" class="label label-warning label-sm">A inviter</span>
                      <span v-if="invite.Statut && invite.Statut == 'Non confirmée'" class="label label-warning label-sm">Non confirmée</span>
                      <span v-if="invite.Statut && invite.Statut == 'Présent'" class="label label-success label-sm">Confirmée</span>
                      <span v-if="invite.Statut && invite.Statut == 'A valider'" class="label label-default label-sm">Non invité</span>
                      <span v-if="invite.Statut && invite.Statut == 'Absent'" class="label label-danger label-sm">Absent</span>
                    </td>
    					    	<td><a v-bind:href="'mailto:'+invite.Email">{{invite.Email}}</a></td>
                    <td>Téléphone</td>
    					    	<td><span class="fa fa-trash" aria-hidden="true" v-on:click="removeInvite(invite)"></span></td>
    					    </tr>
    					  </tbody>
    					</table>
    				</div>
    			</div>
    			
        </div>
  </section>
</template>

<script>
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyD2JoZJ0V16n_3U8kkxxm_1zC8f4qwxFJc",
    authDomain: "weddingse-7decf.firebaseapp.com",
    databaseURL: "https://weddingse-7decf.firebaseio.com",
    projectId: "weddingse-7decf",
    storageBucket: "weddingse-7decf.appspot.com",
    messagingSenderId: "833808230985"
  };
  
let app = Firebase.initializeApp(config)
let db = app.database()
let invitesRef = db.ref('invites')


import InviteFormType from '@/components/forms/InviteFormType'

export default {
  name: 'InviteList',
  firebase: {
  	invites : invitesRef
  },
  components: {
  	InviteFormType
  },
  methods: {
    showAddInvite: function(){
      this.addingInvite = true;
    },
  	addInvite: function () {
  	  invitesRef.push(this.newInvite);
      this.addingInvite = false;
  	  this.newInvite.Prenom  = '';
  	  this.newInvite.Nom = '';
  	  this.newInvite.Email = 'test@mail.com';
  	},
    stopAddingInvite: function(){
      this.addingInvite = false;
    },
    editInvite (invite){
      this.editingInvite = invite;
    },
  	updateInvite: function () {
      console.log(this.editingInvite['.key']);
      // create a copy of the invite
      const copy = Object.assign({}, this.editingInvite)
      // remove the .key attribute
      delete copy['.key']
      invitesRef.child(this.editingInvite['.key']).update(copy);
      this.stopModifyingInvite();
  	},
    stopModifyingInvite: function() {
      this.editingInvite = null;
    },
  	removeInvite: function (invite) {
  	  invitesRef.child(invite['.key']).remove()
  	}
  },
  events: {
  	// https://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced
 //  	'add-invite': function() {
	//         this.$on('add-invite', function (child) {
	// 		  // Make something there with child reference
	// 		  console.log("reçu");
	// 		  preventDefault();
	// 	})
	// }
  },
  data () {
    return {
    	newInvite: {
        	Prenom: '',
        	Nom: '',
        	Email: 'test@mail.com'
		  },
      editingInvite: null,
      addingInvite: false
    }
  }
}

		
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr.tr-invite:hover{
  cursor: pointer;
}
</style>