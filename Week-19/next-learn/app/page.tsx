"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./user";

interface UserData {
  name:string,
  email:string,
  address:{
    city:string,
    state:string,
    houseNumber:string
  }
}
export default async function Home() {
  const [loading ,setLoading] = useState(true);
  const userData:UserData = await User();
  return (
    <>
    <div className="flex flex-col h-screen "> 
      <div className=" flex items-center justify-center">
        {
          
          (userData && (<div className="flex flex-col justify-center items-stretch">
            <div>
            {userData.name}
            </div>
            <div>
            {userData.email}
            </div>
            <div>
            {userData.address.city}
            </div>
          </div>))
        

        }
      </div>
    </div>
    </>
  );
}


