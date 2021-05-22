const hamburger = document.querySelector('.hamb');
const navlist = document.querySelector('.nav-list');

hamburger.addEventListener('click', function(){
 navlist.classList.toggle('open');
 
});