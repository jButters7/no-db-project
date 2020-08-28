const recipes = require('../recipes.json')

let id = recipes[recipes.length - 1].id + 1

module.exports = {
  getAllRecipes: (rec, res) => {
    res.status(200).send(recipes)
  },
  addRecipe: (rec, res) => {
    const { title, image, ingredients, instructions } = rec.body
    const newRecipe = {
      id,
      title,
      image,
      ingredients,
      instructions
    }
    recipes.push(newRecipe)
    id++
    res.status(200).send(recipes)

  },
  editRecipe: (rec, res) => {
    const { id } = rec.params
    const { title, image, ingredients, instructions } = rec.body
    const index = recipes.findIndex(element => {
      console.log(`element:`, element.id)
      return element.id === +id
    })
    console.log(id, index)
    if (index === -1) {
      res.status(404).send("Recipe id not found.")
    }


    const updatedRecipe = {
      id: recipes[index].id,
      title: title || recipes[index].title,
      image: image || recipes[index].image,
      ingredients: ingredients || recipes[index].ingredients,
      instructions: instructions || recipes[index].instructions,
    }
    recipes[index] = updatedRecipe;

    res.status(200).send(recipes)

  },
  deleteRecipe: (rec, res) => {
    const { id } = rec.params

    const index = recipes.findIndex(element =>
      element.id === +id)
    console.log(index)
    if (index === -1) {
      console.log('recipe not found')
      return res.status(404).send("Recipe not found")
    }

    recipes.splice(index, 1)
    res.status(200).send(recipes)
  }
}
