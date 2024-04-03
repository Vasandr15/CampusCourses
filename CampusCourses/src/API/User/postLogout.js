import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postLogout =async () =>{
    try{
        let response = await axios.post(`${baseURL}/logout`, [],
            {
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