import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function CountPage() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center mt-8">
        <input
          type="text"
          className="flex w-60 bg-gray-300 p-3 my-2 rounded-md"
        />
        <div>
        <Link href="/">
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
