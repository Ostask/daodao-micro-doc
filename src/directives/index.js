//import Vue from 'vue'
import myDirective from './myDirective.js'

export const directiveInstall = {
    list:{
        myClick:myDirective
    },
    install(Vue){
        console.log(this.list)
        if(typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        for(let key in this.list){
            Vue.directive(key,this.list[key])
        }
    }
}
