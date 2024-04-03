import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postCreateGroup = async (name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.post(
            `${baseURL}/groups`,
            body,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}