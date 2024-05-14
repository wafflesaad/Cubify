document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
  });
console.log("Script Running!");
const learn = document.getElementById("learnmore");
const navi = document.getElementById("navi");
const mainBody = document.getElementById('main-content');
const hideCont = document.getElementById('hide-cont');
const foot = document.getElementById('foot');

learn.addEventListener("click", ()=>{
    console.log("Learn More Clicked!");
    // document.querySelector('nav').classList.add('newStyle');
    navi.classList.add("newStyle"); 
    mainBody.style.display = "block";
    hideCont.style.display = "none";
});