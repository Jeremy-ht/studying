<template>
  <div class="container">
    <Carousel :autoPlay="true"
              :duration="3000"
              :initial="0"
              :hasDot="true"
              :hasDirector="true"
              dotBgcolor="#000"
    >
      <car-item v-for="(item, index) in data" :key="index">
        <img :src="require(`./assets/${item.name}`)" alt=""/>
      </car-item>
    </Carousel>
  </div>
</template>

<script>

export default {
  name: 'App',
  setup() {

    const data = [
      {
        name: '1.jpg'
      },
      {
        name: '2.jpg_.webp'
      },
      {
        name: '3.jpg_.webp'
      }
    ]

    return {
      data
    }
  }
}
</script>

<style lang="less">
.container {
  width: 520px;
  height: 280px;
  margin: 100px auto;

  img {
    width: 100%;
    height: 100%;
  }
}

</style>
