import {createStore} from 'redux';
import rootReducer from '../reducers';
// Tạo store từ reducer
export const store = createStore(rootReducer);