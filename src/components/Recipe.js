import React, { Component } from 'react'
import EditRecipe from './EditRecipe'

class Recipe extends Component {
  constructor() {
    super()
    this.state = {
      editRecipe: false,
    }
    this.showEditor = this.showEditor.bind(this)
    this.hideEditor = this.hideEditor.bind(this)
  }

  showEditor() {
    this.setState({ editRecipe: true })
  }

  hideEditor() {
    this.setState({ editRecipe: false })
  }

  render() {
    const { id, title, image, ingredients, instructions } = this.props.data
    return (
      <div>
        <div className={
          this.state.editRecipe ? "hide-recipe" : "show-recipe"}>
          <div className='recipe-title'>
            <div className='title'>{title}</div>
            <div className="action">
              <button className='action-btn' onClick={() =>
                this.showEditor()}>Edit</button>
              <button className='action-btn' onClick={() => this.props.deleteRecipe(id)}>Remove</button>
            </div>
          </div>

          <div className='recipe-info'>
            <img src={image} alt={title} />
            <div className='ingredients'><b>Ingredients:</b> <br />{ingredients}</div>
            <div className='instructions'><b>Instructions:</b> <br />{instructions}</div>
          </div>
        </div >
        <div className={
          this.state.editRecipe ? "display-editor" : "hide-editor"} >
          <EditRecipe
            data={this.props.data}
            editRecipe={this.props.editRecipe}
            hideEditor={this.hideEditor} />
        </div>
      </div>
    )
  }
}


export default Recipe
