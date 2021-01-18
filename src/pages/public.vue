<template>
    <div class="article-page">
        <h3>主应用插件</h3>
        <el-button @click="test">点我啊</el-button>
        <h3>主应用组件</h3>
        <nothing></nothing>
        <h3>主应用方法</h3>
        <el-button @click="hello">点一下</el-button>
        <h3>主应用指令</h3>
        <p>点击每一列并打开控制台查看</p>
        <ul>
            <li v-for="(item,index) in arr" :key="index" v-my-click="item">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import nothing from '@/components/nothing.vue'
import {util} from '@/utils/common.js'

export default {
  data(){
    return{
        arr:[1,2,3,4,5,6]
    }
  },
  components:{
      nothing
  },
  methods:{
    test(){
      this.$daodao.info('这是一条普通消息')
    },
    hello(){
      util.hello()
    }
  }
}
</script>