import axios from "axios";

export const editGroup = async (id, name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.put(
            `https://camp-courses.api.kreosoft.space/groups/${id}`,
            body,
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