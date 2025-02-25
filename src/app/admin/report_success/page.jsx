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

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

function ReportSuccess() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // รีเซ็ตหน้าเป็น 0 เมื่อเปลี่ยนจำนวนแถวที่แสดง
  };

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
    {
      id: "BDS22110001",
      date: "20 ธ.ค. 66 20:30",
      title: "ท่อน้ำตัน",
      type: "เทคนิค",
      user: "นายทดสอบ ร้านยากรุงเทพ",
      branch: "กรุงเทพกรีฑา 7",
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
        <div className="p-4 m-2 bg-white shadow rounded-lg">
          <span className="text-[#50B0E9]">ดำเนินการสำเร็จ</span>
        </div>
        <div className="">
          <div className="p-6 m-2 bg-white shadow rounded-lg">
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col relative">
                <span className="text-[#50B0E9] ">ค้นหา</span>
                <input
                  type="text"
                  placeholder="ค้นหา"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-5 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex flex-col relative">
                <span className="text-[#50B0E9] ">วันที่เริ่มต้น</span>
                <DatePicker
                  selected={startDate}
                  placeholderText="วว/ดด/ปปปป"
                  onChange={(date) => setStartDate(date)}
                  dateFormat="dd/MM/yyyy" // กำหนดรูปแบบวันที่
                  customInput={
                    <input
                      className=" pl-5 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      readOnly
                    />
                  }
                />
                <i className="bi bi-calendar-day absolute text-3xl right-3 top-11 transform -translate-y-1/2 text-gray-400"></i>
              </div>
              <div className="flex flex-col relative">
                <span className="text-[#50B0E9] ">วันที่สิ้นสุด</span>
                <DatePicker
                  selected={endDate}
                  placeholderText="วว/ดด/ปปปป"
                  onChange={(date) => setEndDate(date)}
                  dateFormat="dd/MM/yyyy" // กำหนดรูปแบบวันที่
                  customInput={
                    <input
                      className=" pl-5 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      readOnly
                    />
                  }
                />
                <i className="bi bi-calendar-day absolute text-3xl right-3 top-11 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>เลขแจ้งปัญหา</TableCell>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>วันที่และเวลา</TableCell>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>เรื่อง</TableCell>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>ประเภทปัญหา</TableCell>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>ผู้แจ้ง</TableCell>
                    <TableCell sx={{ fontWeight: "bold", backgroundColor: "red", color: "white" }}>สาขา</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {issues
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((issue, index) => (
                      <TableRow key={index} sx={{ "&:nth-of-type(odd)": { backgroundColor: "#f9f9f9" } }}>
                        <TableCell>{issue.id}</TableCell>
                        <TableCell>{issue.date}</TableCell>
                        <TableCell>{issue.title}</TableCell>
                        <TableCell>{issue.type}</TableCell>
                        <TableCell>{issue.user}</TableCell>
                        <TableCell>{issue.branch}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[10, 20]}
                component="div"
                count={issues.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportSuccess;
