// defining my variables

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

//naming functions

const updateDietChoice = () => {
  dietChoice.innerHTML = "" // This is to clear the div from the start

  if (veganBtn.checked) {
    dietChoice.innerHTML += `<p>🥑 Vegan vibes only! Taste the goodness of plant-based meals.</p>`
  }
  if (vegetarianBtn.checked) {
    dietChoice.innerHTML += `<p>🥦 Go green! Discover vibrant and delicious vegetarian recipes for a plant-powered day.</p>`
  }
  if (glutenFreeBtn.checked) {
    dietChoice.innerHTML += `<p>❌🍞 No gluten, no problem! Delicious gluten-free recipes coming your way.</p>`
  }
  if (dairyFreeBtn.checked) {
    dietChoice.innerHTML += `<p>🚫🥛 Explore creamy, dreamy dairy-free recipes.</p>`
  }
}

const updateCookingTime = () => {
  cookingTime.innerHTML = ""

  if (under15min.checked) {
    cookingTime.innerHTML += `<p>⏱️ Quick and tasty! Under 15 minutes of cooking, because time is precious.</p>`
  }
  if (between15and30min.checked) {
    cookingTime.innerHTML += `<p>⏲️ Just the right amount of time! Perfect for a maximum 30 minute cooking adventure.</p>`
  }
  if (between30and60min.checked) {
    cookingTime.innerHTML += `<p>🕒 Got a bit more time? Whip up something delicious in less than an hour.</p>`
  }
  if (over60min.checked) {
    cookingTime.innerHTML += `<p>⏳ Slow-cooked perfection! Over 60 minutes for those who love to take their time.</p>`
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