//sử dụng hằng
import * as types from '../constants/actionType.js';

// action cho chức năng hiển thị sản phẩm
export const act_list_product = () =>{
    return{
        type : types.LIST_PRODUCT
    }
}

// action cho chức năng hiển thị sản phẩm mua hàng
export const act_buy_item = (product, quantity) =>{
    return{
        type : types.BUY_ITEM,
        product,
        quantity
    }
}
// action cho chức năng update sản phẩm mua hàng
export const act_update_item = (product, quantity) =>{
    return{
        type : types.UPDATE_ITEM,
        product,
        quantity
    }
}

// action cho chức năng xoá sản phẩm mua hàng
export const act_delete_item = (product) =>{
    return{
        type : types.DELETE_ITEM,
        product,
    }
}