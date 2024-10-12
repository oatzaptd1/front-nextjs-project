"use client"

import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Navigation from '../components/navigation'

function CountHistoryPage() {
    const [selectedOption, setSelectedOption] = useState("");
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    };

  return (
    <div>
        <Navbar/>
        <div className='flex flex-col justify-center items-center mt-8'>
            <h2 className='font-bold'>ประวัติการนับสินค้า</h2>
            <br />
            <p>จำนวนสินค้าที่นับไปแล้ว</p>
            <p>รอบ 30 เมษายน 67 ถึง 31 พ.ค. 67</p>
            <div className='w-64 mt-4'>
                <select
                    value={selectedOption}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-lg text-lg focus:border-blue-500 "
                >
                    <option value="">ทั้งหมด</option>
                    <option value="option1">ชั้นวาง A1</option>
                    <option value="option2">ชั้นวาง A2</option>
                    <option value="option3">ชั้นวาง B1</option>
                </select>
                <div className="mx-auto mt-4 py-4 p-8 bg-gray-100 rounded-md text-start">
                    <h1 className="text-xs mb-2 text-gray-600">ชื่อ : Dettol Disinfectant Wipes</h1>
                    <h1 className="text-xs mb-2 text-gray-600">วันและเวลา : 20 พ.ค. 67 13:30</h1>
                    <h1 className="text-xs mb-2 text-gray-600">สินค้าที่นับได้ : 37</h1>
                    <h1 className="text-xs mb-2 text-gray-600">สินค้าในระบบ : 38</h1>
                    <h1 className="text-xs mb-2 text-gray-600">ขาด/เกิน : -1</h1>
                </div>
                <div className="mx-auto mt-4 py-4 p-8 bg-gray-100 rounded-md text-start">
                    <h1 className="text-xs mb-2 text-gray-600">ชื่อ : SOS plus เทปพันยืดหยุ่น</h1>
                    <h1 className="text-xs mb-2 text-gray-600">วันและเวลา : 20 พ.ค. 67 13:30</h1>
                    <h1 className="text-xs mb-2 text-gray-600">สินค้าที่นับได้ : 22</h1>
                    <h1 className="text-xs mb-2 text-gray-600">สินค้าในระบบ : 22</h1>
                    <h1 className="text-xs mb-2 text-gray-600">ขาด/เกิน : 0</h1>
                </div>
            </div>
        </div>
        <Navigation/>
    </div>
  )
}

export default CountHistoryPage