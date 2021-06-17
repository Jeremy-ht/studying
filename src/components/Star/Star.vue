<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </div>
</template>

<script>

const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'

export default {
  name: 'Star',
  props: {
    score: Number,
    size: Number
  },

  computed: {
    starClasses () {
      const {score} = this
      const arr = []
      const on = Math.floor(score)
      for (let i = 0; i < on; i++) {
        arr.push(STAR_ON)
      }
      if (score * 10 - on * 10 >= 5) {
        arr.push(STAR_HALF)
      }
      while (arr.length < 5) {
        arr.push(STAR_OFF)
      }
      return arr
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
