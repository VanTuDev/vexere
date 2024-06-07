import React from "react";

function Card() {
  return (
    <div className="w-5/12 h-fit bg-white shadow-lg rounded-lg mt-10 p-6 overflow-hidden">
      <div className="flex gap-2">
        <img
          src="https://static.vexere.com/production/images/1663235087352.jpeg?w=250&h=250"
          alt="Descriptive text"
          className="w-40 h-40"
        />
        <div>
          <div className="flex justify-between">
            <p className="font-bold m-1">Kim chi 265</p>
            <p className="font-bold m-1 ml-auto">400.000 VND</p>
          </div>
          <div className="flex gap-2 ml-1">
            <p className="font-medium text-xs m-0">
              Limousine giường nằm 34 chỗ
            </p>
            <p className="font-normal text-xs m-0">Tài trợ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
