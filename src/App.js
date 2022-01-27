import React from 'react';
import {Switch, Route, Link} from "react-router-dom";
import {Layout, Typography, Space} from "antd";

import {Navbar, HomPage, Exchanges, CryptoCurrencies, News, CryptoDetails} from "./components";


function App() {
    return (
        <div className="app">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <HomPage/>
                            </Route>

                            <Route exact path="/exchanges">
                                <Exchanges/>
                            </Route>

                            <Route exact path="/crypto-currencies">
                                <CryptoCurrencies/>
                            </Route>

                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>

                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>

                <div className="footer">
                    <Typography.Title level={5} style={{color: "#fff", textAlign: "center"}}>
                        CryptoVerse <br/>
                        All rights reserved
                    </Typography.Title>
                    <Space>
                        <Link to={"/"}>Home</Link>
                        <Link to={"/exchanges"}>Exchanges</Link>
                        <Link to={"/news"}>News</Link>
                    </Space>
                </div>
            </div>
        </div>
    );
}

export default App;
