import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postCreateCourse = async (id, data) =>{
    try {
        let response = await axios.post(`${baseURL}/groups/${id}`,
            data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}