import {combineReducers} from "redux";
import rolesReducer from "./rolesReducer.js";
import currentCourseUserRole from "./currentCourseStudentReducer.js";
import emailReducer from "./emailReducer.js";
import courseReducer from "./courseReducer.js";
import authReducer from "./authReducer.js";
import courseLoadingReducer from "./courseLoadingReducer.js";
import notFoundReducer from "./notFoundReducer.js";

const rootReducer = combineReducers({
    roles: rolesReducer,
    currentCourseRole: currentCourseUserRole,
    email: emailReducer,
    courseInfo: courseReducer,
    isAuth: authReducer,
    isLoading: courseLoadingReducer,
    notFound: notFoundReducer
})

export default rootReducer;