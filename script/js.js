// const pimg1 = document.querySelector('#pimg1');
// window.addEventListener('scroll', () => {
//   const scrolled1 = window.pageYOffset;
//   pimg1.style.backgroundPosition = `0 ${scrolled1 * 0.6}px`;
// });

// const pimg2 = document.querySelector('#pimg2');
// window.addEventListener('scroll', () => {
//   const scrolled2 = window.pageYOffset;
//   pimg2.style.backgroundPosition = `0 ${scrolled2 * 0.5}px`;
// });

// const pimg3 = document.querySelector('#pimg3');
// window.addEventListener('scroll', () => {
//   const scrolled3 = window.pageYOffset;
//   pimg3.style.backgroundPosition = `0 ${scrolled3 * 0.4}px`;
// });

window.onload = function() {
  var downloadCv = document.getElementById('cv');
  downloadCv.style.opacity = '0.6';
  downloadCv.style.transform = 'scale(1)';
}

var helloworld = document.getElementById('helloworld');
var textH = helloworld.innerHTML;
helloworld.innerHTML = "";
var iHW = 0;

function typeHELLOWORLD() {
    if (iHW < textH.length) {
      helloworld.innerHTML += textH.charAt(iHW);
      iHW++;
      setTimeout(typeHELLOWORLD, Math.floor(Math.random() * 60) + 50);
    } else {
      setTimeout(function() {
        var showANDERSON = document.getElementById('ANDERSON').style.opacity = '1'
        var showDINIZ1 = document.getElementById('DINIZ1').style.opacity = '1'
        var showDINIZ2 = document.getElementById('DINIZ2').style.opacity = '1'
        var showDINIZ3 = document.getElementById('DINIZ3').style.opacity = '1'
        var showDINIZ4 = document.getElementById('DINIZ4').style.opacity = '1'
        var showFRONTEND = document.getElementById('frontend').style.opacity = '1'
        // ANDERSON ---------------------------------------------------------------------
        var typewriterA = document.getElementById('ANDERSON');
        var textA = typewriterA.innerHTML;
        typewriterA.innerHTML = "";
        var iA = 0;

        function typeANDERSON() {
        if (iA < textA.length) {
            typewriterA.innerHTML += textA.charAt(iA);
            iA++;
            setTimeout(typeANDERSON, Math.floor(Math.random() * 900) + 50);
        }
        }
        typeANDERSON();

        // DINIZ1 ---------------------------------------------------------------------
        var typewriterD1 = document.getElementById('DINIZ1');
        var textD1 = typewriterD1.innerHTML;
        typewriterD1.innerHTML = "";
        var iD1 = 0;

        function typeDINIZ1() {
        if (iD1< textD1.length) {
            typewriterD1.innerHTML += textD1.charAt(iD1);
            iD1++;
            setTimeout(typeDINIZ1, Math.floor(Math.random() * 400) + 50);
        }
        }
        setTimeout(typeDINIZ1, 3000);

        // DINIZ2 ---------------------------------------------------------------------
        var typewriterD2 = document.getElementById('DINIZ2');
        var textD2 = typewriterD2.innerHTML;
        typewriterD2.innerHTML = "";
        var iD2 = 0;

        function typeDINIZ2() {
        if (iD2 < textD2.length) {
            typewriterD2.innerHTML += textD2.charAt(iD2);
            iD2++;
            setTimeout(typeDINIZ2, Math.floor(Math.random() * 400) + 50);
        }
        }
        setTimeout(typeDINIZ2, 3000);

        // DINIZ3 ---------------------------------------------------------------------
        var typewriterD3 = document.getElementById('DINIZ3');
        var textD3 = typewriterD3.innerHTML;
        typewriterD3.innerHTML = "";
        var iD3 = 0;

        function typeDINIZ3() {
        if (iD3 < textD3.length) {
            typewriterD3.innerHTML += textD3.charAt(iD3);
            iD3++;
            setTimeout(typeDINIZ3, Math.floor(Math.random() * 400) + 50);
        }
        }
        setTimeout(typeDINIZ3, 3000);

        // DINIZ4 ---------------------------------------------------------------------
        var typewriterD4 = document.getElementById('DINIZ4');
        var textD4 = typewriterD4.innerHTML;
        typewriterD4.innerHTML = "";
        var iD4 = 0;

        function typeDINIZ4() {
        if (iD4 < textD4.length) {
            typewriterD4.innerHTML += textD4.charAt(iD4);
            iD4++;
            setTimeout(typeDINIZ4, Math.floor(Math.random() * 400) + 50);
        }
        }
        setTimeout(typeDINIZ4, 3000);

         // FRONT END ---------------------------------------------------------------------
         var typewriterFE = document.getElementById('frontend');
         var textFE = typewriterFE.innerHTML;
         typewriterFE.innerHTML = "";
         var iFE = 0;
 
         function typeFRONTEND() {
         if (iFE < textFE.length) {
             typewriterFE.innerHTML += textFE.charAt(iFE);
             iFE++;
             setTimeout(typeFRONTEND, Math.floor(Math.random() * 200) + 50);
         }
         }
         setTimeout(typeFRONTEND, 3000);
            });
            }
        }
  typeHELLOWORLD();




