import { useEffect } from "react";
import millify from "millify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";

import { fetchCryptoCoins } from "../redux/cryptoCoins/cryptoCoins.thunk";

import { CryptoCurrencies, News } from "../components"


const HomPage = () => {
    const dispatch = useDispatch()
    const globalStats = useSelector(state => state.cryptoCoins.cryptoCoins.stats)

    useEffect(() => {
        dispatch(fetchCryptoCoins(10))
    }, [])

    return (
        <>
            <Typography.Title level={2} className="heading">
                Global Crypto Stats
            </Typography.Title>
            {
                globalStats &&
                <Row>
                    <Col span={12}>
                        <Statistic title="Total Crypto Currencies" value={globalStats.total} />
                    </Col>

                    <Col span={12}>
                        <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
                    </Col>

                    <Col span={12}>
                        <Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} />
                    </Col>

                    <Col span={12}>
                        <Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} />
                    </Col>

                    <Col span={12}>
                        <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
                    </Col>
                </Row>
            }

            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">
                    Top 10 Crypto Currencies in the world
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/crypto-currencies">
                        Show More
                    </Link>
                </Typography.Title>
            </div>
            <CryptoCurrencies searchInput/>

            <div className="home-heading-container">
                <Typography.Title level={2} className="home-title">
                    Latest Crypto News
                </Typography.Title>
                <Typography.Title level={3} className="show-more">
                    <Link to="/news">
                        Show More
                    </Link>
                </Typography.Title>
            </div>
            <News/>
        </>
    );
};

export default HomPage;
