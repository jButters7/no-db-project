import React, { Component } from 'react'

class InputRecipe extends Component {
  constructor() {
    super()

    this.state = {
      title: '',
      image: '',
      ingredients: '',
      instructions: '',
    }
    this.handleNewRecipe = this.handleNewRecipe.bind(this)
    this.sendRecipe = this.sendRecipe.bind(this)
  }

  handleNewRecipe(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendRecipe() {
    const { title, image, ingredients, instructions } = this.state
    const newRecipe = { title, image, ingredients, instructions }
    console.log(newRecipe)
    this.props.addRecipe(newRecipe)
    this.setState({
      title: '',
      image: '',
      ingredients: '',
      instructions: '',
    })
  }

  render() {
    const { title, image, ingredients, instructions } = this.state
    return (
      <div className="input-container" id="add-recipe">
        <input value={title} type='text' onChange={e => this.handleNewRecipe(e)} placeholder="Recipe Title" name="title" className="input-title"></input>
        <input value={image} type='text' onChange={e => this.handleNewRecipe(e)} placeholder="Image URL" name="image" className="input-image"></input>
        <textarea value={ingredients} type='text' onChange={e => this.handleNewRecipe(e)} placeholder="Ingredients" name="ingredients" className="input-ingredients"></textarea>
        <textarea value={instructions} type='text' onChange={e => this.handleNewRecipe(e)} placeholder="Instructions" name="instructions" className="input-instructions" size='40' line-height='60px'></textarea>
        <button onClick={this.sendRecipe} className="submit-btn">Add Recipe</button>
      </div>
    )
  }
}

export default InputRecipe