<template>
  <nav>
      <ul>
          <router-link to="/film" tag="li" active-class="lzlactive">
            <i class="iconfont icon-all"></i>
            <span>电影</span>
          </router-link>
          <router-link to="/cinema" tag="li" active-class="lzlactive">
            <i class="iconfont icon-training"></i>
            <span>影院</span>
          </router-link>
          <router-link to="/center" tag="li" active-class="lzlactive">
            <i class="iconfont icon-account"></i>
            <span>我的</span>
          </router-link>
      </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 25px;
    text-align: center;

    ul {
      margin: 0;
      padding: 0;
      // list-style: none;
      display: flex;

      li {
        flex: 1;
        display: flex;
        flex-direction: column;
      }
    }
  }

  .lzlactive {
      color: #fc6700;
  }
</style>
