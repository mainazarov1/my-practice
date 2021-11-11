class Dish {
  constructor(name, description, composition, price) {
    this.name = name;
    this.description = description;
    this.composition = composition;
    this.price = price;
  }
  show() {
    console.log(this);
  }
}

class Category {
  constructor(name) {
    this.name = name;
    this.dishes = [];
  }
  addDish(dish) {
    this.dishes.push(dish);
  }
  deleteDish(dishName) {
    this.dishes.forEach((dish, i, dishes) => {
      if (dishName === dish.name) {
        dishes.splice(i, 1);
      }
    });
  }
  show() {
    console.log(this);
  }
}
class Menu {
  constructor() {
    this.breakfast = new Category("Breakfast");
    this.bar = new Category("Bar");
    this.soups = new Category("Soups");
  }
  show() {
    console.log(this);
  }
}
let menu = new Menu();
menu.soups.addDish(
  new Dish("BORSH", "sasds asdsdfd", "cfvrfv,sdasd,asda", 250)
);
menu.breakfast.addDish(
  new Dish("EGGS", "sdasda", "dasdasdsacfvrfv,sdasd", 150)
);
menu.bar.addDish(new Dish("Vine", "sfd llomzq", "vbxz, jugn", 1150));
menu.bar.addDish(new Dish("Beer", "sfd", "jugn", 50));
menu.breakfast.addDish(new Dish("LAGMAN", "sda", "dasda", 300));
menu.breakfast.addDish(new Dish("PLOV", "sda", "dasda", 200));
menu.breakfast.addDish(new Dish("MANTY", "sda", "dasda", 100));
menu.breakfast.addDish(new Dish("PIZZA", "sda", "dasda", 500));
menu.soups.addDish(new Dish('CHICKEN-SOUP', 'sadasd', 'sdadanjyh', 200));

// menu.breakfast.deleteDish("LAGMAN");
// menu.show();
// menu.breakfast.show();
// menu.bar.show();
// menu.soups.show();
