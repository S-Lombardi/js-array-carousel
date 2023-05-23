"use strics";

//Inserisco le immagini in un array
let pics = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp"
]

//variabile per inserire tag e immagini 
let boxImg = "";

//Creo i tag e inserisco le immagini
for(let i=0 ; i < pics.length; i++ ) {
    
    boxImg +=   `<div class="box-img">
                    <img src="${pics[i]}">
                </div>`
   
}

//Inserisco la struttura creata in precedenza nella pagina 
document.getElementById('wrap-slide').innerHTML = boxImg;

//Rendo display:block la prima immagine inserendo la classe block
document.querySelector(".box-img").classList.add("block");

//variabili per recuperare i due pulsanti
let buttonUp = document.getElementById("up");
let buttonDown = document.getElementById("down");

//varabile per recuperare le immagini
let allBoxImg = document.getElementsByClassName("box-img");

//variabile per indice immagine
let indiceImmagine = 0;

//pulsante Up
buttonUp.addEventListener("click", function(){

    if(indiceImmagine < allBoxImg.length -1 ){
        allBoxImg[indiceImmagine].classList.remove("block");

        indiceImmagine = indiceImmagine +1 ;

        allBoxImg[indiceImmagine].classList.add("block");
    }
    else{
        allBoxImg[indiceImmagine].classList.remove("block");
        indiceImmagine = 0;
        allBoxImg[indiceImmagine].classList.add("block");
    }

});

//pulsante Down
buttonDown.addEventListener("click", function(){

    if(indiceImmagine > 0) {
        allBoxImg[indiceImmagine].classList.remove("block");
        indiceImmagine = indiceImmagine - 1;
        allBoxImg[indiceImmagine].classList.add("block");
    }
    else{
        allBoxImg[indiceImmagine].classList.remove("block");
        indiceImmagine = allBoxImg.length -1;
        allBoxImg[indiceImmagine].classList.add("block");
    }
});