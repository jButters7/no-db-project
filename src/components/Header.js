import React from 'react'


function Header() {
  return (
    <div>
      <div className='header'>
        <header className='header-child'> Recipe Tracker </header>
        <div>
          {/* <input placeHolder="Search Recipes      &#128269; " className="search-recipes" /> */}
          <a href="#add-recipe" className='header-button'>Add Recipe</a>
        </div>
      </div>
    </div>
  )
}

export default Header