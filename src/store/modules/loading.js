import * as types from '../mutation-types'

const state = {
    showLoading: false
}

const mutations = {
    [types.SHOW_LOADING](state) {
        state.showLoading = !state.showLoading;
    }
}

export default {
    state,
    mutations
}