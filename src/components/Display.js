import React, { Component } from 'react'
import Recipe from './Recipe'
import axios from 'axios';
import InputRecipe from './InputRecipe'

class Display extends Component {
  constructor() {
    super();

    this.state = {
      recipes: [],
      search: ''
    }

    this.addRecipe = this.addRecipe.bind(this)
    this.editRecipe = this.editRecipe.bind(this)
    this.deleteRecipe = this.deleteRecipe.bind(this)
    // this.searchRecipes = this.searchRecipes.bind(this)
  }

  componentDidMount() {
    axios.get('/api/recipes').then(res => {
      // console.log(res.data)
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
    axios.put(`/api/recipes/${id}`, obj).then(res => {
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

  // handleSearch(e) {
  //   console.log(e.target.value)
  //   this.setState({
  //     search: e.target.value
  //   })
  // }

  // searchRecipes(event) {
  //   event.preventDefault()
  //   this.state.recipes.findIndex(index => {
  //     console.log(index.title)
  //     if (index.title === this.state.search) {
  //       console.log(index)
  //       this.setState({
  //         recipes: [index]
  //       })
  //       console.log('here you go', this.state.recipes)
  //     } else {
  //       console.log('recipe not found')
  //     }
  //   })

  // }

  render() {

    return (
      <div>
        {/* <form>
          <input placeholder="Search Recipes       &#128269;" className="search-recipes" name="search" onChange={(e) => this.handleSearch(e)} />
          <button onClick={() => this.searchRecipes()} type='submit'>Search</button>
        </form> */}

        {this.state.recipes.map((element) => {
          return (
            <Recipe key={element.id} data={element} deleteRecipe={this.deleteRecipe} editRecipe={this.editRecipe} />
          )
        })}
        <h2>Add A New Recipe</h2>
        <div className="input-recipe">
          <InputRecipe addRecipe={this.addRecipe} />
        </div>
      </div>
    )
  }
}

export default Display