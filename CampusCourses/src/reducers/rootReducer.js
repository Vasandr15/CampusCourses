import {combineReducers} from "redux";
import rolesReducer from "./rolesReducer.js";
import currentCourseUserRole from "./currentCourseStudentReducer.js";
import emailReducer from "./emailReducer.js";


const rootReducer = combineReducers({
    roles: rolesReducer,
    currentCourseRole: currentCourseUserRole,
    email: emailReducer
})

export default rootReducer;