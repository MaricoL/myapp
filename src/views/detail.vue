<template>
    <div>Detail</div>
</template>

<script>
export default {
  mounted () {
    console.log('获取动态路由传递过来的参数：', this.$route.params.filmId)
  }
}
</script>
