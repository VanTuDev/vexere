import React, { useState } from "react";
import Filter from "./Filter"; // Import the Filter component

function Sort({ sortOption, handleSortChange }) {
  return (
    <div className="w-full bg-white mt-6 px-6 py-4 m-0 rounded-md shadow-md">
      <h2 className="text-gray-700 mb-2 ml-6">Sắp xếp</h2>
      <div>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="default"
            checked={sortOption === "default"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Mặc định
        </label>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="earliest"
            checked={sortOption === "earliest"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Giờ đi sớm nhất
        </label>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="latest"
            checked={sortOption === "latest"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Giờ đi muộn nhất
        </label>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="highestRating"
            checked={sortOption === "highestRating"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Đánh giá cao nhất
        </label>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="priceAsc"
            checked={sortOption === "priceAsc"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Giá tăng dần
        </label>
        <label className="block">
          <input
            type="radio"
            name="sort"
            value="priceDesc"
            checked={sortOption === "priceDesc"}
            onChange={handleSortChange}
            className="mr-2"
          />
          Giá giảm dần
        </label>
      </div>
    </div>
  );
}

function App() {
  const [sortOption, setSortOption] = useState("default");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    console.log("Selected sort option:", event.target.value);
  };

  return (
    <div className="p-4">
      <Sort sortOption={sortOption} handleSortChange={handleSortChange} />
      <Filter /> {/* Render the Filter component */}
      {/* Other components can go here */}
    </div>
  );
}

export default App;
