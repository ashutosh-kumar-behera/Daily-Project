let outerCheck = document.querySelector("#outerCheck");
let innerCheck = document.querySelector("#innerCheck");
let innerContainer = document.querySelector(".inner-container");

outerCheck.addEventListener('change', function(){
    if(outerCheck.checked){
      document.body.classList.add("dark");
    }else{
      document.body.classList.remove("dark");
    }
    innerCheck.checked = outerCheck.checked;
    changeInner();
})

function changeInner(){
  if(innerCheck.checked){
    innerContainer.classList.add('dark');
  }else{
    innerContainer.classList.remove('dark');
  }
}


innerCheck.addEventListener('change',changeInner)