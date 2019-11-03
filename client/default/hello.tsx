import * as React from "react";
import { DatePicker, Layout, Menu, Breadcrumb } from 'antd';
import Header from 'antd/lib/layout/layout';
import Footer from 'antd/lib/layout/layout';
import Content from 'antd/lib/layout/layout';
import Sider from "antd/lib/layout/Sider";
// const { Layout, Menu, Breadcrumb } = antd;

// const { Header, Content, Footer } = Layout;

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <div>
    <DatePicker >Pick the date</DatePicker>
    <h1>Hello from {props.compiler} and {props.framework}!</h1>
    <Layout className="layout">
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
</div>;