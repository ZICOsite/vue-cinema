let headerNavMenu = document.querySelector('.header__nav-menu');
let headerNavLine = document.querySelector('.header__nav-line');
let headerList = document.querySelector('.header__list');

headerNavLine.addEventListener('click', function (e) {
   this.classList.toggle('active');
   headerList.classList.toggle('active');
   headerNavMenu.classList.toggle('active');
})