
const inputs = document.querySelector("form");
const Body = document.querySelector("body");
const success = document.querySelector(".show");
const from = document.querySelector(".from");
const cancel = document.querySelector(".cancel");
const field = document.querySelector("input");



inputs.addEventListener("submit", () =>{
Email.send({
     Host: "smtp.mailtrap.io",
     Username: "954208a4315bcd",
    Password: "0dc8d1a2d9f3dc",
    SecureToken: " e6764f00-a908-41ee-89fb-edf07315b90c",
    To: 'admwabri@gmail.com',
    From:inputs.elements["email"].value,
    Subject: "someone sends you message",
    Body: '<b>' + inputs.elements["email"].value + "<b/> <br>"  + " subscribe to your news letter !",
}).then(
  msg => success.style.display ="flex",

  cancel.addEventListener("click", ()=>{
      success.style.display = "none";
      field.value='';
  }),)

setTimeout(function(){
    success.style.display = "none";
    field.value='';
},8000);

})