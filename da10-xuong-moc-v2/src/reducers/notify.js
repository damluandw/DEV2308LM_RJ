import * as mess from "../constants/message";
import { CHANGE_NOTIFY } from "../constants/actionType";
//hằng
const initState = mess.MSG_ADD_SUCCESS;

// tạo reducer
const notify = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_NOTIFY:
      state = action;
      return state;
    default:
      return state;
  }
};

export default notify;
