import { productsConstants as Mutations } from "@/store/constants";
import * as API from "@/api";

const products = {
  namespaced: true,
  state: () => ({
    products: [],
    productsById: {},
  }),
  getters: {
    getProducts: (state) => state.products,
    getProductById: (state) => (id) => state.productsById[id],
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, products) {
      state.products = products;

      products.forEach((product) => {
        state.productsById[product._id] = product;
      });
    },
    [Mutations.CREATE_PRODUCT](state, product) {
      state.products.push(product);
      state.productsById[product._id] = product;
    },
    [Mutations.UPDATE_PRODUCT](state, product) {
      const existingProducts = state.products.filter(
        (prod) => prod._id !== product._id
      );
      existingProducts.push(product);
      state.productsById[product._id] = product;
    },
    [Mutations.REMOVE_PRODUCT](state, id) {
      console.log(id);
      state.products = state.products.filter((product) => product._id !== id);
      state.productsById[id] = "";
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await API.getProducts();
      commit(Mutations.SET_PRODUCTS, response);
    },
    async postProduct({ commit, rootGetters }, product) {
      try {
        const token = rootGetters["user/getUserToken"];
        const data = await API.postProduct(product, token);
        commit(Mutations.CREATE_PRODUCT, data.product);
      } catch (error) {
        return error;
      }
    },
    async updateProduct({ commit, rootGetters }, product) {
      try {
        const token = rootGetters["user/getUserToken"];
        const data = await API.patchProduct(product, token);
        commit(Mutations.UPDATE_PRODUCT, data.data);
        return data.message;
      } catch (error) {
        return error;
      }
    },
    async removeProduct({ commit, rootGetters }, product) {
      try {
        const token = rootGetters["user/getUserToken"];
        const data = await API.removeProduct(product.id, token);
        commit(Mutations.REMOVE_PRODUCT, product.id);
        return data.message;
      } catch (error) {
        return error;
      }
    },
  },
};

export default products;
