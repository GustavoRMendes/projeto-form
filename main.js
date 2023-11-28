let nome = document.getElementById("nome");
let email = document.getElementById("email");
let enviar = document.getElementById("button");
let errorMsg = document.getElementById("msg");

enviar.addEventListener("click", function clicar(e) {
  e.preventDefault();
  if (nome.value == "" || email.value == "") {
    errorMsg.textContent = "Preencha os Dados!";
    errorMsg.style.color = "red";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 2000);
    return;
  } else {
    nome.value = "";
    email.value = "";
  }
});
