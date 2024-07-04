import { Table } from 'antd';
import React from 'react'

function User() {
    return (
        <>
            <Table dataSource={dataSource} columns={columns} />;
        </>
    )
}

const dataSource = [
    {
        key: '1',
        name: 'Mike',
        dob: '2001-09-03',
        phone: '1234567890',
        email: 'mikeNu1@gmail.com',
        gender: 'nam'
    },
    {
        key: '2',
        name: 'Sarah',
        dob: '1995-07-15',
        phone: '9876543210',
        email: 'sarah.smith@example.com',
        gender: 'nữ'
    },
    {
        key: '3',
        name: 'John',
        dob: '1988-03-20',
        phone: '5551234567',
        email: 'john.doe@example.com',
        gender: 'nam'
    }
];

const columns = [
    {
        title: 'Tên',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Ngày sinh',
        dataIndex: 'dob',
        key: 'dob',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Giới tính',
        dataIndex: 'gender',
        key: 'gender',
    }
];
export default User
