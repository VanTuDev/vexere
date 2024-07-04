import React, { useState, useEffect } from "react";
import Seat from "./Seat/Seat";
import Wheel from "./Seat/Wheel";
import SeatSelect from "./Seat/SeatSelect";
import SeatBooked from "./Seat/SeatBooked";
import Loading from "../Loading/Loading";
import { Card, Progress, Tooltip, Button, Statistic } from "antd";
import "./Detail.css";

const Detail = ({ item }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dateTime, setDateTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // Simulate data loading
    setTimeout(() => {
      const today = new Date();
      const date = `${today.getFullYear()}-${String(
        today.getMonth() + 1
      ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;
      const time = `${today.getHours()}:${String(today.getMinutes()).padStart(
        2,
        "0"
      )}:${String(today.getSeconds()).padStart(2, "0")}`;
      setDateTime(`${date} ${time}`);
      setIsLoading(false);
    }, 2000);
  }, []);

  const handleSeatClick = (key) => {
    setSelectedSeats((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const renderSeats = (rows, cols, floorNumber = 0) => {
    const floor = [];
    for (let row = 0; row < rows; row++) {
      const seatRow = [];
      for (let col = 0; col < cols; col++) {
        const key = `${floorNumber}-${row}-${col}`;
        const isSelected = selectedSeats[key];
        seatRow.push(
          <td key={key} className="seat" onClick={() => handleSeatClick(key)}>
            {isSelected ? <SeatSelect /> : <Seat />}
          </td>
        );
      }
      floor.push(
        <tr key={`row-${floorNumber}-${row}`} className="coach-row">
          {seatRow}
        </tr>
      );
    }
    return floor;
  };

  const renderFloor = () => {
    let floorContent;
    switch (parseInt(item.seat)) {
      case 16:
        floorContent = (
          <table>
            <tbody>{renderSeats(4, 4)}</tbody>
          </table>
        );
        break;
      case 30:
        floorContent = (
          <>
            <h4>Tầng 1</h4>
            <table>
              <tbody>{renderSeats(5, 3, 1)}</tbody>
            </table>
            <h4>Tầng 2</h4>
            <table>
              <tbody>{renderSeats(5, 3, 2)}</tbody>
            </table>
          </>
        );
        break;
      default:
        floorContent = <p>Loại xe không xác định</p>;
    }

    return (
      <div className="coach-container">
        <div className="coach">
          <td><Wheel /></td>
          <table>
            <tbody>
              <tr className="coach-row"></tr>
              {Array.isArray(floorContent) ? (
                floorContent
              ) : (
                <tr>
                  <td>{floorContent}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };

  const getProgressPercent = (step) => {
    switch (step) {
      case 2:
        return 33;
      case 3:
        return 66;
      case 4:
        return 100;
      default:
        return 0;
    }
  };

  const { Countdown } = Statistic;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="app-container">
            <div className="steps-container">
              <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                1. Chọn chỗ ngồi
              </div>
              <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                2. Điểm đón trả
              </div>
              <div className={`step ${currentStep === 3 ? "active" : ""}`}>
                3. Thanh toán
              </div>
            </div>
            <Tooltip>
              <Progress percent={getProgressPercent(currentStep)} />
            </Tooltip>
            <div className="buttons-container">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={currentStep === 1 ? "disabled" : ""}
              >
                Quay lại
              </button>
              <button
                onClick={handleNext}
                disabled={currentStep === 4}
                className={currentStep === 4 ? "disabled" : ""}
              >
                Tiếp
              </button>
            </div>
          </div>
          <div
            className="TrustMessage__Container-sc-8xur6b-0 deVKGv trust-message-container undefined"
            style={{ color: "rgb(14, 99, 193)" }}
          >
            <p className="base__Body02-sc-1tvbuqk-14 VqdXU trust-message-content">
              VeXeRe cam kết giữ đúng vị trí bạn đã chọn.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="list-seat flex">
              <div className="seat-groups">
                <div className="note text-base font-bold">Chú thích</div>
                <div className="seat-info">
                  <Tooltip title="250.000đ">
                    <div className="seat-thumbnail">
                      <Seat />
                    </div>
                  </Tooltip>
                  <span className="seat-name">Còn trống</span>
                </div>
                <div className="seat-info">
                  <Tooltip title="Không chọn ghế này">
                    <div className="seat-thumbnail" disabled>
                      <SeatBooked />
                    </div>
                  </Tooltip>
                  <span className="seat-name">Ghế đã được đặt</span>
                </div>
                <div className="seat-info">
                  <div className="seat-thumbnail">
                    <SeatSelect />
                  </div>
                  <span className="seat-name">Ghế Đang chọn</span>
                </div>
                <div />
              </div>
              <div className="seat-template flex justify-center items-center">
                {renderFloor()}
              </div>
            </div>
          </div>
          <div className="countdown d-flex align-items-center">
            <h4 className="me-3">Thời gian còn lại để chọn chỗ:</h4>
            <Countdown value={Date.now() + 900000} format="mm:ss" />
          </div>
          {/* 
          {item && (
            <div className="selected-trip-info">
              <h3>Thông tin chuyến đã chọn:</h3>
              <p>Tên chuyến: {item.title}</p> <p> {item.decription}</p>
              <p>Giá ghế: {item.price}</p>
              <p>Ngày: {item.date}</p>
              <p>Giờ đi: {item.time1}</p>
              <p>Điểm đón: {item.location1} </p>
              <p>Điểm trả: {item.location2} </p>
            </div>
          )} */}
        </>
      )}
    </>
  );
};

export default Detail;
