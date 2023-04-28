let slides=document.querySelector('.slides').children;
let caption_slide=document.querySelectorAll('.caption-slide');
let next = document.querySelector('.next-slide');
let prev = document.querySelector('.prev-slide');
// console.log(slides[1]);
let L_slider = slides.length;
// console.log(L_slider);
let index=0;

function prevslide(){
    index--;
    if(index < 0){
        index=L_slider -1;
    }
    for(let i = 0 ; i < L_slider; i++){
        slides[i].classList.remove('active');
        caption_slide[i].classList.remove('fade-up');
    }
    slides[index].classList.add('active');
    caption_slide[index].classList.add('fade-up');
    // console.log(index);
}
function nextslide(){
    index++;
    if(index >= L_slider){
        index=0;
    }
    for(let i = 0 ; i < L_slider; i++){
        slides[i].classList.remove('active');
        caption_slide[i].classList.remove('fade-up');
    }
    slides[index].classList.add('active');
    caption_slide[index].classList.add('fade-up');
    // console.log(index);
}
setInterval(nextslide, 5000);

next.addEventListener('click' , nextslide);
prev.addEventListener('click' , prevslide);

