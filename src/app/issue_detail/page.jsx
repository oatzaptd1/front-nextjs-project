import React from "react";
import ProblemNavbar from "../components/problem/Pnavbar";
import Link from "next/link";
import Swal from "sweetalert2";

function IssueDetailPage() {
  const handleConfirm = (async) => {
    try {
      Swal.fire({
        icon: "error", // ประเภทของ alert
        title: "แจ้งเตือน", // หัวข้อของ error
        text: "อยู่นอกเวลาทำการนับสินค้า", // ข้อความใน error
      });
    } catch (error) {}
  };

  return (
    <div>
      <ProblemNavbar />
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
          className="w-full bg-[#5ABCF5] text-white mt-4 py-2 rounded-md hover:bg-[#5a90f5]"
        >
          จบงาน
        </button>
        {/* </Link> */}
        <Link href="">
          <button
            type="submit"
            // onClick={handleConfirm}
            className="w-full bg-red-600 text-white mt-4 py-2 rounded-md hover:bg-[#5a90f5]"
          >
            ยกเลิกงาน
          </button>
        </Link>
      </div>
    </div>
  );
}

export default IssueDetailPage;
