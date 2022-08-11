interface Person {
    name: string;
    age: number;
    isActive: boolean;
}

let jose: Person = {
    name: "Jose",
    age: 24,
    isActive: true
};

let marianys: Person = {
    name: "Marianys",
    age: 21,
    isActive: true,
};

let juan: Person = {
    age: 23,
    isActive: false,
    name: "Juan"
};


let people: Person[] = [ jose, marianys, juan ];

for( let i = 0; i <= people.length - 1; i ++ ) {
    let person = people[i];
    console.log(person.name + " " + person.age);
}