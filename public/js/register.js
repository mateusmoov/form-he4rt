const buttonSubmit = document.getElementById("buttonSubmit");

let usuarios = [];

buttonSubmit.addEventListener("click", (e) => {
  const userRegister = document.getElementById("User").value;
  const passwordRegister = document.getElementById("Password").value;
  const confirmpasswordRegister = document.getElementById("confirmpassword")
    .value;
  e.preventDefault();

  if (passwordRegister === confirmpasswordRegister) {
    usuarios.push({
      email: userRegister,
      password: passwordRegister,
    });
    localStorage.setItem("user", JSON.stringify(usuarios));
    console.log("deu tudo certo filhao");
  } else {
    return console.error("O FILHAO, AJEITA ESSA MERDA DESSA SENHA AI");
  }
});
