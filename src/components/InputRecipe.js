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
      <div className="input" id="add-recipe">
        <input value={title} onChange={e => this.handleNewRecipe(e)} placeholder="Title" name="title"></input>
        <input value={image} onChange={e => this.handleNewRecipe(e)} placeholder="Image" name="image"></input>
        <input value={ingredients} onChange={e => this.handleNewRecipe(e)} placeholder="Ingredients" name="ingredients"></input>
        <input value={instructions} onChange={e => this.handleNewRecipe(e)} placeholder="Instructions" name="instructions"></input>
        <button onClick={this.sendRecipe}>Add Recipe</button>
      </div>
    )
  }
}

export default InputRecipe