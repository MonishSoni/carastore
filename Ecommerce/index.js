
// variables

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const mainImg = document.getElementById("mainimg");
const smallImg = document.getElementsByClassName('smallImg');



// navbar menu  toggle

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}


if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}


// image change

smallImg[0].onclick = function () {
    mainImg.src = smallImg[0].src;
   
}

smallImg[1].onclick = function () {
    mainImg.src = smallImg[1].src;
 
}

smallImg[2].onclick = function () {
    mainImg.src = smallImg[2].src;
 
}

smallImg[3].onclick = function () {
    mainImg.src = smallImg[3].src;

}