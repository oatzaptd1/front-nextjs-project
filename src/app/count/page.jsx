"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function CountPage() {
  const [qty, setQty] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;

    if (/^\d{0,4}$/.test(value)) {
      setQty(value);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-8 ">
        <img src="/images/dectol.png" alt="my image" />
        <h1 >Dettol</h1>
        <input
          type="number"
          value={qty}
          onChange={handleInput}
          maxLength={4}
          className="flex w-60 border border-gray-500 text-center p-3 my-2 rounded-md mb-4"
        />
        <div>
        <Link href="/count_history">
          <button
            type="submit"
            className="w-60 bg-[#5ABCF5] text-white py-3  rounded-md hover:bg-[#5a90f5]"
          >
            ยืนยัน
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default CountPage;
