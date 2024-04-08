import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {handleAxiosError} from "../../helpers/handleAxiosError.js";
export const getProfile = async () => {
    try {
        const response = await axios.get(`${baseURL}/profile`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.log(error)
        handleAxiosError(error)
    }
}
