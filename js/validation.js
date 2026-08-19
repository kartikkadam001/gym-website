validation.js
document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[0-9]{10}$/;

if(name==""){
alert("Enter your name");
return;
}

if(!email.match(emailPattern)){
alert("Enter a valid email");
return;
}

if(!phone.match(phonePattern)){
alert("Enter a valid 10-digit phone number");
return;
}

if(message==""){
alert("Message cannot be empty");
return;
}

alert("Message sent successfully!");

document.getElementById("contactForm").reset();

});