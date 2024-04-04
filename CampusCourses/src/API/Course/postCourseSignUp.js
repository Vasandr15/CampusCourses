import axios from "axios";
import { baseURL } from "../../consts/baseURL.js";
import { config } from "../../consts/config.js";

export const postCourseSignUp = async (courseId) => {
    try {
        let response = await axios.post(`${baseURL}/courses/${courseId}/sign-up`,[], config);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}
