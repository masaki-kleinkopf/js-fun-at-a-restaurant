function nameMenuItem(foodName) {
  return `Delicious ${foodName}`
};

function createMenuItem(name, price, type){
  var newCreatedItem = {};
  newCreatedItem.name = name;
  newCreatedItem.price = price;
  newCreatedItem.type = type;
  return newCreatedItem;
}

function addIngredients(ingredient, ingredList){
  if (ingredList.indexOf(ingredient) === -1 ){
  ingredList.push(ingredient)
  }
}
//Had to google this. I do understand it, but wondering if there is a simpler solution.


function formatPrice(originalPrice){
  return "$" + originalPrice
};

function decreasePrice(price){
  return price - (price * .1)

};

function createRecipe(title, ingredients, type){
  var recipeObj = {};
  recipeObj.title = title;
  recipeObj.ingredients = ingredients;
  recipeObj.type = type;
  return recipeObj;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
