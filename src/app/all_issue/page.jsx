"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import { getProblemBySite } from "../service/issue.service";
import { statusColors} from "../utils/common";
import { getStatus } from "../service/api.service";
function AllIssuePage() {
const router = useRouter();
const [allProb, setAllProb] = useState([]);

useEffect(() => {
  const fetchProblemBySite = async () => {
    try {
      const site_id = localStorage.getItem("site_id");
      const res = await getProblemBySite(site_id);
      setAllProb(res.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchProblemBySite();
}, []);

useEffect(() => {
  const pollingStatus = async () => {
    try {
      const res = await getStatus();
      if (res && res.res_code === "000") {
        setAllProb((prevIssues) => {
          if (!Array.isArray(prevIssues)) return []; 
          return prevIssues.map((allProb) => {
            const updatedItem = res.data.find((item) => item._id === allProb.id);
            return updatedItem ? { ...allProb, prob_status: updatedItem.prob_status } : allProb;
          });
        });
      } else {
        message.error(res.res_msg);
      }
    } catch (error) {
      console.error("Polling Error:", error);
    }
  };

  pollingStatus(); 
  const interval = setInterval(() => {
    pollingStatus();
  }, 5000); 

  return () => clearInterval(interval); 
}, []);

useEffect(() => {
}, [allProb]);

const onRowClick = (issue_id) => {
  router.push(`/issue_detail/${issue_id}`);
}
  return (
    <div className="flex flex-col h-screen">
    <Navbar page="/menu" title="แจ้งปัญหา" />
  
    <div className="flex-1 overflow-y-auto px-4 pb-20 max-h-[80vh]">
      {Array.isArray(allProb) && allProb.map((prob) => (
        <div 
          key={prob.id}
          className="mx-auto mt-4 py-4 px-4 bg-white border shadow-md items-start rounded-md w-64"
          onClick={() => onRowClick(prob.id)}
        >
          <div className="items-start space-y-2">
            <p>ชื่อปัญหา : {prob.prob_name}</p>
            <p>อุปกรณ์ : {prob.prob_item_name}</p>
            <div className="flex">
              <b>สถานะ:</b>
              <p className={`font-bold ${statusColors[prob.prob_status] || "text-gray-500"} pl-1`}>
                {prob.prob_status}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    <div className="fixed bottom-20 right-4 p-4">
      <Link href="/add_issue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="#5ABCF5"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
        </svg>
      </Link>
    </div>
  
    <Navigation
      navi1="แจ้งปัญหา"
      navi2="ประวัติการแจ้งปัญหา"
      page1="/all_issue"
      page2="/issue_history"
      color1="bg-[#06A1FB] rounded-tr-2xl rounded-tl-2xl rounded-br-2xl"
    />
  </div>
  
  );
}

export default AllIssuePage;
