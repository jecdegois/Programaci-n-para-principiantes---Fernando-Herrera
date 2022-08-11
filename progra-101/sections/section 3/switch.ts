export let weekDay: number = 5; // 1 = lunes 2 = martes 3 = miercoles

if( weekDay <= 0 ) {
    throw new Error("Dia de la semana no permitido");
}
switch ( weekDay ) {

    // weekDay === 1; 
    case 1:
        console.log("Es lunes");
        break;

    // weekDay === 2; 
    case 2:
        console.log("Es martes");
        break;

    // weekDay === 3; 
    case 3:
        console.log("Es miercoles");
        break;

    default:
        console.log("No es lunes martes o miercoles");
}