<template>
  <div>
    Now Playing!!
    <ul>
      <li v-for="data in dataList" :key="data.id" @click="handleClick(data.id)">{{ data.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [
        {
          id: 111,
          name: '电影1'
        },
        {
          id: 222,
          name: '电影2'
        },
        {
          id: 333,
          name: '电影3'
        }
      ]
    }
  },
  methods: {
    handleClick (id) {
      // 编程式路由
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style>

</style>
