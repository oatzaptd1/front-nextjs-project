"use client"

import React from 'react'
import Link from 'next/link'

function ProblemNavigation() {
  return (
    <div>
      <div className="fixed bottom-0 h-20 w-full bg-blue-500 flex justify-between items-center text-white">
      <div className="flex-1 text-center py-4">
        <Link href="">
        <p>แจ้งปัญหา</p>
        </Link>
      </div>
      <div className="flex-1 text-center py-4 bg-blue-500">
        <Link href="">
         <p>ประวัติการแจ้งปัญหา</p>
        </Link>
      </div>
    </div>
    </div> 
    )
}

export default ProblemNavigation