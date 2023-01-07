// ANIMAÇÃO DO MENU HAMBURGER
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('navmain');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active){
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
};

btnMobile.addEventListener('touchstart', toggleMenu);

// INTERAÇÃO ITENS DO MENU COM O BOTÃO HAMBURGER


// ANIMAÇÃO DA APRESENTAÇÃO PESSOAL
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    })
}

const myh3 = document.querySelector('h3');
typeWriter(myh3);

// ANIMAÇÃO MENU BRANCO
const target = document.querySelectorAll('[data-menubranco]');

function animeScroll(){
    const windowTop = window.pageYOffset - ((window.innerHeight * 3) / 10); 
    target.forEach(function(elementmenu){
        if((windowTop) > elementmenu.offsetTop){
            elementmenu.classList.add('esbranquicado');
        } else {
            elementmenu.classList.remove('esbranquicado');
        }
    })
}

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    })
}