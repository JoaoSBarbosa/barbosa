// Menu Mobile
function initMobileMenu() {
  const btnMobile = document.getElementById("btnMobile");

  function toggleMenu(e) {
    if (e.type === "touchstart") e.preventDefault();

    const nav = document.querySelector(".menu");
    nav.classList.toggle("ativo");
    const active = nav.classList.contains("ativo");
    e.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
      e.currentTarget.setAttribute("aria-label", "Fechar menu");
    } else {
      e.currentTarget.setAttribute("aria-label", "Abrir menu");
    }
  }
  btnMobile.addEventListener("click", toggleMenu);
  btnMobile.addEventListener("touchstart", toggleMenu);
}
initMobileMenu();

// Efeito maquina de escrever
function activeLetter(e) {
  const arrayLetter = e.innerHTML.split("");
  e.innerHTML = "";
  arrayLetter.forEach((letter, index) => {
    setTimeout(() => {
      e.innerHTML += letter;
    }, 75 * index);
  });
}

const devTitle = document.querySelector(".typing");
activeLetter(devTitle);

// Scroll efeito

function initAnimationScrool() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
initAnimationScrool();

function scrollBtn() {
  function subirTela() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const scrollBtn = document.querySelector(".scroll-button");
  scrollBtn.addEventListener("click", subirTela);

  function hiddenBtn() {
    if (window.scrollY === 0) {
      document.querySelector(".scroll-button").style.display = "none";
    } else {
      document.querySelector(".scroll-button").style.display = "flex";
    }
  }
  window.addEventListener("scroll", hiddenBtn);
}
scrollBtn();