<template>
  <div class="carousel-container"
       @mouseenter="onMouseEnter"
       @mouseleave="onMouseLeave"
  >
    <div class="inner">
      <car-dot :currentIndex="currentIndex"
               :itemLen="itemLen"
               :hasDot="hasDot"
               :dotBgColor="dotBgcolor"
               @dotClick="dotClick"
      ></car-dot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount, getCurrentInstance
} from 'vue';
import CarDot from './CarDot';

export default {
  name: "Carousel",
  components: {
    CarDot
  },
  props: {
    autoPlay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 0
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgcolor: String
  },
  setup(props) {
    const install = getCurrentInstance()

    const state = reactive({
      currentIndex: props.initial,
      itemLen: 0
    })

    let timer = null

    const autoPlay = () => {
      if (props.autoPlay) {
        timer = setInterval(() => {
          setDirector('next')
        }, props.duration)
      }
    }

    const setDirector = (dir = 'next') => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break;
        case 'prev':
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break;
      }
    }

    const dotClick = (index) => {
      // _clearIntervalFn()
      state.currentIndex = index
    }

    const onMouseEnter = () => {
      _clearIntervalFn()
    }

    const onMouseLeave = () => {
      autoPlay()
    }

    onMounted(() => {
      state.itemLen = install.slots.default()[0].children.length
      autoPlay()
    })

    onBeforeUnmount(() => {
      _clearIntervalFn()
    })

    const _clearIntervalFn = () => {
      clearInterval(timer)
      timer = null
    }

    return {
      ...toRefs(state),
      dotClick,
      onMouseEnter,
      onMouseLeave
    }
  }
}
</script>

<style lang="less" scoped>
.carousel-container {
  width: 100%;
  height: 100%;

  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
