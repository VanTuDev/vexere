import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Detail from "../Booking/Detail";
import TabCard from "./tabCard";
import data from "./data.json"; // Import dữ liệu từ file JSON
import "@fortawesome/fontawesome-free/css/all.min.css";

function Card() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  const toggleDetails = (id) => {
    if (selectedTrip === id && !isBooking) {
      setSelectedTrip(null);
    } else {
      setSelectedTrip(id);
      setIsBooking(false);
    }
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

  const calculateTimeDifference = (time1, time2) => {
    const [hours1, minutes1] = time1.split(":").map(Number);
    const [hours2, minutes2] = time2.split(":").map(Number);

    const date1 = new Date(0, 0, 0, hours1, minutes1, 0);
    const date2 = new Date(0, 0, 0, hours2, minutes2, 0);

    let diff = (date2 - date1) / 1000 / 60; // difference in minutes

    const hoursDiff = Math.floor(diff / 60);
    const minutesDiff = diff % 60;

    return `${hoursDiff}h ${minutesDiff}m`;
  };

  return (
    <div className="w-9/12 ml-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="h-fit bg-white shadow-lg rounded-lg mt-4 px-1 py-4"
        >
          <div className="flex gap-2">
            <img src={item.imgUrl} alt={item.title} className="w-36 h-36" />
            <div className="w-full">
              <div className="w-full flex justify-between mb-2">
                <div className="flex">
                  <p className="font-bold m-1">{item.title}</p>
                  <p className="font-thin text-sm mt-2 px-2 text-white bg-blue-500">
                    ▪ 4.1 (123)
                  </p>
                </div>
                <p className="font-bold m-1 text-blue-600">{item.price}d</p>
              </div>
              <div className="flex gap-2 ml-1 mb-2">
                <p className="font-thin text-xs m-0">{item.description}</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col">
                  <div className="flex gap-2 items-center">
                    <i className="fas fa-map-marker-alt text-blue-500"></i>
                    <p className="font-bold text-gray-600 inline-block p-0 m-0">
                      {item.time1} ▪{" "}
                    </p>
                    <p className="inline-block p-0 m-0">{item.location1}</p>
                  </div>
                  <div>
                    <p className="inline-block p-0 my-1 text-sm ml-5 text-gray-600">
                      {calculateTimeDifference(item.time1, item.time2)}
                    </p>
                  </div>
                  <div className="flex gap-x-2 items-center justify-between mt-1">
                    <div className="flex gap-x-2">
                      <i className="fas fa-map-marker-alt text-red-500"></i>
                      <p className="font-bold text-gray-600 inline-block p-0 m-0">
                        {item.time2} ▪{" "}
                      </p>
                      <p className=" text-gray-600 inline-block p-0 m-0">
                        {item.location2}
                      </p>
                    </div>

                    <div className="flex gap-x-4 items-center">
                      <a
                        href="#"
                        className="text-blue-400 text-sm"
                        onClick={() => toggleDetails(item.id)}
                      >
                        Thông tin chi tiết
                      </a>

                      <Loading isLoading={isLoading} />
                      <button
                        className="text-gray-600 p-1.5 border-0 bg-yellow-500"
                        type="button"
                        onClick={() => handleDetailClick(item.id)}
                      >
                        {selectedTrip === item.id && isBooking
                          ? "Đóng"
                          : "Chọn chuyến"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {selectedTrip === item.id && !isBooking && (
            <div className="mt-1 p-2 w-11/12 m-auto rounded-lg">
              <TabCard className="p-2" data={item} />
            </div>
          )}
          {selectedTrip === item.id && isBooking && (
            <div className="mt-1">
              <Detail item={item} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Card;
