import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    liveStreams: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLiveStreams(state, streams) {
      state.liveStreams = streams;
    },
  },
  actions: {
    fetchLiveStreams({ commit }) {
      // Fetch live streams from API or CDN
      const streams = []; // Replace with actual data fetching
      commit('setLiveStreams', streams);
    },
  },
});