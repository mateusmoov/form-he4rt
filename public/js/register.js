const transition_modalemail = document.querySelector(".modal-error-email");
const transition_modalpassword1 = document.querySelector(
  ".modal-error-password1"
);
const transition_modalpassword2 = document.querySelector(
  ".modal-error-password2"
);
const buttonSubmit = document.getElementById("buttonSubmit");

function transitionModalEmail() {
  setTimeout(() => {
    transition_modalemail.classList.remove("is-active");
  }, 100);
}

function transitionModalPassword1() {
  setTimeout(() => {
    transition_modalpassword1.classList.remove("is-active");
  }, 100);
}

function transitionModalPassword2() {
  setTimeout(() => {
    transition_modalpassword2.classList.remove("is-active");
  }, 100);
}

let usuarios = [];

buttonSubmit.addEventListener("click", (e) => {
  const userRegister = document.getElementById("User").value;
  const passwordRegister = document.getElementById("Password").value;
  const confirmpasswordRegister = document.getElementById("confirmpassword")
    .value;
  e.preventDefault();

  if (passwordRegister === confirmpasswordRegister) {
    if (passwordRegister.length > 8) {
      usuarios.push({
        email: userRegister,
        password: passwordRegister,
      });
      localStorage.setItem("user", JSON.stringify(usuarios));
      window.location.href = "http://127.0.0.1:5500/public/html/register.html";
    } else {
      transitionModalPassword2();
    }
  } else {
    transitionModalPassword1();
  }
});
