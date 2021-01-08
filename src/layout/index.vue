<template>
    <div class="layout-content">
        <div class="header" v-if="!$route.meta.fullscreen">
            <header-component></header-component>
        </div>
        <div class="content">
            <div class="nav" v-if="!$route.meta.fullscreen">
                <nav-component></nav-component>
            </div>
            <div class="frame-wrapper" :style="$route.name&&!$route.meta.fullscreen?'padding:10px;':'padding:0px;'">
               <!--主应用渲染区，用于挂载主应用路由触发的组件，使用$route.name来判断是不是主应用组件-->
               <router-view v-show="$route.name"></router-view> 
               <!--子应用渲染区，用户挂载子应用节点-->
               <div v-show="!$route.name" id="frame" :style="!$route.name&&!$route.meta.fullscreen?'padding:10px;':'padding:0px;'"></div> 
            </div>
        </div>
    </div>
</template>

<script>

import startQiankun from "@/micro"

export default {
    data(){
        return{

        }
    },
    components:{
         headerComponent:() => import("@/layout/header.vue"),
         navComponent:() => import("@/layout/nav.vue")
    },
    mounted(){
        startQiankun()
    }
}
</script>  

<style lang="scss" scoped>
    .layout-content{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        .header{
            width:100%;
            height:50px;
        }
        .content{
            flex:1;
            overflow: hidden;
            display: flex;
            .nav{
                width:250px;
                height:100%;
            }
            .frame-wrapper{
                flex:1;
                box-sizing: border-box;
                overflow: auto;
                height:100%;
                position: relative;
                #frame{
                    width:100%;
                    height:100%;
                    box-sizing: border-box;
                }
            }
        }
    }
</style>