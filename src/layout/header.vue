<template>
    <div class="header-content border-b color-dark">
        <img class="logo" src="/image/icon.png" alt="">
        <div class="name">壹验行微前端架构使用教程</div>
        <div class="user">
            <el-select size="mini" style="width:100px;margin-right:10px;" v-model="theme" @change="changeTheme">
                <el-option label="简约白" value="light-theme"></el-option>
                <el-option label="深邃蓝" value="dark-theme"></el-option>
            </el-select>
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
import { getTheme,setTheme } from '@/utils/auth.js'

export default {
    data(){
        return {
            theme:''
        }
    },
    mounted(){
        console.log(this.userInfo)
        console.log(getTheme())
        this.theme = getTheme()||'light-theme'
        this.setBodyTheme(this.theme)
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
        setBodyTheme(theme){
            document.body.className = theme
        },
        changeTheme(theme){
            setTheme(this.theme)
            this.setBodyTheme(this.theme)
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