<template>
  <div>
    <canvas id="can"></canvas>
  </div>
</template>

<script>
import canvas from '@/canvas/canvas';

export default {
  name: "CanvasIndex",
  data() {
    return {}
  },
  mounted() {
    // this.init()
  },
  methods: {
    init() {
      canvas()
    }
  }
}
</script>

<style scoped>
</style>
