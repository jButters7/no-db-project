import React from 'react'

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
    </div >
  )
}

export default Recipe