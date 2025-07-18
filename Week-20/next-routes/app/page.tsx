"use client"
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";
import { useState } from "react";


export default function Home() {
  const [blogId,setBlogId]=useState(0);
  function blogdetails()
  {
    const data = axios.post("http://localhost:3000/blog/1")
    console.log(data);
  }
  return (
    <div>
    <button onClick={blogdetails}>Click</button>    
    </div>
  );
}
