<template>
	<div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Ajouter un invité</h3>
      </div>
      <div class="panel-body">
         <form id="form" class="form-inline" v-on:submit.prevent="validateInvite">
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
          <input type="submit" class="btn btn-primary" :value="labelButton">
        </form>
      </div>
    </div>
</template>

<script>

export default {
  name: 'InviteEditing',
  props: {
  	invite: Object
  },
  methods:{
  	validateInvite : function(){
  		if(this.invite['.key']){
	  		this.$emit('modify-invite', this);
	  		console.log("ici");
	  	}else{
	  		this.$emit('add-invite', this);
	  		console.log("là");
	  	}
  	}
  },
  data () {
  	var labelButton = "Ajouter";

  	if(this.invite['.key']){
  		labelButton = "Modifier"
  	}

    return {
    	labelButton
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>