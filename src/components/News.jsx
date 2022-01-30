import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select, Row, Col, Typography, Avatar, Card } from "antd"
import moment from "moment";
import { fetchCryptoNews } from "../redux/cryptoNews/cryptoNews.thunk";
import { fetchCryptoCoins } from "../redux/cryptoCoins/cryptoCoins.thunk";

const { Text, Title } = Typography
const { Option } = Select

const demoImageUrl = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg"

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState("Cryptocurrency")
    const dispatch = useDispatch()
    const cryptoNews = useSelector(state => state?.cryptoNews?.cryptoNews?.value)
    const cryptoList = useSelector(state => state?.cryptoCoins?.cryptoCoins?.coins)

    useEffect(() => {
        dispatch(fetchCryptoCoins(simplified ? 10 : 100))
    }, [cryptoList])

    useEffect(() => {
        dispatch(fetchCryptoNews(newsCategory, simplified ? 6 : 12))
    }, [newsCategory])



    return (
        <Row gutter={[24, 24]}>
            {!simplified &&
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        onChange={val => setNewsCategory(val)}
                        optionFilterProp="children"
                        filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                        <Option value="Cryptocurrency">Crypto Currency</Option>
                        {
                            cryptoList &&
                            cryptoList.map((item, index) =>
                                <Option value={item.name} key={index}>
                                    {item.name}
                                </Option>
                            )
                        }
                    </Select>
                </Col>
            }
            {
                cryptoNews &&
                cryptoNews?.map((item, index) =>
                    <Col xs={24} sm={12} lg={8} key={index}>
                        <Card hoverable className="news-card">
                            <a href={item.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className="news-title" level={4}>
                                        {item.name}
                                    </Title>
                                    <img style={{ maxWidth: "200px", maxHeight: "100px" }} src={item?.image?.thumbnail?.contentUrl || demoImageUrl} alt="news" />
                                </div>
                                <p>
                                    {
                                        item.description > 100 ? `${item.description.substring(0, 100)}...`
                                            : item.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={item.provider[0]?.image?.thumbnail?.contentUrl || demoImageUrl} alt="" />
                                        <Text className="provider-name">
                                            {item.provider[0].name}
                                        </Text>
                                    </div>
                                    <Text>
                                        {moment(item.datePublished).startOf("ss").fromNow()}
                                    </Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                )
            }
        </Row>
    );
};

export default News;
