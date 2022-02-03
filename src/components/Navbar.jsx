import { useEffect, useState } from 'react';
import { Button, Menu, Typography, Avatar } from "antd";
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import icon from "../img/cryptocurrency.png"

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className="nav-container">
            <div className="logo-container">
                <div className="logo-main">
                    <Avatar src={icon} size="large" />
                    <Typography.Title level={2} className="logo">
                        <Link to="/">CryptoVerse</Link>
                    </Typography.Title>
                    <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}>
                        <MenuOutlined />
                    </Button>
                </div>
                {
                    activeMenu && (<Menu theme="dark" style={{ width: "100%" }}>
                        <Menu.Item icon={<HomeOutlined />}>
                            <Link to="/">
                                Home
                            </Link>
                        </Menu.Item>

                        <Menu.Item icon={<FundOutlined />}>
                            <Link to="/crypto-currencies">
                                Crypto Currencies
                            </Link>
                        </Menu.Item>

                        <Menu.Item icon={<BulbOutlined />}>
                            <Link to="/news">
                                News
                            </Link>
                        </Menu.Item>
                    </Menu>)
                }

            </div>
        </div>
    );
};

export default Navbar;
