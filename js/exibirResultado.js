const inputBox = document.getElementById("input-box");
const form = document.querySelector("form");
const inputContainer = document.getElementById("input-box");

const buttonResetForm = document.createElement("button");
const resultMessage = document.createElement("p");
resultMessage.id = "result";

export function resultadoValido() {
  inputBox.classList = "valid";
  resultMessage.innerText = "CPF VÁLIDO";
  resultMessage.classList.remove("form__result--invalid");
  resultMessage.classList.add("form__result--valid");
  form.appendChild(resultMessage);
}

export function resultadoInvalido() {
  inputBox.classList = "invalid";
  resultMessage.innerText = "CPF INVÁLIDO";
  resultMessage.classList.remove("form__result--valid");
  resultMessage.classList.add("form__result--invalid");
  form.appendChild(resultMessage);
}

export function InserirBotaoReset() {
  buttonResetForm.innerText = "Refazer";
  buttonResetForm.classList.add("form__button--reset");
  form.appendChild(buttonResetForm);
}

export function limparTela() {
  console.log("limpando");
  inputContainer.classList.remove("invalid");
  inputContainer.classList.remove("valid");
  if (document.getElementById("result")) {
    document.getElementById("result").remove();
  }
  if (document.querySelector(".form__button--reset")) {
    document.querySelector(".form__button--reset").remove();
  }
}

buttonResetForm.addEventListener("click", () => {
  limparTela();
  form.reset();
});
