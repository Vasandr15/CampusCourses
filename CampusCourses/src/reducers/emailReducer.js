import {SET_EMAIL} from "../actions/emailAction.js";


const initialState = {
    email: null,
    loading: false,
    error: null
};

const emailReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_EMAIL:
            return { ...state, email: action.payload };
        default:
            return state;
    }
};

export default emailReducer;
