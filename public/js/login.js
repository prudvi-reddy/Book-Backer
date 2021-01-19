const inputs = document.querySelectorAll(".input");
const eyeOne = document.querySelector(".eye1");
const eyeTwo = document.querySelector(".eye2");
let showPwd1 = false;
let showPwd2 = false;

function addcl() {
   let parent = this.parentNode.parentNode;
   parent.classList.add("focus");
}

function remcl() {
   let parent = this.parentNode.parentNode;
   if (this.value == "") {
      parent.classList.remove("focus");
   }
}

inputs.forEach((input) => {
   input.addEventListener("focus", addcl);
   input.addEventListener("blur", remcl);
});

var loginForm = document.getElementById("login");
var registerForm = document.getElementById("register");
var Buttonbtn = document.getElementById("btn");
var LogBtn = document.getElementById("loginBtn");
var RegBtn = document.getElementById("regBtn");

function register() {
   loginForm.style.left = "-25em";
   registerForm.style.left = "0em";
   Buttonbtn.style.left = "6.2em";
   Buttonbtn.style.width = "7.83em";
   Buttonbtn.style.borderRadius = "0 2em 2em 0";
   RegBtn.style.color = "white";
   LogBtn.style.color = "black";
   Buttonbtn.style.clipPath = "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)";
}

function login() {
   loginForm.style.left = "0em";
   registerForm.style.left = "25em";
   Buttonbtn.style.left = "0";
   Buttonbtn.style.width = "7.3em";
   Buttonbtn.style.borderRadius = "2em 0 0 2em";
   LogBtn.style.color = "white";
   RegBtn.style.color = "black";
   Buttonbtn.style.clipPath = "polygon(0 0, 100% 0, 85% 100%, 0% 100%)";
}

eyeOne.addEventListener("click", () => {
   const password1 = document.getElementById("password1");
   const openEye1 = document.getElementById("openEye1");
   const closeEye1 = document.getElementById("closeEye1");

   openEye1.classList.toggle("hide");
   closeEye1.classList.toggle("hide");

   if (showPwd1) {
      password1.setAttribute("type", "password");
   } else {
      password1.setAttribute("type", "text");
   }

   showPwd1 = !showPwd1;
});

eyeTwo.addEventListener("click", () => {
   const password2 = document.getElementById("password2");
   const openEye2 = document.getElementById("openEye2");
   const closeEye2 = document.getElementById("closeEye2");

   openEye2.classList.toggle("hide");
   closeEye2.classList.toggle("hide");

   if (showPwd2) {
      password2.setAttribute("type", "password");
   } else {
      password2.setAttribute("type", "text");
   }

   showPwd2 = !showPwd2;
});
