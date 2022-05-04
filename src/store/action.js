import axios from "axios";

export const GET_PRODUCT = "GET_PRODUCT";
export const SET_LOADING_TRUE = "SET_LOADING_TRUE";
export const SET_LOADING_FALSE = "SET_LOADING_FALSE";

export const updateProducts = (newProduct) => {
  return { type: GET_PRODUCT, payload: newProduct };
};

export const setLoadingTrue = () => {
  return { type: SET_LOADING_TRUE };
};

export const setLoadingFalse = () => {
  return { type: SET_LOADING_FALSE };
};

export const getProduct = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoadingTrue());
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(updateProducts(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoadingFalse());
    }
  };
};
