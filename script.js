const themeButton = document.getElementById("themeButton");
const body = document.body;

themeButton.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const icon = themeButton.querySelector("i");

  if (body.classList.contains("light-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});
