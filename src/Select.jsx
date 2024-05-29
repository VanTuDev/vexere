import { Select } from "antd";
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (input, option) =>
  (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
const App = () => (
  <Select
    className="h-6 w-22"
    showSearch
    placeholder="Điểm đi"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={filterOption}
    options={[
      {
        value: "Hà Nội",
        label: "Hà nội",
      },
      {
        value: "Đà Nẵng",
        label: "Đà Nẵng",
      },
      {
        value: "Hồ Chí Minh",
        label: "Hồ Chí Minh",
      },
    ]}
  />
);
export default App;
