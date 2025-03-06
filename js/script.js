//mockup recipe array
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: [""],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

//declaring my variables
const btnDiet = document.querySelectorAll('.btn-filter')
const sortBtn = document.querySelectorAll('.btn-sort')
const surpriseBtn = document.getElementById('randomBtn')
const displayMessage = document.getElementById('displayMessage')
const cardContainer = document.getElementById('cards')
let filteredRecipes = [...recipes]

//function to load all recipes in array
const loadRecipes = (recipesToDisplay) => {
  cardContainer.innerHTML = ''
  recipesToDisplay.forEach(recipe => {
    cardContainer.innerHTML +=
      `<div class="card">
        <div class="card-image">
          <img src="./img/veganplate.webp" alt="Vegan plate" id="cardImage"/>
        </div>
        <h2>${recipe.title}</h2>
        <div class="instructions">
          <h3 class="title">Diet:</h3>
          <p>${recipe.diets.join(", ")}</p>
        </div>
        <div class="instructions">
          <h3 class="title">Time:</h3>
          <p>${recipe.readyInMinutes} min</p>
        </div>
        <div class="ingredients">
          <h4 class="title">Ingredients</h4>
          <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
          </ul>
        </div>
      </div>`
  })
}

//function to filter recipes by diet choice
const filterByDiet = () => {
  const selectedDiet = document.querySelector('input[name="diet"]:checked').value

  if (selectedDiet === 'all') {
    filteredRecipes = [...recipes]
  } else {
    filteredRecipes = recipes.filter(recipe => recipe.diets.includes(selectedDiet))
  }

  // Show message ONLY when the user selects a filter AND no recipes match
  if (selectedDiet !== 'all' && filteredRecipes.length === 0) {
    displayMessage.innerHTML = "🍲  ❌ Oh no! No recipes found. Try another filter!"
    displayMessage.style.display = "block"
  } else if (filteredRecipes.length > 0) {
    displayMessage.style.display = "none" // Hide message only if recipes exist
  }

  loadRecipes(filteredRecipes)
}

//function to sort recipes on popularity
const filterByPopularity = (number) => {
  const sortedRecipes = [...filteredRecipes]

  if (number === 'descending') {
    sortedRecipes.sort((a, b) => a.popularity - b.popularity)
  } else {
    sortedRecipes.sort((a, b) => b.popularity - a.popularity)
  }

  loadRecipes(sortedRecipes)
}

//function for picking a random recipe
const surpriseMe = () => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
  loadRecipes([randomRecipe])
}

//eventlisteners
btnDiet.forEach(button => {
  button.addEventListener("change", filterByDiet)
})

sortBtn.forEach(button => {
  button.addEventListener("change", (button) => {
    const time = button.target.value
    filterByPopularity(time)
  })
})

surpriseBtn.addEventListener('click', surpriseMe)

//always load all recipes from the start
loadRecipes(filteredRecipes)