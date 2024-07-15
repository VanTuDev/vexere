import React from "react";
import InputStart from "./InputStart";
import InputEnd from "./inputEnd.js";
import { DatePicker } from "antd";
import "./btn.css";
function MegaMenu() {
  return (
    <div className="w-full mx-auto bg-white py-2 mt-4 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-1 justify-center">
            <div className="bg-white py-4 px-10 border-4 border-red-500">
              <svg viewBox="0 0 24 24"><path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"></path></svg>
              <a className="no-underline" href="#">
                300K
              </a>
            </div>

            <div className="bg-white py-4 px-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="27" height="24" viewBox="0 -0.5 25 25"><path d="m24.794 16.522-.281-2.748-10.191-5.131s.091-1.742 0-4.31c-.109-1.68-.786-3.184-1.839-4.339l.005.006h-.182c-1.048 1.15-1.726 2.653-1.834 4.312l-.001.021c-.091 2.567 0 4.31 0 4.31l-10.19 5.131-.281 2.748 6.889-2.074 3.491-.582c-.02.361-.031.783-.031 1.208 0 2.051.266 4.041.764 5.935l-.036-.162-2.728 1.095v1.798l3.52-.8c.155.312.3.566.456.812l-.021-.035v.282c.032-.046.062-.096.093-.143.032.046.061.096.094.143v-.282c.135-.21.28-.464.412-.726l.023-.051 3.52.8v-1.798l-2.728-1.095c.463-1.733.728-3.723.728-5.774 0-.425-.011-.847-.034-1.266l.003.058 3.492.582 6.888 2.074z" /></svg>
              <a className="no-underline" href="">
                Máy bay
              </a>
            </div>

            <div className="bg-white py-4 px-10">
              <svg width="27" height="24" viewBox="0 0 25 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 2a4 4 0 0 0-4 4v11a1 1 0 0 0 1 1h1l-2 4h2l.6-1.2h10.8l.6 1.2h2l-2-4h1a1 1 0 0 0 1-1V6a4 4 0 0 0-4-4h-8zm8 16h-8L8 19h9l-.5-1zm-8-14a2 2 0 0 0-2 2v5h5V4h-3zm10 7h-5V4h3a2 2 0 0 1 2 2v5zm-9 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM17 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"></path></svg>
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
