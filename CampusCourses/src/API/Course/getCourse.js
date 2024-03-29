import axios from "axios";

localStorage.setItem("token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJkZGMwMjVmOS1mOWIzLTQxYmUtMTJjZC0wOGRiMmU4YWNhZmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9hdXRoZW50aWNhdGlvbiI6IjNmNWRhODFiLTI3ZWItNDc3MS1hM2ZlLWU2NTdmNTI3NDRiNCIsIm5iZiI6MTcxMTcxODg2NSwiZXhwIjoxNzExNzIyNDY1LCJpYXQiOjE3MTE3MTg4NjUsImlzcyI6IkNhbXB1c0NvdXJzZS5BUEkiLCJhdWQiOiJDYW1wdXNDb3Vyc2UuQVBJIn0.OtAuPtMKr-fAxH9aVRfiUawaypSzLrSeWrp0qe7oooI"
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
