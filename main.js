let menu = document.querySelector(".menu");
let times = document.querySelector(".times");
let nav = document.querySelector("nav");
menu.addEventListener("click", ()=>{
    menu.style.display = "none";
    times.style.display = "block";
    nav.style.display ="block";
  
})

times.addEventListener("click", ()=>{
    times.style.display = "none";
    menu.style.display ="block";
    nav.style.display ="none";
})



window.addEventListener("load", function(){
    let load = document.querySelector(".loader");
    load.style.display = "none"
})