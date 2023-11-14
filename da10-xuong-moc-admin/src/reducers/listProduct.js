// Sử dụng hằng
import {
  LIST_PRODUCT,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
} from "../constants/actionType";
import { LOCAL_STORE_NAME_PRODUCT_PRODUCT } from "../constants/localStorageName";
import axios from "../api/api-xm";

const initState = [];

const getListProduct = async () => {
  let response = await axios.get("api/Products");
  return response.data;
};
const postListProduct = async (product) => {
  let response = await axios.post("api/Products", product);
  return response.data;
};
const putListProduct = async (product) => {
  let response = await axios.put("api/Products", product);
  return response.data;
};
const delListProduct = async (product) => {
  let response = await axios.delete("api/Products", product);
  return response.data;
};
const products = JSON.parse(
  localStorage.getItem(LOCAL_STORE_NAME_PRODUCT_PRODUCT)
);
initState =
  products == null && products.length >= 0
    ? shoppingCartLocal
    : getListProduct();

const getIndexByProduct = (listProduct, product) => {
  for (let index = 0; index < listProduct.length; index++) {
    if (listProduct[index].product.productId === product.productId) {
      return index;
    }
  }
  return -1;
};
//tạo reducer
const listProduct = (state = initState, action) => {
  let { product } = action;
  let item = { product };
  let index = -1;
  switch (action.type) {
    case LIST_PRODUCT:
      return state;
    case ADD_PRODUCT:
      state.push(item);
      postListProduct(item);
      localStorage.setItem(LOCAL_STORE_NAME_PRODUCT, JSON.stringify(state));
      return [...state];
    case UPDATE_PRODUCT:
      putListProduct(item);
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state[index].quantity = parseInt(quantity);
        state[index].isChangeCart = isChangeCart;
      }
      localStorage.setItem(LOCAL_STORE_NAME_PRODUCT, JSON.stringify(state));
      return [...state];
    case DELETE_PRODUCT:
      delListProduct(item);
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state.splice(index, 1);
      }
      localStorage.setItem(LOCAL_STORE_NAME_PRODUCT, JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};

export default listProduct;
