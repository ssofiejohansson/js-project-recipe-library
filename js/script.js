// defining my variables

const card = document.getElementById("cards")

const allBtn = document.querySelector('#allBtn input')
const veganBtn = document.querySelector('#veganBtn input')
const vegetarianBtn = document.querySelector('#vegetarianBtn input')
const glutenFreeBtn = document.querySelector('#glutenFreeBtn input')
const dairyFreeBtn = document.querySelector('#dairyFreeBtn input')
const dietChoice = document.querySelector('#dietChoice')

const under15min = document.querySelector('#under15minBtn input')
const between15and30min = document.querySelector('#between15and30minBtn input')
const between30and60min = document.querySelector('#between30and60minBtn input')
const over60min = document.querySelector('#over60minBtn input')
const cookingTime = document.querySelector('#timeChoice')

const mostPopular = document.querySelector('#mostPopular input')
const leastPopular = document.querySelector('#leastPopular input')
const sort = document.querySelector('#sort')

// Array of mockup receipes

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
    diets: ["dairy-free"],
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

const showRecipe = () => {
  recipes.forEach(item => {
    card.innerHTML +=
      `<div class="card">
      <div class="card-image">
      <img src="./img/veganplate.webp"
            alt="Vegan plate"
            id="cardImage"/></div>
            <h2>${item.title}</h2>
             <div class="instructions">
             <h3 class="title">Diet:</h3>
            <p>${item.diets}</p>
            </div>
            <div class="instructions">
            <h3 class="title">Time:</h3>
            <p>${item.readyInMinutes} min</p>
            </div>
            <div class="ingredients">
            <h4 class="title">Ingredients</h4>
              <ul>
              ${item.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
              </ul>
            </div>
            </div>`
  })
}

//naming functions

const allDiets = () => {
  sort.innerHTML = "" // This is to clear the div from the start

  if (allBtn.checked) {
    sort.innerHTML += `You are looking through all our receipes.`
  }

}
showRecipe()

const updateDietChoice = () => {
  sort.innerHTML = "" // This is to clear the div from the start

  if (veganBtn.checked) {
    sort.innerHTML += `<p>🥑 Vegan vibes only! Taste the goodness of plant-based meals.</p>`
  }
  if (vegetarianBtn.checked) {
    sort.innerHTML += `<p>🥦 Go green! Discover vibrant and delicious vegetarian recipes for a plant-powered day.</p>`
  }
  if (glutenFreeBtn.checked) {
    sort.innerHTML += `<p>❌🍞 No gluten, no problem! Delicious gluten-free recipes coming your way.</p>`
  }
  if (dairyFreeBtn.checked) {
    sort.innerHTML += `<p>🚫🥛 Explore creamy, dreamy dairy-free recipes.</p>`
  }
}

const updateCookingTime = () => {
  sort.innerHTML = ""

  if (under15min.checked) {
    sort.innerHTML += `<p>⏱️ Quick and tasty! Under 15 minutes of cooking, because time is precious.</p>`
  }
  if (between15and30min.checked) {
    sort.innerHTML += `<p>⏲️ Just the right amount of time! Perfect for a maximum 30 minute cooking adventure.</p>`
  }
  if (between30and60min.checked) {
    sort.innerHTML += `<p>🕒 Got a bit more time? Whip up something delicious in less than an hour.</p>`
  }
  if (over60min.checked) {
    sort.innerHTML += `<p>⏳ Slow-cooked perfection! Over 60 minutes for those who love to take their time.</p>`
  }
}

const sortReceipes = () => {
  sort.innerHTML = ""

  if (mostPopular.checked) {
    sort.innerHTML += `<p>🔥 Hot right now! Check out the most popular recipes everyone’s raving about:</p>`
  }
  if (leastPopular.checked) {
    sort.innerHTML += `<p>👀 The underdogs! These recipes might be hidden gems:</p>`
  }
}

// Eventlisteners
allBtn.addEventListener("change", allDiets)
veganBtn.addEventListener("change", updateDietChoice)
vegetarianBtn.addEventListener("change", updateDietChoice)
glutenFreeBtn.addEventListener("change", updateDietChoice)
dairyFreeBtn.addEventListener("change", updateDietChoice)

under15min.addEventListener("change", updateCookingTime)
between15and30min.addEventListener("change", updateCookingTime)
between30and60min.addEventListener("change", updateCookingTime)
over60min.addEventListener("change", updateCookingTime)

mostPopular.addEventListener("change", sortReceipes)
leastPopular.addEventListener("change", sortReceipes)