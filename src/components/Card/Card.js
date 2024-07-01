import React, { useState } from "react";
import Loading from "../Loading/Loading";
import Detail from "../Booking/Detail";
import TabCard from "./tabCard";
import data from "./data.json"; // Import dữ liệu từ file JSON

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

  return (
    <div className="w-9/12 ml-8">
      {data.map((item) => (
        <div
          key={item.id}
          className="h-fit bg-white shadow-lg rounded-lg mt-6 px-1.5 py-5"
        >
          <div className="flex gap-2">
            <img src={item.imgUrl} alt={item.title} className="w-36 h-36" />
            <div className="w-full">
              <div className="w-full flex justify-between">
                <div className="flex">
                  <p className="font-bold m-1">{item.title}</p>
                  <p className="font-thin text-sm mt-2 px-2 text-white bg-blue-500">
                    4.1(123)
                  </p>
                </div>
                <p className="font-bold m-1 text-blue-600">{item.price}d</p>
              </div>
              <div className="flex gap-2 ml-1">
                <p className="font-thin text-xs m-0">{item.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <p>{item.time1} - </p>
                    <p>{item.location1}</p>
                  </div>
                  <div className="flex gap-2 items-center justify-between">
                    <div className="flex gap-2">
                      <p>{item.time2} -</p>
                      <p>{item.location2}</p>
                    </div>
                    <div className="flex gap-5 items-center">
                      <a
                        className="text-blue-400 cursor-pointer"
                        onClick={() => toggleDetails(item.id)}
                      >
                        Thông tin chi tiết
                      </a>
                      <Loading isLoading={isLoading} />
                      <button
                        className=" text-black bg-yellow-300 "
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
            <div className="mt-2 p-2 w-11/12 m-auto rounded-lg">
              <TabCard className="p-2" data={item} />
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
