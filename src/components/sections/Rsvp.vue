<template>
	<section class="gla_section" style="background-color:#ddd;">
        <div class="container text-center">
            <p><img src="/static/images/animations/rsvp.gif" data-bottom-top="@src:/static/images/animations/rsvp.gif" height="180" alt=""></p>
            

            <!-- <p>Bientôt ici vous retrouverez notre petit formulaire de réponse. Pour l'instant, si vous avez des questions ou des demandes, contactez-nous par email sur <a href="mailto:sophie.chauvier@gmail.com">sophie.chauvier@gmail.com</a> ou <a href="mailto:rafitoso@gmail.com">rafitoso@gmail.com</a></p> -->
            <div class="row" style="">
                <div class="col-md-8 col-md-push-2">
                    <form action="https://formspree.io/your@mail.com" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <label>Prénom</label>
                                <input type="text" name="firstname" class="form-control form-opacity">
                            </div>
                            <div class="col-md-6">
                                <label>Nom</label>
                                <input type="text" name="lastname" class="form-control form-opacity">
                            </div>
                            <div class="col-md-12">
                                <label>Email*</label>
                                <input type="text" name="email" class="form-control form-opacity">
                            </div>
                            <div class="clear-both"></div> 
                            <div class="col-md-12">
                                <label>Serez-vous présent pour la cérémonie du 22 juin et pour le dîner ?</label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="1">Oui !</label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="0">Non... </label>
                            </div>
                            <div class="col-md-12">
                                <label>Serez-vous présent pour le brunch du lendemain ?</label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="1">Oui !</label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="0">Non... </label>
                            </div>
                            <div class="col-md-12">
                                <label>Sur quelle chanson aimeriez-vous danser ?</label>
                                <input type="text" name="dancing_song" class="form-control form-opacity">
                            </div>

                            <!-- <div class="col-md-6">
                                <label>Meal preference</label>
                                <select name="meal" class="form-control form-opacity">
                                    <option value="I eat anything">I eat anything</option>
                                    <option value="Beef">Beef</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                </select>
                            </div> -->
                            <div class="col-md-12">
                                <label>Notes</label>
                                <textarea name="message" class="form-control form-opacity" placeholder="Laissez-nous un petit message"></textarea>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn submit" value="Envoyer !">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    label {
        text-align: left;
        margin-left: 15px;
    }
    label.radio-inline {
        float: left;
    }
</style>

<script>
// import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
// import {_} from 'vue-underscore'
// import Vue from 'vue'

// const API_URL = 'https://api.deezer.com/search?q=:query'


export default {
    components: {
        
    },
  name: 'Rsvp',
  events: {
  	
  },
  data() {
    return {
      
    }
  },
 
  methods: {
    
  },
 
  watch: {
    
  }
}



 

 

</script> 

		
</script>

