// Filter.js
import React from "react";

function Filter() {
  return (
    <div className="w-56 bg-white ml-[410px]  mt-6 px-3 py-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-700">Lọc</h2>
        <a className="text-blue-500 px-2 py-1 rounded-md text-sm " href="#">
          Xóa lọc
        </a>
      </div>
      <div className="space-y-2">
        <div>
          <label className="block text-gray-700 mb-1">Giờ đi</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Nhà xe</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Giá vé</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Điểm đón</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Điểm trả</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Tiêu chí phổ biến</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Vị trí ghế</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Loại xe</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Loại ghế / giường</label>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Đánh giá</label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
