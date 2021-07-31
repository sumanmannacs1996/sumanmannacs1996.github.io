let BOXES =document.querySelectorAll('.box');
let container = document.getElementById('container');

const scroleHandler=()=>{
    //console.log(window.innerHeight);
    //console.log(document.documentElement.scrollTop);
    //console.log(document.documentElement.offsetHeight);
    if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.offsetHeight){
        
        /*let newBox = document.createElement("div");
        let boxContent = document.createElement('span');
        boxContent.innerHTML = "Content";
        newBox.appendChild(boxContent);
        newBox.classList.add('box');
        newBox.style.display('inline-block');
        container.appendChild(newBox);
        */
    }
    let traggerPoint = window.innerHeight / 2 * 1.4 ;
    
    BOXES.forEach(box=>{
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < traggerPoint){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    })
}

scroleHandler();

document.addEventListener('scroll',scroleHandler);