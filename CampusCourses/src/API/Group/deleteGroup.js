import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const deleteGroup = async (id) =>{
    try{
        const response = await axios.delete(
            `${baseURL}/groups/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        console.log(response)
        return response.status;
    }
    catch (error){
        console.log(error)
    }
}