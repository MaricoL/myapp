<template>
    <div>Detail</div>
</template>

<script>
export default {
  mounted () {
    // console.log('获取动态路由传递过来的参数：', this.$route.params.filmId)
    // console.log('获取命名路由传递过来的参数：', this.$route.params.id)
    console.log('获取query方式路由传递过来的参数：', this.$route.query.id)
  }
}
</script>
