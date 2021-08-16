import React from 'react'
import './ExchangeButton.css'

export default function ExchangeButton({ options, setValue }) {
    return (
        <select
            className="ExchangeButton"
            onChange={(e) => {
                setValue(e.target.value)
            }}
        >
            {options.map((option) => (
                <option
                    className="ExchangeButton__option"
                    key={option.id}
                    value={option.value}
                >
                    {option.text}
                </option>
            ))}
        </select>
    )
}
