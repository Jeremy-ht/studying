<template>
  <div>
    <i
        class="iconfont"
        v-for="i in 5"
        :key="i"
        :style="{
          'color': i<= starNum ? color : '#dcdad9',
          'fontSize': size + 'px'
        }"
        @click="setStarNum(i)"
    >&#xe687;</i>
  </div>
</template>

<script>
export default {
  name: "Star",
  props: {
    num: { default: 0 },
    size: { default: 16 },
    color: { default: '#ff6600' }
  },
  data() {
    return {
      starNum: this.num
    }
  },
  methods: {
    setStarNum(num) {
      this.starNum = num
      this.$emit('getStarNum', num)
    },
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'iconfont';  /* Project id 4026686 */
  src: url('//at.alicdn.com/t/c/font_4026686_wb3i7jghhzn.woff2?t=1681908603237') format('woff2'),
  url('//at.alicdn.com/t/c/font_4026686_wb3i7jghhzn.woff?t=1681908603237') format('woff'),
  url('//at.alicdn.com/t/c/font_4026686_wb3i7jghhzn.ttf?t=1681908603237') format('truetype');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
