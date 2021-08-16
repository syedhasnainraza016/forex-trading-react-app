import React, { useState, useEffect } from 'react'
import './CryptoChart.css'
import {
    periodValues,
    labelsHour,
    labelsDay,
    labelsWeek,
    labelsMonth,
    labelsYear,
} from './definitions'
import CryptoChartPeriodValue from '../CryptoChartPeriodValue/CryptoChartPeriodValue'
import CryptoChartLineChart from '../CryptoChartLineChart/CryptoChartLineChart'

export default function CryptoChart({
    resultValue = 'Loading...',
    crypto,
    fiat,
}) {
    const labelsObj = {
        hour: labelsHour,
        day: labelsDay,
        week: labelsWeek,
        month: labelsMonth,
        year: labelsYear,
    }
    const [labels, setLabels] = useState(labelsObj.hour)

    const [mode, setMode] = useState(0)
    const [histoLimit, setHistoLimit] = useState({
        histo: 'minute',
        limit: '60',
    })
    const [priceArr, setPriceArr] = useState([])
    let helper = []
    const fetching = () => {
        fetch(
            `https://min-api.cryptocompare.com/data/v2/histo${histoLimit.histo}?fsym=${crypto}&tsym=${fiat}&limit=${histoLimit.limit}&api_key={b60442d7af5486b93c4301d0a95204ee0711ec95f4fc2f8b2379e68dc93590a3}`
        )
            .then((res) => res.json())
            .then((data) => {
                data.Data.Data.map((d) => helper.push(d.open))
                setPriceArr(helper)
            })
    }
    useEffect(() => {
        setPriceArr([])
        fetching()
    }, [mode, crypto, fiat])

    return (
        <div className="CryptoChart">
            <div className="CryptoChart__container">
                <div className="CryptoChart__header">
                    <div className="CryptoChart__result">
                        {crypto} ={' '}
                        <span className="text-white">{resultValue}</span> {fiat}
                    </div>
                    <div className="CryptoChart__period">
                        {periodValues.map((value) => (
                            <CryptoChartPeriodValue
                                key={value.id}
                                id={value.id}
                                text={value.text}
                                mode={mode}
                                setMode={setMode}
                                setHistoLimit={setHistoLimit}
                                labelsObj={labelsObj}
                                setLabels={setLabels}
                            />
                        ))}
                    </div>
                </div>
                <CryptoChartLineChart
                    mode={mode}
                    labels={labels}
                    data={priceArr}
                />
            </div>
        </div>
    )
}
