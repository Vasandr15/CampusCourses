import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postRegisterUser =async (userCredentials) =>{
    try{
        let response = await axios.post(`${baseURL}/registration`,
            userCredentials);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}
