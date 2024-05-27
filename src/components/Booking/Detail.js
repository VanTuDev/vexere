import React, { useState, useEffect } from 'react';
import Seat from './Seat/Seat';
import Wheel from './Seat/Wheel';
import SeatSelect from './Seat/SeatSelect';
import SeatBooked from './Seat/SeatBooked';
import LoadingSpin from '../Loading/LoadingSpin';
import { Card } from 'antd';
import './Detail.css';

const Detail = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [dateTime, setDateTime] = useState('');
    const [selectedSeats, setSelectedSeats] = useState({}); // State to track selected seats

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setIsLoading(false);
            const today = new Date();
            const date = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
            const time = `${today.getHours()}:${String(today.getMinutes()).padStart(2, '0')}:${String(today.getSeconds()).padStart(2, '0')}`;
            setDateTime(`${date} ${time}`);
        }, 2000);
    }, []);

    const handleSeatClick = (key) => {
        setSelectedSeats(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    const renderFloor = () => {
        const rows = 4; // Set number of rows to 4
        const cols = 3; // Set number of columns to 3
        const floor = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols; col++) {
                const key = `${row}-${col}`;
                if ((row === 1 || row === 2) && col === 1) {
                    seatRow.push(
                        <td
                            key={key}
                            className="Seat__SeatContainer-sc-6hr0u8-0 buebkj seat-container"
                            data-disabled="true"
                            disabled=""
                        ></td>
                    );
                } else {
                    const isSelected = selectedSeats[key];
                    seatRow.push(
                        <td
                            key={key}
                            className="seat"
                            onClick={() => handleSeatClick(key)}
                        >
                            {isSelected ? <SeatSelect /> : <Seat />}
                        </td>
                    );
                }
            }
            floor.push(<tr key={`row-${row}`} className="coach-row">{seatRow}</tr>);
        }

        return (
            <div className="coach-container">
                <div className="coach">
                    <table>
                        <tbody>
                            <tr className="coach-row">
                                <td className="seat">
                                    <Wheel />
                                </td>
                                <td
                                    className="seat"
                                    onClick={() => handleSeatClick('0-1')}
                                >
                                    {selectedSeats['0-1'] ? <SeatSelect /> : <Seat />}
                                </td>
                                <td
                                    className="seat"
                                    onClick={() => handleSeatClick('0-2')}
                                >
                                    {selectedSeats['0-2'] ? <SeatSelect /> : <Seat />}
                                </td>
                            </tr>
                            {floor}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <>
            <Card>
                {isLoading ? (
                    <LoadingSpin />
                ) : (
                    <>
                        <div className="TrustMessage__Container-sc-8xur6b-0 deVKGv trust-message-container undefined" style={{ color: 'rgb(14, 99, 193)' }}>
                            <p className="base__Body02-sc-1tvbuqk-14 VqdXU trust-message-content">VeXeRe cam kết giữ đúng vị trí bạn đã chọn.</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="list-seat flex" style={{ width: '80%' }}>
                                <div className="seat-groups">
                                    <div className="note text-base font-bold">
                                        Chú thích
                                    </div>
                                    <div className="seat-info">
                                        <div className="seat-thumbnail">
                                            <Seat />
                                        </div>
                                        <span className="seat-name">Còn trống</span>
                                    </div>
                                    <div className="seat-info">
                                        <div className="seat-thumbnail" disabled>
                                            <SeatBooked />
                                        </div>
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
                                <div className="seat-template flex justify-center items-center">{renderFloor()}</div>
                            </div>
                        </div>
                        <p>Current date and time: {dateTime}</p>
                    </>
                )}
            </Card>
        </>
    );
};

export default Detail;
