import React, { useState } from 'react';
import { Card, Button } from 'antd';
import Detail from './Detail';
import Loading from '../Loading/Loading';
import './ListTrip.css';

const trips = [
    { id: 1, name: 'Trip 1', date: '2024-06-01', time: '08:00', seat: "7" },
    { id: 2, name: 'Trip 2', date: '2024-06-02', time: '09:00', seat: "7" },
    { id: 3, name: 'Trip 3', date: '2024-06-03', time: '10:00', seat: "16" },
    { id: 4, name: 'Trip 4', date: '2024-06-04', time: '11:00', seat: "30" },
    { id: 5, name: 'Trip 5', date: '2024-06-05', time: '12:00', seat: "30" }
];

const ListTrip = () => {
    const [selectedTrip, setSelectedTrip] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleDetailClick = (trip) => {
        if (selectedTrip === trip) {
            setSelectedTrip(null);
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setSelectedTrip(trip);
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <div className="trip-list">
            <Loading isLoading={isLoading} />
            {trips.map((trip) => (
                <Card
                    key={trip.id}
                    className="trip-card"
                    style={{ width: 'auto', marginBottom: 16 }}
                >
                    <h3>{trip.name}</h3>
                    <p>{trip.date} {trip.time}</p>
                    <button onClick={() => handleDetailClick(trip)}>
                        {selectedTrip === trip ? 'Đóng' : 'Chọn chuyến'}
                    </button>
                    {selectedTrip === trip && !isLoading && (
                        <div className="trip-details">
                            <Detail trip={selectedTrip} />
                        </div>
                    )}
                </Card>
            ))}
        </div>
    );
};

export default ListTrip;
