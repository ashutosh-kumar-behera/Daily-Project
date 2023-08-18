const btn = document.querySelectorAll(".btn");
console.log(btn);

btn.forEach(function (button) {
  console.log(button);

  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    
    if (e.target.id === "red") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      document.body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "purple") {
      document.body.style.backgroundColor = e.target.id;
    }
  });
});
