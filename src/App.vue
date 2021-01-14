<template>
  <div>
    <tabbar></tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'

export default {
  components: {
    tabbar
  }
}
</script>

<style>

</style>
