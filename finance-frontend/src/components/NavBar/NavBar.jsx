import React from 'react'

import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
            <div className="nav">
        <div className="container">
            <div className="btn">Chat</div>
            <div className="btn">Prices</div>
            <div className="btn">Budget Analyzer</div>
            <svg
            className="outline"
            overflow="visible"
            width="400"
            height="60"
            viewBox="0 0 400 60"
            xmlns="http://www.w3.org/2000/svg"
            >
            <rect
                className="rect"
                pathLength="100"
                x="0"
                y="0"
                width="400"
                height="60"
                fill="transparent"
                strokeWidth="5"
            ></rect>
            </svg>
        </div>
        </div>

    </div>
  )
}

export default NavBar
