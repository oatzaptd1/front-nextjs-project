"use client";

import React, { use, useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Navigation from "../components/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getShelfProducts, getItemByShelf } from "../service/api.service";

function InputPage() {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState("");
  const [shelfProducts, setShelfProducts] = useState([]);
  const [productCode, setProductCode] = useState("");
  const [product, setProduct] = useState([]);

  const handleChange = async (event) => {
    const selectedShelf = event.target.value;
    setSelectedOption(selectedShelf);
    localStorage.setItem("shelf", selectedShelf);
    try {
      const res = await getItemByShelf(selectedShelf);
      if (res && res.data) {
        setProduct(res.data);
      }
    } catch (error) {
      console.error("Error fetching item by shelf:", error);
    }
  };

  useEffect(() => {
    const storedShelf = localStorage.getItem("shelf");
    if (storedShelf) {
      setSelectedOption(storedShelf);
      handleChange({ target: { value: storedShelf } });
    }
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,13}$/.test(value)) {
      setProductCode(value);
    }
  };

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

  const handleRowClick = (item) => {
    console.log("You clicked on:", item);
    router.push(`/count/${item.item_id}?shelf=${selectedOption}`);
  };


  return (
    <div>
      <Navbar page = "/menu" title ="นับสินค้า"/> 
      <div className="flex flex-col items-center justify-center">
        <div className="w-90 mt-10">
          <form action="">
            <select
              value={selectedOption}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-lg text-lg focus:border-blue-500 "
            >
              <option value="">กรุณาเลือกชั้นวาง</option>
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

            <input
              className="w-full p-2 border border-gray-300 my-3 rounded-lg text-lg focus:border-blue-500"
              type="text"
              placeholder="กรุณาใส่รหัสสินค้า"
              value={productCode}
              onChange={handleInputChange}
              maxLength={13} // จำกัดความยาวสูงสุด
            />

            {/* <Link href="/count"> */}
              <button
                type="submit"
                onClick={() => handleRowClick(productCode)}

                className="w-full bg-[#5ABCF5] text-white py-3  rounded-md hover:bg-[#5a90f5]"
              >
                ยืนยัน
              </button>
            {/* </Link> */}

            <div className="relative">
              <div className="overflow-y-auto max-h-80 rounded-lg mt-3">
                <table className="w-full border-collapse text-center">
                  <thead className="bg-gray-200 sticky top-0">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">รหัส</th>
                      <th className="p-2">ชื่อสินค้า</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.length > 0 ? (
                      product.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gray-100"
                          onClick={() => handleRowClick(item)}
                        >
                          <td className="p-2 border-b border-gray-300">
                            {index + 1}
                          </td>
                          <td className="p-2 border-b border-gray-300">
                            {item.item_id}
                          </td>
                          <td className="p-2 border-b border-gray-300">
                            {item.item_desc1}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="3"
                          className="p-2 border-b border-gray-300"
                        >
                          ไม่มีข้อมูลสินค้า
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Navigation navi1 = "นับสินค้า" navi2 = "ประวัติการนับ" page1 ="/amount" page2 ="/count_history"/>
    </div>
  );
}

export default InputPage;
