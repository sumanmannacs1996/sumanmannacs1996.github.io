const ADD_MOVIE_BTN = document.querySelector("header button");
const ADD_MOVIE_MODAL = document.getElementById("add-modal");
const BACKDROP = document.getElementById("backdrop");
const CANCLE_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--passive");
const FINAL_ADD_MOVIE_BTN = ADD_MOVIE_MODAL.querySelector(".btn--success");
const USER_INPUTS = ADD_MOVIE_MODAL.querySelectorAll("input");
const ENTRY_SECTION = document.getElementById("entry-text");
const LIST_ROOOT = document.getElementById("movie-list");
const ASK_DELETE_MODAL = document.getElementById("delete-modal");
const REJECT_DELETION = ASK_DELETE_MODAL.querySelector(".btn--passive");
const ACCEPT_DELETION = ASK_DELETE_MODAL.querySelector(".btn--danger");
let UNIQUE_ID =0;

let Movies =[];


const ConformDeletionHandler=(movieId)=>{
    deleteMovie(movieId);
    rejectDeletionHabdler();
}

const deleteMovie=(movieId)=>{
    let index = Movies.findIndex((p)=>p.id == movieId);
    //LIST_ROOOT.children[index].remove();
	LIST_ROOOT.removeChild(LIST_ROOOT.children[index]);
    Movies.splice(index,1);
    updateUI();
}

const deleteMovieHandler=(movieId)=>{
    ASK_DELETE_MODAL.classList.add("visible");
    toggleBackDrop();
    REJECT_DELETION.addEventListener("click",rejectDeletionHabdler);
    ACCEPT_DELETION.addEventListener("click",ConformDeletionHandler.bind(this,movieId));
}

const renderNewMovieElement =(title,imageUrl,rating,id)=>{
    const newMovieElemnt = document.createElement("li");
    newMovieElemnt.className ='movie-element';
    newMovieElemnt.innerHTML=`
    <div class ="movie-element__image">
        <img src ="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/5 stars</p>
    </div>
    `;
    newMovieElemnt.addEventListener("click",deleteMovieHandler.bind(this,id));
    LIST_ROOOT.append(newMovieElemnt);

}

const updateUI= ()=>{
    if(Movies.length == 0){
        ENTRY_SECTION.style.display="block";
    }
    else{
        ENTRY_SECTION.style.display="none";
    }
}

const clearMovieInputs =()=>{
    USER_INPUTS[0].value ='';
    USER_INPUTS[1].value ='';
    USER_INPUTS[2].value ='';
}

const addMovieHandler= ()=>{
    const titleValue = USER_INPUTS[0].value;
    const imageValue = USER_INPUTS[1].value;
    const ratingValue = USER_INPUTS[2].value;
    if(titleValue.trim() == '' || imageValue.trim() == '' || ratingValue.trim() =='' || +ratingValue < 1 || +ratingValue > 5){
        alert("Please Enter Valid Values (Rating between 1 and 5).");
        return false;
    }
    let movieId = UNIQUE_ID++;
    let newMovie ={
        title:titleValue,
        image:imageValue,
        rating:ratingValue,
        id:movieId
    }
    Movies.push(newMovie);
    closeMovieModel();
    clearMovieInputs();
    renderNewMovieElement(titleValue,imageValue,ratingValue,movieId);
    updateUI();
}

const backdropClickHandler =()=>{
    closeMovieModel();
    ASK_DELETE_MODAL.classList.remove("visible");
}

const toggleBackDrop =()=>{
    BACKDROP.classList.toggle("visible");
}

const showMovieModal=()=>{
    ADD_MOVIE_MODAL.classList.add("visible");
    toggleBackDrop();
}

const closeMovieModel =()=>{
    ADD_MOVIE_MODAL.classList.remove("visible");
    toggleBackDrop();

}

const rejectDeletionHabdler =()=>{
    toggleBackDrop();
    ASK_DELETE_MODAL.classList.remove("visible");

}



ADD_MOVIE_BTN.addEventListener("click",showMovieModal);
BACKDROP.addEventListener("click",backdropClickHandler);
CANCLE_ADD_MOVIE_BTN.addEventListener("click",backdropClickHandler);
FINAL_ADD_MOVIE_BTN.addEventListener("click",addMovieHandler);
