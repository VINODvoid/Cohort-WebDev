"use client";
import { useState } from "react";
import axios from "axios";

const Page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token,setToken]  = useState("");
    const handleSignIn = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/sign-in", {
                username,
                password,
            });
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
            console.log("Sign-in successful:", res.data);
        } catch (error) {
            console.error("Sign-in failed:", error);
        }
    };

    return (
        <div className="flex flex-1 justify-center items-center flex-col p-12">
            <div className="flex items-center">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="font-medium text-gray-700 border-b mx-auto px-2 py-1"
                    placeholder="Enter your name"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="font-medium text-gray-800 border-b ml-2 px-2 py-1"
                    placeholder="Enter the password"
                />
            </div>
            <div className="mt-8 p-4 items-center">
                <button
                    className="border rounded px-4 py-2 bg-blue-500 text-white hover:bg-blue-600"
                    onClick={handleSignIn}
                >
                    Sign in
                </button>

            </div>
            <div>
                {token}
            </div>
        </div>
    );
};

export default Page;
