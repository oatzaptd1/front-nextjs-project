"use client";

import React from "react";
import Menubar from "../admin_components/menubar";
import Navbar from "../admin_components/navbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function AllReport() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const issues = [
    {
      id: "BDS22110001",
      date: "20 ธ.ค. 66 20:30",
      title: "ท่อน้ำตัน",
      type: "เทคนิค",
      user: "นายทดสอบ ร้านยากรุงเทพ",
      branch: "กรุงเทพกรีฑา 7",
    },
    {
      id: "BDS22110001",
      date: "11 ธ.ค. 66 10:30",
      title: "คอมพิวเตอร์",
      type: "IT",
      user: "นายทดสอบ ร้านยากรุงเทพ",
      branch: "สุขุมวิท 71",
    },
    {
      id: "BDS22110001",
      date: "20 ต.ค. 66 9:30",
      title: "ไฟดับ",
      type: "เทคนิค",
      user: "นายทดสอบ ร้านยากรุงเทพ",
      branch: "สุขุมวิท 103",
    },
    {
      id: "BDS22110001",
      date: "10 ต.ค. 66 15:30",
      title: "ตัวคิดเงินดับ",
      type: "IT",
      user: "นายทดสอบ ร้านยากรุงเทพ",
      branch: "สุขุมวิท 101/1",
    },
  ];

  return (
    <div className="h-screen flex ">
      <div className="w-[14%] p-4">
        <Link href="" className="flex items-center justify-center  gap-2">
          <div className="bg-[#50B0E9] p-4 rounded-md ">
            <Image
              src="/images/homelogo.png"
              alt="logo"
              width={150}
              height={20}
            />
          </div>
        </Link>

        <Menubar />
      </div>
      <div className="w-[86%] bg-[#F7F8FA] ">
        <Navbar title="" />
        <div className="p-6 m-2 bg-white shadow rounded-lg">
          <span>รายการการแจ้งปัญหา</span>
        </div>
        <div className="">
          <div className="p-6 m-2 bg-white shadow rounded-lg">
            <div className="flex gap-4 mb-4">
              <div className="relative w-full max-w-[200px]">
                <input
                  type="text"
                  placeholder="ค้นหา"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border rounded px-3 py-2 w-full"
                />
                <search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex flex-col relative">
                <span className="text-[#50B0E9] font-bold">วันที่เริ่มต้น</span>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy" // กำหนดรูปแบบวันที่
                  customInput={<input className="pl-10"/>}
                />
                <i className="bi bi-calendar-day absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="flex flex-col relative">
                <span className="text-[#50B0E9] font-bold">วันที่สิ้นสุด</span>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy" // กำหนดรูปแบบวันที่
                  customInput={<input className="pl-10"/>}
                />
                <i className="bi bi-calendar-day absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                {/* <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <calendarIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" /> */}
              </div>
            </div>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2">
                    เลขแจ้งปัญหา
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    วันที่และเวลา
                  </th>
                  <th className="border border-gray-300 px-4 py-2">เรื่อง</th>
                  <th className="border border-gray-300 px-4 py-2">
                    ประเภทปัญหา
                  </th>
                  <th className="border border-gray-300 px-4 py-2">ผู้แจ้ง</th>
                  <th className="border border-gray-300 px-4 py-2">สาขา</th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue, index) => (
                  <tr key={index} className="border border-gray-300">
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.id}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.date}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.title}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.type}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.user}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {issue.branch}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllReport;
