import {combineReducers} from "redux";
import rolesReducer from "./rolesReducer.js";
import currentCourseUserRole from "./currentCourseStudentReducer.js";
import emailReducer from "./emailReducer.js";
import courseReducer from "./courseReducer.js";
import authReducer from "./authReducer.js";


const rootReducer = combineReducers({
    roles: rolesReducer,
    currentCourseRole: currentCourseUserRole,
    email: emailReducer,
    courseInfo: courseReducer,
    isAuth: authReducer
})

export default rootReducer;