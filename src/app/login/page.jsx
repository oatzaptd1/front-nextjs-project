"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import  AuthService from "../service/auth.service";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 

    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    try {
        const res = await AuthService.login(trimmedUsername, trimmedPassword);
        if (res?.res_code === "000") {
            if (res?.datas?.emp_position?.toLowerCase() === "แอดมิน") {
                router.push("/admin/all_report"); 
            } else {
                router.push("/menu"); 
            }
        } else if (res?.res_code === "E101") {
            setError("Invalid username or password. Please try again.");
        }
    } catch (error) {
        console.error("Login Error:", error);
        setError("Invalid username or password");
    }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5ABCF5]">
      <div className="container mx-auto py-5 p-8 bg-white rounded-md text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-[#5ABCF5]">
          ร้านยากรุงเทพ
        </h1>
        <h2 className="text-lg font-semibold mb-4 text-[#5ABCF5]">
          BANGKOK DRUGSTORE
        </h2>
        {error && <p className="text-red-500">{error}</p>}{" "}
        <form onSubmit={handleSubmit}>
          <input
            className="w-full pl-10 bg-gray-300 p-3 my-2 rounded-md"
            type="text"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />

          <input
            className="w-full pl-10 bg-gray-300 p-3 my-2 rounded-md"
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />

          <button
            type="submit"
            className="w-full bg-[#5ABCF5] text-white py-3 my-2 rounded-md hover:bg-[#5a90f5]"
          >
            ลงชื่อเข้าใช้
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
