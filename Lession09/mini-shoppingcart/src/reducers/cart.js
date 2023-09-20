// Sử dụng các chức năng trong giỏ hàng : buy update , delete
//sử dụng localStorage
import { BUY_ITEM, DELETE_ITEM, UPDATE_ITEM } from "../constants/actionType";
import { LOCAL_STORE_NAME } from "../constants/localStorageName";

//hằng
let initState = [];
// kiểm tra xem mua lần đầu tiên hay mua thêm
const shoppingCartLocal = JSON.parse(localStorage.getItem(LOCAL_STORE_NAME));
initState =
  shoppingCartLocal != null && shoppingCartLocal.length >= 0
    ? shoppingCartLocal
    : [];

const getIndexByProduct = (listCart, product) => {
  for (let index = 0; index < listCart.length; index++) {
    if (listCart[index].product.productId === product.productId) {
      return index; //sản phẩm đã tồn tại trong giỏ hàng
    }
  }
  return -1; // sản phẩm chưa có trong giỏ hàng
};
// tạo reducer
const cart = (state = initState, action) => {
  //lấy sản phẩm, số lượng từ action
  let { product, quantity, isChangeCart } = action;
  let item = { product, quantity, isChangeCart };
  // biến quản lý chức năng mua (mua mới/ mua thêm
  let index = -1; // giả định sản phẩm là mua mới
  // tuỳ theo chức năng (type) để xác định mua hàng, cập nhật, xoá
  switch (action.type) {
    case BUY_ITEM: // mua hàng
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
          state[index].isChangeCart = isChangeCart;
        }
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state));
      return [...state];
    case UPDATE_ITEM: // cập nhật giỏ hàng
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state[index].quantity = parseInt(quantity);
        state[index].isChangeCart = isChangeCart;
      }
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state));
      return [...state];
    case DELETE_ITEM: // xoá sản phẩm trong giỏ hàng
      // tìm sản phẩm cần xoá
      //c1
      index = getIndexByProduct(state, product);
      if (index >= 0) {
        state.splice(index, 1);
      }
      //c2
      // state = state.filter((x) => x.product.productId != product.productId);
      // cập nhật localStorage
      localStorage.setItem(LOCAL_STORE_NAME, JSON.stringify(state));
      // return state;
      return [...state];

    default:
      break;
  }
  return state; //new state
};

export default cart;
