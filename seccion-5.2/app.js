//Crear algoritmo que basado en la nota
//imprima si el alumno aprueba o no la materia
// aprueba con 60
//si tiene nota menor a 50 imprimir
// "por favor estudie mas"

let nota = 60;

if (nota >= 60) {
  console.log("El alumno esta aprobado");
} else if (nota < 50) {
  console.log("Por favor estudie mas");
} else {
  console.log("El alumno no aprueba");
}

console.log("Fin del programa");

function calcularNota(nota) {
  let notaLetra;
  if (nota >= 90) {
    notaLetra = "A";
  } else if (nota >= 80) {
    notaLetra = "B";
  } else if (nota >= 70) {
    notaLetra = "C";
  } else if (nota >= 60) {
    notaLetra = "D";
  } else {
    notaLetra = "F";
  }
  return console.log(notaLetra);
}

let alumno1 = calcularNota(100);
let alumno2 = calcularNota(80);
let alumno3 = calcularNota(59);
