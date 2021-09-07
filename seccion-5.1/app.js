//resuelto con funciones

function imprimirTabla(base, limite) {
  // Ciclo for
  for (let i = 1; i <= limite; i++) {
    let resultado = base * i;
    console.log(base + " x " + i + " = " + resultado);
  }
}
imprimirTabla(10, 10);
imprimirTabla(5, 10);
