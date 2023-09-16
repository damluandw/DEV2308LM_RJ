// Sử dụng hằng
import { BUY_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../constants/actionType";

// khởi tạo dữ liệu (old state)
const initState = [
  {
    product: {
      productId: "P001",
      productName: "aplusautomation",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 12,
      quantity: 1,
      image: "aplusautomation.jpg",
    },
    quantity: 1,
  },
  {
    product: {
      productId: "P003",
      productName: "robo fig combo",
      descriptions:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
      price: 15,
      quantity: 5,
      image: "robo_fig_combo.jpg",
    },
    quantity: 2,
  },
];

const getIndexByProduct = (listCart, product) => {
  for (let index = 0; index < listCart.length; index++) {
    if (listCart[index].product.productId === product.productId) {
      return index;
    }
  }
  return -1;
};

// tạo reducer
const cart = (state = initState, action) => {
  let { product, quantity } = action;
  let item = { product, quantity };
  let index = -1;
  switch (action.type) {
    case BUY_ITEM:
      if (state.length === 0) {
        state.push(item);
      } else {
        index = getIndexByProduct(state, product);
        if (index === -1) {
          state.push(item);
        } else {
          alert(
            "Sản phẩm đã có trong giỏ hàng. Vui lòng kiểm tra lại đơn hàng"
          );
        }
      }

      return [...state];
    case UPDATE_ITEM:
      index = getIndexByProduct(state, product);
      state[index].quantity = parseInt(quantity);
      if (state[index].product.quantity < state[index].quantity) {
        state[index].quantity = state[index].product.quantity;
        alert(
          "Sản phẩm trong kho còn " +
            state[index].product.quantity +
            "sản phẩm. Vui lòng kiểm tra lại số lượng trong đơn hàng"
        );
      }
      return [...state];
    case DELETE_ITEM:
      state = state.filter((x) => x.product.productId != product.productId);
      return state;
    default:
      return state;
  }
};

export default cart;
