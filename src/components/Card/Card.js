import React from "react";
import Carousel from "./carousel";
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
    location1: "UK",
    time2: "16:17",
    location2: "UK",
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
    location1: "Hanoi",
    time2: "20:00",
    location2: "HCMC",
  },
  // Add more items as needed
  {
    id: 2,
    title: "Bus ABC",
    price: "300.000 VND",
    description: "Xe giường nằm 40 chỗ",
    detail: "ghế thường",
    imgUrl:
      "https://static.vexere.com/c/i/17359/xe-van-luc-tung-VeXeRe-cK0rzyB-1000x600.jpeg?w=250&h=250",
    time1: "15:00",
    location1: "Hanoi",
    time2: "20:00",
    location2: "HCMC",
  },
  // Add more items as needed
];

function Card() {
  return (
    <>
      <div className="w-full p-0">
        <div className="w-9/12 bg-slate-400">{/* carousel */}</div>
        {data.map((item) => (
          <div
            key={item.id}
            className=" h-fit bg-white shadow-lg rounded-lg mt-6 px-1.5 py-5"
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
                      <a className="mt-4" href="">
                        Thông tin chi tiết
                      </a>
                      <button
                        style={{
                          background:
                            "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
                          border: 0,
                        }}
                        className="h-8 w-3/12 mt-4 text-white rounded-lg"
                        type=""
                      >
                        Gọi đặt vé
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
