import { orderConstants as Mutations } from "@/store/constants";
import * as API from "@/api";

const order = {
  namespaced: true,

  state: () => ({
    cart: [],
    currentOrder: [],
  }),
  getters: {
    getCart: (state) => state.cart,
  },
  mutations: {
    [Mutations.UPDATE_ORDER](state, product) {
      let inCart = state.cart.find((item) => item._id == product._id);
      if (inCart) {
        inCart.amount++;
      } else {
        state.cart.push({ ...product, amount: 1 });
      }
      state.currentOrder.push(product._id);
    },
    [Mutations.REMOVE_FROM_ORDER](state, id) {
      const index = state.cart.findIndex((product) => product._id === id);
      state.cart.splice(index, 1);

      state.currentOrder = state.currentOrder.filter(
        (element) => element !== id
      );
    },
    [Mutations.DECREASE_AMOUNT](state, id) {
      const product = state.cart.find((item) => item._id == id);
      product.amount--;

      state.currentOrder = state.currentOrder.filter(
        (element) => element !== id
      );
    },
    [Mutations.DECREASE_AMOUNT](state, id) {
      const product = state.cart.find((item) => item._id == id);
      product.amount--;

      const orderIndex = state.currentOrder.indexOf(id);
      state.currentOrder.splice(orderIndex, 1);
    },
    [Mutations.REMOVE_ORDER](state) {
      state.cart = [];
      state.currentOrder = [];
    },
  },
  actions: {
    updateOrder({ commit }, product) {
      commit(Mutations.UPDATE_ORDER, product);
    },
    removeFromOrder({ commit, state }, product) {
      const index = state.cart.findIndex((item) => item._id === product._id);
      if (state.cart[index]) {
        commit(Mutations.REMOVE_FROM_ORDER, product._id);
      }
    },
    decreaseAmount({ commit, state }, product) {
      const index = state.cart.findIndex((item) => item._id === product._id);
      if (state.cart[index]) {
        if (state.cart[index].amount > 1) {
          commit(Mutations.DECREASE_AMOUNT, product._id);
        } else {
          commit(Mutations.REMOVE_FROM_ORDER, product._id);
        }
      }
    },
    async makeOrder({ state, commit, rootGetters, dispatch }) {
      const token = rootGetters["user/getUserToken"];
      const orderObj = { items: state.currentOrder };

      const order = await API.makeOrder(orderObj, token);
      if (token) {
        dispatch("user/updateOrderHistory", { root: true });
      }
      commit(Mutations.REMOVE_ORDER);
      return order
    },
  },
};

export default order;
