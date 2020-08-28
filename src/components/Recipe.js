import React from 'react'
import EditRecipe from './EditRecipe'

const Recipe = props => {
  const { id, title, image, ingredients, instructions } = props.data
  return (
    <div>
      <img src={image} alt={title} />
      <div>{title}</div>
      <div>{ingredients}</div>
      <div>{instructions}</div>
      <button>Edit</button>
      <button onClick={() => props.deleteRecipe(id)}>Remove</button>

      <EditRecipe data={props.data} editRecipe={props.editRecipe} />

    </div >
  )
}

export default Recipe