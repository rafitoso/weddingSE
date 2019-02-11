<template>
	<section class="gla_section" style="background-color:#ddd;">
        <div class="container text-center">
            <p><img src="/static/images/animations/rsvp.gif" data-bottom-top="@src:/static/images/animations/rsvp.gif" height="180" alt=""></p>
            <div class="row" style="">
                <div class="col-md-8 col-md-push-2">
                    <form action="https://formspree.io/your@mail.com" method="POST">
                        <div class="row">
                            <div class="col-md-6">
                                <label v-html="$t('rsvp.form.firstname')"></label>
                                <input type="text" name="firstname" class="form-control form-opacity">
                            </div>
                            <div class="col-md-6">
                                <label v-html="$t('rsvp.form.lastname')"></label>
                                <input type="text" name="lastname" class="form-control form-opacity">
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.email')"></label>
                                <input type="text" name="email" class="form-control form-opacity">
                            </div>
                            <div class="clear-both"></div> 
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.present')"></label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="1">{{ $t('rsvp.form.answer_yes')}}</label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="0">{{ $t('rsvp.form.answer_no')}}</label>
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.present')"></label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="1">{{ $t('rsvp.form.answer_yes')}}</label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="0">{{ $t('rsvp.form.answer_no')}}</label>
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.songs')"></label>
                                <input type="text" name="dancing_song" class="form-control form-opacity">
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.notes')"></label>
                                <textarea name="message" class="form-control form-opacity" :placeholder="$t('rsvp.form.hint_songs')"></textarea>
                            </div>
                            <div class="col-md-12">
                                <input type="submit" class="btn submit" :value="$t('rsvp.form.submit')">
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

