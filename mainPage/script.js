function loaderAnimation() {
  var loader = document.querySelector(".loader")
  setTimeout(function () {
      loader.style.top = "-130%"
  }, 5200)
}
loaderAnimation();