import React, { Component } from 'react'
import Recipe from './Recipe'
import axios from 'axios';

class Display extends Component {
  constructor() {
    super();

    this.state = {
      recipes: []
    }
  }

  componentDidMount() {
    axios.get('/api/recipes').then(res => {
      console.log(res.data)
      this.setState({
        recipes: res.data
      })
    })
  }

  render() {



    return (
      <div>
        {this.state.recipes.map(element => {
          return (
            <Recipe key={element.id} allRecipes={element} />
          )
        })}
      </div>
    )
  }
}

export default Display