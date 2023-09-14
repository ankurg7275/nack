const slides = document.querySelectorAll(".slide")
var counter = 0;

slides.forEach(
  (slide,index) => {
 slide.style.left = `${index * 100}%`
  }
)

const goFirst = () =>{
    counter=0;
    slideImage();
}
const goSecond = () =>{
    counter=1;
    slideImage();
}
const goThird = () =>{
    counter=2;
    slideImage();
}

const slideImage = () => {
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateX(-${counter *100}%)`
        }
    )
}



