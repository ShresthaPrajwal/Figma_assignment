document.querySelector(".toggle-button").addEventListener("click", function () {
  document.querySelector("nav").classList.toggle("open");
  document.querySelector(".overlay").classList.toggle("active");
});

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector("nav").classList.remove("open");
  document.querySelector(".overlay").classList.remove("active");
});
