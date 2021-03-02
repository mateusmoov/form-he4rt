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

function closeModal(modalname) {
  setTimeout(() => {
    modalname.classList.add("is-active");
  }, 100);
}

let usuarios = [];

buttonSubmit.addEventListener("click", (e) => {
  const userRegister = document.getElementById("User").value;
  const passwordRegister = document.getElementById("Password").value;
  const confirmpasswordRegister = document.getElementById("confirmpassword")
    .value;
  e.preventDefault();

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Confirm if the email is valid.
  if (validateEmail(userRegister)) {
    if (passwordRegister === confirmpasswordRegister) {
      // Confirm if the password matches.
      if (passwordRegister.length >= 8) {
        // Check if the password length is grater than or equal to 8.
        usuarios.push({
          email: userRegister,
          password: passwordRegister,
        });
        localStorage.setItem("user", JSON.stringify(usuarios));
        window.location.href =
          "https://mateusmoov.github.io/form-he4rt/public/html/index.html";
      } else {
        transitionModalPassword2();
      }
    } else {
      transitionModalPassword1();
    }
  } else {
    transitionModalEmail(); 
  }
});
