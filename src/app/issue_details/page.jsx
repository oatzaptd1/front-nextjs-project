import React from 'react'
import ProblemNavbar from '../components/problem/Pnavbar'
import ProblemNavigation from '../components/problem/Pnavigation'

function IssueDetailsPage() {
  return (
    <div>
        <ProblemNavbar/>
        <div className="container mx-auto py-5 p-8 bg-gray-400 rounded-md text-center w-full max-w-md">
            <p>เรื่อง</p>
            <form action="">
                <input 
                type="text"
                className="" 
                />
            </form>
        </div>
        <ProblemNavigation/>
    </div>
  )
}

export default IssueDetailsPage