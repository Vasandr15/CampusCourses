import axios from "axios";

localStorage.setItem("token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkZGMwMjVmOS1mOWIzLTQxYmUtMTJjZC0wOGRiMmU4YWNhZmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6IjhiYTYxNjFkLWI1MTUtNDRlNy04MzQwLWQ3Y2M5MzhmNWNlZCIsIm5iZiI6MTcxMTU1NTYzNiwiZXhwIjoxNzExNTU5MjM2LCJpYXQiOjE3MTE1NTU2MzYsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.UxK_pwt58eWUPnr6DvbIuxqRw1c7lxrZinc9CnkxN_I")
export const getCourse = async (id) =>{
    try{
        let response = await axios.get(`https://camp-courses.api.kreosoft.space/courses/${id}/details`,
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
