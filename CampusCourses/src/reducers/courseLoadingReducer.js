import {SET_LOADING} from "../actions/loadCourse.js";


const initialState = {
    isLoading: false
};

const courseLoadingReducer  = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }
};

export default courseLoadingReducer;
