// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
const fb = require('./firebaseConfig.js')

let app;




Vue.config.productionTip = false

Vue.use(VueFire)

// firebase.initializeApp(config)
fb.auth.onAuthStateChanged(function(user){
	if(!app){
		app = new Vue({
		  el: '#app',
		  router,
		  components: { App },
		  template: '<App/>'
		})
	}
})




// /* eslint-disable no-new */
// var app = new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
