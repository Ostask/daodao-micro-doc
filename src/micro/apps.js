import vMessage from '@/components/Message/index.js' 
import {directiveInstall} from "@/directives/index.js"
import nothing from '@/components/nothing.vue'
import {util} from '@/utils/common.js'

//此时我们还没有微应用，所以app为空
const apps = [
    /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "daodaochild",
    entry: "//192.168.2.122:10200",
    container: "#frame",
    activeRule: "#/daodaochild",
  },
  {
    name: "daodaodemo",
    entry: "//192.168.2.122:10300",
    container: "#frame",
    activeRule: "#/daodaodemo",
    props:{
      plugin:{
        directiveInstall,//公用指令注册插件
        vMessage,//将这个插件传给子应用
      },
      components:{ //传递公用组件
        nothing
      }, 
      utils:util //传递公用方法
    }
  },
]
export default apps