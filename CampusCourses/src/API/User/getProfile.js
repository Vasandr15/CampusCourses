import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const getProfile = async () => {
    try {
        const response = await axios.get(`${baseURL}/profile`,config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('An error occurred:', error.response ? error.response.status : error.message);
    }
}
