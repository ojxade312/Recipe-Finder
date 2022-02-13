// When user clicks on button JS gets the value from the input and puts it into fetchRecipe
// fetchRecipe returns a [2] recipe for this food 
// create submit button
let recipeButton = document.querySelector("#recipe-button")
// get the value from the input box
let foodInput = document.querySelector("#food-input");
// get ingredients list
let ingredientsList = document.querySelector(".ingredients");
// get photo of meal
let foodImage = document.querySelector(".food-photo")
// get name of meal
let mealName = document.querySelector(".meal")
// get link to recipe
let recipe = document.querySelector(".recipe-text")
// get type of meal (breakfast, lunch etc)
let mealType = document.querySelector('#meals')
// randomise which meal it returns
let randomMeal = Math.floor(Math.random() * 20);

const listItems = [] // create array for ingredients

// add ingredients to an unordered list
function addIngredients(ingredient){
    const listItem = document.createElement("li");
    listItem.innerText = ingredient
   ingredientsList.appendChild(listItem);
}

// console.log(foodInput)

function handleRecipeClick() {}

function handleInputChange() {}


// function to return recipe
async function fetchRecipe() {
let food = foodInput.value
let mealSelect = mealType.value
const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${food}&app_id=e4dfbc90&app_key=%20c00baeb64f24452f93d3a05e284a0719%09&mealType=${mealSelect}`);
    const data = await response.json()
    console.log(data.hits[0])
    //add the image of the recipe
    foodImage.src = data.hits[randomMeal].recipe.images.REGULAR.url;
    // clears the ingredients list
    ingredientsList.innerText = "";
    // adds link to recipe
    recipe.innerText = data.hits[randomMeal].recipe.url
    recipe.href = data.hits[randomMeal].recipe.url
    // adds name of meal
    mealName.innerText = data.hits[randomMeal].recipe.label;
    // loop through the ingredients and return them in an unordered list
    for (i=0; i < data.hits[randomMeal].recipe.ingredientLines.length; i++) {
        addIngredients(data.hits[randomMeal].recipe.ingredientLines[i])
    }
    
}
    
fetchRecipe()
recipeButton.addEventListener("click", fetchRecipe)