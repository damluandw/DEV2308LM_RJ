import axios from "../api/api-xm.js";
import { LIST_PRODUCT } from "../constants/actionType.js";

let initState = [
  {
    id: 0,
    cid: 0,
    code: "string",
    title: "string",
    description: "string",
    content: "string",
    image: "string",
    metaTitle: "string",
    metaKeyword: "string",
    metaDescription: "string",
    slug: "string",
    priceOld: 0,
    priceNew: 0,
    size: "string",
    views: 0,
    likes: 0,
    star: 0,
    home: 0,
    hot: 0,
    createdDate: "2023-11-28T16:03:27.701Z",
    updatedDate: "2023-11-28T16:03:27.701Z",
    adminCreated: "string",
    adminUpdated: "string",
    status: 0,
    isdelete: true,
  },
];

let getListProduct = async () => {
  let response = await axios.get("api/Products");
  return response.data;
};

let list = getListProduct();
initState = list == null ? [] : [];

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
