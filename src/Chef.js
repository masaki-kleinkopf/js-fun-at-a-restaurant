class Chef {
  constructor(name,restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    }
  greetCustomer (customer, isMorning){
    if (isMorning === true){
    return `Good morning, ${customer}!`
    } else {
    return `Hello, ${customer}!`
    }
  };
  checkForFood (food){

    if (food.type === "breakfast" && this.restaurant.menus.breakfast.length > 0){
      if (food.type === "breakfast" && this.restaurant.menus.breakfast.indexOf(food) !== -1){
        return `Yes, we're serving ${food.name} today!`
    }
    }else if (food.type === "breakfast" && this.restaurant.menus.breakfast.length > 0){
      if (food.type === "lunch" && this.restaurant.menus.lunch.indexOf(food) !== -1){
        restaurant.menus.lunch.push(item);
        return `Yes, we're serving ${food.name} today!`
      }
    }else if (food.type === "breakfast" && this.restaurant.menus.breakfast.length > 0){
      if (food.type === "dinner" && this.restaurant.menus.dinner.indexOf(food) !== -1){
        restaurant.menus.dinner.push(item)
        return `Yes, we're serving ${food.name} today!`
      }
    }else
    return `Sorry, we aren't serving ${food.name} today.`
  };
};

module.exports = Chef;
