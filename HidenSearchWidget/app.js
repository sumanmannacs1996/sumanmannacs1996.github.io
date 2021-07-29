const SEARCH = document.querySelector('.search');
const INPUT = document.querySelector('.input');
const BUTTON = document.querySelector('.btn');

BUTTON.addEventListener('click',()=>{
    SEARCH.classList.toggle('active');
    INPUT.focus();
})