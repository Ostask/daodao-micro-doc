<template>
    <div>
        {{number}}
        <button @click="add">点我发消息</button>
    </div>
</template>

<script>
import actions from "@/shared/actions";

export default {
    data(){
        return {
            number:0
        }
    },
    mounted() {
        // 注册一个观察者函数
        actions.onGlobalStateChange((state, prevState) => {
            // state: 变更后的状态; prevState: 变更前的状态
            console.log("主应用观察者：number 改变前的值为 ", prevState.number);
            console.log("主应用观察者：登录状态发生改变，改变后的 number 的值为 ", state.number);
        });
    },
    methods:{
        add(){
            this.number++;
            
            // 登录成功后，设置 token
            actions.setGlobalState({ number:this.number });
        }
    }
}
</script>