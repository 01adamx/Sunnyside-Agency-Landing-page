const navMobile = document.getElementsByClassName('nav-mobile')
    nav = document.getElementsByClassName('nav-mobile-list')
    navExit = document.querySelector('body');

navMobile.addEventListener('click', () => {
    nav.style.display = "flex";
})
navExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
})

/*unction openForm() {
  document.getElementsByClassName("nav-mobile-list").style.display = "flex";
}*/



