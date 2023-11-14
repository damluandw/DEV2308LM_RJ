//sử dụng hằng
import * as types from '../constants/actionType.js';

export const act_list_product = () =>{
    return{
        type : types.LIST_PRODUCT
    }
}

// action cho chức năng thêm sản phẩm
export const act_add_product = (product, quantity) =>{
    return{
        type : types.ADD_PRODUCT,
        product
    }
}
// action cho chức năng update sản phẩm
export const act_update_product = (product, quantity) =>{
    return{
        type : types.UPDATE_PRODUCT,
        product
    }
}

// action cho chức năng xoá sản phẩm
export const act_delete_product = (product) =>{
    return{
        type : types.DELETE_PRODUCT,
        product
    }
}

export const act_change_notify = (content) => {
    return {
      type: types.CHANGE_NOTIFY,
      payload: content,
    };
  };


  // action cho chức năng thêm sản phẩm
export const act_add_cart = (product, quantity) =>{
    return{
        type : types.ADD_CART,
        product,
        quantity
    }
}
// action cho chức năng update sản phẩm
export const act_update_cart = (product, quantity) =>{
    return{
        type : types.UPDATE_CART,
        product,
        quantity
    }
}
