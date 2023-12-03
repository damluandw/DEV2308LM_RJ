import axios from "../api/api-xm.js";
import { LIST_PRODUCT } from "../constants/actionType.js";

let initState = [];

let getListProduct = async () => {
  let response = await axios.get("api/Products");
  return response.data;
};

let list = getListProduct();
initState = list == undefined ? [] : list;

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
