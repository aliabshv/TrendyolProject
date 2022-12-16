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

// buttonSellect1.addEventListener('click',()=>{
// console.log(centerImg.src);
// centerImg.src="./photo/Rectangle293.svg"  
// centerImg.style.width='360px' 
// centerImg.style.marginTop='-3px' 
// console.log(centerImg.src); 
// buttonSellect1.addEventListener('click',()=>{
//     centerImg.src="./photo/Rectangle 93.svg" 
// })
    
// })


let centerImgs=["./photo/Rectangle93.svg","./photo/Rectangle292.svg","./photo/Rectangle293.svg"]
// buttonSellect1.addEventListener('click',ha)
// function ha(){
//     return
//     i=0
//         centerImg.src=`${centerImgs[i]}`
//         i++;
        
// }
// ha()
let i=0;
    
        buttonSellect1.addEventListener('click',()=>{
            if(i<centerImgs.length){
                centerImg.src=`${centerImgs[i]}`;
                console.log(centerImgs[i])
                i++;
            }
         
            
        })
        buttonSellect2.addEventListener('click',()=>{
            if(centerImgs.length>i){
                centerImg.src=`${centerImgs[i]}`;
                console.log(centerImgs[i])
                i--;
            }
         
            
        })
    

