import {SET_NOT_FOUND} from "../actions/notFoundAction.js";

const initialState = {
    notFound: false,
    loading: false,
    error: null
};

const notFoundReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOT_FOUND:
            return { ...state, notFound: action.payload };
        default:
            return state;
    }
};

export default notFoundReducer;