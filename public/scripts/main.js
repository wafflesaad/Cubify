console.log("Script Running!");
const learn = document.getElementById("learnmore");
const navi = document.getElementById("navi");

learn.addEventListener("click", ()=>{
    console.log("Learn More Clicked!");
    // document.querySelector('nav').classList.add('newStyle');
    navi.classList.add("newStyle"); 
});