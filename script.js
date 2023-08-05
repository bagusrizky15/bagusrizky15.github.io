document.addEventListener("DOMContentLoaded", function () {
  $(".loader-wrapper").fadeOut("slow");
  $("body").removeClass("preload");
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
