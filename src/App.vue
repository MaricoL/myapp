<template>
  <div>
    <tabbar v-show="isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('TabbarModule', ['isTabbarShow'])
  },
  components: {
    tabbar
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
  }

  section {
    margin-bottom: 50px;
  }
</style>
