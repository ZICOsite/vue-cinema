let headerNavMenu = document.querySelector('.header__nav-line');
let headerList = document.querySelector('.header__list');

headerNavMenu.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
})