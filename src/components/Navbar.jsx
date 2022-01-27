import React from 'react';
import {Button, Menu, Typography, Avatar} from "antd";
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

import icon from "../img/cryptocurrency.png"

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <div className="logo-main">
                    <Avatar src={icon} size="large"/>
                    <Typography.Title level={2} className="logo">
                        <Link to="/">CryptoVerse</Link>
                    </Typography.Title>
                </div>
                <Menu theme="dark" style={{width: "100%"}}>
                    <Menu.Item icon={<HomeOutlined/>}>
                        <Link to="/">
                            Home
                        </Link>
                    </Menu.Item>

                    <Menu.Item icon={<FundOutlined/>}>
                        <Link to="/crypto-currencies">
                            Crypto Currencies
                        </Link>
                    </Menu.Item>

                    <Menu.Item icon={<MoneyCollectOutlined/>}>
                        <Link to="/exchanges">
                            Exchanges
                        </Link>
                    </Menu.Item>

                    <Menu.Item icon={<BulbOutlined/>}>
                        <Link to="/news">
                            News
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    );
};

export default Navbar;
