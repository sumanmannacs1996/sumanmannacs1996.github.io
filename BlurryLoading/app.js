const BG = document.querySelector('.bg');
const LOADING_TEXT = document.querySelector(".loading-text");

let load =0;

let interval = setInterval(clearing,40);

let scale =(num,in_min,in_max,out_min,out_max)=>{
    return((num - in_min) * (out_max - out_min) / (in_max -in_min) + out_min);
}

function clearing(){
    load++;
    if(load > 99){
        clearInterval(interval);
    }
    LOADING_TEXT.innerHTML= `${load}%`;
    LOADING_TEXT.style.opacity = scale(load,0,100,1,0);
    BG.style.filter =`blur(${scale(load,0,100,30,0)}px)`;
}





