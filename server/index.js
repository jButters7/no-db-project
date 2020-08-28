const express = require('express')
const app = express()
const recipeCtrl = require('./controllers/recipeController')

const SERVER_PORT = 5000;

app.use(express.json())

//Endpoints 
app.get('/api/recipes/', recipeCtrl.getAllRecipes)
app.post('/api/recipes/', recipeCtrl.addRecipe)
app.put('/api/recipes/:id', recipeCtrl.editRecipe)
app.delete('/api/recipes/:id', recipeCtrl.deleteRecipe)


app.listen(SERVER_PORT, () =>
  console.log(`Cooking on channel ${SERVER_PORT}`))