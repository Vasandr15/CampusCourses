import axios from "axios";

export const createGroup = async (name) =>{

    const body = {"name" : name}

    try{
        const response = await axios.post(
            'https://camp-courses.api.kreosoft.space/groups',
            body,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            }
        );
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}