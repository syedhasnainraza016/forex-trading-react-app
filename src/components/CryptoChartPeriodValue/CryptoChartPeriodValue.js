import React from 'react'
import './CryptoChartPeriodValue.css'

export default function CryptoChartPeriodValue({
    id,
    text,
    mode,
    setMode,
    setHistoLimit,
    labelsObj,
    setLabels,
}) {
    return (
        <div
            className={
                mode === id
                    ? 'CryptoChartPeriodValue CryptoChartPeriodValue-active'
                    : 'CryptoChartPeriodValue'
            }
            onClick={() => {
                setMode(id)
                if (id === 0) {
                    setHistoLimit({ histo: 'minute', limit: '60' })
                    setLabels(labelsObj.hour)
                } else if (id === 1) {
                    setHistoLimit({ histo: 'hour', limit: '24' })
                    setLabels(labelsObj.day)
                } else if (id === 2) {
                    setHistoLimit({ histo: 'day', limit: '7' })
                    setLabels(labelsObj.week)
                } else if (id === 3) {
                    setHistoLimit({ histo: 'day', limit: '30' })
                    setLabels(labelsObj.month)
                } else {
                    setHistoLimit({ histo: 'day', limit: '365' })
                    setLabels(labelsObj.year)
                }
            }}
        >
            {text}
        </div>
    )
}
