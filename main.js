let sliderImages=document.querySelectorAll('.slide');
const arrowRight=document.querySelector('#arrow-right')
const arrowLeft=document.querySelector('#arrow-left')

let current=0;

function reset(){
    for(let i=0; i<sliderImages.length; i++){
        sliderImages[i].style.display='none'
    }
}

function startSlide(){
    reset()
    sliderImages[0].style.display='block'
}



function slideRight(){
    reset();

    sliderImages[current +1].style.display='block';
    current++;

}

function slideLeft(){
    sliderImages[current -1].style.display='block'
    current--;
}

arrowLeft.addEventListener('click', function(){
    if(current===0){
        current=sliderImages.length
        finalSlide()
    }
    slideLeft()
})

arrowRight.addEventListener('click', function(){
    if(current===sliderImages.length -1){
        current=-1
    }
    slideRight();
})

startSlide()