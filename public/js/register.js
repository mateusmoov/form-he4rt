const buttonSubmit = document.getElementById("buttonSubmit");

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
      console.log("tudo certo");
    } else {
      console.log("A senha precisa ser no mínimo de 8 caracteres");
    }
  } else {
    return console.log("As senhas nao coincidem.");
  }
});
