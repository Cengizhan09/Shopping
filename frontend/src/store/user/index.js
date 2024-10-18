import { userConstants as Mutations } from "@/store/constants";
import * as API from "@/api";

const user = {
  namespaced: true,

  state: () => ({
    user: {},
    userOrderHistory: [],
    userOrderHistoryById: {},
    token: "",
  }),
  getters: {
    getUser: (state) => state.user,
    getUserToken: (state) => state.token,
    getUserOrderHistory: (state) => state.userOrderHistory,
    getUserOrderHistoryById: (state) => (id) => state.userOrderHistoryById[id],
  },
  mutations: {
    [Mutations.LOGIN]: (state, data) => {
      state.userOrderHistory = data.items;
      state.user = data.user;
      state.token = data.token;

      if (data.items.length !== 0) {
        data.items.forEach((order) => {
          state.userOrderHistoryById[order._id] = order;
        });
      }
    },
    [Mutations.UPDATE_USER]: (state, user) => {
      state.user = user;
    },
    [Mutations.UPDATE_ORDER_HISTORY]: (state, orders) => {
      state.userOrderHistory = orders
      orders.forEach((order) => {
        state.userOrderHistoryById[order._id] = order;
      });
    },
  },
  actions: {
    login: async ({ commit }, userObj) => {
      try {
        const userData = await API.authUser(userObj);
        const orderHistory = await API.getUserOrders(userData.token);
        const data = { ...userData, items: [...orderHistory] };
        sessionStorage.setItem('userToken', userData.token)
        commit(Mutations.LOGIN, data);
      } catch (error) {
        return error.message;
      }
    },
    register: async (context, userObj) => {
      try {
        const response = await API.registerUser(userObj);
        context.dispatch("login", userObj);
        return response;
      } catch (error) {
        return error.message;
      }
    },
    updateUser: async ({ commit, getters }, userObj) => {
      try {
        const token = getters.getUserToken;
        await API.patchUserProfile(userObj, token);
        const userUpdate = await API.getUserProfile(token);
        commit(Mutations.UPDATE_USER, userUpdate);
      } catch (error) {
        return error.message;
      }
    },
    updateOrderHistory: async ({ state, commit }) => {
      const orderHistory = await API.getUserOrders(state.token  );

      commit(Mutations.UPDATE_ORDER_HISTORY, orderHistory);
    },
    getUser: async ({ commit }, token) => {
      try {
        const user = await API.getUserProfile(token)
        const orderHistory = await API.getUserOrders(token)
        const data = {user, items: [...orderHistory], token}
        commit(Mutations.LOGIN, data)
      } catch (error) {
        return error;
      }
    }
  },
};

export default user;
