import React, { Component } from 'react'
import Recipe from './Recipe'
import axios from 'axios';
import InputRecipe from './InputRecipe'

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

  addRecipe(obj) {
    console.log('new', obj)
    axios.post('/api/recipes', obj).then(res => {
      console.log('res', res.data)
      this.setState({
        recipes: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  editRecipe(id, obj) {
    console.log("id:", id, "obj", obj)
    axios.put(`/api/recipes/${id}`, { obj }).then(res => {
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
        {this.state.recipes.map((element) => {
          return (
            <Recipe key={element.id} data={element} deleteRecipe={this.deleteRecipe} editRecipe={this.editRecipe} />
          )
        })}
        <InputRecipe addRecipe={this.addRecipe} />
      </div>
    )
  }
}

export default Display