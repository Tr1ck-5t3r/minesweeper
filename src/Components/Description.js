import React from 'react'
import './Description.css'
import '../Assets/minesweeper-illustration.png'
function Description() {
  return (
    <div className='Description'>
      <div class="article">
        <h1>How to play</h1>
        <br/>
        <br/>
        <p>
          The goal of the game is to clear all the squares without detonating any
          of the mines. To clear a square, click on it. If you click on a mine, the
          game is over. If you click on a number, it will tell you how many mines
          are in the eight surrounding squares. To mark a square you think is a
          mine, right-click on it. You can mark up to the number of mines in the
          surrounding squares. If you mark all the mines in a group of squares,
          they will all be cleared. If you clear all the squares without detonating
          any of the mines, you win!
        </p>
      </div>
      <img src={require('../Assets/minesweeper-illustration.png')} alt='Minesweeper'></img>
    </div>
  )
}

export default Description
