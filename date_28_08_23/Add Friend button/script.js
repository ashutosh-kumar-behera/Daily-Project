let h2 = document.querySelector('h2');
let btn = document.querySelector('button');
let flag = false;

btn.addEventListener('click', function(){
    if(flag){
        h2.innerHTML = "friends";
        h2.style.color="green";
        btn.innerHTML = "Remove Friend";
        btn.style.color='#fff'
        btn.style.backgroundColor='red'
        flag = false;
    }else{
        h2.innerHTML = "Stranger";
        h2.style.color="red";
        btn.innerHTML = "Add Friend";
        btn.style.color='#fff'
        btn.style.backgroundColor='green'
        flag=true;
    }
});