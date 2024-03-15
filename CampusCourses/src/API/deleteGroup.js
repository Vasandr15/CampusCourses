import axios from "axios";

export const deleteGroup = async (id) =>{
    try{
        const response = await axios.delete(
            `https://camp-courses.api.kreosoft.space/groups/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        console.log(response)
        return response.status;
    }
    catch (error){
        console.log(error)
    }
}