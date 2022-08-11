/*
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/

export let grade: number = 100;

if ( grade >= 90 ) {
    console.log("El alumno saco A");
} else if ( grade >= 80) {
    console.log("El alumno saco B");
} else if ( grade >= 70) {
    console.log("El Alumno saco C");
} else if ( grade >= 60) {
    console.log("El alumno saco D");
} else {
    console.log("El alumno saco F")
}