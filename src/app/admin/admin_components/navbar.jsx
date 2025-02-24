"use client";

import React, { useState } from "react";
import Image from "next/image";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-4 bg-[#50B0E9] ">
      {/* home icon */}
      <div className="">
        <Image src="/images/homelogo.png" alt="" width={150} height={20} />
      </div>
      {/* name role branch */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="flex flex-col text-white text-[14px] leading-4 font-medium">
          <span>ชื่อ : Jonathan GGGG</span>
          <span>ตำแหน่ง : Admin</span>
          <span>สาขา : สำนักงานใหญ่</span>
        </div>
      </div>
    </div>

    /* <nav className="bg-[#50B0E9] text-lg text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center">{title}</div>

        </div>
      </nav> /}

      {/ <div className="bg-[#50B0E9] py-3 fixed bottom-0 w-full">
        <div className=" text-white">
          <h1>Powerd by Bangkok Drug Store Co., Ltd.</h1>
        </div>
      </div> */
  );
}

export default Navbar;
