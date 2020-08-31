import React, { Component } from 'react'


class EditRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.data.id,
      title: props.data.title,
      image: props.data.image,
      ingredients: props.data.ingredients,
      instructions: props.data.instructions
    }
    this.handleEditRecipe = this.handleEditRecipe.bind(this)
    this.sendEdits = this.sendEdits.bind(this)
  }

  handleEditRecipe(e) {
    console.log(e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendEdits() {
    const { id, title, image, ingredients, instructions } = this.state
    const editedRecipe = { title, image, ingredients, instructions }
    console.log(editedRecipe)
    this.props.editRecipe(id, editedRecipe)
    this.props.hideEditor()
  }

  render() {
    const { title, image, ingredients, instructions } = this.state
    return (
      <div className='input-container input-recipe'>
        <input value={title} onChange={e => this.handleEditRecipe(e)} placeholder="Title" name="title" className="input-title"></input>
        <input value={image} onChange={e => this.handleEditRecipe(e)} placeholder="Image URL" name="image" className="input-image"></input>
        <textarea value={ingredients} onChange={e => this.handleEditRecipe(e)} placeholder="Ingredients" name="ingredients" className="input-ingredients"></textarea>
        <textarea value={instructions} onChange={e => this.handleEditRecipe(e)} placeholder="Instructions" name="instructions" className="input-instructions"></textarea>
        <button onClick={() => this.sendEdits(this.state)} className="submit-btn">Save Changes</button>
      </div>
    )
  }
}

export default EditRecipe