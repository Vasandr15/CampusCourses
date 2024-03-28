import axios from "axios";

localStorage.setItem("token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkZGMwMjVmOS1mOWIzLTQxYmUtMTJjZC0wOGRiMmU4YWNhZmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6ImMwOTg3ODhhLTIzYzYtNDhhOC1hNzYyLTlhODhhNDFkNjgyZCIsIm5iZiI6MTcxMTYwNzI5MywiZXhwIjoxNzExNjEwODkzLCJpYXQiOjE3MTE2MDcyOTMsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.WcoRHi84Dqp1ec8yaAGXgNRLojkNUqYvyA4B_W1avgo"
)
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
