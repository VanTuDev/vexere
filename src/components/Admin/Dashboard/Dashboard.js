import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Switch, ConfigProvider } from 'antd';
import User from '../User/User';
import Bus from '../Bus/bus';
import Files from '../Files/files';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    { key: '1', icon: <UserOutlined />, label: 'Người dùng', component: <User /> },
    { key: '2', icon: <TeamOutlined />, label: 'Nhà xe', component: <Bus /> },
    { key: '3', icon: <FileOutlined />, label: 'Files', component: <Files /> },
];

function Dashboard() {
    const [themeType, setThemeType] = useState('light');
    const [current, setCurrent] = useState('1');
    const changeTheme = (value) => {
        setThemeType(value ? 'dark' : 'light');
    };
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const [collapsed, setCollapsed] = useState(false);

    const onItemClick = ({ key }) => {
        setCurrent(key);
    };

    const renderBreadcrumb = () => {
        const selectedItem = items.find(item => item.key === current);
        if (selectedItem) {
            return (
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>{selectedItem.label}</Breadcrumb.Item>
                </Breadcrumb>
            );
        } else {
            return (
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
            );
        }
    };

    const renderContent = () => {
        const selectedItem = items.find(item => item.key === current);
        return selectedItem ? selectedItem.component : null;
    };

    return (
        <>
            <Switch
                checked={themeType === 'dark'}
                onChange={changeTheme}
                checkedChildren="Dark"
                unCheckedChildren="Light"
            />
            <ConfigProvider
                theme={{
                    token: {
                        colorBgContainer: themeType === 'dark' ? '#001529' : '#ffffff'
                    },
                }}
            />
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                    theme={themeType}
                >
                    <div className="demo-logo-vertical" />
                    <Menu
                        theme={themeType}
                        defaultSelectedKeys={['1']}
                        mode="inline"
                        onClick={onItemClick}
                    >
                        {items.map(item => (
                            <Menu.Item key={item.key} icon={item.icon}>
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Sider>
                <Layout>
                    <Content style={{ margin: '0 16px' }}>
                        {renderBreadcrumb()}
                        <div
                            style={{
                                padding: 24,
                                minHeight: 360,
                                borderRadius: 8,
                            }}
                        >
                            {renderContent()}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Vesiure ©{new Date().getFullYear()} Created by Team
                    </Footer>
                </Layout>
            </Layout>

        </>
    );

}
export default Dashboard;