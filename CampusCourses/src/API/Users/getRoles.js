import axios from "axios";
export const getRoles = async () =>{
    try{
        let response = await axios.get('https://camp-courses.api.kreosoft.space/roles',
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