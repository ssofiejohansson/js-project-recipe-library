// This is where I store recipes globally
let allRecipes = []
let filteredRecipes = []

// Fetch from API
const fetchRecipes = () => {
  const URL = 'https://api.spoonacular.com/recipes/random?number=8&apiKey=828d006a0acb420f85701f9da607c995'

  fetch(URL)
    .then(response => response.json())
    .then(data => {
      allRecipes = data.recipes
      filteredRecipes = [...allRecipes]
      displayRecipes(filteredRecipes)
    })
    .catch((error) => {
      document.getElementById('errorMessage').innerHTML = `<h2>Uh oh! There is a problem when searching for recipes, please try again later. ✨</h2> 
      <p>${error} </p>`
      console.error('Error:', error)
    })
}
//Display fetched recipes
const displayRecipes = (recipesToDisplay) => {
  const cardContainer = document.querySelector('#cards')
  cardContainer.innerHTML = ''

  recipesToDisplay.forEach(recipe => {

    let dietLabels = []
    if (recipe.vegan) dietLabels.push("Vegan")
    if (recipe.vegetarian) dietLabels.push("Vegetarian")
    if (recipe.glutenFree) dietLabels.push("Gluten Free")
    if (recipe.dairyFree) dietLabels.push("Dairy Free")

    cardContainer.innerHTML += `
      <div class="card">
        <div class="card-image">
          <img src="${recipe.image}" alt="Recipe image"/>
        </div>
        <h2>${recipe.title}</h2>
        <div class="instructions">
          <h3 class="title">Diet:</h3>
          <p>${dietLabels.length > 0 ? dietLabels.join(", ") : "No specific diet"}</p>
        </div>
        <div class="instructions">
          <h3 class="title">Time:</h3>
          <p>${recipe.readyInMinutes} min</p>
        </div>
        <div class="ingredients">
          <h4 class="title">Ingredient list:</h4>
          <ul>
            ${recipe.extendedIngredients.map(ingredient =>
      `<li>${ingredient.original}</li>`).join("")}
          </ul>
        </div>
        <a href="${recipe.sourceUrl}" target="_blank" class="recipe-link">View Full Recipe</a>
      </div>`
  })
}

// Function to filter recipes based on diet
const filterByDiet = (filterType) => {
  if (filterType === "all") {
    filteredRecipes = [...allRecipes]
  } else {
    filteredRecipes = allRecipes.filter(recipe => recipe[filterType] === true)
  }

  if (filteredRecipes.length === 0) {
    document.querySelector('#cards').innerHTML = `<p>❌ No ${filterType} recipes found. Why don't you pick another one?✨ </p>`
  } else {
    displayRecipes(filteredRecipes)
  }
}

// Function to sort recipes by readyInMinutes
const sortByReadyTime = (order) => {
  if (order === 'ascending') {
    filteredRecipes.sort((a, b) => a.readyInMinutes - b.readyInMinutes)
  } else {
    filteredRecipes.sort((a, b) => b.readyInMinutes - a.readyInMinutes)
  }

  displayRecipes(filteredRecipes)
}

// Function to display a random recipe
const surpriseMe = () => {
  if (allRecipes.length > 0) {
    const randomRecipe = allRecipes[Math.floor(Math.random() * allRecipes.length)]
    displayRecipes([randomRecipe])
  }
}

// Event listeners
document.querySelectorAll('.btn-filter input').forEach(button => {
  button.addEventListener("change", (event) => {
    filterByDiet(event.target.value)
  })
})

document.querySelectorAll('.btn-sort input').forEach(button => {
  button.addEventListener("change", (event) => {
    sortByReadyTime(event.target.value)
  })
})

document.querySelector('#randomBtn').addEventListener("click", surpriseMe)

// Display recipes
fetchRecipes()