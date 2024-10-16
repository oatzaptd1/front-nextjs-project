"use client";

import { use, useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import { useRouter } from "next/navigation";
import { getItemDetail ,countProduct} from "../../service/api.service";
const CountItemPage = ({ params ,searchParams}) => {
  const router = useRouter();
  const [productDetail, setProductDetail] = useState([]);
  const [itemQty, setItemQty] = useState("");
  const { item_id } = params; 
  const shelf = searchParams?.shelf; 
  
  useEffect(() => {
    const fetchProductDetail = async () => {
      if (typeof window !== "undefined") {
        const site_id = localStorage.getItem("site_id");
        console.log("item_id", item_id);

        const body = {
          item_id: item_id,
          site_id: site_id,
          item_barcode: "",
        };

        try {
          const res = await getItemDetail(body);
          if (res && res.data) {
            setProductDetail(res.data);
            console.log("getItemDetail", res.data);
          }
        } catch (error) {
          console.error("Error fetching item details:", error);
        }
      }
    };

    fetchProductDetail();
  }, [params]);

  const countItemProduct = async () => {
    const body = {
      item_id: productDetail.item_id,
      site_id: localStorage.getItem("site_id"),
      firstname: localStorage.getItem("firstname"),
      lastname: localStorage.getItem("lastname"),
      item_qty: Number(itemQty), 
      item_position: shelf,
    };
    
    try {
      const res = await countProduct(body); 
      console.log("countProduct response", res);
      if (res && res.res_code === "000") {
        alert("Success");
        router.push("/amount");
      }
    } catch (error) {
      console.error("Error submitting countProduct", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center mt-8 ">
        <div className="flex flex-col justify-center items-center mt-8">
          <div className="flex items-center space-x-4">
            {productDetail && productDetail.item_image ? (
              <img
                src={productDetail.item_image}
                alt={productDetail.item_name}
                className="w-40 h-40 object-cover "
              />
            ) : (
              <p>Image not available</p>
            )}
            <h1 className="border border-gray-200 rounded text-center px-4 py-2">
              {productDetail && productDetail.item_name
                ? productDetail.item_name
                : "Product Name"}
            </h1>
          </div>
        </div>

        <input
          type="text"
          className="flex w-60 border border-gray-500 p-3 my-2 rounded-md mb-4 text-center"
          value={itemQty}
          // onChange={(e) => setItemQty(e.target.value)}
          onChange={(e) => {
            const value = e.target.value;
            if (value.length <= 4 && /^\d*$/.test(value)) {
              setItemQty(value);
            }
          }}
          maxLength={4}
          placeholder="กรุณาใส่จำนวน"
        />

        <div>
            <button
              type="submit"
              className="w-60 bg-[#5ABCF5] text-white py-3 rounded-md hover:bg-[#5a90f5]"
              onClick={countItemProduct}
            >
              ยืนยัน
            </button>
        </div>
      </div>
    </div>
  );
};

export default CountItemPage;
