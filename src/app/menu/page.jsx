import React from "react";
import Link from "next/link";
import Sidebar from "../components/sidebar";

function MenuPage() {
  return (
    <div>
      <nav className="bg-[#5ABCF5] text-white p-8">
        <div className="container mx-auto">
        <Sidebar />
          <div className="flex justify-center items-center text-lg">           
            เลือกเมนู
          </div>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center ">
        <Link href="/amount">
          <button
            type="submit"
            className="w-60 text-white text-lg bg-[#5ABCF5] py-3 my-2 mt-10 rounded-md hover:bg-[#5a90f5]"
          >
            นับสินค้า
          </button>
        </Link>
        
        <Link href="report_issue">
          <button
            type="submit"
            className="w-60 text-white text-lg bg-[#5ABCF5] py-3 my-2 rounded-md hover:bg-[#5a90f5]"
          >
            แจ้งปัญหา
          </button>
          </Link>
      </div>
    </div>
  );
}

export default MenuPage;
