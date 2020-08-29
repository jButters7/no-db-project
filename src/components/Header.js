import React from 'react'


function Header() {
  return (
    <div>
      <div className='header'>
        <header className='header-child'> Recipe Tracker </header>
        <a href="#add-recipe" className='header-button'>Add Recipe</a>
      </div>
    </div>
  )
}

export default Header