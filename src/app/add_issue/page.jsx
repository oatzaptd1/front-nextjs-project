"use client";

import React, { useState } from "react";
import ProblemNavbar from "../components/problem/Pnavbar";
import ProblemNavigation from "../components/problem/Pnavigation";
import Link from "next/link";

function AddIssuePage() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [file, setFile] = useState(null);

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleEquipmentChange = (e) => {
    setSelectedEquipment(e.target.value);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div>
      <ProblemNavbar />
      <div className="mx-auto mt-8 py-4 p-4 bg-gray-300 rounded-md text-center w-64">
        <form action="">
          <div className="flex items-center space-x-2">
            <p>เรื่อง:</p>
            <input type="text" className="rounded-md w-full h-10" />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <p className="">ประเภท:</p>
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              <option value="">เลือกประเภท</option>
              <option value="option1">ด้าน IT</option>
              <option value="option2">ด้านช่างเทคนิค</option>
            </select>
          </div>

          <div className="flex item-center space-x-2 mt-4">
            <p className="mt-2">อุปกรณ์:</p>
            <select
              value={selectedEquipment}
              onChange={handleEquipmentChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              <option value="">เลือกอุปกรณ์</option>
              <option value="option1">จอ Monitor</option>
              <option value="option2">เครื่องพิมพ์ Laser</option>
              <option value="option3">จอแสดงราคา</option>
              <option value="option4">เครื่องอ่านบาร์โค้ด</option>
              <option value="option5">เครื่องอ่านบัตรเครดิต/เดบิต</option>
            </select>
          </div>

          <p className="mt-4">รายละเอียด:</p>
          <input type="text" className="rounded-md w-full h-20" />

          <div className="mt-4">
            <label className="block mb-2">อัปโหลดรูปภาพหรือวิดีโอ:</label>
            <input
              type="file"
              accept="image/*, video/*" // รับเฉพาะรูปภาพและวิดีโอ
              onChange={handleFileChange}
              className="border border-gray-300 rounded-lg p-2 w-full"
              multiple 
            />
          </div>

          {file && (
            <div className="mt-2">
              <p>ไฟล์ที่เลือก: {file.name}</p>
            </div>
          )}

          <Link href="/all_issue">
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

export default AddIssuePage;
