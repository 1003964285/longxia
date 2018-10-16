import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// let defaultUser = {
//   "access_token": "1111",
//   "token_type": "bearer",
//   "refresh_token": "",
//   "expires_in": 3599,
//   "deviceId":"007"
// };

// try {
//   if (localStorage.getItem("user")) {
//     defaultUser = localStorage.getItem("user")
//   }
// } catch (e) {
// }

const state = {
  user: localStorage.getItem("user")
};

const mutations = {
  storeUser (state, user) {
    state.user = user;
    try {
      localStorage.setItem("user", JSON.stringify(user))
    } catch (e) {
    }
  }
};

const actions = {

};

let store = new Vuex.Store({
	state,
	actions,
	mutations
});

export default store
