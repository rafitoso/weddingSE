<template>
	<div class="panel panel-default">
		
		<div class="panel-body">
			<div class="row">
				<div class="col-sm-6" style="border-right: 1px solid #ddd;">
					<div data-animation="animation_blocks" data-bottom="@class:noactive" data--100-bottom="@class:active" class="active">
						<table style="width:100%;">
							<tr>
								<td style="text-align: right;"><h3>Les invités</h3></td>
								<td align="center">
									<div class="gla_icon_box" style="transition-delay: 0s;">
		                                <div class="gla_icon_box_content">
		                                    <h4 style="margin-top: 20px;"><strong class="gla_timer">{{ totalInvites(invites) }}</strong> au total</h4>
		                                </div>
		                            </div>
								</td>
							</tr>
						</table>
						<table  style="width:100%;">
							<tr>
								<td style="text-align: right;vertical-align: middle;">
									<h4>dont</h4>
								</td>
								<td align="center">
									<div class="gla_icon_box" style="transition-delay: 0.1s;">
		                                <div class="gla_icon_box_content">
		                                    <h4 style="margin-top: 20px;"><strong class="gla_timer">{{ totalAdultes(invites) }}</strong> adultes</h4>
		                                </div>
		                            </div> 
								</td>
								<td align="center">
									<div class="gla_icon_box" style="transition-delay: 0.2s;">
		                                <div class="gla_icon_box_content">
		                                    <h4 style="margin-top: 20px;"><strong class="gla_timer">{{ totalEnfants(invites) }}</strong> enfants</h4>
		                                </div>
		                            </div>
								</td>
							</tr>
						</table>
                        <!-- animation end -->
                    </div>
				</div>
				<div class="col-sm-6"></div>
			</div>

		</div>
	</div>
</template>

<script>
import firebase from 'firebase'
const fb = require('../../firebaseConfig.js')

let db = fb.db;
let invitesRef = db.ref('invites')

let inviteEmmanuel = db.ref('invites').orderByChild('Prenom').equalTo('Emmanuel');

export default {
  name: 'InviteStats',
  firebase: {
  	invites : invitesRef,
  	inviteLog : inviteEmmanuel
  },
  props: {
  },
  computed: {
  	
  },
  methods:{
  	totalInvites : function(invites){
  		let compteur = 0;
  		for (var i = invites.length - 1; i >= 0; i--) {
			let invite = invites[i];
			if(invite.Statut && invite.Statut != "Absent" && invite.Statut != "A valider"){
				compteur += invite.NombreAdulte*1
				compteur += invite.NombreEnfant*1
			}
  			// Rattrappage nombreAdulte
  			if(!invite.NombreAdulte){
	  			invite.NombreAdulte = 1;

	  			let copy = Object.assign({}, invite)
				// remove the .key attribute
				delete copy['.key']
				invitesRef.child(invite['.key']).update(copy);
  			}
	  			
  		}
  		return compteur;
  	},
  	totalAdultes : function(invites){
  		let compteur = 0;
  		for (var i = invites.length - 1; i >= 0; i--) {
			let invite = invites[i];
			if(invite.Statut && invite.Statut != "Absent" && invite.Statut != "A valider"){
				compteur += invite.NombreAdulte*1
			}
	  			
  		}
  		return compteur;
  	},
  	totalEnfants : function(invites){
  		let compteur = 0;
  		for (var i = invites.length - 1; i >= 0; i--) {
			let invite = invites[i];
			if(invite.Statut && invite.Statut != "Absent" && invite.Statut != "A valider"){
				compteur += invite.NombreEnfant*1
			}	
  		}
  		return compteur;
  	},
  	generateIds: function(invites){
  		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		for (var i = invites.length - 1; i >= 0; i--) {
			let invite = invites[i];
  			console.log(invite);
  			if(!invite.CodeRSVP){
  				text = "";
				for (var i = 0; i < 5; i++){
					text += possible.charAt(Math.floor(Math.random() * possible.length));
				}
	  			invite.CodeRSVP = text;

	  			let copy = Object.assign({}, invite)
				// remove the .key attribute
				delete copy['.key']
				invitesRef.child(invite['.key']).update(copy);
				// this.$firebaseRefs
  			}
	  			
  		}	

    }
  },
  data () {
    return {
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