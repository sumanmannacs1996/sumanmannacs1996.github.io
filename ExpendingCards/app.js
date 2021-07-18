const panels = document.querySelectorAll('.panel');

const removeActiveClass=()=>{
    panels.forEach((p)=>{
        p.classList.remove('active');
    })
}

panels.forEach((p)=>{
    p.addEventListener('click',()=>{
        removeActiveClass();
        p.classList.add('active');
    })
})