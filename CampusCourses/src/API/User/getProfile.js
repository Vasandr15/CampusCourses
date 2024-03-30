import axios from "axios";

export const getProfile = async () => {
    try {
        const response = await axios.get(`https://camp-courses.api.kreosoft.space/profile`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        });
        console.log('Data:', response.data);
        return response.data;
    } catch (error) {
        console.error('An error occurred:', error.response ? error.response.status : error.message);
    }

}
