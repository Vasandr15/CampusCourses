import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const getCourses = async (id) => {
    try {
        let response = await axios.get(`${baseURL}/groups/${id}`,{
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