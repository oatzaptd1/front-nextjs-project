"use client";

import React, { useState } from "react";
import ProblemNavbar from "../components/problem/Pnavbar";
import ProblemNavigation from "../components/problem/Pnavigation";
import Link from "next/link";

function IssueDetailsPage() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <ProblemNavbar />
      <div className="mx-auto mt-8 py-4 p-4 bg-gray-300 rounded-md text-center w-64">
        <form action="">
          <div className="flex items-center space-x-2">
            <p>เรื่อง</p>
            <input type="text" className="rounded-md w-full h-10" />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <p className="">ประเภท</p>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              <option value="">เลือกประเภท</option>
              <option value="option1">ด้าน IT</option>
              <option value="option2">ด้านช่างเทคนิค</option>
            </select>
          </div>

          <div className="flex item-center space-x-2 mt-4">
            <p className="mt-2">อุปกรณ์</p>
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              <option value="">เลือกอุปกรณ์</option>
              <option value="option1">จอ Monitor</option>
              <option value="option2">เครื่องพิมพ์ Laser</option>
              <option value="option3">จอแสดงราคา</option>
              <option value="option3">เครื่องอ่านบาร์โค้ด</option>
              <option value="option3">เครื่องอ่านบัตรเครดิต/เดบิต</option>
            </select>
          </div>

          <p className="mt-4">รายละเอียด</p>
          <input type="text" className="rounded-md w-full h-20" />

          <Link href="/">
            <button
              type="submit"
              className="w-full bg-[#5ABCF5] text-white mt-4 py-2 rounded-md hover:bg-[#5a90f5]"
            >
              submit
            </button>
          </Link>
        </form>
      </div>
      <ProblemNavigation />
    </div>
  );
}

export default IssueDetailsPage;
