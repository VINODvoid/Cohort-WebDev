import axios from "axios"
export async function User()
{
    const response = await axios.get("http://localhost:3000/api/user/v1")
    return response.data;   
}