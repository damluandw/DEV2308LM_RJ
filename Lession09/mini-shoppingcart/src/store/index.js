import { createStore } from "redux";
import reducer from '../reducers/index';
const storeApp = createStore(reducer);
export default storeApp;