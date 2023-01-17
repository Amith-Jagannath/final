const btn = document.querySelector("#btn");
const btn1 = document.querySelector("#btn1");
const login_nav = document.querySelector("#btn2");
const login_nav1 = document.querySelector("#btn3");
const modal1 = document.querySelector(".modal1");

const overlay = document.querySelector(".overlay");
const btncloseRegister = document.querySelector(".btn--close-modal-register");
const btncloseLogin = document.querySelector(".btn--close-modal-login");
const nameRegister = document.querySelector("#nameRegister");
const emailRegister = document.querySelector("#emailRegister");
const passwordRegister = document.querySelector("#passwordRegister");
const emailLogin = document.querySelector("#emailLogin");
const passwordLogin = document.querySelector("#passwordLogin");
const register = document.querySelector("#register");
const login = document.querySelector(".login");
const loginBtn = document.querySelector("#loginBtn");

register.addEventListener("click", function () {
  modal1.classList.remove("hidden");
  login.classList.add("hidden");
});
loginBtn.addEventListener("click", function () {
  login.classList.remove("hidden");
  modal1.classList.add("hidden");
});

btncloseRegister.addEventListener("click", function () {
  modal1.classList.add("hidden");

  overlay.classList.add("hidden");
});
btncloseLogin.addEventListener("click", function () {
  login.classList.add("hidden");

  overlay.classList.add("hidden");
});
