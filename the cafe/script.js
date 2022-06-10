var EatTitle = document.getElementById("eat-title");
var DrinkTitle = document.getElementById("drink-title");
var Eat = document.getElementById("eat");
var Drink = document.getElementById("drink");

Eat.style.transform = "translateX(-700px)";

function toggleEat() {
  Eat.style.transform = "translateX(0px)";
  Drink.style.transform = "translateX(700px)";
  EatTitle.style.backgroundColor = "#616161";
  EatTitle.style.color = "white";
  DrinkTitle.style.backgroundColor = "transparent";
  DrinkTitle.style.color = "black";
}

function toggleDrink() {
  Eat.style.transform = "translateX(-700px)";
  Drink.style.transform = "translateX(0px)";
  DrinkTitle.style.backgroundColor = "#616161";
  DrinkTitle.style.color = "white";
  EatTitle.style.backgroundColor = "transparent";
  EatTitle.style.color = "black";
}