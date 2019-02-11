<template>
	<div class="LanguageSwitcher dropdown">
		<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			{{ lang }}
		</button>
		<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
			<a v-for="lang in languages" href="#" v-on:click="changeLanguage(lang)" v-bind:class="{ active: isCurrentLanguage(lang) }">{{lang}}</a>
		</div>
	</div>

</template>


<script>

export default {
  name: 'LanguageSwitcher',
  data: () => ({ languages: ['fr', 'en']}),
  computed: {
    currentLanguage () {
      return this.$i18n.locale
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
    }
  }
}
</script>

<style>
.LanguageSwitcher {
  margin-bottom: 1rem;
}
</style>
