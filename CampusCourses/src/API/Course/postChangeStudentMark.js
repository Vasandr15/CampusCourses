import axios from "axios";

export const postChangeStudentMark = async (studentId, markType, mark) =>{
    try{
        let data = {"markType" : markType, "mark" : mark}
        let courseId = localStorage.getItem("currentCourseId")
        console.log(studentId, courseId, markType, mark)
        let response = await axios
            .post(`https://camp-courses.api.kreosoft.space/courses/${courseId}/marks/${studentId}`, data,
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