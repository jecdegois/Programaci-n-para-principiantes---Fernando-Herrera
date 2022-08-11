// 8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
// nombre que tenga más letras del arreglo, y debe de trabajar así:
// let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
// let hero = largestNameOfArray( heroes );
// console.log( hero ); // Profesor Charles Xavier 

export let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];

function largestNameOfArray (heroes: string[]): string {
    let largestName  = "";
    for(let i = 0; i <= heroes.length - 1; i++) {
        if (heroes[i].length > largestName.length){
            largestName = heroes[i];
        }
    }
    return largestName;
}

let hero = largestNameOfArray( heroes );

console.log( hero );