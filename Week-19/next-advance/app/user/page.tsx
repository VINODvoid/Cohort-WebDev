import axios from "axios"

const User = async() => {
    const response = await axios.get("http://localhost:3000/api/v1/user/details");
    await new Promise(r => setTimeout(r,3000));
    const data = response.data;
    console.log("Request went")
    return (
        <div>
            {data.email}
            <br />
            {data.name}
        </div>
    )
}

export default User