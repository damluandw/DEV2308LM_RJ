import * as  types from '../constants'
//action khu người dùng thay đổi trên userName
export const actChangeUserName = (value) =>{
    return {
        type : types.CHANGE_USERNAME, //change /userName
        data: value
    }
};
//action khu người dùng thay đổi trên courseName
export const actChangeCourseName = (value) =>{
    return {
        type : types.CHANGE_COURSENAME,//change /courseName
        data: value
    }
};
