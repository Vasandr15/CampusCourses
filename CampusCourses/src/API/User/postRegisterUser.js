import axios from "axios";

export const postRegisterUser =async (userCredentials) =>{
    try{
        let response = await axios.post('https://camp-courses.api.kreosoft.space/registration',
            userCredentials);
        console.log(response.data)
        return response.data;
    }
    catch (error){
        console.log(error)
    }
}
