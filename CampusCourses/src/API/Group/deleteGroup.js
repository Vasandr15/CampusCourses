import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const deleteGroup = async (id) =>{
    try{
        const response = await axios.delete(`${baseURL}/groups/${id}`, config);
        console.log(response)
        return response.status;
    }
    catch (error){
        console.log(error)
    }
}