//
const jokeEl = document.getElementById('joke');
const button = document.getElementById('btn');

generateJoke();

function generateJoke() {
    jokeEl.innerHTML = "Loading...."
      fetch('https://icanhazdadjoke.com',{headers:{Accept: 'application/json'}})
        .then((res) => res.json())
        .then((data) => {
          jokeEl.innerHTML = data.joke
        }).catch(e=>jokeEl.innerHTML= e.message);
    }

    button.addEventListener('click',generateJoke);