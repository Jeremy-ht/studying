<template>
  <div>

    <transition name="fade">
      <div class="box" v-show="show"></div>
    </transition>

    <button class="btn" @click="show = !show">出现吧</button>

    <button class="btn" @click="show2 = !show2">出现吧2</button>
    <br/>
    <transition name="move">
      <div style="text-align: center" v-show="show2">.fade-enter-active, .fade-leave-active</div>
    </transition>


  </div>
</template>

<script>

  export default {
    name: 'Test',
    data () {
      return {
        show: false,
        show2: false
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

  .move-enter-active,.move-leave-active {
    transition all 1s
  }

  .move-enter {
    animation moves .7s
  }

  .move-leave-to {
    animation moves .7s reverse
  }

  @keyframes moves {
    0% {
      transform scale(0)
    }
    50% {
      transform scale(1.5)
    }
    100% {
      transform scale(1)
    }
  }

</style>
