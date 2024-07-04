import React from "react";
import Logo from "../Header/logo-trangchu.svg";

function Header() {
  return (
    <header className="bg-blue-500 p-2">
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="w-full md:w-1/3 flex flex-col md:flex-row items-center gap-2">
          <div className="w-1/2 md:items-center">
            <img src={Logo} alt="logo" />
          </div>
          <div></div>
          <div className="font-bold text-white md:text-left hidden xl:block">
            <p>Cam kết hoàn 150 nếu nhà xe không giữ vé</p>
          </div>
        </div>
        <div className="w-full flex justify-end gap-3">
          <a href="#" className="text-white no-underline">
            Quản lý đơn hàng
          </a>
          <a href="#" className="text-white no-underline">
            Mở bán trên Vexere
          </a>
          <a href="#" className="text-white no-underline">
            Trở thành đối tác
          </a>
        </div>
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center gap-2 mt-4 md:mt-0">
          <img src="" alt="Flag" className="hidden lg:block" />
          <button
            style={{
              background: "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
              border: 0,
            }}
            className="bg-slate-50 font-bold px-7 rounded-lg whitespace-nowrap"
          >
            <p>Hotline 24/7</p>
          </button>
          <button
            style={{
              background: "linear-gradient(to bottom right, #ef4765, #ff9a5a)",
              border: 0,
            }}
            className="bg-slate-50 font-bold px-7 rounded-lg whitespace-nowrap"
          >
            <p>Đăng Nhập</p>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
