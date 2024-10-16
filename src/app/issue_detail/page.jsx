"use client";

import React from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import Navbar from "../components/navbar";

function IssueDetailPage() {
  const handleConfirm = (async) => {
    try {
      Swal.fire({
        icon: "question", // ประเภทของ alert
        title: "แจ้งเตือน", // หัวข้อของ error
        text: "กรุณากดปุ่มยืนยันเพื่อจบงาน", // ข้อความใน error
        showCancelButton: true, // แสดงปุ่มยกเลิก
        confirmButtonText: "จบงาน", // ข้อความบนปุ่มยืนยัน
        cancelButtonText: "ยกเลิก", // ข้อความบนปุ่มยกเลิก
        confirmButtonColor: "#3085d6", // สีของปุ่มยืนยัน
        cancelButtonColor: "#d33", // สีของปุ่มยกเลิก
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  const handleCancel = (async) => {
    try {
      Swal.fire({
        icon: "question",
        title: "แจ้งเตือน",
        text: "กรุณากดปุ่มยืนยันเพื่อยกเลิก",
        confirmButtonText: "ยืนยัน",
        confirmButtonColor: "#3085d6",     
      });
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <div>
      <Navbar page = "all_issue" title = "แจ้งปัญหา"/>
      <div className="mt-8 text-center">
        <h2>รายละเอียดการแจ้งปัญหา</h2>
      </div>

      <div className="mx-auto mt-8 py-3 p-3 bg-gray-300 rounded-md w-64">
        <div className="items-start space-y-2">
          <p>เรื่อง: เครื่องสแกนเสีย</p>
          <p>ประเภท: ด้าน IT</p>
          <p>อุปกร์: เครื่องสแกน</p>
          <p>รายละเอียด: ไม่สามารถใช้งานเครื่องสแกนสินค้าได้</p>
          <p>รูปและวิดีโอ: </p>
          <p>วันและเวลาที่แจ้ง: 20 ธ.ค. 67 12:30</p>
          <p>สถานะ: กำลังดำเนินการ</p>
        </div>
        {/* <Link href=""> */}
        <button
          type="submit"
          onClick={handleConfirm}
          className="w-full bg-[#5ABCF5] text-white mt-4 py-2 rounded-md hover:bg-[#5a90f5]"
        >
          จบงาน
        </button>
        {/* </Link> */}
        <Link href="">
          <button
            type="submit"
            onClick={handleCancel}
            className="w-full bg-red-600 text-white mt-4 py-2 rounded-md hover:bg-red-800"
          >
            ยกเลิกงาน
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IssueDetailPage;
