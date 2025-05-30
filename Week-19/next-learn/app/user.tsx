import axios from "axios"
export async function User()
{

    const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
    await new Promise(r=>setTimeout(r,3000));
    return response.data;
    
}