import React from "react";
import { AutoComplete } from "antd";
const options = [
  {
    value: "Đà Nẵng",
  },
  {
    value: "Nha Trang",
  },
  {
    value: "Sài Gòn",
  },
];
const App = () => (
  <AutoComplete
    style={{
      width: 200,
    }}
    options={options}
    filterOption={(inputValue, option) =>
      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
  />
);
export default App;
