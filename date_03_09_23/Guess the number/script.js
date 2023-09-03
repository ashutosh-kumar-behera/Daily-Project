const form = document.querySelector('form');
const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const start = document.querySelector("#start");
const output = document.querySelector("#output");
const guessDisplay = document.querySelector("#guessDisplay");


let guessArray = [];
let randomNumber;

const onStartGame=()=>{
    output.textContent="";
    guessDisplay.textContent="";
    guessArray=[];
    randomNumber = Math.round(Math.random()*100);
    input.disabled = false;
    submit.disabled = false;
    start.disabled = true;
    input.focus()
}

const onFinishGame = (message)=>{
    output.innerHTML = message;
    input.disabled = true;
    submit.disabled = true;
    start.disabled = false;
    start.focus();
}

const onInput=(e)=>{
    e.preventDefault();
    const userInput =parseInt(input.value);
    input.value="";
    guessArray.push(userInput);
    guessDisplay.innerHTML=`Your guesses: ${guessArray.join(", ")}`;

    if(userInput > randomNumber){
        output.innerHTML="Too High!";
    }else if(userInput < randomNumber){
        output.innerHTML="Too Low!";
    }else{
        onFinishGame("You got it! Congrats")
        return;
    }
    input.focus();
    
    if(guessArray.length >= 10){
        onFinishGame("You lost! The Number was " + randomNumber);
    }
}

form.addEventListener('submit', onInput);
start.addEventListener('click', onStartGame);
onStartGame();