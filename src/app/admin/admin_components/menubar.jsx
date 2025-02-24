import React from "react";
import Link from "next/link";

function Menubar() {

  const menuItems = [
    {
      title: "Menu",
      items: [
        {
          label: "แจ้งปัญหา",
          href: "",
        },
        {
          label: "รับเรื่องแล้ว",
          href: "",
        },
        {
          label: "ส่งช่าง",
          href: "",
        },
        {
          label: "ดำเนินการสำเร็จ",
          href: "",
        },
      ],      
    },

    {
      title: "Other",
      items: [
        {
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          ),
          label: "ออกจากระบบ",
          href: "",
        }
      ]
    }
  ];

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-4 text-gray-500 py-2 p-4 rounded-lg hover:bg-slate-200 transition"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Menubar;
