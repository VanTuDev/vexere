import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  DatePicker,
  TimePicker,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const FormBus = () => {
  const onFinish = (values) => {
    // Chuyển đổi ngày và giờ sang định dạng phù hợp trước khi gửi API
    const formattedValues = {
      ...values,
      date: values.date.format("YYYY-MM-DD"),
      time1: values.time1.format("HH:mm"),
      time2: values.time2.format("HH:mm"),
    };

    // Gửi dữ liệu tới API
    fetch("http://localhost:3000/api/add-bus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedValues),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Xử lý sau khi gửi thành công, ví dụ như hiển thị thông báo
      })
      .catch((error) => {
        console.error("Error:", error);
        // Xử lý lỗi khi gửi dữ liệu không thành công
      });
  };

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <Form {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Please input the title!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input the price!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input the description!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Image Upload"
        name="imgUrl"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Chọn và tải lên nhiều ảnh"
      >
        <Upload.Dragger name="files" multiple={true}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single or bulk upload.
          </p>
        </Upload.Dragger>
      </Form.Item>

      <Form.Item
        label="Departure Time"
        name="time1"
        rules={[
          { required: true, message: "Please input the departure time!" },
        ]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[{ required: true, message: "Please input the date!" }]}
      >
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Departure Location"
        name="location1"
        rules={[
          { required: true, message: "Please input the departure location!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Arrival Time"
        name="time2"
        rules={[{ required: true, message: "Please input the arrival time!" }]}
      >
        <TimePicker format="HH:mm" />
      </Form.Item>

      <Form.Item
        label="Arrival Location"
        name="location2"
        rules={[
          { required: true, message: "Please input the arrival location!" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Seat"
        name="seat"
        rules={[{ required: true, message: "Please input the seat!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormBus;
