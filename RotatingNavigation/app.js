const OPEN = document.getElementById('open');
const CLOSE = document.getElementById('close');
const CONTAINER = document.querySelector('.container');

OPEN.addEventListener('click',()=>{
    CONTAINER.classList.add('show-nav');
})

CLOSE.addEventListener('click',()=>{
    CONTAINER.classList.remove('show-nav');
})