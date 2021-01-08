<template>
    <div class="header-content">
        <img class="logo" src="/image/icon.png" alt="">
        <div class="name">壹验行微前端架构使用教程</div>
        <div class="user">
            <el-dropdown>
                <div class="el-dropdown-link">
                    Hi {{userInfo.name}}
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item><span @click="logoutUser">退出</span></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data(){
        return {

        }
    },
    mounted(){
        console.log(this.userInfo)
    },
     computed: {
        ...mapGetters([
            'userInfo'
        ])
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

<style lang="scss" scoped>
    .header-content{
        width:100%;
        height:50px;
        border-bottom:1px solid $line-color;
        padding:0 20px;
        box-sizing: border-box;
        display: flex;
        .logo{
            width:50px;
            height:28px;
            margin-top:11px;
        }
        .name{
            line-height: 50px;
            margin-left:10px;
            flex:1;
        }
        .user{
            margin-top:8px;
            margin-right:20px;
        }
    }
</style>