setInterval(function() {
    document.getElementById("itsme1").style.display = "none";
    document.getElementById("itsme2").style.display = "block";
    setTimeout(function() {
        document.getElementById("itsme1").style.display = "block";
        document.getElementById("itsme2").style.display = "none";
    }, 200);
}, 5000);

// Função que faz o throttling do evento de scroll
function throttleScroll(callback, delay) {
  let lastTime = 0;
  return function() {
    const now = new Date().getTime();
    if (now - lastTime >= delay) {
      callback();
      lastTime = now;
    }
  }
}

const parallaxANDERSON = document.querySelector('#ANDERSON');
const parallaxDINIZ1 = document.querySelector('.glitch-bloc');
const parallaxMOUNTAINS = document.querySelector('#backmountains');
const parallaxME1 = document.querySelector('#itsme1');
const parallaxME2 = document.querySelector('#itsme2');
const parallaxFE = document.querySelector('#frontend');

// Função para atualizar os estilos do parallax
function updateParallaxStyles() {
  let offset = window.pageYOffset;
  parallaxANDERSON.style.transform = 'translateX(' + offset * 0.2 + 'px)';
  let blurValue = offset * 0.03;
  parallaxANDERSON.style.filter = 'blur(' + blurValue + 'px)';

  offset = window.pageYOffset;
  parallaxDINIZ1.style.transform = 'translateX(' + offset * -0.2 + 'px)';
  blurValue = offset * 0.08;
  parallaxDINIZ1.style.filter = 'blur(' + blurValue + 'px)';

  offset = window.pageYOffset;
  parallaxMOUNTAINS.style.transform = 'translateY(' + offset * 0.4 + 'px)';

  offset = window.pageYOffset;
  parallaxME1.style.transform = 'translateY(' + offset * 0.15 + 'px)';


  offset = window.pageYOffset;
  parallaxME2.style.transform = 'translateY(' + offset * 0.1 + 'px)';

  offset = window.pageYOffset;
  parallaxFE.style.transform = 'translateY(' + offset * 0.4 + 'px)';
  blurValue = offset * 0.02;
  parallaxFE.style.filter = 'blur(' + blurValue + 'px)';
}

// Adiciona o event listener com o throttling
window.addEventListener('scroll', throttleScroll(updateParallaxStyles, 0));


class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.navList.classList.toggle(this.activeClass);
  }
  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick)
  }
  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".navbar-items",
  ".navbar-items li",
);
mobileNavbar.init();

const observer = new IntersectionObserver   ((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } else {
          entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));




const aboutMeBig = document.getElementById('aboutMe-big');
const larguraTexto1 = aboutMeBig.offsetWidth;
const larguraTela1 = window.innerWidth;
const posicaoInicialTexto1 = larguraTela1 / 2 - larguraTexto1 / 2;
const fatorEscala1 = 1; // ajuste o valor de acordo com sua preferência

aboutMeBig.style.left = posicaoInicialTexto1 + 'px';

document.addEventListener('mousemove', function(event) {
  const posicaoMouse = event.clientX * fatorEscala1; // multiplicar por fatorEscala para reduzir o deslocamento
  const posicaoTexto = posicaoMouse / larguraTela1 * larguraTexto1;
  const novaPosicaoTexto = posicaoInicialTexto1 + posicaoTexto - larguraTexto1 / 2;
  aboutMeBig.style.left = novaPosicaoTexto + 'px';
});


const projectsBig = document.getElementById('projects-big');
const larguraTexto2 = projectsBig.offsetWidth;
const larguraTela2 = window.innerWidth;
const posicaoInicialTexto2 = larguraTela2 / 2 - larguraTexto2 / 2;
const fatorEscala2 = 1; // ajuste o valor de acordo com sua preferência

projectsBig.style.left = posicaoInicialTexto2 + 'px';

document.addEventListener('mousemove', function(event) {
  const posicaoMouse = event.clientX * fatorEscala2; // multiplicar por fatorEscala para reduzir o deslocamento
  const posicaoTexto = posicaoMouse / larguraTela2 * larguraTexto2;
  const novaPosicaoTexto = posicaoInicialTexto2 + posicaoTexto - larguraTexto2 / 2;
  projectsBig.style.left = novaPosicaoTexto + 'px';
});


const contactMeBig = document.getElementById('contactMe-big');
const larguraTexto3 = contactMeBig.offsetWidth;
const larguraTela3 = window.innerWidth;
const posicaoInicialTexto3 = larguraTela3 / 2 - larguraTexto3 / 2;
const fatorEscala3 = 1; // ajuste o valor de acordo com sua preferência

contactMeBig.style.left = posicaoInicialTexto3 + 'px';

