<template>
    <div>Center</div>
</template>

<script>

export default {
  // 局部定义路由拦截方式一：
//   created () {
//     if (!localStorage.getItem('token')) {
//       this.$router.push('/login')
//     }
//   }

  // 组件内路由拦截
  //   beforeRouteEnter (to, from, next) {
  //     if (!localStorage.getItem('token')) {
  //       next('login')
  //     } else {
  //       next()
  //     }
  //   }

}
</script>
