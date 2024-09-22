"use client";

import React from 'react'

function Navigation() {
  return (
    <div>
      <div className="fixed bottom-0 h-20 w-full bg-blue-500 flex justify-between items-center text-white">
      <div className="flex-1 text-center py-4">
        <div className="text-2xl">
        </div>
        <p>นับสินค้า</p>
      </div>
      <div className="flex-1 text-center py-4 bg-blue-500">
        <div className="text-2xl">
        </div>
        <p>ประวัติการนับ</p>
      </div>
    </div>
    </div>
  )
}

export default Navigation
