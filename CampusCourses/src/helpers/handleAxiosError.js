import {useDispatch} from "react-redux";
import {setAuth} from "../actions/authorizationAction.js";

export const handleAxiosError = (error) => {
    const dispatch = useDispatch()
    if (error.response) {
        switch (error.response.status){
            case 401:
                dispatch(setAuth(false))
                return
        }
    }
};
