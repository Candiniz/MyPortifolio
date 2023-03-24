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
window.addEventListener('scroll', throttleScroll(updateParallaxStyles, 100));


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
