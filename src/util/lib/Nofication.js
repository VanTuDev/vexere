import { Button, notification, Space } from "antd";
export const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Lỗi chuyến đi",
    description:
      "Chuyến đi không được bỏ trống.Vui lòng nhập chuyến đi hoặc nhập chuyến đi hợp lệ!",
  });
};
