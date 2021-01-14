<template>
  <div>
    hello vue --- {{ myname }}
    <br>
    <input type="text" v-model="content">
    <button @click="handleClick">提交</button>
    <ul>
      <li v-for="data in dataList" :key="data">{{ data }}</li>
    </ul>

    <navbar>
      <button @click=" isShow = !isShow">slot-button</button>
    </navbar>
    <sidebar v-show="isShow"></sidebar>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import sidebar from './components/Sidebar'
// import Vue from 'vue'

// 全局注册组件
// Vue.component('navbar', navbar)
// Vue.component('sidebar', sidebar)

export default {
  data () {
    return {
      myname: 'zhangsan',
      content: '',
      dataList: [],
      isShow: true
    }
  },
  methods: {
    handleClick () {
      this.dataList.push(this.content)
    }
  },
  // 局部注册组件
  components: {
    navbar,
    sidebar
  }
}
</script>

<style scoped>
li {
  background-color: #f00;
}
</style>
