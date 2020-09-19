import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // Like component's data(){ return {} }
    users: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://randomuser.me/api/portraits/men/76.jpg",
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://randomuser.me/api/portraits/men/77.jpg",
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://randomuser.me/api/portraits/men/78.jpg",
      },
    ],
  },
  getters: { // Like component's computed: {}
    countOfUsers: function (state) {
      return state.users.length;
    },
    userOfSeoul: function (state) {
      let count = 0;

      state.users.forEach(user => {
        if (user.address === 'Seoul') count++;
      })

      return count;
    },
    percentOfSeoul: function (state, getters) {
      return Math.round(getters.userOfSeoul / state.users.length * 100);
    }
  },
  mutations: { // Just mutate
    addUser: function (state, payload) {
      state.users.push(payload);
    }
  },
  actions: { // Can add business logic
    addUser: function ({ commit }, payload) {
      // context, payload => {} Or
      // { commit }, payload => {}
      if (payload.userId !== null) {
        commit('addUser', payload);
      } else {
        console.log('Input any user id');
      }
    }
  }
})