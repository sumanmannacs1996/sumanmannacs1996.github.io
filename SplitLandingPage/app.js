let LEFT = document.querySelector('.left');
let RIGHT = document.querySelector('.right');

let COONTAINER = document.querySelector('.container');

LEFT.addEventListener("mouseenter",()=>{
    COONTAINER.classList.add("hover-left");
})
LEFT.addEventListener("mouseleave",()=>{
    COONTAINER.classList.remove("hover-left");
})

RIGHT.addEventListener("mouseenter",()=>{
    COONTAINER.classList.add("hover-right");
})
RIGHT.addEventListener("mouseleave",()=>{
    COONTAINER.classList.remove("hover-right");
})