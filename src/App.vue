<template>
  <div id="app">
    <router-view/>
    <footer-guide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import {reqFoodCategorys} from './api'

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted () {
    reqFoodCategorys().then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background #f5f5f5
</style>
