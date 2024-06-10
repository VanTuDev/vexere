import React, { useState } from "react";

function Filter() {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const toggleFilter = (filter) => {
    setSelectedFilter(selectedFilter === filter ? null : filter);
  };

  const renderFilterContent = (filter) => {
    switch (filter) {
      case "departureTime":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn giờ đi:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="morning">Sáng</option>
              <option value="afternoon">Chiều</option>
              <option value="evening">Tối</option>
            </select>
          </div>
        );
      case "busCompany":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn nhà xe:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="company1">Nhà xe 1</option>
              <option value="company2">Nhà xe 2</option>
              <option value="company3">Nhà xe 3</option>
            </select>
          </div>
        );
      case "ticketPrice":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn giá vé:</label>
            <input type="range" min="100000" max="500000" className="w-full" />
          </div>
        );
      case "pickupPoint":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn điểm đón:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="pointA">Điểm A</option>
              <option value="pointB">Điểm B</option>
              <option value="pointC">Điểm C</option>
            </select>
          </div>
        );
      case "dropoffPoint":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn điểm trả:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="pointA">Điểm A</option>
              <option value="pointB">Điểm B</option>
              <option value="pointC">Điểm C</option>
            </select>
          </div>
        );
      case "popularCriteria":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn tiêu chí:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="wifi">WiFi</option>
              <option value="snacks">Snacks</option>
              <option value="recliningSeats">Reclining Seats</option>
            </select>
          </div>
        );
      case "seatPosition":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn vị trí ghế:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="front">Phía trước</option>
              <option value="middle">Phía giữa</option>
              <option value="back">Phía sau</option>
            </select>
          </div>
        );
      case "busType":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn loại xe:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="limousine">Limousine</option>
              <option value="sleeping">Xe giường nằm</option>
              <option value="seating">Xe ghế ngồi</option>
            </select>
          </div>
        );
      case "seatType":
        return (
          <div>
            <label className="block text-gray-700 mb-1">
              Chọn loại ghế/giường:
            </label>
            <select className="w-full p-2 border rounded-md">
              <option value="vip">VIP</option>
              <option value="regular">Thường</option>
              <option value="economy">Tiết kiệm</option>
            </select>
          </div>
        );
      case "rating":
        return (
          <div>
            <label className="block text-gray-700 mb-1">Chọn đánh giá:</label>
            <select className="w-full p-2 border rounded-md">
              <option value="5stars">5 stars</option>
              <option value="4stars">4 stars</option>
              <option value="3stars">3 stars</option>
            </select>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white mt-2 px-7 py-4 rounded-md shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-gray-700">Lọc</h2>
        <a
          className="text-blue-500 px-2 py-1 rounded-md text-sm cursor-pointer"
          href="#"
        >
          Xóa lọc
        </a>
      </div>
      <div className="space-y-2">
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("departureTime")}
          >
            Giờ đi
          </label>
          {selectedFilter === "departureTime" &&
            renderFilterContent("departureTime")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("busCompany")}
          >
            Nhà xe
          </label>
          {selectedFilter === "busCompany" && renderFilterContent("busCompany")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("ticketPrice")}
          >
            Giá vé
          </label>
          {selectedFilter === "ticketPrice" &&
            renderFilterContent("ticketPrice")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("pickupPoint")}
          >
            Điểm đón
          </label>
          {selectedFilter === "pickupPoint" &&
            renderFilterContent("pickupPoint")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("dropoffPoint")}
          >
            Điểm trả
          </label>
          {selectedFilter === "dropoffPoint" &&
            renderFilterContent("dropoffPoint")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("popularCriteria")}
          >
            Tiêu chí phổ biến
          </label>
          {selectedFilter === "popularCriteria" &&
            renderFilterContent("popularCriteria")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("seatPosition")}
          >
            Vị trí ghế
          </label>
          {selectedFilter === "seatPosition" &&
            renderFilterContent("seatPosition")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("busType")}
          >
            Loại xe
          </label>
          {selectedFilter === "busType" && renderFilterContent("busType")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("seatType")}
          >
            Loại ghế / giường
          </label>
          {selectedFilter === "seatType" && renderFilterContent("seatType")}
        </div>
        <div>
          <label
            className="block text-gray-700 mb-1 cursor-pointer"
            onClick={() => toggleFilter("rating")}
          >
            Đánh giá
          </label>
          {selectedFilter === "rating" && renderFilterContent("rating")}
        </div>
      </div>
    </div>
  );
}

export default Filter;
