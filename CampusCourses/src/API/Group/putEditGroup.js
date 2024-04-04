import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const putEditGroup = async (id, name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.put(`${baseURL}/groups/${id}`, body, config);
        console.log(response)
        return response.status;
    }
    catch (error){
        console.log(error)
    }
}