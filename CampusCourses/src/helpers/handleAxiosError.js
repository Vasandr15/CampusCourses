import {setAuth} from "../actions/authorizationAction.js";
import store from "../store.js";



export const handleAxiosError = (error) => {
    console.log(error.response)
    if (error.response) {
        switch (error.response.status) {
            case 401:
                store.dispatch(setAuth(false))
                break
        }
    }
};
