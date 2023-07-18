import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

const { Sider, Content } = Layout;

const Navigation = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={["home"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<UserOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="contact" icon={<MailOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Navigation;
