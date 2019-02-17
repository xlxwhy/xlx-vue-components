import Vue from 'vue'
import Icon from '../../../library/ui/components/icon/Index.vue'// svg组件


  
// register globally
Vue.component('icon', Icon)

const requireAll = requireContext => requireContext.keys().map(requireContext)

 
requireAll(require.context( "../../../library/ui/icons/svg" , false, /\.svg$/))   