document.addEventListener('mousemove', function(event) {
  const posicaoMouse = event.clientX * fatorEscala3; // multiplicar por fatorEscala para reduzir o deslocamento
  const posicaoTexto = posicaoMouse / larguraTela3 * larguraTexto3;
  const novaPosicaoTexto = posicaoInicialTexto3 + posicaoTexto - larguraTexto3 / 2;
  contactMeBig.style.left = novaPosicaoTexto + 'px';
});






const container1 = document.querySelector('.univ-containerPUC');
const modal1 = document.querySelector('.modalpuc');
const closeModalButton1 = document.querySelector('.close-modalpuc');
const whiteback = document.querySelector('.whiteback');

container1.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal1.style.display = 'flex';
  modal1.style.opacity = 0;
  modal1.style.transform = 'translateY(-50%) translateX(-100%)';
  modal1.classList.add('show');
  setTimeout(function() {
    modal1.style.opacity = 1;
    modal1.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton1.addEventListener('click', function() {
  whiteback.style.opacity = 0;
  modal1.style.opacity = 0;
  modal1.style.transform = 'translateY(-50%) translateX(-100%)';

  setTimeout(function() {
    modal1.classList.remove('show');
  }, 500);
});

const container0 = document.querySelector('.univ-containerUAM');
const modal0 = document.querySelector('.modaluam');
const closeModalButton0 = document.querySelector('.close-modaluam');

container0.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal0.style.display = 'flex';
  modal0.style.opacity = 0;
  modal0.style.transform = 'translateY(-50%) translateX(-100%)';
  modal0.classList.add('show');
  setTimeout(function() {
    modal0.style.opacity = 1;
    modal0.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton0.addEventListener('click', function() {
  whiteback.style.opacity = 0;
  modal0.style.opacity = 0;
  modal0.style.transform = 'translateY(-50%) translateX(-100%)';

  setTimeout(function() {
    modal0.classList.remove('show');
  }, 500);
});


const container2 = document.querySelector('.univ-containerZTM');
const modal2 = document.querySelector('.modalztm');
const closeModalButton2 = document.querySelector('.close-modalztm');

container2.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal2.style.display = 'flex';
  modal2.style.opacity = 0;
  modal2.style.transform = 'translateY(-50%) translateX(100%)';
  modal2.classList.add('show');
  setTimeout(function() {
    modal2.style.opacity = 1;
    modal2.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton2.addEventListener('click', function() {
  whiteback.style.opacity = 0;
  modal2.style.opacity = 0;
  modal2.style.transform = 'translateY(-50%) translateX(100%)';

  setTimeout(function() {
    modal2.classList.remove('show');
  }, 500);
});




const container3 = document.querySelector('#pj-bt1');
const modal3 = document.querySelector('#modal-pj1');
const closeModalButton3 = document.querySelector('.close-modalPJ1');

container3.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal3.style.display = 'flex';
  modal3.style.opacity = 0;
  modal3.style.transform = 'translateY(-50%) translateX(-100%)';
  modal3.classList.add('show');
  setTimeout(function() {
    modal3.style.opacity = 1;
    modal3.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton3.addEventListener('click', function() {
  setTimeout(function() {
    modal3.classList.remove('show');
  }, 500);

  whiteback.style.opacity = 0;
  modal3.style.opacity = 0;
  modal3.style.transform = 'translateY(-50%) translateX(-100%)';
});


const container4 = document.querySelector('#pj-bt2');
const modal4 = document.querySelector('#modal-pj2');
const closeModalButton4 = document.querySelector('.close-modalPJ2');

container4.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal4.style.display = 'flex';
  modal4.style.opacity = 0;
  modal4.style.transform = 'translateY(-50%) translateX(-100%)';
  modal4.classList.add('show');
  setTimeout(function() {
    modal4.style.opacity = 1;
    modal4.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton4.addEventListener('click', function() {
  whiteback.style.opacity = 0;
  modal4.style.opacity = 0;
  modal4.style.transform = 'translateY(-50%) translateX(-100%)';

  setTimeout(function() {
    modal4.classList.remove('show');
  }, 500);
});


const container5 = document.querySelector('#pj-bt3');
const modal5 = document.querySelector('#modal-pj3');
const closeModalButton5 = document.querySelector('.close-modalPJ3');


container5.addEventListener('click', function() {
  whiteback.style.opacity = 1;
  modal5.style.display = 'flex';
  modal5.style.opacity = 0;
  modal5.style.transform = 'translateY(-50%) translateX(-100%)';
  modal5.classList.add('show');
  setTimeout(function() {
    modal5.style.opacity = 1;
    modal5.style.transform = 'translateY(-50%) translateX(-50%)';
  }, 100);
});

closeModalButton5.addEventListener('click', function() {
  whiteback.style.opacity = 0;
  modal5.style.opacity = 0;
  modal5.style.transform = 'translateY(-50%) translateX(-100%)';

  setTimeout(function() {
    modal5.classList.remove('show');
  }, 500);
});