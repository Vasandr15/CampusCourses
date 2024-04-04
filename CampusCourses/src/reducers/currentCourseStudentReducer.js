import {SET_CURRENT_COURSE_USER_ROLE} from "../actions/currentCourseUserRoleAction.js";


const initialState = {
    currentCourseRole: null,
    loading: false,
    error: null
};

const currentCourseUserRole = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_COURSE_USER_ROLE:
            return { ...state, currentCourseRole: action.payload };
        default:
            return state;
    }
};

export default currentCourseUserRole;
