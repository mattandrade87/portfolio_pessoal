const themeButton = document.getElementById("themeButton");
const body = document.body;
const aboutButton = document.getElementById("aboutButton");
const aboutModal = document.getElementById("aboutModal");
const closeModal = document.querySelector(".close-modal");

function toggleModal() {
  aboutModal.classList.toggle("active");
}

aboutButton.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);

aboutModal.addEventListener("click", (e) => {
  if (e.target === aboutModal) {
    toggleModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && aboutModal.classList.contains("active")) {
    toggleModal();
  }
});
