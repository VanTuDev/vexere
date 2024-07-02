// File MenuBus.js
import React, { useState } from "react";
import {
  LaptopOutlined,
  UserOutlined,
  MenuOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Switch,
  theme,
  Button,
  Typography,
} from "antd";
import FormBus from "./FormBus"; // Import FormBus component
import CardBus from "./CardBus"; // Import CardBus component
import InformationBus from "./InformationBus"; // Import InformationBus component

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const MenuBus = () => {
  const [themeMode, setThemeMode] = useState("light"); // State để lưu trạng thái theme
  const [menuCollapsed, setMenuCollapsed] = useState(false); // State để lưu trạng thái hiển thị của menu
  const [showFormBus, setShowFormBus] = useState(false); // State để lưu trạng thái hiển thị của FormBus
  const [showCardBus, setShowCardBus] = useState(false); // State để lưu trạng thái hiển thị của CardBus
  const [userInfo, setUserInfo] = useState(null); // State để lưu thông tin người dùng

  const toggleTheme = () => {
    const nextTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(nextTheme);
  };

  const toggleMenu = () => {
    setMenuCollapsed(!menuCollapsed);
  };

  const handleMenuClick = ({ key }) => {
    if (key === "6") {
      setShowFormBus(true); // Hiển thị FormBus khi nhấp vào "Thêm chuyến xe"
      setShowCardBus(false); // Ẩn CardBus khi nhấp vào "Thêm chuyến xe"
      setUserInfo(null); // Reset thông tin người dùng khi chuyển sang mục khác
    } else if (key === "4") {
      setShowCardBus(true); // Hiển thị CardBus khi nhấp vào "Xem danh sách"
      setShowFormBus(false); // Ẩn FormBus khi nhấp vào "Xem danh sách"
      setUserInfo(null); // Reset thông tin người dùng khi chuyển sang mục khác
    } else if (key === "1") {
      // Xem thông tin người dùng
      setUserInfo({
        fullName: "Nguyen Van A",
        username: "nguyenvana",
        password: "**********",
        phone: "0123456789",
        email: "nguyenvana@example.com",
      });
      setShowFormBus(false);
      setShowCardBus(false);
    } else {
      setShowFormBus(false); // Ẩn FormBus khi chọn các mục khác
      setShowCardBus(false); // Ẩn CardBus khi chọn các mục khác
      setUserInfo(null); // Reset thông tin người dùng khi chuyển sang mục khác
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "sub1",
      icon: <UserOutlined />,
      label: "Quản lý thông tin",
      children: [
        {
          key: "1",
          label: "Xem thông tin",
          icon: <UserOutlined />,
        },
        {
          key: "2",
          label: "Thay đổi thông tin",
          icon: <UserOutlined />,
        },
        {
          key: "3",
          label: "Đổi mật khẩu",
          icon: <UserOutlined />,
        },
      ],
    },
    {
      key: "sub2",
      icon: <LaptopOutlined />,
      label: "Quản lý nhà xe",
      children: [
        {
          key: "4",
          label: "Xem danh sách xe",
          icon: <LaptopOutlined />,
        },
        {
          key: "5",
          label: "Cập nhật",
          icon: <LaptopOutlined />,
        },
        {
          key: "6",
          label: "Thêm chuyến xe",
          icon: <PlusOutlined />,
        },
      ],
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between", // Canh chỉnh để nút toggle hiển thị bên phải
          padding: "0 24px", // Thêm padding để tách nút toggle và menu
        }}
      >
        <div className="demo-logo" />
        <Button type="text" onClick={toggleMenu}>
          <MenuOutlined />
        </Button>
        <Switch onChange={toggleTheme} />{" "}
        {/* Toggle switch để chuyển đổi theme */}
      </Header>
      <Layout>
        <Sider
          width={200}
          collapsible // Thêm thuộc tính collapsible để có thể ẩn/hiện Sider
          collapsed={menuCollapsed} // Trạng thái ẩn/hiện của Sider
          onCollapse={setMenuCollapsed} // Callback khi ẩn/hiện Sider
          style={{
            background: colorBgContainer,
            minHeight: "calc(100vh - 64px)", // Chiều cao cố định cho Sider, trừ đi chiều cao của Header (64px)
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "60%",
              borderRight: 0,
            }}
            items={items}
            theme={themeMode === "dark" ? "dark" : "light"} // Áp dụng theme cho Sider
            onClick={handleMenuClick} // Xử lý sự kiện click vào menu
          />
        </Sider>
        <Layout
          style={{
            padding: "0 24px 24px",
          }}
        >
          <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: "60%", // Chiếm 5/12 chiều cao màn hình
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {showFormBus ? (
              <FormBus />
            ) : showCardBus ? (
              <CardBus />
            ) : userInfo ? (
              <InformationBus userInfo={userInfo} />
            ) : (
              <Title level={3}>Nội dung</Title>
              // Hiển thị nội dung phần Content khi không hiển thị FormBus, CardBus và InformationBus
            )}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MenuBus;
