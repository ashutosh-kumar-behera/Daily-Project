const span = document.querySelector("h1 span");
const skillArr = ["Developer.", "Coder.", "Student."];
let arrIdx = 0;
let forIdx = 0;
let revIdx=0;
let delay=false;

function autoType(){
    if(arrIdx < skillArr.length){
        if (forIdx < skillArr[arrIdx].length) {
            span.innerText += skillArr[arrIdx].charAt(forIdx);
            forIdx++, revIdx++, delay = true;
        } else if (delay) {
            delay=false;
        } else if (revIdx >= 0) {
          span.innerText = skillArr[arrIdx].slice(0, revIdx);
          revIdx--;
        } else {
          arrIdx++, forIdx = 0, revIdx = 0;
        }
    }else{
        arrIdx=0;
    }
}
setInterval(autoType , 200)