const modalShow = document.querySelector("#modal-show");
const modal = document.querySelector("#modal");
const modalClose = document.querySelector("#close-modal");

modalShow.addEventListener("click", () => {
  modal.style.display = "block";
});
modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
