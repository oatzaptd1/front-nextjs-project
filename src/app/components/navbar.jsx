"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  const goBack = () => {
    router.push("/menu");
  };

  return (
    <div>
      <nav className="bg-[#5ABCF5] text-lg text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center">นับสินค้า</div>
          <div
            className="absolute text-white text-4xl top-4 left-4 cursor-pointer"
            onClick={goBack}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-caret-left-fill px-2 rounded-md"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
