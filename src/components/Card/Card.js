import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Detail from "../Booking/Detail";


const data = [
  {
    id: 1,
    title: "Hoàng Đức Limousine",
    price: "100.000 VND",
    originalPrice: "150.000 VND",
    description: "Limousine 9 chỗ",
    detail: "Giảm 50% tối đa 250K",
    imgUrl: "https://static.vexere.com/c/i/17359/xe-van-luc-tung-VeXeRe-cK0rzyB-1000x600.jpeg?w=250&h=250",
    time1: "17:00",
    date: "2024-07-01",
    location1: "Văn phòng Đà Nẵng",
    time2: "20:00",
    location2: "Cafe Gốm, 50 Nguyễn Đức Cảnh",
    seat: "16",
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
                <p className="font-bold m-1 text-blue-500">{item.price}</p>
                <p className="line-through text-gray-500">{item.originalPrice}</p>
              </div>
              <div className="flex gap-2 ml-1">
                <p className="font-medium text-xs m-0">{item.description}</p>
                <p className="font-normal text-xs m-0">{item.detail}</p>
              </div>
              <div className="pr-2 pl-8 flex items-center">
                <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74"><path fill="none" stroke="#787878" stroke-linecap="round" stroke-width="2" stroke-dasharray="0 7" d="M7 13.5v46"></path><g fill="none" stroke="#484848" stroke-width="3"><circle cx="7" cy="7" r="7" stroke="none"></circle><circle cx="7" cy="7" r="5.5"></circle></g><path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878"></path></svg>
                <div className="flex-col ml-4">
                  <div className="flex gap-2">
                    <p>{item.time1}</p>
                    <p>{item.location1}</p>
                  </div>
                  <div className="flex gap-2">
                    <p>{item.time2}</p>
                    <p>{item.location2}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="gap-5 flex justify-end">
                  <a
                    className="cursor-pointer"
                    onClick={() => toggleDetails(item.id)}
                  >
                    Thông tin chi tiết
                  </a>
                  <Loading isLoading={isLoading} />
                  <button
                    style={{
                      background: "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
                      border: 0,
                      fontSize: '16px',
                      fontWeight: 'bold',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      cursor: 'pointer',
                    }}
                    className="h-8 text-white rounded-lg hover:bg-opacity-90"
                    type="button"
                    onClick={() => handleDetailClick(item.id)}
                  >
                    {selectedTrip === item.id && isBooking ? "Đóng" : "Chọn chuyến"}
                  </button>

                </div>

              </div>
            </div>
          </div>
          {selectedTrip === item.id && !isBooking && (
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <div className="flex gap-4 justify-between">
                <a
                  className={`cursor-pointer ${selectedTab === "voucher" ? "font-bold" : ""
                    }`}
                  onClick={() => setSelectedTab("voucher")}
                >
                  Giảm giá
                </a>
                <a
                  className={`cursor-pointer ${selectedTab === "pickup" ? "font-bold" : ""
                    }`}
                  onClick={() => setSelectedTab("pickup")}
                >
                  Điểm đón trả
                </a>
                <a
                  className={`cursor-pointer ${selectedTab === "reviews" ? "font-bold" : ""
                    }`}
                  onClick={() => setSelectedTab("reviews")}
                >
                  Đánh giá
                </a>
                <a
                  className={`cursor-pointer ${selectedTab === "images" ? "font-bold" : ""
                    }`}
                  onClick={() => setSelectedTab("images")}
                >
                  Hình ảnh
                </a>
                <a
                  className={`cursor-pointer ${selectedTab === "amenities" ? "font-bold" : ""
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

export default Card