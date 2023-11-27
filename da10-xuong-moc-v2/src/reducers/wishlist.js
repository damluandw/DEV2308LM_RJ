import {
  ADD_ITEM,
  ADD_WISHLIST,
  DELETE_ITEM,
  LIST_CART,
  LIST_WISHLIST,
  UPDATE_ITEM,
} from "../constants/actionType.js";
import { LOCAL_STORE_WISHLISH } from "../constants/localStorageName.js";
const initState = [];

const listwishlist = JSON.parse(localStorage.getItem(LOCAL_STORE_WISHLISH));

initState =
  listwishlist == null || listwishlist.length == 0 ? [] : listwishlist;

const getIndexByProduct = (listProduct, product) => {
  for (let index = 0; index < listProduct.length; index++) {
    if (listProduct[index].product.id === product.id) {
      return index;
    }
  }
  return -1;
};
//tạo reducer
const wishlist = (state = initState, action) => {
  //lấy sản phẩm, số lượng từ action
  let { product } = action;
  let item = { product };
  // biến quản lý chức năng thêm
  let index = -1; // giả định sản phẩm là thêm mới
  // tuỳ theo chức năng (type) để xác định thêm, xoá
  switch (action.type) {
    case LIST_WISHLIST:
      return state;
    case ADD_WISHLIST: // thêm
      if (state.length === 0) {
        //khách hàng chưa có danh sách yêu thích của khách chưa có sản phẩm nào
        //thêm sản phẩm vào danh sách yêu thích
        state.push(item);
      } else {
        // danh sách yêu thích của khách đã tồn tại
        //TH1/TH2
        // dựa vào index để xác định => viết hàm kiểm tra sản phẩm đã có trong danh sách yêu thích chưa
        index = getIndexByProduct(state, product);
        if (index === -1) {
          state.push(item);
        } else {
        }
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_WISHLISH, JSON.stringify(state));
      return [...state];
    case DELETE_ITEM: // xoá sản phẩm trong danh sách yêu thích
      // tìm sản phẩm cần xoá
      state = state.filter((x) => x.product.id != product.id);
      // return state;
      return [...state];

    default:
      break;
  }
  return state; //new state
};

export default wishlist;
