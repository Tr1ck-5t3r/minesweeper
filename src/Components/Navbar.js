import "./Navbar.css"
import '../Assets/mine-logo.png'
import React from 'react'

function Navbar() {
  return (
    <div className="nav">
      <div className="heading">
        <h2>Minesweeper</h2>
        <img src={require('../Assets/mine-logo.png')}
         className="mine-logo" alt="mine-logo" />
      </div>
        <div className="links">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Game</h4>
          <h4>Contact</h4>
        </div>
      <button>Login</button>
    </div>
  )
}

export default Navbar
