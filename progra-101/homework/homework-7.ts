// - Crear una función que reciba 3 argumentos numéricos ( a, b, c), la función se debe de llamar
// max, la función debe de determinar cual es el mayor de los 3 y retornarlo… la función debe de
// trabajar así:
// let maxValue = max( 5, 2, 6);
// console.log( maxValue ); // 6 

function max(num1: number, num2: number, num3: number) {
    let arrayNums = [num1, num2, num3];
    let maxNum = arrayNums[0]
    for(let i = 0; i <= arrayNums.length; i ++){
        if(arrayNums[i] > maxNum){
            maxNum = arrayNums[i]
        }
    }
    return maxNum;
}

let maxValue = max(11,22,33)

console.log(maxValue)