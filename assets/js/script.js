const btnMobile = document.getElementById('btnMobile');

function toggleMenu(){
   const nav = document.querySelector(".menu");
   nav.classList.toggle('ativo');
}
btnMobile.addEventListener('click', toggleMenu);