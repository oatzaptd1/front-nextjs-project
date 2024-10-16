"use client";

import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

function Navigation(props) {

  const { navi1, navi2, page1, page2 } = props;

  return (
    <div>
      <div className="fixed bottom-0 h-20 w-full bg-blue-500 flex justify-between items-center text-white">
      <div className="flex-1 text-center py-4">
        <Link href={page1}>
        <p>{navi1}</p>
        </Link>
      </div>
      <div className="flex-1 text-center py-4 bg-blue-500">
        <Link href={page2}>
         <p>{navi2}</p>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Navigation
