import React from "react";
import ProblemNavbar from "../components/problem/Pnavbar";
import ProblemNavigation from "../components/problem/Pnavigation";
import Link from "next/link";

function AllIssuePage() {
  return (
    <div className="relative min-h-screen">
      <ProblemNavbar />
      <div className="mx-auto mt-8 py-4 p-4 bg-gray-300 items-start rounded-md w-64">
        <p>เรื่อง: จอ Monitor เสีย</p>
        <p>อุปกรณ์: จอ Monitor</p>
        <p>สถานะ: รอรับเรื่อง</p>
      </div>

      <div className="mx-auto mt-4 p-4 bg-gray-300 items-start rounded-md w-64">
        <p>เรื่อง: ท่อน้ำรั่ว</p>
        <p>อุปกรณ์: ท่อน้ำ</p>
        <p>สถานะ: กำลังดำเนินการ</p>
      </div>

      <Link href="/issue_detail">
        <div className="mx-auto mt-4 p-4 bg-gray-300 items-start rounded-md w-64">
          <p>เรื่อง: เครื่องสแกนเสีย</p>
          <p>อุปกรณ์: เครื่องสแกน</p>
          <p>สถานะ: กำลังดำเนินการ</p>
        </div>
      </Link>

      <div className="">
        <Link href="/add_issue">
          <div className="absolute bottom-20 p-4 right-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="#5ABCF5"
              className=" bi bi-plus-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
            </svg>
          </div>
        </Link>
      </div>
      <ProblemNavigation />
    </div>
  );
}

export default AllIssuePage;
