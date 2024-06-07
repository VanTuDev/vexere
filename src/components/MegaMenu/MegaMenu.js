import React from "react";
import InputStart from "./InputStart";
import InputEnd from "./inputEnd.js";
import { DatePicker } from "antd";
import "./button.css";
function MegaMenu() {
  return (
    <div className="w-full md:w-7/12 mx-auto bg-white py-2 mt-4 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-1 justify-center">
            <div className="bg-white py-4 px-10 border-4 border-red-500">
              <a className="no-underline" href="#">
                300K
              </a>
            </div>

            <div className="bg-white py-4 px-10">
              <img src="" alt="✈" />
              <a className="no-underline" href="">
                Máy bay
              </a>
            </div>

            <div className="bg-white py-4 px-10">
              <img src="" alt="🚂" />
              <a className="no-underline" href="">
                Tàu hỏa
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-11/12 mx-auto flex flex-wrap justify-around gap-3 mt-4">
        <div className="w-full md:w-2/12 bg-white px-2 py-2">
          <p className="text-xs m-0">Nơi xuất phát</p>
          <InputStart />
        </div>

        <div className="w-full md:w-2/12 bg-white px-2 pt-2">
          <p className="text-xs m-0">Nơi đến</p>
          <InputEnd />
        </div>

        <div className="w-full md:w-2/12 bg-white px-2 py-2">
          <p className="text-xs m-0">Ngày đi</p>
          <DatePicker />
        </div>

        <div className="w-full md:w-2/12 bg-white px-2 py-2">
          <p className="text-xs m-0">ngày về</p>
          <DatePicker />
        </div>

        <button className="btn">Tìm kiếm</button>
      </div>
    </div>
  );
}

export default MegaMenu;
