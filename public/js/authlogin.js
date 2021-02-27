const buttonSubmit = document.getElementById("buttonSubmit");
const modalLogin = document.querySelector(".modal-login");

function transitionModalLogin() {
  setTimeout(() => {
    modalLogin.classList.remove("is-active");
  }, 100);
}

function closeModalLogin() {
  setTimeout(() => {
    modalLogin.classList.add("is-active");
  }, 100);
}

buttonSubmit.addEventListener("click", (e) => {
  const userLogin = document.getElementById("user").value;
  const passwordLogin = document.getElementById("password").value;
  e.preventDefault();

  const userInfo = window.localStorage.getItem("user");
  const userInfoObject = JSON.parse(userInfo);

  const checkLogin = (p) => p.email === userLogin;
  const checkPasswork = (p) => p.password === passwordLogin;

  const resultado = userInfoObject.filter(checkLogin).filter(checkPasswork);

  if (typeof resultado !== "undefined" && resultado.length > 0) {
    window.location.href =
      "http://127.0.0.1:5500/public/html/login-success.html";
  } else {
    transitionModalLogin();
  }
});
