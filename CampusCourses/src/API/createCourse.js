import axios from "axios";

export const createCourse = async (id, data) =>{
    try {
        let response = await axios.post(`https://camp-courses.api.kreosoft.space/groups/${id}`,
            data, {
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