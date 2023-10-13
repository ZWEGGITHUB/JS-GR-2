//OBJECT

let student = {
    prenom:"Adrien",
    FavFood:"Burger",
    City:"Paris"
}

let values = Object.values(presonne);
let count = values.reduce((acc,value) => acc + value.length, 0);
console.log(count);