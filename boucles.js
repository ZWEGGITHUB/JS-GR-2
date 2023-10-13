//BOUCLE FOR

let c=5;

for(let i = 0; i < c; i++){
    console.log('ça marche');
}

//BOUCLE WHILE

let variable = 3;

while(a < 9){
    variable++
    if(variable == 7){ 
        continue
    }
    if(variable == 8){
        break
    }
    console.log(variable);
}
console.log('fin de la boucle après ' + variable + ' tours');