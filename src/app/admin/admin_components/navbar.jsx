"use client";

import React, { useState } from "react";
function Navbar(props) {

  const { title } = props;

  return (
    <div>
      <nav className="bg-[#50B0E9] text-lg text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center">{title}</div>
          
        </div>
      </nav>

      {/* <div className="bg-[#50B0E9] py-3 fixed bottom-0 w-full">
        <div className=" text-white">
          <h1>Powerd by Bangkok Drug Store Co., Ltd.</h1>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
