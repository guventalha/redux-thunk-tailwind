import { GET_PRODUCT } from "./action";
import { SET_LOADING_TRUE } from "./action";
import { SET_LOADING_FALSE } from "./action";

const initialState = {
  product: [],
  loading: false,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return { ...state, product: action.payload };

    case SET_LOADING_FALSE:
      return { ...state, loading: false };

    case SET_LOADING_TRUE:
      return { ...state, loading: true };

    default:
      return state;
  }
};

export default productReducer;
