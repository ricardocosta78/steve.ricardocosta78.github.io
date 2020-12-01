let text = document.getElementById('text');
let html = document.querySelector('.sphere');
let button = document.querySelector('.button');
let a = document.querySelector('a[href="#"]');
let shadow = '';
for (let i = 0; i < 30; i++) {
shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #364954';
}
text.style.textShadow = shadow;

function animation(){
    html.classList.add('animate__animated','animate__hinge');
    html.style.setProperty('--animate-duration', '2.5s');
    setTimeout(html.addEventListener('animationend',()=>{
        
        a.innerHTML ='TRY <span>AGAIN</span>';
        a.setAttribute('href','index.html');
        }),1000)
}

