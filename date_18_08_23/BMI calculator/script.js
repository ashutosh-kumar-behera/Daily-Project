const form = document.querySelector('form');
const answer = document.querySelector('.answer');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const hi = parseInt(document.querySelector('#height').value);
    const wt = Number(document.querySelector("#weight").value);

    if(hi === "" || hi <= 0 || isNaN(hi)){
        answer.innerHTML = "Please give a valid height";
    }else if(wt === "" || wt <= 0 || isNaN(wt)){
        answer.innerHTML = "Please give a valid weight";
    }else{
        const bmi =wt/ Math.pow(hi/3.28084, 2);
        answer.innerHTML = bmi.toFixed(2);
        if (bmi < 18.5) {
            document.querySelector(".under-weight").style.border = "1px solid red";
        } else if (bmi < 24.9) {
            document.querySelector(".normal-weight").style.border = "1px solid red";
        } else {
            document.querySelector(".over-weight").style.border = "1px solid red";
        }
    }
})

