<template>
  <div class="main-contenter">
    <layout></layout>
  </div>
</template>

<script>
import {sendUserInfo,watchUserInfo} from "@/utils/actions";
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components:{
    layout: () => import("@/layout/index.vue")
  },
  data(){
    return {
      
    }
  },
   computed: {
        ...mapGetters([
            'userInfo'
        ])
    },
    watch:{
      userInfo(newVal,oldVal){
        if(newVal){
         sendUserInfo(newVal)
        }
      }
    },
   mounted() {
        watchUserInfo((state, prevState) => {
          // state: 变更后的状态; prevState: 变更前的状态
          let {userInfo} = state
          if(!userInfo){
            this.logoutUser()
          }
          console.log("主应用观察者：number 改变前的值为 ", prevState.userInfo);
          console.log("主应用观察者：登录状态发生改变，改变后的 number 的值为 ", state.userInfo);
        })
        sendUserInfo(this.userInfo)
    },
    methods:{
        logoutUser(){
            console.log(1)
            this.LogOut().then(res => {
                location.reload()
            })
        },
        ...mapActions({
            LogOut: 'LogOut' 
        })
    }
}
</script>

<style lang="scss">
html,body{
  margin:0;
  height:100%;
}
</style>
<style lang="scss" scoped>
.main-contenter {
  width:100%;
  height:100%;
  line-height: 32px;
  font-size:16px;
}
</style>
