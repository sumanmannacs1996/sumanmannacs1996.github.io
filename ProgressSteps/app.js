const PROGRESS_BAR = document.getElementById('progress');
const PREV = document.getElementById('prev');
const NEXT = document.getElementById("next");
const CIRCLES = document.querySelectorAll('.circle');

let currentActive = 1;

const update =()=>{
    let percenrage = ((currentActive-1)/(CIRCLES.length-1))*100 + "%";
    PROGRESS_BAR.style.width= percenrage;
    
    CIRCLES.forEach((cercle,idx)=>{
        if(idx < currentActive){
            cercle.classList.add('active');
            //console.log(currentActive,idx);
        }
        else{
            cercle.classList.remove('active');
        }
    })

    if(currentActive ===1){
        PREV.disabled = true;
    }else if(currentActive === CIRCLES.length){
        NEXT.disabled = true;
    }else{
        PREV.disabled = false;
        NEXT.disabled = false;
    }
}

NEXT.addEventListener('click',()=>{
    if(CIRCLES.length > currentActive){
        currentActive++;
        update();
    }
});
PREV.addEventListener('click',()=>{
    if(1 < currentActive){
        currentActive--;
        update();
    }
});


fetch('https://api.coindcx.com/exchange/ticker').then(res=>{
                return res.json();
            }).then(data=>{
                console.log(data);
            }).catch(e=>console.log(e));