import Vue from 'vue'
// import moment from 'moment'
import format from 'date-fns/format'

Vue.filter('dateFormat', (value, pattern = 'YYYY-MM-DD HH:mm:ss') => {
  // return moment(value).format(pattern)
  return format(value, pattern)
})
