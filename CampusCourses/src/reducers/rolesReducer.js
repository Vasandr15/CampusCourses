
import { SET_ROLES } from '../actions/rolesActions';

const initialState = {
    roles: [],
    loading: false,
    error: null
};

const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ROLES:
            return { ...state, roles: action.payload };
        default:
            return state;
    }
};

export default rolesReducer;
