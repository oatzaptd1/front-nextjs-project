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

  const onSubmit = (event) => {
    event.preventDefault();
    if (productCode && selectedOption) {
      const item_id = productCode
      router.push(`/count/${item_id}?shelf=${selectedOption}&barcode=${productCode}`);
    } else {
      alert("กรุณาเลือกชั้นวางและใส่รหัสสินค้า");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <div className="w-64 mt-10">
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
              id="productCode"
              onChange={handleInputChange}
              maxLength={13} // จำกัดความยาวสูงสุด
            />

            <div className="relative">
              <div className="overflow-y-auto max-h-80 rounded-lg">
                <table className="w-full border-collapse text-center">
                  <thead className="bg-gray-200 sticky top-0">
                    <tr>
                      <th className="p-2">#</th>
                      <th className="p-2">รหัส</th>
                      <th className="p-2">ชื่อสินค้า</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((item, index) => (
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
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
              <button
                type="submit"
                className="w-full bg-[#5ABCF5] text-white py-3  rounded-md hover:bg-[#5a90f5]"
                onClick={onSubmit}
              >
                ยืนยัน
              </button>
          </form>
        </div>
      </div>
      <Navigation />
    </div>
  );
}

export default InputPage;
