import React from 'react'
import ProblemNavbar from '../components/problem/Pnavbar'
import ProblemNavigation from '../components/problem/Pnavigation'
import Link from 'next/link'

function ReportIssuePage() {
  return (
    <div className="relative min-h-screen">
        <ProblemNavbar/>
        <Link href="/issue_details">
        <div className="absolute bottom-20 py-5 right-5 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#5ABCF5" className=" bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
</svg>
        </div>
        </Link>
        
        <ProblemNavigation/>
    </div>
  )
}

export default ReportIssuePage
