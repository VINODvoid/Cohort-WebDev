import axios from "axios";


 const Profile = async() =>{
    // BAD APPROACH

    // const [profilePicture,setProfilePicture] = useState("");
    // useEffect(()=>{
    //     axios.get("http://localhost:3000/api/profile",{
    //         headers:{
    //             authorization:localStorage.getItem("token"),
    //         }
    //     })
    //     .then(res=>{
    //         setProfilePicture(res.data.avatarUrl)
    //     })

    // },[])


    const res = await axios.get("http://localhost:3000/api/profile",{
        headers:{
            authorization:localStorage.getItem("token"),
        }
    });
    const profilePicture = res.data.avatarUrl;


    return(
        <div>
            Profile 
            {profilePicture}
            
            
            
        </div>
    )
}

export default Profile;
