export function validarCPF(cpf) {
  const primeirosDigitos = cpf.slice(0, 9);
  const ultimosDigitos = cpf.slice(9, cpf.length);

  //calcular primeiro digito verificador
  const arrayPrimeiroDigito = Array.from(primeirosDigitos);
  const somaPrimeiroVerificador = calcularDigitos(arrayPrimeiroDigito, 10);
  const primeiroDigitoVerificador = calcularVerificador(
    somaPrimeiroVerificador
  );

  // //calcular segundo digito verificador
  const arraySegundoDigito = Array.from(
    primeirosDigitos + primeiroDigitoVerificador
  );
  const somaSegundoVerificador = calcularDigitos(arraySegundoDigito, 11);
  const segundoDigitoVerificador = calcularVerificador(somaSegundoVerificador);

  if (
    primeiroDigitoVerificador === +ultimosDigitos[0] &&
    segundoDigitoVerificador === +ultimosDigitos[1]
  ) {
    return true;
  }

  return false;
}

function calcularDigitos(digitos, i) {
  const somaPrimeirosDigitos = digitos.reduce((ac, value) => {
    ac = ac + value * i;
    i--;
    return ac;
  }, 0);

  return somaPrimeirosDigitos;
}

function calcularVerificador(somaDigitos) {
  if (somaDigitos % 11 < 2) {
    return 0;
  } else {
    return 11 - (somaDigitos % 11);
  }
}
