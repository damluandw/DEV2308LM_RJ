import * as mess from "../constants/message";
import { CHANGE_NOTIFY } from "../constants/actionType";
//hằng

let messNotify = { typeMess: "", title: "", message: "" };
let initState = messNotify;

// tạo reducer
const notify = (state = initState, action) => {
  switch (action) {
    
    case CHANGE_NOTIFY:

      state = action;
      return state;
    default:
      return state;
  }
};

export default notify;
