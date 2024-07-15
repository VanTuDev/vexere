import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MegaMenu from "./components/MegaMenu/MegaMenu";
import Header from "./components/Header/Header";
import "./index.css"; // Import Tailwind CSS
import Sort from "./components/Sort/Sort.js";
import Card from "./components/Card/Card.js";
import Dashboard from "./components/Admin/Dashboard/Dashboard.js";
import Home from "./pages/HomePage/HomePage.js";
import Footer from "./components/Footer/Footer.js";


export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-100 p-0">
        <Routes>
          <Route path="/booking" element={<Header />}></Route>
        </Routes>

        <Routes>
          <Route path="/booking" element={<MegaMenu />}></Route>
        </Routes>

        <div className="w-7/12 flex gap-10 p-0 m-auto ">
          <Routes>
            <Route path="/booking" element={<Sort />}></Route>
          </Routes>
          <Routes>
            <Route path="/booking" element={<Card />}></Route>
          </Routes>
        </div>
        <Routes>
          <Route path="/booking" element={<Footer />}></Route>
        </Routes>
      </div>
      <Routes>
        <Route path="/admin" element={<Dashboard />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
