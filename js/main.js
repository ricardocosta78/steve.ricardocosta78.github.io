

let header = document.querySelector('.header');
let hamburguerMenu = document.querySelector('.hamburguer-menu');
let close = document.querySelector('.close');

hamburguerMenu.addEventListener('click',function(){
    header.classList.add('menu-open');
})

close.addEventListener('click',function(){
    header.classList.remove('menu-open')
})

function mostrarCard1(){
    document.getElementById('card1').style.display='flex'
    document.getElementById('card1').style.alignItems="center"
    document.getElementById('card1').style.justifyContent = "center"

    document.getElementById('card2').style.display='none'
    document.getElementById('card3').style.display='none'
    document.getElementById('card4').style.display='none'
    document.getElementById('main').style.display='none'
}

function mostrarCard2(){
    document.getElementById('card2').style.display='flex'
    document.getElementById('card2').style.alignItems="center"
    document.getElementById('card2').style.justifyContent = "center"
    document.getElementById('card3').style.display='none'
    document.getElementById('card4').style.display='none'
    document.getElementById('card1').style.display='none'
    document.getElementById('main').style.display='none'
}
function mostrarCard3(){
    document.getElementById('card3').style.display='flex'
    document.getElementById('card3').style.alignItems="center"
    document.getElementById('card3').style.justifyContent = "center"
    document.getElementById('card2').style.display='none'
    document.getElementById('card4').style.display='none'
    document.getElementById('card1').style.display='none'
    document.getElementById('main').style.display='none'
}
function mostrarCard4(){
    document.getElementById('card4').style.display='inline'
    document.getElementById('card4').style.display='flex'
    document.getElementById('card4').style.alignItems="center"
    document.getElementById('card4').style.justifyContent = "center"
    document.getElementById('card3').style.display='none'
    document.getElementById('card2').style.display='none'
    document.getElementById('card1').style.display='none'
    document.getElementById('main').style.display='none'
}

