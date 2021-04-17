
const form = document.querySelector("form");
const field = document.querySelector("input");
const cancel = document.querySelector(".cancel");
const opacity = document.querySelector(".opaci");
const success = document.querySelector(".success1");
const text = document.querySelector(".tx");



form.addEventListener("submit", () =>{
Email.send({
     Host: "smtp.mailtrap.io",
     Username: "954208a4315bcd",
    Password: "0dc8d1a2d9f3dc",
    SecureToken: " e6764f00-a908-41ee-89fb-edf07315b90c",
    To: 'admwabri@gmail.com',
    From:form.elements["email"].value,
    Subject: "someone sends you message",
    Body:'Name: '+form.elements["name"].value +  '<br>' + 'Email: ' + form.elements['email'].value + '<br>' + 'Message: ' + form.elements['message'].value,
}).then(
  msg => success.style.display = "block",
  text.innerHTML = "Thank You, " + form.elements['name'].value + "." +"<br>" + "We'll be in touch soon!",
        opacity.style.display ="block",
        cancel.addEventListener("click", ()=>{
            success.style.display ="none";
            opacity.style.display ="none";
            form.elements['name'].value = '';
            form.elements['email'].value = '';
            form.elements['message'].value = '';
            
        }),
        setTimeout(function(){
            success.style.display ="none";
            opacity.style.display ="none";
            form.elements['name'].value = '';
            form.elements['email'].value = '';
            form.elements['message'].value = '';
        }, 10000)

  )
    


})



window.addEventListener('scroll', function(){
    let load = document.querySelector('.p-a');
    let limit = window.scrollY > 600;
    load.classList.toggle('load',limit);

})


window.addEventListener('scroll', function(){
    let loadb = document.querySelector('.p-b');
    let limit = window.scrollY > 600;
    loadb.classList.toggle('load',limit);

})

window.addEventListener('scroll', function(){
    let loadc = document.querySelector('.p-c');
    let limit = window.scrollY > 600;
    loadc.classList.toggle('load',limit);

})