import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const postCreateGroup = async (name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.post(`${baseURL}/groups`, body, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}