<template>
  <ul>
      <router-link to="/film/nowplaying" tag="li" active-class="active">正在热映</router-link>
      <router-link to="/film/comingsoon" tag="li" active-class="active">即将上映</router-link>
  </ul>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  ul {
    // list-style: none;
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    li {
      flex: 1;
    }
  }
  .active {
    border-bottom: 2px solid #fc6700;
  }
</style>
