import axios from "axios";
import {baseURL} from "../../consts/baseURL.js";

export const postAddTeacher = async (teacher, courseId) =>{
    try{
        let data = {"userId" : teacher}
        let response = await axios
            .post(`${baseURL}/courses/${courseId}/teachers`, data,
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