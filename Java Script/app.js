const menu = document.querySelector('.menu');
const navopen = document.querySelectorAll('.nav-open');

menu.addEventListener("click" , function(){
   navopen.classList.toggle("change");
});
