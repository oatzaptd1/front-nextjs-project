"use client";

import React, { useEffect ,useState} from "react";
import Link from "next/link";
import Swal from "sweetalert2";
import Navbar from "../../components/navbar";
import { getProblemById } from "../../service/issue.service";
import { formatDateInThai } from "../../utils/date";
import { statusColors} from "../../utils/common";


function IssueDetailPage( {params}) {
  const [problem, setProblem] = useState([]);
  const { issue_id } = params; 

  useEffect(() => {
    const fetchProblemById = async () => {
      try {
        const res = await getProblemById(issue_id);
        setProblem(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchProblemById();
  }, [params, issue_id]);
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
      <Navbar page="all_issue" title="แจ้งปัญหา" />
      <div className="mt-8 text-center">
        <h2>รายละเอียดการแจ้งปัญหา</h2>
      </div>

      <div className="mx-auto mt-8 py-3 p-3 bg-gray-300 rounded-md w-64">
        <div className="items-start space-y-2">
          <b>ชื่อปัญหา:</b>
          <p className="px-4"> {problem.prob_name}</p>

          <b>ประเภท:</b>
          <p className="px-4"> {problem.prob_type_name}</p>

          <b>อุปกรณ์:</b>
          <p className="px-4"> {problem.prob_item_name}</p>

          <b>รายละเอียด:</b>
          <p className="px-4"> {problem.prob_detail}</p>

          <b>รูปและวิดีโอ: </b>
           <div className="px-4 flex items-center space-x-4">
              {Array.isArray(problem.prob_image) && problem.prob_image.length > 0 ? (
                problem.prob_image.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Uploaded image ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                ))
              ) : (
                <p className="text-gray-500">ไม่มีรูปภาพ</p> 
                )}
              </div>

              <b>วันและเวลาที่แจ้ง</b>
              <p className="px-4"> {formatDateInThai(problem.create_date)}</p>

              <b>สถานะ : </b>
              <p className={`font-bold ${statusColors[problem.prob_status] || "text-gray-500"}`}>
               {problem.prob_status}
              </p>
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
