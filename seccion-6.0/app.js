function describirPersona(p) {
  console.log(`${p.nombre} tiene una edad de ${p.edad} y mide ${p.estatura}`);
}

let persona = {
  nombre: "Jose",
  edad: 23,
  estatura: 1.83,
};

console.log(persona.nombre);

describirPersona(persona);
