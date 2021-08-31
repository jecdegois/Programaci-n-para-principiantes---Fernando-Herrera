// Ciclo for

let base = parseInt(prompt("Que tabla deseas imprimir?"));
let limite = parseInt(prompt("Cual sera el limite de la tabla?"));
for (let i = 1; i <= limite; i++) {
  let resultado = base * i;
  document.write(base + " x " + i + " = " + resultado + "<br>");
}
