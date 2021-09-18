const menuBar = document.getElementById("menu-bar");
const showMenu = document.querySelector(".show-menu");

menuBar.addEventListener("click", function (e) {
  showMenu.classList.toggle("show");
});
