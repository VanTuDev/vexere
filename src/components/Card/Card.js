import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Detail from "../Booking/Detail";

const data = [
  {
    id: 1,
    title: "Kim chi 265",
    price: "400.000 VND",
    description: "Limousine giường nằm 34 chỗ",
    detail: "giường Vip",
    imgUrl:
      "https://static.vexere.com/c/i/17359/xe-van-luc-tung-VeXeRe-cK0rzyB-1000x600.jpeg?w=250&h=250",
    time1: "16:15",
    date: "2024-06-17",
    location1: "UK",
    time2: "16:17",
    location2: "UK",
    seat: "7",
  },
  {
    id: 2,
    title: "Bus ABC",
    price: "300.000 VND",
    description: "Xe giường nằm 40 chỗ",
    detail: "ghế thường",
    imgUrl:
      "https://static.vexere.com/c/i/17359/xe-van-luc-tung-VeXeRe-cK0rzyB-1000x600.jpeg?w=250&h=250",
    time1: "15:00",
    date: "2024-06-10",
    location1: "Hanoi",
    time2: "20:00",
    location2: "HCMC",
    seat: "16",
  },
  {
    id: 3,
    title: "Bus XYZ",
    price: "350.000 VND",
    description: "Xe giường nằm 45 chỗ",
    detail: "ghế thường",
    imgUrl:
      "https://static.vexere.com/c/i/17359/xe-van-luc-tung-VeXeRe-cK0rzyB-1000x600.jpeg?w=250&h=250",
    time1: "14:00",
    date: "2024-06-20",
    location1: "Danang",
    time2: "19:00",
    location2: "HCMC",
    seat: "30",
  },
];

function Card() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const toggleDetails = (id) => {
    if (selectedTrip === id && !isBooking) {
      setSelectedTrip(null);
    } else {
      setSelectedTrip(id);
      setIsBooking(false);
    }
    setSelectedTab(null);
  };

  const handleDetailClick = (id) => {
    if (selectedTrip === id && isBooking) {
      setSelectedTrip(null);
      setIsBooking(false);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setSelectedTrip(id);
        setIsBooking(true);
        setIsLoading(false);
      }, 150);
    }
  };

  const renderTabContent = (tab, trip) => {
    switch (tab) {
      case "voucher":
        return <div>Voucher giảm giá: 10% off for early birds!</div>;
      case "pickup":
        return (
          <div>
            <p>Điểm đón trả:</p>
            <ul>
              <li>Point A</li>
              <li>Point B</li>
              <li>Point C</li>
            </ul>
          </div>
        );
      case "reviews":
        return (
          <div>
            <p>Đánh giá:</p>
            <div>⭐⭐⭐⭐☆</div>
            <p>Comment: Excellent service!</p>
          </div>
        );
      case "images":
        return (
          <div>
            Hình ảnh: <img src={trip.imgUrl} alt="Bus" />
          </div>
        );
      case "amenities":
        return <div>Tiện ích: WiFi, Snacks, Reclining Seats</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-9/12 ml-8">
      <div className="w-9/12 bg-slate-400">{/* carousel */}</div>
      {data.map((item) => (
        <div
          key={item.id}
          className="h-fit bg-white shadow-lg rounded-lg mt-6 px-1.5 py-5"
        >
          <div className="flex gap-2">
            <img
              src={item.imgUrl}
              alt="Descriptive text"
              className="w-44 h-44"
            />
            <div className="w-full">
              <div className="w-full flex justify-between">
                <p className="font-bold m-1">{item.title}</p>
                <p className="font-bold m-1">{item.price}</p>
              </div>
              <div className="flex gap-2 ml-1">
                <p className="font-medium text-xs m-0">{item.description}</p>
                <p className="font-normal text-xs m-0">{item.detail}</p>
              </div>
              <div className="pr-2 pl-8">
                <div className="flex gap-2">
                  <p>{item.time1}</p>
                  <p>{item.location1}</p>
                </div>
                <div className="flex gap-2">
                  <p>{item.time2}</p>
                  <p>{item.location2}</p>
                  <div className="w-full gap-5 flex justify-end px">
                    <a
                      className="mt-4 cursor-pointer"
                      onClick={() => toggleDetails(item.id)}
                    >
                      Thông tin chi tiết
                    </a>
                    <Loading isLoading={isLoading} />
                    <button
                      style={{
                        background:
                          "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
                        border: 0,
                      }}
                      className="h-8 w-3/12 mt-4 text-white rounded-lg"
                      type="button"
                      onClick={() => handleDetailClick(item.id)}
                    >
                      {selectedTrip === item.id && isBooking
                        ? "Đóng"
                        : "Gọi đặt vé"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedTrip === item.id && !isBooking && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex gap-4 justify-between">
                <a
                  className={`cursor-pointer ${
                    selectedTab === "voucher" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedTab("voucher")}
                >
                  Giảm giá
                </a>
                <a
                  className={`cursor-pointer ${
                    selectedTab === "pickup" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedTab("pickup")}
                >
                  Điểm đón trả
                </a>
                <a
                  className={`cursor-pointer ${
                    selectedTab === "reviews" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedTab("reviews")}
                >
                  Đánh giá
                </a>
                <a
                  className={`cursor-pointer ${
                    selectedTab === "images" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedTab("images")}
                >
                  Hình ảnh
                </a>
                <a
                  className={`cursor-pointer ${
                    selectedTab === "amenities" ? "font-bold" : ""
                  }`}
                  onClick={() => setSelectedTab("amenities")}
                >
                  Tiện ích
                </a>
              </div>
              <div className="mt-4">{renderTabContent(selectedTab, item)}</div>
            </div>
          )}
          {selectedTrip === item.id && isBooking && (
            <div className="mt-4">
              <Detail item={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
