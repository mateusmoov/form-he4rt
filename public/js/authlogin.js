const buttonSubmit = document.getElementById("buttonSubmit");

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
    console.log("deu bom");
  } else {
    console.log("deu ruim");
  }

  console.log(resultado);
});
