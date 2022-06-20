import Carousel from './Carousel'
import CarItem from './Carousel/item'

let JsppUi = {};

JsppUi.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarItem.name, CarItem)
}

export default JsppUi;
