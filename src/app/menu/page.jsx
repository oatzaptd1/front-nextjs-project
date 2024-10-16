"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "../components/sidebar";
import Swal from "sweetalert2";

import { checkInspectionRound } from "../service/api.service";
function MenuPage() {
  const router = useRouter();

  const handleCheckInspection = async () => {
    try {
      const result = await checkInspectionRound();
      console.log("checkInspectionRound", result);
      if (result.res_code === "000") {
        router.push("/amount");
      } else if (result.res_code === "E110") {
        Swal.fire({
          icon: 'error',   // ประเภทของ alert
          title: 'แจ้งเตือน',  // หัวข้อของ error
          text: 'อยู่นอกเวลาทำการนับสินค้า',  // ข้อความใน error
        });
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <nav className="bg-[#5ABCF5] text-white p-8">
        <div className="container mx-auto">
          <Sidebar />
          <div className="flex justify-center items-center text-lg">
            เลือกเมนู
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center ">
        <button
          type="submit"
          className="w-60 text-white text-lg bg-[#5ABCF5] py-3 my-2 mt-10 rounded-md hover:bg-[#5a90f5]"
          onClick={handleCheckInspection}
        >
          นับสินค้า
        </button>

        <Link href="all_issue">
          <button
            type="submit"
            className="w-60 text-white text-lg bg-[#5ABCF5] py-3 my-2 rounded-md hover:bg-[#5a90f5]"
          >
            แจ้งปัญหา
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MenuPage;
