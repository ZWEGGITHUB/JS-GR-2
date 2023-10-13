//IF - ELSE

var a = 4;
var b = 4;
var c = 3;
        
if( a == b) { 
    console.log("égal")
}
if (c < b && a + c != 3) { 
    console.log("ok")
}else{ 
    console.log("raté")
}
        
//SWITCH - CASE - DEFAULT

let a = 5;
let b = 7;
let c = 18;

switch(a) {
    case b:
        console.log("égal à b");
        break;
    case c:
        console.log("égal à c");
        break;
    default:
        console.log("égal à rien");
}
        