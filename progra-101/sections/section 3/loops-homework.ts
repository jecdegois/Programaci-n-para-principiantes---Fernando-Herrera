//Tarea
// imprimir una tabla de multiplicar has n cantidad de veces

let base = 10;
let limit = 50;

// For
for( let i = 1; i <= limit; i ++){
    console.log(base + " * " + i +" = " + base * i);
}

// While
export let i = 1;
while( i <= limit ) {
    console.log("while " + base + " * " + i +" = " + base * i);

    i++;
}

// Do while

let j = 1;
do{
    console.log("do while " + base + " * " + j +" = " + base * j);

    j++;
} while( j <= limit ) 