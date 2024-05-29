import logo from "./logo.svg";
import ReactDOM from "react-dom/client";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Booking/Detail";
import Header from "./components/Header/Header";
import "./index.css"; // Import Tailwind CSS
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}></Route>
      </Routes>

      <Routes>
        <Route path="/" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
