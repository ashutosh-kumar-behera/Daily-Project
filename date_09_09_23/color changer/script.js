const container = document.querySelector(".container");

container.addEventListener("mousemove", (e)=>{
    const rectangleLocation = container.getBoundingClientRect();
    const insideRect = e.pageX - rectangleLocation.left;
    console.log(e);

    const percentages = Math.floor((insideRect * 100) / 400);

    if (percentages < 50) {
      const colorPer = Math.floor((255 * (100 - percentages)) / 100);
      container.style.backgroundColor = `rgb(${colorPer}, 0, 0)`;
    } else {
      const colorPer = Math.floor((255 * percentages) / 100);
      container.style.backgroundColor = `rgb(0, 0, ${colorPer})`;
    }
})