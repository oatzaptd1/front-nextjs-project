"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import {
  getTotalCountAndCounted,
  getShelfProducts,
  getCountProduct,
} from "../service/api.service";
import { formatRoundInThai } from "../utils/date";
import { get } from "http";

function CountHistoryPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [totalCount, setTotalCount] = useState({});
  const [shelfProducts, setShelfProducts] = useState([]);
  const [countProduct, setCountProduct] = useState([]);

  const formattedRound = formatRoundInThai(totalCount.round);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    console.log("selectedOption", e.target.value);
  };

  useEffect(() => {
    const fetchTotalCountAndCounted = async () => {
      const res = await getTotalCountAndCounted();
      console.log("getTotalCountAndCounted", res.data);
      if (res && res.data) {
        setTotalCount(res.data);
      }
    };
    fetchTotalCountAndCounted();
  }, []);
  useEffect(() => {
    const fetchShelfProducts = async () => {
      try {
        const res = await getShelfProducts();
        setShelfProducts(res.data);
      } catch (error) {
        console.error("Error fetching shelf products", error);
      }
    };

    fetchShelfProducts();
  }, []);

  useEffect(() => {
    const getCountProductHistory = async () => {
      const filters_item_position = selectedOption;
      console.log("filters_item_position", filters_item_position);
      
      const res = await getCountProduct(filters_item_position);
      console.log("getCountProduct", res.data);
      setCountProduct(res.data);
    };
    getCountProductHistory();
  }, [selectedOption]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-8 space-y-6">
        <h2 className="font-bold text-xl">ประวัติการนับสินค้า</h2>
        <p className="text-lg">
          จำนวนสินค้าที่นับไปแล้ว : {totalCount.totalCountCounted}
        </p>
        <p className="text-lg">{formattedRound}</p>

        <div className="w-64 mt-4">
          <select
            value={selectedOption}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:border-blue-500"
          >
            <option value="">ทั้งหมด</option>
            {shelfProducts.length > 0 ? (
              shelfProducts.map((shelfProduct, index) => (
                <option key={index} value={shelfProduct}>
                  ชั้นวาง {shelfProduct}
                </option>
              ))
            ) : (
              <option disabled>ไม่มีข้อมูลชั้นวาง</option>
            )}
          </select>

          <div className="overflow-y-auto max-h-80 mt-6 space-y-4">
            {countProduct.length > 0 ? (
              countProduct.map((item, index) => (
                <div
                  key={index}
                  className="py-4 px-6 bg-gray-100 rounded-md shadow-sm"
                >
                  <h1 className="text-sm mb-2 text-gray-600">
                    ชื่อ : {item.item_desc1 || "-"}
                  </h1>
                  <h1 className="text-sm mb-2 text-gray-600">
                    วันและเวลา : {item.update_date || "-"}
                  </h1>
                  <h1 className="text-sm mb-2 text-gray-600">
                    สินค้าที่นับได้ : {item.item_qty || "-"}
                  </h1>
                  <h1 className="text-sm mb-2 text-gray-600">
                    สินค้าในระบบ : {item.onhand_balance_qty || "-"}
                  </h1>
                  <h1 className="text-sm mb-2 text-gray-600">
                    ขาด/เกิน : {item.difference_count || "-"}
                  </h1>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No data available</p>
            )}
          </div>
        </div>
      </div>

      <Navigation />
    </div>
  );
}

export default CountHistoryPage;
