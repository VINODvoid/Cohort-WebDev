"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useRef } from "react";
import axios from "axios";
import { PassThrough } from "stream";
const Signup = () => {
    const emailRef= useRef(null);
    const passwordRef= useRef(null);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md border rounded-xl p-6 shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-center">Sign up</h1>

        <div className="flex items-center gap-4">
          <label htmlFor="email" className="w-20">
            Email
          </label>
          <input
            ref={emailRef}
            type="text"
            id="email"
            placeholder="example@gmail.com"
            className="flex-1 border px-3 py-2 rounded-md"
          />
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="password" className="w-20">
            Password
          </label>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="example123"
            className="flex-1 border px-3 py-2 rounded-md"
          />
        </div>

        <div className="text-center flex justify-start items-center p-2 ">
            <span className="font-extralight">Already user ? </span>
            <span className="font-medium from-neutral-500 mr-4 underline m-2" ><Link href={"/signin"}>sign in</Link> </span>
          <Button variant="outline" size="sm" onClick={()=>{
            axios.post("http://localhost:3000/api/v1/signup")
          }}>
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
