import {
  ADD_ITEM,
  DELETE_ITEM,
  LIST_CART,
  UPDATE_ITEM,
} from "../constants/actionType.js";
import { LOCAL_STORE_CARTS } from "../constants/localStorageName.js";
let initState = [];

const carts = JSON.parse(localStorage.getItem(LOCAL_STORE_CARTS));

initState = carts == null || carts.length == 0 ? [] : carts;

const getIndexByProduct = (listProduct, product) => {
  for (let index = 0; index < listProduct.length; index++) {
    if (listProduct[index].product.id === product.id) {
      return index;
    }
  }
  return -1;
};
//tạo reducer
const listCart = (state = initState, action) => {
  //lấy sản phẩm, số lượng từ action
  let { product, quantity } = action;
  let item = { product, quantity };
  // biến quản lý chức năng mua (mua mới/ mua thêm
  let index = -1; // giả định sản phẩm là mua mới
  // tuỳ theo chức năng (type) để xác định mua hàng, cập nhật, xoá
  switch (action.type) {
    case LIST_CART:
      return state;
    case ADD_ITEM: // mua hàng
      if (state.length === 0) {
        //khách hàng chưa mua hàng và giỏ hàng của khách chưa có sản phẩm nào
        //thêm sản phẩm vào giỏ hàng
        state.push(item);
      } else {
        // giỏ hàng của khách đã tồn tại
        //TH1/TH2
        // dựa vào index để xác định => viết hàm kiểm tra sản phẩm đã có trong giỏ hàng chưa
        index = getIndexByProduct(state, product);
        if (index === -1) {
          state.push(item);
        } else {
          // nếu sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
          state[index].quantity =
            parseInt(state[index].quantity) + parseInt(quantity);
        }
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_CARTS, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM: // cập nhật giỏ hàng
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state[index].quantity = parseInt(quantity);
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_CARTS, JSON.stringify(state));
      return [...state];
    case DELETE_ITEM: // xoá sản phẩm trong giỏ hàng
      // tìm sản phẩm cần xoá
      //c1
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state.splice(index, 1);
      }
      //c2
      // state = state.filter((x) => x.product.id != product.id);
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_CARTS, JSON.stringify(state));
      // return state;
      return [...state];

    default:
      break;
  }
  return state; //new state
};

export default listCart;
