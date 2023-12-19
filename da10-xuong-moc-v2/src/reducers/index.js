import { combineReducers } from "redux";
import lisProduct from "./listProduct.js";
import listCategory from "./listCategory.js";
import carts from "./carts.js";
import wishlist from "./wishlist.js";
import notify from "./notify.js";

// tạo reducer cho ứng dụng
const reducer = combineReducers({
    listCategory: listCategory,
    lisProduct: lisProduct,
    carts: carts,
    wishlist: wishlist,
    notify: notify,
});

export default reducer;
