// 9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
// nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.
// Ejemplo:
// let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
// let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
// console.log( herosWithLetterS ); // She Hulk, Spiderman

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel']; 

// function startsWith( heroes:string[], letter: string ): string[] {

//     letter = letter.toUpperCase();

//     let newHeroes: string[] = [];
    
//     for(let i = 0; i <= heroes.length -1; i++ ){
//         if (heroes[i][0] === letter){
//             newHeroes.push(heroes[i]);
//         }
//     }

//     return newHeroes;
// }

//OTRA FORMA DE HACERLO

export function startsWith( heroes:string[], letter: string ){
    letter = letter.toUpperCase();
    let newHeroes: string[] = [];
    for( let name of heroes) {
        if(name.startsWith(letter)){
            newHeroes.push(name);
        }
    }
    return newHeroes
}

let herosWithLetterS = startsWith( heroes, 'h' ); 

 console.log(herosWithLetterS)

