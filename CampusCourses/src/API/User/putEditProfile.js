import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const putEditProfile = async (data) => {
    try {
        const response = await axios.put(`${baseURL}/profile`, data ,config);
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('An error occurred:', error.response ? error.response.status : error.message);
    }
}