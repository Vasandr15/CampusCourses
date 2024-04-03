import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const getCoursesMy = async () =>{
    try{
        let response = await axios.get(`${baseURL}/courses/my`,
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
