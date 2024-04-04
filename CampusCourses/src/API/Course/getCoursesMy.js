import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const getCoursesMy = async () =>{
    try{
        let response = await axios.get(`${baseURL}/courses/my`,
            config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}
