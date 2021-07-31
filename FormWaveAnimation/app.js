let labels = document.querySelectorAll('.form-control label');


labels.forEach(label=>{
    label.innerHTML = label.innerText
    .split('')
    .map((p,idx)=>`<span style="transition-delay:${idx*50}ms">${p}</span>`)
    .join('')
})