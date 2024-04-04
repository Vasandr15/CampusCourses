import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const putEditCourse = async (id, data) =>{
    try {
        let response = await axios.put(`${baseURL}/courses/${id}`,
            data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}