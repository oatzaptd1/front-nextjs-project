import React from "react";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";

import Link from "next/link";

function IssueHistoryPage() {
  return (
    <div>
      <Navbar page="/menu" title="แจ้งปัญหา" />
      <h1 className="mt-8 text-center font-bold text-xl">
        ประวัติการแจ้งปัญหา
      </h1>
      <div className="mx-auto mt-8 py-4 p-4 bg-gray-300 items-start rounded-md w-64">
        <p>เรื่อง: จอ Monitor เสีย</p>
        <p>อุปกรณ์: จอ Monitor</p>
        <p>
          สถานะ: <span className="text-green-500 font-bold">สำเร็จ</span>
        </p>
      </div>

      <div className="mx-auto mt-4 p-4 bg-gray-300 items-start rounded-md w-64">
        <p>เรื่อง: ท่อน้ำรั่ว</p>
        <p>อุปกรณ์: ท่อน้ำ</p>
        <p>
          สถานะ: <span className="text-green-500 font-bold">สำเร็จ</span>
        </p>
      </div>
    
    <Link href="issue_success">
      <div className="mx-auto mt-4 p-4 bg-gray-300 items-start rounded-md w-64">
        <p>เรื่อง: เครื่องสแกนเสีย</p>
        <p>อุปกรณ์: เครื่องสแกน</p>
        <p>
          สถานะ: <span className="text-green-500 font-bold">สำเร็จ</span>
        </p>
      </div>
    </Link>
      <Navigation
        navi1="แจ้งปัญหา"
        navi2="ประวัติการแจ้งปัญหา"
        page1="/all_issue"
        page2="/issue_history"
      />
    </div>
  );
}

export default IssueHistoryPage;
