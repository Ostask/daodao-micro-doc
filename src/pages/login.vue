<template>
    <div class="login">
        <div class="left">
            <div class="content">
                <div class="title">登录</div>
                <el-form>
                    <el-form-item label="用户名">
                        <el-input v-model="username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input show-password v-model="password"></el-input>
                    </el-form-item>
                    <el-button type="primary" round icon="el-icon-right" @click="login">登录</el-button>
                    <el-checkbox style="float:right;" v-model="remenber">记住密码</el-checkbox>
                </el-form>
            </div>
        </div>
        <div class="right">
            <canvas id="bg"></canvas>
            <div class="text">
                <div class="en">
                    IOTECH
                </div>
                <div class="zh">
                    壹验行微前端架构使用教程
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { setToken,setPassword,getPassword,removePassword} from '@/utils/auth'
import { mapMutations } from 'vuex'

export default {
    data(){
        return{
            username:'',
            password:'',
            remenber:true,
            canvas:null
        }
    },
    mounted(){
        this.initCanvas()
        this.getLoinInfo()
        document.addEventListener('resize',this.initCanvas)
    },
    destroyed(){
        document.removeEventListener('resize',this.initCanvas)
    },
    methods:{
        getLoinInfo(){
            let info = getPassword()
            if(info){
                this.username = info.username
                this.password = info.password
            }
        },
        initCanvas(){
            let c=document.getElementById("bg");
            if(!this.canvas){
                this.canvas=c.getContext("2d");
            }
            let width = c.clientWidth;
            let height = c.clientHeight;
            c.width = width;
            c.height = height;
            this.canvas.fillStyle="#4DA1FF";
            this.canvas.fillRect(0,0,width,height);

            //画顶上的曲线
            this.canvas.beginPath(); 
            this.canvas.fillStyle="#9ACAFE"; // Green path
            this.canvas.moveTo(width/2,0);
            this.canvas.lineTo(width,0);
            this.canvas.lineTo(width,height/4);
            this.canvas.quadraticCurveTo(width/1.5,height/3,width/2,0);
            this.canvas.fill(); // Draw it

            //画下面的块块
            this.canvas.beginPath(); 
            this.canvas.fillStyle="#C2DEFE"; // Green path
            this.canvas.moveTo(0,height/2.5);
            this.canvas.bezierCurveTo(width/3.5,height/1.2,width/1.5,height/2.5,width,height/1.25);
            this.canvas.lineTo(width,height)
            this.canvas.lineTo(width/5,height)
            this.canvas.quadraticCurveTo(width/5,height/1.2,0,height/1.25);
            this.canvas.fill(); // Draw it
        },
        login(){
            let sendObj = {
                username: this.username,
                password: this.password
            }
            this.$httpSys.post("auth/user/pass/login",sendObj).then(data=>{
                let obj = data.data;
                //设置用户信息
                this.setUserInfo(obj.user)
                setToken(obj.token)
                //记住密码
                if(this.remenber){
                    setPassword(this.username,this.password)
                }else{
                    removePassword()
                }
                this.$router.push('/')
          })
        },
        ...mapMutations({
            setUserInfo: 'SET_USERINFO'
        })
    }  
}
</script>

<style lang="scss">
    .login{
        width:100%;
        height:100%;
        overflow: hidden;
        display: flex;
        .left{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            .content{
                min-width: 300px;
                width:50%;
                .title{
                    height:60px;
                    font-size:24px;
                    font-weight:bold;
                    color:$normal-blue;
                    text-align: center;
                }
            }
        }
        .right{
            flex:1;
            position: relative;
            #bg{
                width:100%;
                height:100%;
            }
            .text{
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                .en{
                    position: absolute;
                    letter-spacing: 0.1em;
                    top:20%;
                    color:#fff;
                    font-size:100px;
                    width:100%;
                    text-align:center;
                    font-weight:bold;
                }
                .zh{
                    position: absolute;
                    letter-spacing: 0.8em;
                    top:70%;
                    color:#fff;
                    font-size:20px;
                    width:100%;
                    text-align:center;
                }
            }
        }
    }
</style>