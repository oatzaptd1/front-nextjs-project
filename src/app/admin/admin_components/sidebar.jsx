import React from "react";

function Sidebar(props) {
  const { title } = props;

  return (
    <div>
      <nav className="bg-[#50B0E9] text-lg text-white p-8">
        <div className="container mx-auto">
          <div className="flex justify-center">{title}</div>
        </div>
      </nav>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-72  bg-[#FFFFFF] pt-8 overflow-y-auto">
          <div className="flex flex-col text-[#50B0E9] gap-x-4 cursor-pointer px-4 font-bold">
            <h1 className="text-xl px-4 py-2 rounded-lg hover:bg-slate-200 transition">
              แจ้งปัญหา
            </h1>
            <h1 className="text-xl px-4 py-2 mt-2 rounded-lg hover:bg-slate-200 transition">
              รับเรื่องแล้ว
            </h1>
            <h1 className="text-xl px-4 py-2 mt-2 rounded-lg hover:bg-slate-200 transition">
              ส่งช่าง
            </h1>
            <h1 className="text-xl px-4 py-2 mt-2 rounded-lg hover:bg-slate-200 transition">
              ดำเนินการสำเร็จ
            </h1>
          </div>
        </div>

        {/* Main content area */}
        <div className="p-4 text-2xl font-semibold relative flex-1">
          <h1 className="bg-[#FFFFFF] mx-1 px-3 py-3">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
