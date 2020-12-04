

let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let close = document.querySelector('.hamburguer-menu-close');

hamburguerMenu.addEventListener('click',function(){
    header.classList.add('menu-open');
})

close.addEventListener('click',function(){
    header.classList.remove('menu-open')
})

function mostrar(id){
    esconder();
    
    document.getElementById(id).style.display='flex'
    document.getElementById(id).style.alignItems="center"
    document.getElementById(id).style.justifyContent = "center"
    document.getElementById('main').style.display='none'
}

function esconder(){
    document.getElementById('card1').style.display='none'
    document.getElementById('card2').style.display='none'
    document.getElementById('card3').style.display='none'
    document.getElementById('card4').style.display='none'
    document.getElementById('main').style.display='flex'
}