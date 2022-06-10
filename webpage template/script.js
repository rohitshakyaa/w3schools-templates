var Menu = document.getElementById("menu");
var Overlay = document.getElementById("overlay");

function toggleMenu() {
  if (Menu.style.display == "block") {
    Menu.style.display = "none";
    Overlay.style.display = "none";
    
  } else {
    Menu.style.display = "block";
    Overlay.style.display = "block";
  }
}

function closeMenu(){
  Menu.style.display = "none";
    Overlay.style.display = "none";
}