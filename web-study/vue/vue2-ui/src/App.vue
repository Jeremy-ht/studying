<template>
  <div id="app">
    <!--    <Star :num="num" :size="size" :color="color" @getStarNum="getStarNum"/>-->
    <CanvasIndex/>
  </div>
</template>

<script>

import CanvasIndex from '@/canvas/index'

export default {
  name: 'App',
  data() {
    return {
      num: 3,
      size: 50,
      color: '#10d3c3'
    }
  },
  components: { CanvasIndex },
  mounted() {
  },
  methods: {
    getStarNum(num) {
      this.num = num
    },
  }
}
</script>

<style>
</style>
