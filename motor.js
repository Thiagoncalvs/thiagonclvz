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
    const windowTop = window.pageYOffset - ((window.innerHeight * 3) / 15); 
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

// ANIMAÇÃO SCROLL SUAVE MENU

const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}
function scrollToIdOnClick(event){
    event.preventDefault();
    const alturaMenu = document.getElementById('headerMenu').offsetHeight;
    const to = getScrollTopByHref(event.target) - alturaMenu; // const to = getScrollTopByHref(event.target) - 10vh; --> para ficar abaixo do menu

    scrollToPosition(to); 
}
function scrollToPosition(to){
    // window.scroll({
    //     top: to,
    //     behavior: "smooth",
    // });
    smoothScrollTo(0, to);
}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 400;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};

// INPUT ITENS DO PORTFOLIO
var ObjPort = {"myObject": [
{
    title: 'Pedro_Paulo_Assessoria_Esportiva',
    path: "url(./IMG/Pedro.png)",
    url: "https://thiagoncalvs.github.io/Client-Data/"
},
{
    title: '#1',
    path: "url(./IMG/Frame4.png)",
    url: "/"
},
{ 
    title: "#2",
    path: "url(./IMG/Frame4.png)",
    url: "/"
},
{ 
   title: "#3",
   path: "url(./IMG/Frame4.png)",
   url: "/"
},
{ 
   title: "#4",
   path: "url(./IMG/Frame4.png)",
   url: "/"
}
]
}
var count1 = Object.keys(ObjPort.myObject).length

//alert(count);

var container= document.getElementById('media-scroll');

for(var i=0;i<count1;i++){
    //console.log(jsonObj.myObject[i]);
  
    var obj= ObjPort.myObject[i];
    var button = "<a href="+obj.url+"><div title="+obj.title+" class='media-element' style='background-image:"+obj.path+";'></div></a>";
    
    container.innerHTML
    +=button;
}

// INPUT ITENS DO CONTATOS
var ObjCont = {"myObject": [
{
    contente: 'Instagram: @thiagonclvz',
    url: "/siteDefault"
},
{
    contente: 'GitHub: @thiagonclvz',
    url: "/siteOne"
},
{ 
    contente: "Whatsapp: +55 96 99173-3766",
    url: "/siteTwo"
},
{ 
    contente: "Email: thiagoncalvz@gmail.com",
    url: "/sitethree"
},
{ 
    contente: "twitter: @THIAGOSGONALVE1",
    url: "/sitefour"
}
]
}
var count2 = Object.keys(ObjCont.myObject).length

//alert(count);

var container= document.getElementById('corpocontatos');

for(var i=0;i<count2;i++){
    //console.log(jsonObj.myObject[i]);
    
    var obj= ObjCont.myObject[i];
    var button = "<a href="+obj.url+"><div class='socialElement'><p>"+obj.contente+"</p></div></a>";
    
    container.innerHTML
    +=button;
}