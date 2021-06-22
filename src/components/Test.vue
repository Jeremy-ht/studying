<template>
  <div>

    <transition name="fade">
      <div class="box" v-show="show"></div>
    </transition>

    <button class="btn" @click="show = !show">出现吧</button>

  </div>
</template>

<script>

  export default {
    name: 'Test',
    data () {
      return {
        show: false
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .box
    width: 100px
    height 100px
    background-color pink
    position absolute
    left 0
    right 0
    top 0
    bottom 0
    margin auto

  .fade-enter, .fade-leave-to
    transform translateX(-1000px)
  .fade-enter-active, .fade-leave-active
    transition transform .5s
  .btn
    display block
    margin 10px auto
</style>
