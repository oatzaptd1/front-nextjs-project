"use client";

import React from 'react'
import Link from 'next/link';

function Navigation() {
  return (
    <div>
      <div className="fixed bottom-0 h-20 w-full bg-blue-500 flex justify-between items-center text-white">
      <div className="flex-1 text-center py-4">
        <Link href="/amount">
        <p>นับสินค้า</p>
        </Link>
      </div>
      <div className="flex-1 text-center py-4 bg-blue-500">
        <Link href="/count_history">
         <p>ประวัติการนับ</p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Navigation
