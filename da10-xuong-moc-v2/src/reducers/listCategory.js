import axios from "../api/api-xm.js";
import { LIST_CATEGORY } from "../constants/actionType.js";

let initState = [];

// const getListCategory = async () => {
//   return (await axios.get("api/Categories")).data;
// };

const getListCategory = async () => {
  const respone = await axios.get("api/Categories")
  return respone.data;
};

let categories = getListCategory();
initState = categories == undefined ? [] : categories;

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
