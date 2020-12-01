

let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let close = document.querySelector('.close');

hamburguerMenu.addEventListener('click',function(){
    header.classList.add('menu-open');
})

close.addEventListener('click',function(){
    header.classList.remove('menu-open')
})

