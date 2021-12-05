import Vue from 'vue'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@mdi/font/css/materialdesignicons.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify);
const opts = {
    icons: {
    iconfont: 'mdi' ||'md' || 'fa' || 'mdiSvg' , // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
} 



export default new Vuetify(opts)