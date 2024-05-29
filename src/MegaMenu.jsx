// import Select from "./Select.jsx";

function MegaMenu() {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100">
      <div className="text-center justify-center w-8/12 bg-gray-50 mt-5 py-5 rounded-tl-lg rounded-tr-lg border-b-9 border-gray-500">
        <a className="bg-gray-400 px-9 py-3 m-1" href="">
          🚌 190K
        </a>
        <a className="bg-gray-400 px-9 py-3 m-1" href="">
          ✈ Máy bay
        </a>
        <a className="bg-gray-400 px-9 py-3 m-1" href="">
          🚋 Tàu Hỏa
        </a>
      </div>
    </div>
  );
}

export default MegaMenu;
