import React, { useState } from "react";
import { Table } from "antd";

const columns = [
  {
    title: "STT",
    dataIndex: "index",
    key: "index",
    width: 50,
    fixed: "left",
    render: (_, __, index) => index + 1,
  },
  {
    title: "Tên chuyến xe",
    dataIndex: "tripName",
    key: "tripName",
    fixed: "left",
    width: 120,
  },
  {
    title: "Hình ảnh",
    dataIndex: "imgUrl",
    key: "imgUrl",
    width: 120,
    render: (text) => (
      <img
        src={text}
        alt="Hình ảnh nhà xe"
        style={{ width: "100px", height: "60px" }}
      />
    ),
  },
  {
    title: "Giá tiền",
    dataIndex: "price",
    key: "price",
    width: 90,
  },
  {
    title: "Điểm đến",
    dataIndex: "destination",
    key: "destination",
    width: 90,
  },
  {
    title: "Điểm đi",
    dataIndex: "departure",
    key: "departure",
    width: 90,
  },
  {
    title: "Giờ xuất phát",
    dataIndex: "departureTime",
    key: "departureTime",
    width: 150,
  },
  {
    title: "Chỉnh sửa",
    key: "edit",
    fixed: "right",
    width: 90,
    render: () => <a>Chỉnh sửa</a>,
  },
  {
    title: "Xóa",
    key: "delete",
    fixed: "right",
    width: 90,
    render: () => <a>Xóa</a>,
  },
  {
    title: "Ẩn",
    key: "hide",
    fixed: "right",
    width: 90,
    render: () => <a>Ẩn</a>,
  },
];

const CardBus = () => {
  const [data, setData] = useState([
    {
      key: "1",
      tripName: "Chuyến xe A",
      imgUrl: "https://via.placeholder.com/150",
      price: "200.000 VND",
      destination: "Hà Nội",
      departure: "Hải Phòng",
      departureTime: "08:00",
    },
    // Thêm dữ liệu khác nếu cần
  ]);

  // Hàm để thêm dữ liệu mới
  const addData = () => {
    const newData = {
      key: (data.length + 1).toString(),
      tripName: `Chuyến xe ${(data.length + 1).toString()}`,
      imgUrl: "https://via.placeholder.com/150",
      price: "200.000 VND",
      destination: "Hà Nội",
      departure: "Hải Phòng",
      departureTime: "08:00",
    };

    setData([...data, newData]);
  };

  return (
    <>
      <button onClick={addData}>Thêm dữ liệu</button>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1600 }}
        pagination={{ pageSize: 10 }}
        bordered
      />
    </>
  );
};

export default CardBus;
