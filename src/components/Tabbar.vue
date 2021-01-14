<template>
  <div>
      <ul>
          <router-link to="/film" tag="li" active-class="lzlactive">电影</router-link>
          <router-link to="/cinema" tag="li" active-class="lzlactive">影院</router-link>
          <router-link to="/center" tag="li" active-class="lzlactive">我的</router-link>
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  ul {
      list-style: none;
      display: flex;
    li {
      flex: 1;
    }
  }

  .lzlactive {
      color: #fc6700;
  }
</style>
