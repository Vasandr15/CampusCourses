import {UPDATE_COURSE_INFO} from "../actions/getCourseInfoAction.js";

const initialState = {
    courseInfo: null
};

const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COURSE_INFO:
            return {
                ...state,
                courseInfo: action.payload
            };
        default:
            return state;
    }
};

export default courseReducer;
