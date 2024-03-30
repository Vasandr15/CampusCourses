import axios from "axios";

export const postLoginUser =async (userCredentials) =>{
    try{
        let response = await axios.post('https://camp-courses.api.kreosoft.space/login',
            userCredentials);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}