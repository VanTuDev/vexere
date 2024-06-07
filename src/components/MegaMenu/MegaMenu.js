import iconXeKhach from "../MegaMenu/iconXeKhach.js";
import Input from "./InputStart";
import { DatePicker } from "antd";

function MegaMenu() {
  return (
    <div className="w-7/12 m-auto bg-white px-4 py-2 mt-4 rounded-lg">
      <div className="flex items-center justify-center ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-1">
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
      <div className=" w-11/12 m-auto flex flex-row gap-2.5 mt-4">
        <div className="w-44 bg-white px-2 py-2">
          <p className="text-xs m-0  ">Nơi xuất phát</p>
          <Input></Input>
        </div>

        <div className="w-44 bg-white  px-2 pt-2 ">
          <p className="text-xs m-0  ">Nơi đến</p>
          <Input></Input>
        </div>
        <div className="w-30 bg-white  px-2 py-2">
          <p className="text-xs m-0">Ngày đi </p>
          <DatePicker></DatePicker>
        </div>
        <div className="w-40 bg-white text-blue-500  text-center px-2 py-2 cursor-pointer">
          <a className="text-lg font-text-sm m-2 align-middle font-normal">
            + Thêm ngày về
          </a>
        </div>
        <button
          type="button"
          className="bg-yellow-600 text-lg  w-32 rounded-lg"
        >
          Tìm kiếm
        </button>
      </div>
    </div>
  );
}

export default MegaMenu;
