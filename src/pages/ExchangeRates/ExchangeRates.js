import React, { useState, useEffect } from 'react'
import './ExchangeRates.css'
import Exchange from '../../components/Exchange/Exchange'
import CryptoChart from '../../components/CryptoChart/CryptoChart'

export default function ExchangeRates() {
    const [crypto, setCrypto] = useState('BTC')
    const [fiat, setFiat] = useState('USD')
    const [resultValue, setResultValue] = useState()

    useEffect(() => {
        fetch(
            `https://min-api.cryptocompare.com/data/price?fsym=${crypto}&tsyms=${fiat}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
        )
            .then((res) => res.json())
            .then((data) => setResultValue(data[fiat]))
    }, [crypto, fiat])

    return (
        <div className="ExchangeRates">
            <Exchange setCrypto={setCrypto} setFiat={setFiat} />
            <CryptoChart
                resultValue={resultValue}
                crypto={crypto}
                fiat={fiat}
            />
        </div>
    )
}
