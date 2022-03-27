function createRestaurant(name){
  var newRestaurant = {}
  newRestaurant.name = name;
  newRestaurant.menus = {breakfast:[], lunch:[], dinner:[]};
  return newRestaurant;
};

function addMenuItem(restaurant, item){
    if (item.type === "breakfast" && restaurant.menus.breakfast.indexOf(item) === -1){
      restaurant.menus.breakfast.push(item)

    }else if (item.type === "lunch" && restaurant.menus.lunch.indexOf(item) === -1){
      restaurant.menus.lunch.push(item);

    }else if (item.type === "dinner" && restaurant.menus.dinner.indexOf(item) === -1){
      restaurant.menus.dinner.push(item)
  }
};


//Just learned bracket notation to make this way simpler.

function removeMenuItem(restaurant, item, type){


  for (var i = 0; i<restaurant.menus[type].length; i++){
    if (restaurant.menus[type][i].name === item){
      restaurant.menus[type].splice(i, 1)
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
};

// My initial attempt without bracket notation.

function removeMenuItem1(restaurant, item, type){
  var breakfast = restaurant.menus.breakfast;
  var lunch = restaurant.menus.lunch;
  var dinner = restaurant.menus.dinner;

  if (type === "breakfast" && breakfast.length > 0){
    if (type === "breakfast" && breakfast[0].name === item){
      breakfast.pop();
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  }
 }else if (type === "lunch" && lunch.length > 0){
    if (type === "lunch" && lunch[0].name === item){
      lunch.pop();
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  } else if (type === "dinner" && dinner.length > 0){
  if (type === "dinner" && dinner[0].name === item){
      dinner.pop();
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  }
} else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
};


module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
