"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Link from "next/link";

function InputPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [productCode, setProductCode] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    // ตรวจสอบว่ามีเฉพาะตัวเลขและไม่เกิน 13 หลัก
    if (/^\d{0,13}$/.test(value)) {
      setProductCode(value);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 mt-10">
          <form action="">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-lg focus:border-blue-500 "
            >
              <option value="">กรุณาเลือกชั้นวาง</option>
              <option value="option1">ชั้นวาง 1</option>
              <option value="option2">ชั้นวาง 2</option>
              <option value="option3">ชั้นวาง 3</option>
            </select>
            <input
              className="w-full p-2 border border-gray-300 my-3 rounded-lg text-lg focus:border-blue-500"
              type="text"
              placeholder="กรุณาใส่รหัสสินค้า"
              value={productCode}
              onChange={handleInputChange}
              maxLength={13} // จำกัดความยาวสูงสุด
            />
            
              <Link href="/count">
                <button
                  type="submit"
                  className="w-full bg-[#5ABCF5] text-white py-3  rounded-md hover:bg-[#5a90f5]"
                >
                  ยืนยัน
                </button>
              </Link>
            
          </form>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default InputPage;
