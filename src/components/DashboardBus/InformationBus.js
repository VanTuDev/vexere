// File InformationBus.js
import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const InformationBus = ({ userInfo }) => {
  return (
    <div>
      <Title level={3}>Thông tin người dùng</Title>
      <Text>Họ và tên: {userInfo.fullName}</Text>
      <br />
      <Text>Tên đăng nhập: {userInfo.username}</Text>
      <br />
      <Text>Mật khẩu: {userInfo.password}</Text>
      <br />
      <Text>Số điện thoại: {userInfo.phone}</Text>
      <br />
      <Text>Email: {userInfo.email}</Text>
    </div>
  );
};

export default InformationBus;
