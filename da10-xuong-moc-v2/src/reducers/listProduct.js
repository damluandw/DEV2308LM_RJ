import { axios } from "./api/api-xm.js";
import { LIST_PRODUCT } from "../constants/actionType.js";
const initState = [];

const getListProduct = async () => {
  let response = await axios.get("api/Categories");
  return response.data;
};

const getIndexByProduct = (listProduct, product) => {
  for (let index = 0; index < listProduct.length; index++) {
    if (listProduct[index].product.productId === product.productId) {
      return index;
    }
  }
  return -1;
};

initState = getListProduct();

//tạo reducer
const listProduct = (state = initState, action) => {
  switch (action.type) {
    case LIST_PRODUCT:
      return state;
    default:
      return state;
  }
};

export default listProduct;
