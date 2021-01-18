export default {
    bind:function(el, binding, vnode, oldVnode){
        el.addEventListener('click',function(){
            console.log(el, binding.value)
        })
    }
}