const pressButton = () => {
  const veganBtn = document.getElementById("veganBtn");
  const vegetarianBtn = document.getElementById("vegetarianBtn");
  const glutenFreeBtn = document.getElementById("glutenFreeBtn");
  const dairyFreeBtn = document.getElementById("dairyFreeBtn");
  const allDietsBtn = document.getElementById("allDietsBtn");
  const addDietType = document.getElementById("dietType");

  const updateDietType = (diet) => {
    addDietType.innerHTML = `<p>${diet}</p>`;
  };

  allDietsBtn.addEventListener("click", () => {
    console.log("All button is pressed");
    updateDietType("All diets");
  });

  veganBtn.addEventListener("click", () => {
    console.log("Vegan button is pressed");
    updateDietType("Vegan");
  });

  vegetarianBtn.addEventListener("click", () => {
    console.log("Vegetarian button is clicked");
    updateDietType("Vegetarian");
  });

  dairyFreeBtn.addEventListener("click", () => {
    console.log("dairyfree button is clicked");
    updateDietType("Dairy-free");
  });

  glutenFreeBtn.addEventListener("click", () => {
    console.log("glutenfree button is clicked");
    updateDietType("Gluten-free");
  });
};

pressButton();
