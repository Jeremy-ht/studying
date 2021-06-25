export default {

  // 购物车商品总数量
  totalCount (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
  },

  // 购物车商品总价格
  totalPrice (state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.price * food.count, 0)
  },

}
