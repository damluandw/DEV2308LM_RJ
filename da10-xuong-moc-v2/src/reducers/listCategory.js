import axios from "../api/api-xm.js";
import { LIST_CATEGORY } from "../constants/actionType.js";

let initState = [{}];

const getListCategory = async () => {
  let response = await axios.get("api/Products");
  return response.data;
};

initState =  getListCategory();

//tạo reducer
const listCategory = (state = initState, action) => {
  switch (action.type) {
    case LIST_CATEGORY:
      return state;
    default:
      return state;
  }
};

export default listCategory;
