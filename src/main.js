import Vue from 'vue'
import vuetify from './plugins/vuetify'
import store from './store'
import App from './App.vue' 
import router from './router'


new Vue({
    //el: '#app',
    components: { App },
    store,               // -> store: 'store'
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
  

//createApp(App).use(store).use(router).mount('#app')
 