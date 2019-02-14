<template>
	<section class="gla_section" style="background-color:#ddd;">
        <div class="container text-center">
            <p><img src="/static/images/animations/rsvp.gif" data-bottom-top="@src:/static/images/animations/rsvp.gif" height="180" alt=""></p>
            <div class="row" style="">
                <div class="col-md-8 col-md-push-2">
                    <form v-bind:id="'newAnswerForm_'+newAnswer['.key']" class="form" v-on:submit.prevent="checkForm">
                        <p v-if="errors.length" class="alert alert-warning" align="left">
                            <b>Please correct the following error(s):</b>
                            <ul>
                              <li v-for="error in errors">{{ error }}</li>
                            </ul>
                        </p>
                        <div class="row">
                            <div class="col-md-6">
                                <label v-bind:for="'answerFirstname_'+newAnswer['.key']" v-html="$t('rsvp.form.firstname')"></label>
                                <input v-bind:id="'answerFirstname_'+newAnswer['.key']" type="text" name="firstname" class="form-control form-opacity" v-model="newAnswer.firstname">
                            </div>
                            <div class="col-md-6">
                                <label v-bind:for="'answerLastname_'+newAnswer['.key']" v-html="$t('rsvp.form.lastname')"></label>
                                <input v-bind:id="'answerLastname_'+newAnswer['.key']" type="text" name="lastname" class="form-control form-opacity" v-model="newAnswer.lastname">
                            </div>
                            <div class="col-md-12">
                                <label v-bind:for="'answerEmail_'+newAnswer['.key']" v-html="$t('rsvp.form.email')"></label>
                                <input v-bind:id="'answerEmail_'+newAnswer['.key']" type="text" name="email" class="form-control form-opacity"  v-model="newAnswer.email">
                            </div>
                            <div class="clear-both"></div> 
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.present')"></label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="Oui" v-model="newAnswer.diner">{{ $t('rsvp.form.answer_yes')}}</label>
                                <label class="radio-inline"><input type="radio" name="attend_diner" value="Non" v-model="newAnswer.diner">{{ $t('rsvp.form.answer_no')}}</label>
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.present')"></label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="Oui" v-model="newAnswer.brunch">{{ $t('rsvp.form.answer_yes')}}</label>
                                <label class="radio-inline"><input type="radio" name="attend_brunch" value="Non" v-model="newAnswer.brunch">{{ $t('rsvp.form.answer_no')}}</label>
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.songs')"></label>
                                <input type="text" name="dancing_song" class="form-control form-opacity" v-model="newAnswer.songs">
                            </div>
                            <div class="col-md-12">
                                <label v-html="$t('rsvp.form.notes')"></label>
                                <textarea name="message" class="form-control form-opacity" :placeholder="$t('rsvp.form.hint_notes')"  v-model="newAnswer.notes"></textarea>
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
import firebase from 'firebase'
const fb = require('../../firebaseConfig.js')

let db = fb.db;
let answersRef = db.ref('answers')

import toastr from 'toastr'

export default {
  name: 'Rsvp',
  firebase: {
    answers : answersRef
  },
  components: {
  },
  methods: {

    addAnswer: function () {
      answersRef.push(this.newAnswer);

      if (this.$i18n.locale === 'fr'){
        toastr.success('Merci '+this.newAnswer.firstname +" ! Nous avons bien pris en compte votre réponse !")
      }else{
        toastr.success('Thanks '+this.newAnswer.firstname +"! We successfully saved your answer!")
      }


      
      this.newAnswer.firstname  = '';
      this.newAnswer.lastname = '';
      this.newAnswer.email = '';
      this.newAnswer.diner = '';
      this.newAnswer.brunch = '';
      this.newAnswer.songs = '';
      this.newAnswer.notes = '';



    },

    checkForm: function (e) {
      if (this.newAnswer.lastname 
        && this.newAnswer.firstname
        && this.newAnswer.email
        && this.newAnswer.diner  
        && this.newAnswer.brunch
        ) {
        return this.addAnswer();
      }

      this.errors = [];

      if (!this.newAnswer.firstname ) {
        this.errors.push('Firstname required.');
      }
      if (!this.newAnswer.lastname) {
        this.errors.push('Lastname required.');
      }
      if (!this.newAnswer.email) {
        this.errors.push('Email required.');
      }
      if (!this.newAnswer.diner) {
        this.errors.push('Anwser for the diner required.');
      }
      if (!this.newAnswer.brunch) {
        this.errors.push('Anwser for the brunch required.');
      }

      e.preventDefault();
    }
    
  },
  events: {
    // https://vuejs.org/v2/guide/migration.html#dispatch-and-broadcast-replaced
 //     'add-invite': function() {
    //         this.$on('add-invite', function (child) {
    //        // Make something there with child reference
    //        console.log("reçu");
    //        preventDefault();
    //  })
    // }
  },
  data () {
    return {
        newAnswer: {
            lastname: '',
            firstname: '',
            email: '',
            diner: '',
            brunch: '',
            songs : '',
            notes : ''
          },
      editingInvite: null,
      errors: []
    }
  }
}
</script>




