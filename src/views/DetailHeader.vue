<template>
  <div class="header">
      <div class="back" @click="goBack"><i class="iconfont icon-back"></i></div>
      <div class="title">{{ title }}</div>
  </div>
</template>

<script>

export default {
  props: ['title'],
  methods: {
    goBack () {
      history.back()
    }
  }
}
</script>

<style lang="scss" scoped>
    .back {
        i {
            float:left;
            font-size: 25px;
            width: 50px;
            line-height: 40px;
        }

    }
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #fff;
    }
</style>
