<template>
    <div>
        我是个普通的组件
        <el-button @click="test">你好</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        test(){
            this.$daodao.error('这是一条警告消息')
        }
    }
}
</script>