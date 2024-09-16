function loaderAnimation() {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.top = "-130%";
  }, 5200);
}
loaderAnimation();

document.getElementById("menu-button").addEventListener("click", function () {
  var dropdownMenu = document.getElementById("dropdown-menu");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
});

// Optional: Close dropdown menu when clicking outside
document.addEventListener("click", function (event) {
  var isClickInside = document.getElementById("nav-bar").contains(event.target);
  if (!isClickInside) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});

// const menuBtn = document.getElementById('menu-button');

// navLinks.addEventListener("click", (e) =>{
//   // navLinks.classList.remove("open");
//   menuBtnIcon.setAttribute("class", "ri-menu-line");
// })