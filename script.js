document.addEventListener("DOMContentLoaded", function () {
  const fadeOutDuration = 3000; // 5 seconds in milliseconds
  $(".loader-wrapper").fadeOut(fadeOutDuration);
  $("body").removeClass("preload");
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
