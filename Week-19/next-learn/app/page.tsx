"use client"
import axios from "axios";


export default async function Home() {

  return (
    <div>
      
      </div>
  )
}



async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}