var pizza_title = document.getElementById("pizza-title");
var salad_title = document.getElementById("salad-title");
var starter_title = document.getElementById("starter-title");
var color = "#f44336";

var pizza = document.getElementById("pizza");
var salad = document.getElementById("salad");
var starter = document.getElementById("starter");

var position1 = "translateX(-1960px)";
var position2 = "translateX(-980px)";
var position3 = "translateX(0)";
var position4 = "translateX(980px)";
var position5 = "translateX(1960px)";

function togglePizzaMenu() {
  pizza_title.style.backgroundColor = color;
  salad_title.style.backgroundColor = "#000";
  starter_title.style.backgroundColor = "#000";

  pizza.style.transform = position3;
  salad.style.transform = position4;
  starter.style.transform = position5;
}

function toggleSaladMenu() {
  pizza_title.style.backgroundColor = "#000";
  salad_title.style.backgroundColor = color;
  starter_title.style.backgroundColor = "#000";

  pizza.style.transform = position2;
  salad.style.transform = position3;
  starter.style.transform = position4;
}

function toggleStarterMenu() {
  pizza_title.style.backgroundColor = "#000";
  salad_title.style.backgroundColor = "#000";
  starter_title.style.backgroundColor = color;

  pizza.style.transform = position1;
  salad.style.transform = position2;
  starter.style.transform = position3;
}
