let rightBottomRightButton1 = document.querySelector(".rightBottomRightButton1")
let rightBottomRightButton2 = document.querySelector(".rightBottomRightButton2")
let rightBottomRightButtonP = document.querySelector(".rightBottomRightButtonP")
let rightBottomRightBildirisAlarm = document.querySelector(".rightBottomRightBildirisAlarm")
let rightBottomRightBildirisAlarmImg = document.querySelector('.rightBottomRightBildirisAlarmImg')

rightBottomRightButton1.onmouseup = function () {
    rightBottomRightButton1.style.backgroundColor = "white"

    if (rightBottomRightButtonP.innerText > 1) {

        rightBottomRightButtonP.innerText--
    }

}
rightBottomRightButton1.onmousedown = function () {
    rightBottomRightButton1.style.backgroundColor = "gray"
}
rightBottomRightButton2.onmousedown = function () {
    rightBottomRightButton2.style.backgroundColor = "gray"
}


rightBottomRightButton2.onclick = function () {
    rightBottomRightButton2.style.backgroundColor = "white"

    rightBottomRightButtonP.innerText++
}

changeColor = () => {
    rightBottomRightBildirisAlarm.style.backgroundColor = "#FF8000"
    rightBottomRightBildirisAlarm.style.border = "2px solid gray"
    rightBottomRightBildirisAlarm.removeEventListener('click', () => {
        rightBottomRightBildirisAlarm.style.backgroundColor = "red"
        rightBottomRightBildirisAlarm.style.border = "2px solid gray"
    })
}
rightBottomRightBildirisAlarm.addEventListener("click", changeColor)



/////                                            SOL HİSSƏ//////////////////////


let buttonSellect1=document.querySelector('.buttonSellect1')
let buttonSellect2=document.querySelector('.buttonSellect2')
let center2=document.querySelector('.center2')
let center=document.querySelector('.center')
let centerImg=document.querySelector('.centerImg')

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  
  slides[slideIndex-1].style.display = "block";  

}
