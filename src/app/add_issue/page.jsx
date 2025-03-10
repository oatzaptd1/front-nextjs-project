"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import PlusIcon from "../../assets/icons/PlusIcon";
import TrashIcon from "../../assets/icons/TrashIcon";
import { createProblem, getProbType, getTechnicalItems } from "../service/issue.service";
import { getLocalStorageItem } from "../utils/common";
import Swal from "sweetalert2";

function AddIssuePage() {
  const [selectedType, setSelectedType] = useState("1");
  const [selectedEquipment, setSelectedEquipment] = useState("");
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [probType, setProbType] = useState([]);
  const [technicalItems, setTechnicalItems] = useState([]);
  const [title, setTitle] = useState(""); 
  const [probDetail, setProbDetail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleProbDetailChange = (e) => setProbDetail(e.target.value);
  const handleEquipmentChange = (e) => setSelectedEquipment(e.target.value);
  const handleInputChange = (e) => { setTitle(e.target.value);};

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 0) {
      const totalFiles = files.length + selectedFiles.length;
      if (totalFiles > 3) {
        alert("คุณสามารถอัปโหลดไฟล์ได้สูงสุด 3 ไฟล์เท่านั้น");
        return;
      }

      setFiles([...files, ...selectedFiles]);

      const newPreviews = selectedFiles.map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
      setFilePreviews([...filePreviews, ...newPreviews]);
    }
  };

  useEffect(() => {
    return () => {
      filePreviews.forEach(({ url }) => URL.revokeObjectURL(url));
    };
  }, [filePreviews]);

  useEffect(() => {
    const fetchDataProbType = async () => {
      try {
        const res = await getProbType();
        setProbType(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataProbType();
    fetchTechnicalItem(selectedType);
  }, []);

  const fetchTechnicalItem = async (typeId) => {
    try {
      const res = await getTechnicalItems(typeId);
      if (res && res.data) {
        setTechnicalItems(res.data);
      }
    } catch (error) {
      console.error("Error fetching technical item:", error);
    }
  };

  const handleTypeChange = (e) => {
    const typeId = e.target.value;
    setSelectedType(typeId);
    fetchTechnicalItem(typeId);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = filePreviews.filter((_, i) => i !== index);

    setFiles(updatedFiles);
    setFilePreviews(updatedPreviews);
  };

  const onSubmit = async (event) => {
    event.preventDefault(); 
  
    if (!title.trim()) {
      alert("กรุณากรอกเรื่อง");
      return;
    }
    if (!selectedType) {
      alert("กรุณาเลือกประเภท");
      return;
    }
    if (!selectedEquipment) {
      alert("กรุณาเลือกอุปกรณ์");
      return;
    }
    if (!probDetail.trim()) {
      alert("กรุณากรอกรายละเอียด");
      return;
    }
    if (files.length === 0) {
      alert("กรุณาแนบรูปภาพหรือวิดีโออย่างน้อย 1 ไฟล์");
      return;
    }
  
    const create_by = getLocalStorageItem("firstname") || "Unknown";
    const site_id = getLocalStorageItem("site_id") || "N/A";
    const site_name = getLocalStorageItem("site_name") || "N/A";
    console.log("create_by", create_by);
    console.log("site_id", site_id);
    console.log("site_name", site_name);
    try {
      setIsLoading(true); 
      const body = {
        prob_name: title.trim(),
        prob_type: selectedType,
        prob_item: selectedEquipment,
        prob_detail: probDetail.trim(),
        prob_image: files,
        create_by,
        site_id,
        site_desc: site_name,
      };
      console.log("Request body:", body);
      const response = await createProblem({
        body
      });
      console.log("Response:", response);
      
      if (response?.status === 200) {
        alert("แจ้งปัญหาสำเร็จ!");
        resetForm(); // Clear form after success
      } else {
        Swal.fire({ icon: "error", title: response.res_code, text: response.res_msg });
      }
    } catch (error) {
      console.error("Error submitting issue:", error);
      alert("เกิดข้อผิดพลาด กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง");
    } finally {
      setIsLoading(false); 
    }
  };
  const resetForm = () => {
    setTitle("");
    setSelectedType("1"); // Reset to default value
    setSelectedEquipment("");
    setProbDetail("");
    setFiles([]);
    setFilePreviews([]);
  };
  
  return (
    <div>
      <Navbar page="/all_issue" title="แจ้งปัญหา" />
      <div className="mx-auto mt-8 py-4 p-4 bg-white border shadow-md rounded-md text-center w-64">
        <form action="">
          {/* Select Fields */}
          <div className="flex items-center space-x-2">
            <p>เรื่อง:</p>
            <input 
            type="text" 
            value={title} 
            onChange={handleInputChange}
            className="rounded-md w-full h-10 border border-gray-300 " />
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <p>ประเภท:</p>
            <select
              value={selectedType}
              onChange={handleTypeChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              {Array.isArray(probType) && probType.map((type) => (
                <option key={type.Technical_Item_Type_ID} value={type.Technical_Item_Type_ID}>
                  {type.Technical_Item_Type_Desc}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2 mt-4">
            <p className="mt-2">อุปกรณ์:</p>
            <select
              value={selectedEquipment}
              onChange={handleEquipmentChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:border-blue-500 "
            >
              {Array.isArray(technicalItems) && technicalItems.map((item) => (
                <option key={item.Item_ID} value={item.Item_ID}>
                  {item.Item_Desc}
                </option>
              ))}
            </select>
          </div>

          {/* Upload Section */}
          <p className="mt-4">รายละเอียด:</p>
          <input type="text" 
          className="rounded-md w-full h-20 border border-gray-300" 
          value={probDetail}
          onChange={handleProbDetailChange}
          />

          <div className="mt-4">
            <label className="block mb-2">แนบรูป​และวิดีโอ {files.length}/3</label>
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*, video/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                multiple
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex items-center justify-center w-12 h-12 bg-gray-200 rounded-lg"
              >
                <PlusIcon className="w-6 h-6 text-gray-500" />
              </label>
            </div>
          </div>

          {/* File List Display */}
          {filePreviews.length > 0 && (
            <div className="mt-4 space-y-2">
              {filePreviews.map(({ file, url }, index) => (
                <div key={index} className="flex items-center space-x-4 p-2 border rounded-lg">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={url}
                      alt={`Selected file ${index + 1}`}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  ) : (
                    <video className="w-16 h-16 rounded-md" controls>
                      <source src={url} type={file.type} />
                    </video>
                  )}
                  <p className="flex-1 truncate">{file.name}</p>
                  <button
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#5ABCF5] text-white mt-4 py-2 rounded-md hover:bg-[#5a90f5]"
              onClick={onSubmit}
              disabled={isLoading} 
            >
               {isLoading ? "กำลังบันทึก..." : "ยืนยัน"} 
            </button>
        </form>
      </div>
    </div>
  );
}

export default AddIssuePage;
