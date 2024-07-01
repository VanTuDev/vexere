import React from "react";
import { Tabs, theme } from "antd";
import StickyBox from "react-sticky-box";

const voucherContent = (
  <div className=" grid grid-rows-2 grid-flow-col gap-4 p-1 justify-center gap-x-20 ">
    <div className="w-full bg-green-100 p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold text-green-800">Giảm 20% tối đa 250K</h2>
      <p className="text-green-700">Áp dụng cho tất cả các chuyến đi.</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Nhận mã
      </button>
    </div>
    <div className="w-full bg-green-100 p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold text-green-800">Giảm 20% tối đa 250K</h2>
      <p className="text-green-700">Áp dụng cho tất cả các chuyến đi.</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Nhận mã
      </button>
    </div>
    <div className="w-full bg-green-100 p-4 rounded-lg shadow-lg mb-4">
      <h2 className="text-xl font-bold text-green-800">Giảm 20% tối đa 250K</h2>
      <p className="text-green-700">Áp dụng cho tất cả các chuyến đi.</p>
      <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Nhận mã
      </button>
    </div>
  </div>
);

const pickupContent = (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Điểm đón và trả khách</h2>
    <ul className="list-disc list-inside">
      <li>Điểm đón: 123 Đường ABC, Quận 1, TP. HCM</li>
      <li>Điểm trả: 456 Đường XYZ, Quận 5, TP. HCM</li>
      <li>Điểm đón: 789 Đường DEF, Quận 3, TP. HCM</li>
      <li>Điểm trả: 101 Đường GHI, Quận 2, TP. HCM</li>
    </ul>
  </div>
);

const reviewsContent = (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Nhận xét & Đánh giá</h2>
    <div className="mb-4">
      <p className="font-semibold">Nguyễn Văn A</p>
      <p>Chuyến đi rất thoải mái và tài xế rất thân thiện.</p>
    </div>
    <div className="mb-4">
      <p className="font-semibold">Trần Thị B</p>
      <p>Dịch vụ tốt, xe sạch sẽ và tiện nghi.</p>
    </div>
  </div>
);

const imagesContent = (
  <div className="p-4 grid grid-cols-2 gap-4">
    <img
      src="https://via.placeholder.com/150"
      alt="Image 1"
      className="rounded-lg shadow-lg"
    />
  </div>
);

const amenitiesContent = (
  <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Tiện ích & Dịch vụ</h2>
    <ul className="list-disc list-inside">
      <li>Wi-Fi miễn phí</li>
      <li>Điều hòa không khí</li>
      <li>Nước uống miễn phí</li>
      <li>Ghế ngả êm ái</li>
    </ul>
  </div>
);

const TabCard = ({ data }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const renderTabBar = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );

  return (
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <Tabs.TabPane tab="Ưu đãi & Giảm giá" key="voucher" className="">
        {voucherContent}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Điểm đón và trả khách" key="pickup">
        {pickupContent}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Nhận xét & Đánh giá" key="reviews">
        {reviewsContent}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Thư viện Hình ảnh" key="images">
        {imagesContent}
      </Tabs.TabPane>
      <Tabs.TabPane tab="Tiện ích & Dịch vụ" key="amenities">
        {amenitiesContent}
      </Tabs.TabPane>
    </Tabs>
  );
};

export default TabCard;
