import React from 'react'
import EditRecipe from './EditRecipe'

const Recipe = props => {
  const { id, title, image, ingredients, instructions } = props.data
  return (
    <div className='recipe-container'>
      <div className='recipe-title'>
        <div className='title'>{title}</div>
        <div className="action">
          <button className='action-btn'>Edit</button>
          <button className='action-btn' onClick={() => props.deleteRecipe(id)}>Remove</button>
        </div>
      </div>

      <div className='recipe-info'>
        <img src={image} alt={title} />
        <div className='ingredients'><b>Ingredients:</b> <br />{ingredients}</div>
        <div className='instructions'><b>Instructions:</b> <br />{instructions}</div>
      </div>
      <EditRecipe data={props.data} editRecipe={props.editRecipe} />

    </div >
  )
}

export default Recipe