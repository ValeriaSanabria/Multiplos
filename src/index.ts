let numero1: number = 2;
let numero2: number = 2;

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

if (esMultiplo(numero1, numero2)) {
  console.log(numero1 + " Es multiplo de " + numero2);
} else {
  console.log(numero1 + " No es multiplo de " + numero2);
}
