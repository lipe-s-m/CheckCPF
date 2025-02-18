import {
  InserirBotaoReset,
  limparTela,
  resultadoInvalido,
  resultadoValido,
} from "./exibirResultado.js";
import { validarCPF } from "./validarCpf.js";

const form = document.querySelector("form");
const input = document.getElementById("form__input");

function obterValorInput() {
  const inputValue = input.value;
  const inputNumbers = inputValue.replace(/[^0-9]/g, "");
  return inputNumbers;
}

input.addEventListener("input", (event) => {
  let inputBox = event.target.value.replace(/\D/g, "");

  limparTela();

  if (inputBox.length > 3) inputBox = inputBox.replace(/(\d{3})(\d)/, "$1.$2");
  if (inputBox.length > 6)
    inputBox = inputBox.replace(/(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
  if (inputBox.length > 9)
    inputBox = inputBox.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
  event.target.value = inputBox;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (validarCPF(obterValorInput())) {
    resultadoValido();
    InserirBotaoReset();

    return;
  }
  resultadoInvalido();
  InserirBotaoReset();
});
