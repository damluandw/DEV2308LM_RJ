// const reducer ="Devmaster Academy";
// console.log(reducer);

// 1.Import createStore từ Redux
import { createStore } from "redux";
// 2.Tạo reducer từ state và action
// input: old state, action
// output: return new state
// khởi tao một state
const initialState = {
    userName: "Dam Luan",
    courseName: "Devmaster ReactJS"
}
// Tạo một reducer
const reducer = (state = initialState, action) => {
    // tiếp nhận action và thực thiện state
    switch (action.type) {
        case "CHANGE_USER_NAME":
            state.userName = action.userNameNew;
            break;
        case "CHANGE_COURSE_NAME":
            state.courseName = action.courseNameNew;
            break;
        default:
            return state;
    }
    return state;
}
// 3.Tạo store từ reducer
const store = createStore(reducer);
// Lấy dữ liệu từ Store
console.log(store);
// Lấy dữ liệu từ Store sử dụng getState
console.log("Initial State");
console.log(store.getState());
// 4. Thực hiện cập nhật state của store
// Thực hiện cập nhật state của store (với userName)
const actChangeUserName = () => {
    return {
        type: "CHANGE_USER_NAME",
        userNameNew: "Nguyễn Văn Devmaster"
    }
}
// Bắn Action từ component lên store để thực hiện cập nhật state
store.dispatch(actChangeUserName());
console.log("Change userName");
console.log(store.getState());
const actChangeCourseName = () => {
    return {
        type: "CHANGE_COURSE_NAME",
        courseNameNew: "Devmaster ReactJS Redux"
    }
}
store.dispatch(actChangeCourseName());
console.log("Change course Name");
console.log(store.getState());


export default reducer