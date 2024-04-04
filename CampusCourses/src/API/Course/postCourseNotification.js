import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";
import {config} from "../../consts/config.js";

export const postCourseNotification = async (notification, isImportant, courseId) =>{
    try{
        let data = {"text" : notification, "isImportant": isImportant}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/notifications`, data, config);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}