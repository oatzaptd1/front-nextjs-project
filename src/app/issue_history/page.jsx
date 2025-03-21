"use client";
import React, { useEffect,useState } from "react";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import { getLocalStorageItem ,statusColors} from "../utils/common";
import { getProblemHistoryBySiteId } from "../service/issue.service";
import { useRouter } from "next/navigation";

function IssueHistoryPage() {
  const router = useRouter();
  const [probHistory, setProbHistory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const site_id = getLocalStorageItem("site_id");
        if (!site_id) {
          console.warn("Site ID not found in localStorage");
          return;
        }
  
        const res = await getProblemHistoryBySiteId(site_id);
        setProbHistory(res.data);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData(); 
  }, []); 
const onRowClick = (issue_id) => {
  router.push(`/issue_detail/${issue_id}`);
}

  return (
    <div>
      <Navbar page="/menu" title="ประวัติการแจ้งปัญหา" />
    
        {Array.isArray(probHistory) && probHistory.map((prob) => (
      <div
        key={prob._id} 
        className="mx-auto mt-8 p-4 bg-white border shadow-md items-start rounded-md w-64"
        onClick = {() => onRowClick(prob._id)}
      >
        <p>เรื่อง: {prob.prob_name || "-"}</p>
        <p>อุปกรณ์: {prob.prob_item_name || "-"}</p>
        <div className="flex">
        <p>สถานะ : </p>
        <p className={`font-bold ${statusColors[prob.prob_status] || "text-gray-500"} pl-1`}>
          {prob.prob_status}
        </p>
        </div>
        
      </div>
    ))}
      <Navigation
        navi1="แจ้งปัญหา"
        navi2="ประวัติการแจ้งปัญหา"
        page1="/all_issue"
        page2="/issue_history"
        color2="bg-[#06A1FB] rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl"
      />
    </div>
  );
}

export default IssueHistoryPage;
