import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";

export const getUsers = async () => {
    try {
        let response = await axios.get(`${baseURL}/users`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
        handleAxiosError(error)
    }
}