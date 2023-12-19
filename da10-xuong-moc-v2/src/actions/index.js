//sử dụng hằng
import * as types from '../constants/actionType.js'


// action cho chức năng hiển thị danh mục sản phẩm
export const act_list_category = () =>{
    return {
        types: types.LIST_CATEGORY
    }
}

// action cho chức năng hiển thị sản phẩm
export const act_list_product = () =>{
    return {
        types: types.LIST_PRODUCT
    }
}

// action cho chức năng hiển thị tin tức
export const act_list_news = () =>{
    return {
        types: types.LIST_NEWS
    }
}

// action cho chức năng hiển thị giỏ hàng
export const act_list_cart = () =>{
    return {
        types: types.LIST_CART
    }
}

// action cho chức năng hiển thị danh sách yêu thích
export const act_list_wishlist = () =>{
    return {
        types: types.LIST_WISHLIST
    }
}

// action cho chức năng hiển thị sản phẩm trong giỏ hàng
export const act_buy_item = (product, quantity) =>{
    return{
        type : types.ADD_ITEM,
        product,
        quantity
    }
}

// action cho chức năng update sản phẩm trong giỏ hàng
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
// action cho chức năng hiển thị sản phẩm trong giỏ hàng
export const act_add_wishlist = (product, quantity) =>{
    return{
        type : types.ADD_WISHLIST,
        product,
        quantity
    }
}

// action cho chức năng xoá sản phẩm mua hàng
export const act_delete_wishlist = (product) =>{
    return{
        type : types.DELETE_WISHLIST,
        product,
    }
}
// action cho chức năng thông báo
export const act_change_notify = (typeMess, title,content) => {
    return {
      type: types.CHANGE_NOTIFY,
      payload: content,
      typeMess : typeMess,
      title: title
    };
  };