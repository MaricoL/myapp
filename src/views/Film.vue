<template>
  <div>
    <div style="width: 100%;height:200px;background: yellow;">轮播图</div>
    <film-header></film-header>

    <router-view></router-view>
  </div>
</template>

<script>
import filmHeader from './film/FilmHeader'

export default {
  components: {
    filmHeader
  }
}
</script>
