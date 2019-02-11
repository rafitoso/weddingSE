<template>
	
	<div class="LanguageSwitcher btn-group">
		<button type="button" class="btn btn-default dropdown-toggle gla_wht_txt" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<span v-bind:class="['flag-icon',currentLanguageFlag]"></span> <span class="caret"></span>
		</button>
		<ul class="dropdown-menu">
			<li v-for="lang in languages">
				<a href="#" v-on:click="changeLanguage(lang)" ><span v-bind:class="['flag-icon',getLangagueFlag(lang)]"></span></a>
			</li>
		</ul>
	</div>

</template>


<script>

export default {
  name: 'LanguageSwitcher',
  data: () => ({ languages: ['fr', 'en']}),
  computed: {
    currentLanguage () {
      return this.$i18n.locale
    },
    currentLanguageFlag (){
    	return "flag-icon-"+this.$i18n.locale
    }
  },
  methods: {
    changeLanguage (lang) {
      // const lang = e.target.value
      const to = this.$router.resolve({ params: { lang } })

      if (this.$i18n.locale === lang) return Promise.resolve(lang) 

      
      import(`@/lang/${lang}.json`).then((msgs) => {
			this.$i18n.setLocaleMessage(lang, msgs.default || msgs)	
			this.$i18n.locale = lang
			this.$router.push(to.location)
		})


    },
    isCurrentLanguage (lang) {
      return lang === this.currentLanguage
    },
    getLangagueFlag(lang){
    	return "flag-icon-"+lang
    }
  }
}
</script>

<style>
.LanguageSwitcher {
  margin-bottom: 1rem;
  margin-top: 7px;
}

.btn.dropdown-toggle {
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 5px;
	padding: 6px 10px;
}

.btn-group > .btn:first-child {

    margin-left: 0;

}
.btn-group-vertical > .btn, .btn-group > .btn {

    position: relative;
    float: left;

}
.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 40px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    list-style: none;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #ccc;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175);
    box-shadow: 0 6px 12px rgba(0,0,0,.175);
}

.dropdown-menu > li > a {

    display: block;
    padding: 3px 10px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333 !important;
    white-space: nowrap;

}

.flag-icon-background {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.flag-icon {
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  position: relative;
  display: inline-block;
  width: 1.33333333em;
  line-height: 1em;
}
.flag-icon:before {
  content: "\00a0";
}
.flag-icon.flag-icon-squared {
  width: 1em;
}
.flag-icon-fr {
  background-image: url("/static/images/fr.svg");
}
.flag-icon-en {
  background-image: url("/static/images/gb-eng.svg");
}

</style>
