import * as types from '../mutation-types.js'


const state ={
    tabShow : 'shop'
}

const mutations ={
    [types.SWITCHTAB](state,{tabShow}){
        state.tabShow = tabShow
    }
}

export default {
    state,
    mutations
}