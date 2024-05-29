import React from "react";
import Logo from "../Header/logo-trangchu.svg";

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center gap-7">
          <div className="w-1/2 md:w-auto">
            <img src={Logo} alt="logo" />
          </div>
          <div></div>
          <div className="font-bold text-white text-center md:text-left">
            <p>Cam kết hoàn 150 nếu nhà xe không giữ vé</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end text-white gap-4 md:gap-9 mt-4 md:mt-0">
          <a href="#" className="whitespace-nowrap">
            Quản lý đơn hàng
          </a>
          <a href="#" className="whitespace-nowrap">
            Mở bán vé trên web
          </a>
          <a href="#" className="whitespace-nowrap">
            Trở thành đối tác
          </a>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center gap-2 mt-4 md:mt-0">
          <img src="" alt="ảnh" className="hidden md:block" />
          <button className="bg-white font-bold px-3 py-2 rounded-lg whitespace-nowrap">
            <p>Hotline 24/7</p>
          </button>
          <button className="bg-white font-bold px-3 py-2 rounded-lg whitespace-nowrap">
            <p>Đăng Nhập</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
