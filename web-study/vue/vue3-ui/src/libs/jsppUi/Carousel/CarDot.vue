<template>
  <div class="dot-container" v-if="hasDot">
    <a class="dot-warp"
       href="javascript:;"
       v-for="item in itemLen"
       :key="item"
       :style="{backgroundColor:currentIndex ===( item - 1) ? dotBgColor : '#fff'}"
       @click="dotClick(item - 1)"
    />
  </div>
</template>

<script>
export default {
  name: "CarDot",
  props: {
    itemLen: Number,
    currentIndex: Number,
    hasDot: {
      type: Boolean,
      default: true
    },
    dotBgColor: {
      tyep: String,
      default: '#ff5000'
    }
  },
  setup(props, ctx) {
    const dotClick = (index) => {
      ctx.emit('dotClick', index)
    }

    return {
      dotClick
    }
  }
}
</script>

<style lang="less" scoped>
.dot-container {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

  .dot-warp {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    float: left;
    margin: 0 4px;
  }

}
</style>
