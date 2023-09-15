// combine reducer
import { combineReducers } from 'redux';
import lisProduct from './listProduct.js'
import cart from './cart.js'
import notify from './notify.js'

// tạo reducer cho ứng dụng
const reducer = combineReducers({
    listProduct: lisProduct,
    cart: cart,
    notify: notify
})

export default reducer;