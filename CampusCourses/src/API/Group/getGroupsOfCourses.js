import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const getGroupsOfCourses = async () =>{
    try{
        let response = await axios.get(`${baseURL}/groups`, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}
