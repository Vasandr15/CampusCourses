import axios from "axios";

export const postCourseNotification = async (notification, isImportant) =>{
    try{
        let data = {"text" : notification, "isImportant": isImportant}
        let courseId = localStorage.getItem("currentCourseId")
        let response = await axios
            .post(`https://camp-courses.api.kreosoft.space/courses/${courseId}/notifications`, data,
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