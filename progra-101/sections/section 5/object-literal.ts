
// Objetos literales
let person = {
    name: "Marianys",
    age: 21,
    isActive: true,
    hobbies: ["paintball", "futbol"],
    toString() {
        let objectString = this.name + " " + this.age + " " + this.hobbies;

        console.log(objectString);
    }
}

// person.toString();

let car = {
    brand: "Ford",
    model: "Mustang",
    year: 2007,
    doors: 2,
}

let smartTv = {
    brand: "Samsung",
    model: "infinity",
    inches: "32 pulgadas",
}

let youtubeVideo = {
    category: "ocio",
    author: "Auronplay",
    lengthMin: 3,
    comments: ["cool", "que gracioso", "no me cae bien"],
    likes: 10000,
    dislikes:200

}

console.log(car);
console.log(smartTv);
console.log(youtubeVideo);