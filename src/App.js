import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import MegaMenu from "./components/MegaMenu/MegaMenu";
// import Header from "./components/Header/Header";
// import Sort from "./components/Sort/Sort.js";
// import Card from "./components/Card/Card.js";
import DashboarBus from "./components/DashboardBus/DashboarBus.js";
import MenuBus from "./components/DashboardBus/MenuBus"; // Import MenuBus
import CardBus from "./components/DashboardBus/CardBus"; // Import CardBus
import "./index.css"; // Import Tailwind CSS

export default function App() {
  const [activeForm, setActiveForm] = useState("");

  return (
    <BrowserRouter>
      {/* <div className="bg-slate-100 p-0">
        <Routes>
          <Route path="/" element={<Header />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<MegaMenu />}></Route>
        </Routes>
        <div className="w-7/12 flex gap-10 p-0 m-auto ">
          <Routes>
            <Route path="/" element={<Sort />}></Route>
          </Routes>
          <Routes>
            <Route path="/" element={<Card />}></Route>
          </Routes>
        </div>
      </div> */}
      <div className="">
        <Routes>
          <Route path="/" element={<DashboarBus />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
