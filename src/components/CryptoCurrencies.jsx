import { useEffect, useState, useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import millify from "millify"
import { Link } from "react-router-dom"
import { Card, Row, Col, Input } from "antd"
import { fetchCryptoCoins } from "../redux/cryptoCoins/cryptoCoins.thunk"
import { searchCryptoCoins } from "../redux/cryptoCoins/cryptoCoins.action"



const CryptoCurrencies = ({ simplified }) => {
    const dispatch = useDispatch()
    const cryptoList = useSelector(state => state?.cryptoCoins?.cryptoCoins?.coins)
    const filteredCryptoList = useSelector(state => state?.cryptoCoins?.filteredCryptoList)

    const [searchTerm, setSearchTerm] = useState("")


    const debounce = (func) => {
        let timer
        return function (...args) {
            const context = this;

            if (timer) clearTimeout(timer)

            timer = setTimeout(() => {
                timer = null
                func.apply(context, args)
            }, 700);
        }
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }


    const optimizeVersion = useCallback(debounce(handleChange), [])

    useEffect(() => {
        const count = simplified ? 10 : 100;
        dispatch(fetchCryptoCoins(count))
    }, [])

    useEffect(() => {
        dispatch(searchCryptoCoins(searchTerm))
    }, [searchTerm, cryptoList])

    return (
        <>
            {
                !simplified &&
                <div className="search-crypto">
                    <Input placeholder="Search Crypto Currency" onChange={optimizeVersion} />
                </div>
            }
            <Row gutter={[32, 32]} className="crypto-card-container">
                {
                    filteredCryptoList &&
                    filteredCryptoList.map(item =>
                        <Col xs={24} sm={12} lg={6} className="crypto-card" key={item.uuid}>
                            <Card title={`${item.rank}. ${item.name}`} extra={<img className="crypto-image" src={item.iconUrl} alt={item.name} />} hoverable>
                                <p>Price: {millify(item.price)} $</p>
                                <p>Market Cap: {millify(item.marketCap)}</p>
                                <p>Daily Change: {millify(item.change)}%</p>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </>
    );
};

export default CryptoCurrencies;
