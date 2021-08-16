import React from 'react'
import './HeaderNavItem.css'

export default function HeaderNavItem({ id, text, mode, setMode }) {
    return (
        <div
            className={
                mode === id
                    ? 'HeaderNavItem HeaderNavItem-active'
                    : 'HeaderNavItem'
            }
            onClick={() => setMode(id)}
        >
            {text}
        </div>
    )
}
