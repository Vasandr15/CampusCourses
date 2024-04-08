import {SET_AUTH} from "../actions/authorizationAction.js";


const initialState = {
    isAuth: true
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH:
            return { ...state, isAuth: action.payload };
        default:
            return state;
    }
};

export default authReducer;
