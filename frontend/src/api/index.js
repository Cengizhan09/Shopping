import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';

export const authUser = async (userObj) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/auth/`, userObj);
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};

export const registerUser = async (userObj) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/register/`, userObj);
    return data;
  } catch ({ response }) {
    throw new Error(response.data.errors);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/`);
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const postProduct = async (product, token) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/products`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const patchProduct = async (product, token) => {
  try {
    const { data } = await axios.patch(
      `${BASE_URL}/products/${product._id}`,
      product,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const removeProduct = async (id, token) => {
  try {
    const { data } = await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/products/${id}`);
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const makeOrder = async (order, token) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/orders`, order, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const getUserOrders = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/orders`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const getUserProfile = async (token) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
export const patchUserProfile = async (userObj, token) => {
  try {
    const { data } = await axios.patch(`${BASE_URL}/me`, userObj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch ({ response }) {
    throw new Error(response.data.error);
  }
};
