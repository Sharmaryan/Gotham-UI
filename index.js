const hamBurgerIcon = document.querySelector('#ham-menu');
const sideBar = document.querySelector("#sidebar");
hamBurgerIcon.addEventListener('click', () => {
sideBar.style.display = sideBar.style.display === 'block' ? 'none' : 'block';
});