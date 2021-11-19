import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      web3Provider: null,
      web3Modal: null,
      selectedAccount: null,
      chainId: null,
    };
  },
  mutations: {
    SET_WEB3(state, data) {
      state.web3Provider = data;
    },

    SET_WEB3MODAL(state, data) {
      state.web3Modal = data;
    },

    SET_ACCOUNT(state, data) {
      state.selectedAccount = data;
    },

    SET_CHAIN(state, data) {
      state.chainId = data;
    },
  },
});

export default store;

// export const state = () => ({
//   web3Provider: null,
//   web3Modal: null,
//   selectedAccount: null,
//   chainId: null,
// });

// export const mutations = {
//   SET_WEB3(state, data) {
//     state.web3Provider = data;
//   },

//   SET_WEB3MODAL(state, data) {
//     state.web3Modal = data;
//   },

//   SET_ACCOUNT(state, data) {
//     state.selectedAccount = data;
//   },

//   SET_CHAIN(state, data) {
//     state.chainId = data;
//   },
// };
