rotulo1.innerHTML = "Indique el un numero";
rotulo2.innerHTML = "Indique el numero multiplo";

let numero1: number = Number(dato1.value);
let numero2: number = Number(dato2.value);

function esMultiplo(numero1: number, numero2: number): boolean {
  return numero1 % numero2 === 0;
}

if (esMultiplo(numero1, numero2)) {
  console.log(numero1, "Es multiplo de ", numero2);
} else {
  console.log(numero1, "No es multiplo de ", numero2);
}
