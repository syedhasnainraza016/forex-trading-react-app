import React from 'react'
import './HeaderLogo.css'

export default function HeaderLogo() {
    return (
        <div className="HeaderLogo">
            <p className="HeaderLogo__title">
                Code Name: <span className="text-accent">C</span>
                rypto
            </p>
            <p className="HeaderLogo__subtitle">
                current <span className="text-accent">c</span>rypto exchange
                rates
            </p>
        </div>
    )
}
