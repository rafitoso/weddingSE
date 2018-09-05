<template>
	<form v-bind:id="'inviteForm_'+invite['.key']" class="form" v-on:submit.prevent="validateInvite">
		<div class="panel panel-default">
	      <div class="panel-heading">
	        <h3 class="panel-title" v-if="invite['.key']">Modifier un invité</h3>
	        <h3 class="panel-title" v-else>Ajouter un invité</h3>
	      </div>
	      <div class="panel-body">
	          <div class="form-group">
	            <label v-bind:for="'invitePrenom_'+invite['.key']">Prénom : </label>
	            <input type="text" v-bind:id="'invitePrenom_'+invite['.key']" class="form-control" v-model="invite.Prenom">
	          </div>
	          <div class="form-group">
	            <label v-bind:for="'inviteNom_'+invite['.key']">Nom : </label>
	            <input type="text" v-bind:id="'inviteNom_'+invite['.key']" class="form-control" v-model="invite.Nom">
	          </div>
	          <div class="form-group">
	            <label v-bind:for="'inviteEmail_'+invite['.key']">Email : </label>
	            <input type="text" v-bind:id="'inviteEmail_'+invite['.key']" class="form-control" v-model="invite.Email">
	          </div>
	          <div class="form-group">
	            <label v-bind:for="'inviteStatut_'+invite['.key']">Statut : </label>
	            <select v-bind:id="'inviteStatut_'+invite['.key']" class="form-control" v-model="invite.Statut">
				  <option v-for="option in statutOptions" v-bind:value="option.value">
				    {{ option.text }}
				  </option>
				</select>
	          </div>
	      </div>
	      <div class="panel-footer">
	      	<p align="right">
	      		<a href="#" class="btn btn-default" v-on:click="cancelChange">Annuler</a>
	      		<input type="submit" class="btn btn-primary" :value="labelButton">
	      	</p>
	      </div>
	    </div>
    </form>
</template>

<script>

export default {
  name: 'InviteFormType',
  props: {
  	invite: Object
  },
  methods:{
  	validateInvite : function(){
  		if(this.invite['.key']){
	  		this.$emit('modify-invite', this);
	  	}else{
	  		this.$emit('add-invite', this);
	  	}
  	},
  	cancelChange : function(){
  		if(this.invite['.key']){
	  		this.$emit('cancel-modify-invite', this);
	  	}else{
	  		this.$emit('cancel-add-invite', this);
	  	}
  	}
  },
  data () {
  	var labelButton = "Ajouter";

  	if(this.invite['.key']){
  		labelButton = "Enregistrer"
  	}

    return {
    	labelButton,
    	statutOptions : [
    		{ text: 'Non invité', value: "A valider"},
    		{ text: "Invitation à envoyer", value: "A inviter"},
    		{ text: "Présence non confirmée", value: "Non confirmée"},
    		{ text: "Présent !", value: "Présent"},
    		{ text: "Absent...", value: "Absent"}
    	]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>