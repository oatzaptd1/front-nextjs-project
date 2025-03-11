"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import { getProblemBySite } from "../service/issue.service";
import { statusColors } from "../utils/common";
import { Card } from "antd";
import { FloatButton } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

function AllIssuePage() {
  const router = useRouter();
  const [allProb, setaAllProb] = useState([]);

  useEffect(() => {
    const fetchProblemBySite = async () => {
      try {
        const site_id = localStorage.getItem("site_id");
        const res = await getProblemBySite(site_id);
        setaAllProb(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProblemBySite();
  }, []);

  const onRowClick = (issue_id) => {
    router.push(`/issue_detail/${issue_id}`);
  };
  return (
    <div className="">
      <Navbar page="/menu" title="แจ้งปัญหา" />
      <div className="flex justify-center mt-8">
        <Card
          style={{ width: "90%", maxWidth: "400px", overflow: "hidden" }}
          className="shadow-lg border"
        >
          <div className="max-h-[500px] overflow-y-auto p-2">
            {Array.isArray(allProb) &&
              allProb.map((prob) => (
                <div
                  key={prob.id}
                  className="mb-4 cursor-pointer"
                  onClick={() => onRowClick(prob.id)}
                >
                  <Card
                    hoverable
                    title={`ชื่อปัญหา : ${prob.prob_name}`}
                    style={{ border: "1px solid #ccc" }}
                    headStyle={{
                      borderBottom: "1px solid #ccc", // ทำให้เส้นแบ่งชัดขึ้น
                    }}
                  >
                    <p>อุปกรณ์ : {prob.prob_item_name}</p>
                    <b>
                      สถานะ :
                      <span
                        className={`font-bold ${
                          statusColors[prob.prob_status] || "text-gray-500"
                        } pl-1`}
                      >
                        {prob.prob_status}
                      </span>
                    </b>
                  </Card>
                </div>
              ))}
          </div>
        </Card>
      </div>

      <div className="">
        <Link href="/add_issue">
          <FloatButton
            tooltip={<div>แจ้งปัญหา</div>}
            icon={<PlusCircleOutlined />}
            type="primary"
            style={{
              insetInlineEnd: 34,
              bottom: 100,
              width: "50px", // ปรับขนาดปุ่มใหญ่ขึ้น
              height: "50px",
            }}
          />
          ;
          {/* <div className="absolute bottom-20 p-4 right-0">
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
          </div> */}
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
