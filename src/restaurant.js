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


function removeMenuItem(restaurant, item, type){
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

//I'm sure this is not the best way to write this, but only way to make it work.
//Will try to refactor and rethink



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
