import Vue from 'vue'
import Vuex from 'vuex'
import data from '../../data.json'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    slides: data.slides,
    item: {}
  },
  getters: {
    slideList(state) {
      return state.slides
    },
    slideItem(state) {
      return state.item;
    }
  },
  mutations: {
    SET_ITEM(state, item) {
      state.item = data.slides[item]
    }
  }
})
