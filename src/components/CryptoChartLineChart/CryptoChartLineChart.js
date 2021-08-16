import React from 'react'
import './CryptoChartLineChart.css'
import { Line } from 'react-chartjs-2'

export default function CryptoChartLineChart({ labels, data }) {
    return (
        <div className="CryptoChartLineChart">
            <Line
                data={{
                    labels: labels,
                    datasets: [
                        {
                            label: '',
                            data: data,
                            fill: false,
                            borderColor: '#00A8CC',
                            tension: 0.1,
                            borderWidth: 3,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        legend: {
                            display: false,
                        },
                        tooltip: {
                            enabled: false,
                        },
                    },
                }}
            />
        </div>
    )
}
