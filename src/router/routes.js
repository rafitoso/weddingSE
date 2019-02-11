import { i18n } from '@/plugins/i18n.js'

function load (component) {
  // '@' is aliased to src/components
  return () => import(/* webpackChunkName: "[request]" */ `@/components/${component}.vue`)
}

export default [ 
	{
		path: '/:lang',
		component: {
			template:'<router-view></router-view>'
		},
		beforeEnter (to, from, next) {
			const lang = to.params.lang

			if( !['fr','en'].includes(lang)) return next('fr')

			if(i18n.locale === lang){
				return next()
			}
			import(`@/lang/${lang}.json`).then((msgs) => {
				i18n.setLocaleMessage(lang, msgs.default || msgs)
				i18n.locale = lang
				return next()	
			})
			
		},
		children: [
		    {
		      path: '',
		    	name: 'Home',
		    	component: load('Home')
		    },
		    {
		      path: 'hello',
		    	name: 'HelloWorld',
		    	component: load('HelloWorld')
		    },
		    {
		      path: '/administration/liste-des-invites/no-password',
		      name: 'AdminPage',
		      component: load('AdminPage')
		    }

		] 
	},
	{
		// Redirect user to supported lang version.
		path: '*',
		redirect (to) {
		  return 'fr'
		}
	}
]