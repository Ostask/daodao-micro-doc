import Message from './message.vue'

const MESSAGE = {
    duration:3000, //显示的时间 ms
    animateTime:300, //动画时间，表示这个组件切换show的动画时间
    install(Vue){
        if(typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        Vue.component('Message',Message)

        function msg(type,text,callBack){
            let msg
            let duration = MESSAGE.duration
            if(typeof text === 'string'){
                msg = text
            }else if(text instanceof Object){
                msg = text.text || ''
                if(text.duration) {
                    duration = text.duration
                }
            }
            let VueMessage = Vue.extend({
                render(h){
                    let props = {
                        type,
                        text:msg,
                        show:this.show
                    }
                    return h('message',{props})
                },
                data(){
                    return {
                        show:false
                    }
                }
            })

            let newMessage = new VueMessage()
            let vm = newMessage.$mount()
            let el = vm.$el
            document.body.appendChild(el)
            vm.show = true
            let t1 = setTimeout(() => {
                clearTimeout(t1)
                vm.show = false //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从dody中移除dom
                let t2 = setTimeout(() => {
                    clearTimeout(t2)
                    document.body.removeChild(el)
                    newMessage.$destroy()
                    vm = null

                    callBack && (typeof callBack === 'function') && callBack()
                },MESSAGE.animateTime)
            },duration)
        }

        //挂在到vue原型上，暴露四个方法
        Vue.prototype.$daodao = {
            info(text,callBack) {
                if(!text) return
                msg('info',text,callBack)
            },
            success(text,callBack){
                if(!text)return
                msg('success',text,callBack)
            },
            error(text, callBack) {
                if (!text) return
                msg('error', text, callBack)
            },
            warning(text, callBack) {
                if (!text) return
                msg('warning', text, callBack)
            }
        }
    }
}

export default MESSAGE