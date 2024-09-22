"use client";

import React, { useState } from "react";
import Link from "next/link";

function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5ABCF5]">
      <div className="container mx-auto py-5 p-8 bg-white rounded-md text-center w-full max-w-md">
        <h1 className="text-2xl font-bold mb-2 text-[#5ABCF5]">ร้านยากรุงเทพ</h1>
        <h2 className="text-lg font-semibold mb-4 text-[#5ABCF5]">
          BANGKOK DRUGSTORE
        </h2>
        <form action="">
          <input
            className="w-full pl-10 bg-gray-300 p-3 my-2 rounded-md"
            type="text"
            placeholder="ชื่อผู้ใช้"
          />

          <input
            className="w-full pl-10 bg-gray-300 p-3 my-2 rounded-md"
            type="password"
            placeholder="รหัสผ่าน"
          />
          <Link href="/menu">
            <button
              type="submit"
              className="w-full bg-[#5ABCF5] text-white py-3 my-2 rounded-md hover:bg-[#5a90f5]"
            >
              ลงชื่อเข้าใช้
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
