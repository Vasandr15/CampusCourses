import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";
export const getRoles = async () =>{
    try{
        let response = await axios.get(`${baseURL}/roles`, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}