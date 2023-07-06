<template>
  <div id="app">
    <Star :num="num" :size="size" :color="color" @getStarNum="getStarNum"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: 3,
      size: 50,
      color: '#10d3c3'
    }
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
