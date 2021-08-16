import React from 'react'
import HeaderLogo from '../HeaderLogo/HeaderLogo'
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem'
import './Header.css'

export default function Header({ mode, setMode }) {
    return (
        <header className="Header">
            <div className="container">
                <div className="Header__container">
                    <HeaderLogo />
                    <nav className="Header__navbar">
                        <HeaderNavItem
                            id={0}
                            text="Exchange Rates"
                            mode={mode}
                            setMode={setMode}
                        />
                        <HeaderNavItem
                            id={1}
                            text="Cryptocurrency News"
                            mode={mode}
                            setMode={setMode}
                        />
                    </nav>
                </div>
            </div>
        </header>
    )
}
