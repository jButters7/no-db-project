import React, { Component } from 'react'
import Recipe from './Recipe'
import axios from 'axios';

class Display extends Component {
  constructor() {
    super();

    this.state = {
      recipes: []
    }

    this.addRecipe = this.addRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  componentDidMount() {
    axios.get('/api/recipes').then(res => {
      console.log(res.data)
      this.setState({
        recipes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  addRecipe(title, image, ingredients, instructions) {
    axios.post('/api/recipes', { title, image, ingredients, instructions }).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  editRecipe(id, title, image, ingredients, instructions) {
    axios.put(`/api/recipes/${id}`, { title, image, ingredients, instructions }).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  deleteRecipe(id) {
    console.log('delete function id', id)
    axios.delete(`/api/recipes/${id}`).then(res => {
      this.setState({
        recipes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }



  render() {
    return (
      <div>
        <div>

          <input placeholder="Title"></input>
          <input placeholder="Image"></input>
          <input placeholder="Ingredients"></input>
          <input placeholder="Instructions"></input>
          <button>Submit</button>

        </div>
        {this.state.recipes.map((element) => {
          return (
            <Recipe key={element.id} data={element} deleteRecipe={this.deleteRecipe} edit={this.editRecipe} />
          )
        })}
      </div>
    )
  }
}

export default Display