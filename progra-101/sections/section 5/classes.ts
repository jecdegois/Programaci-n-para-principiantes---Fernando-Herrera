export class Car {
    // public: TODO el mundo accede
    // private: SOLO la clase accede
    // static: NO necesita tener instacia 
    // readonly: PROTEGER ALGO, solo constructor modifica
    static className = "Carro";
    public readonly brand: string;
    doors: number;
    fuelTank: number;
    isRunning: boolean;
    type: string;
    
    private readonly createdAt: number;

    constructor( brand:string, type: string ) {
        this.brand = brand;
        this.doors = 0;
        this.fuelTank = 0;
        this.isRunning = false;
        this.type = type;

        this.createdAt = 124124124;
    }

     turnOn() {
        if ( this.isRunning ) {
            console.log("El carro ya estaba encendido");
            return;
        }

        if ( this.fuelTank <= 0 ){
            console.log("El carro no tiene gasolina");
            return;
        }
        this.isRunning = true;
        console.log("El carro esta encedido");
    }

    fillTank( gas: number ) {
        if (this.fuelTank === 100){
            console.log("Ya el carro esta full")
            return;
        }

        if ( gas <= 0 ) {
            console.log("El gas debe ser positivo");
            return;
        }

        let newFuelTank = this.fuelTank + gas;

        if (newFuelTank >= 100){
            this.fuelTank = 100;
        } else{
            this.fuelTank = newFuelTank;
        }

    }
}

let myFord = new Car("Ford", "Sedan");
myFord
console.log(myFord)
myFord.turnOn();
myFord.fillTank(50);
console.log(myFord)


