import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const getTeachingCourses = async () =>{
    try{
        let response = await axios.get(`${baseURL}/courses/teaching`,
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
