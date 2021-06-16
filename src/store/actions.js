import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  async getAddress ({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    console.log(geohash)
    const result = await reqAddress(geohash)

    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }

  },
}
