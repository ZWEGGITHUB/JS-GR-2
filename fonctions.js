//FONCTION CHECKNAME

let a = "Jean";
let b = "Paul";
let result = checkname(a, b);

function checkname(name1, name2) {
    if (name1 === name2){
    return "Les prenoms sont indentiques"
    } else {
    return "Les prenoms sont differents"
    }
}
console.log(result)