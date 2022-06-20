<template>
  <transition>
    <div class="car-item" v-show="selfIndex === currentIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {
  getCurrentInstance,
  reactive,
  toRefs,
  watch
} from "vue";

export default {
  name: "CarItem",
  setup() {
    const instance = getCurrentInstance()

    const state = reactive({
      selfIndex: instance.vnode.key,
      currentIndex: instance.parent.ctx.currentIndex
    })

    watch(() => {
      return instance.parent.ctx.currentIndex
    }, (newVal) => {
      state.currentIndex = newVal
    })

    return {
      ...toRefs(state)
    }

  }
}
</script>

<style lang="less" scoped>

.car-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.v-enter-to, .v-leave-to, .v-enter-active, .v-leave-active {
  transition: all 1s linear;
}

.v-enter-active {
  transform: translateX(100%);
}

.v-enter-to {
  transform: translateX(0);
}

.v-leave-to {
  transform: translateX(0);
}

.v-leave-active {
  transform: translateX(-100%);
}
</style>
