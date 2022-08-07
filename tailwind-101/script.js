const btn = document.getElementById("menu-toggle");

btn.addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.toggle("hidden");
  document.getElementById("mobile-menu").classList.toggle("flex");
});
