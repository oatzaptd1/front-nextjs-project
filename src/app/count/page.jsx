import React from "react";
import Navbar from "../components/navbar";
import Link from "next/link";

function CountPage() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-8 ">
        <img src="/images/dectol.png" alt="my image" />
        <h1 >Dettol</h1>
        <input
          type="text"
          className="flex w-60 border border-gray-500 p-3 my-2 rounded-md mb-4"
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
