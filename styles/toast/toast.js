const toastShow = document.querySelector("#toast-show");
const toast = document.querySelector("#toast");
const toastClose = document.querySelector("#close-toast");

toastShow.addEventListener("click", () => {
  toast.style.display = "block";
  setTimeout(() => {
      toast.style.display = "none";
      
  }, 5000);
});
toastClose.addEventListener("click", () => {
  toast.style.display = "none";
});
