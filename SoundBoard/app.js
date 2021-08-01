const sounds = ['applause','boo','gasp','tada','victory','wrong'];

const stop=()=>{
    sounds.forEach(sound=>{
        const songs =document.getElementById(sound);
        songs.pause();
        songs.currentTime =0;
    })
}


sounds.forEach(sound=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText= sound;

    btn.addEventListener('click',()=>{
        stop();
        document.getElementById(sound).play();

    })

    document.getElementById('btn').appendChild(btn);
})