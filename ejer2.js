//Adivinar un número del 1 al 20

const a = [];
while(true){
    const num = parseInt(prompt("Digite un número"));
    if(num == "7"){
        break;
    }
    a.push(num);
}
function adivinar(numero){
return numero == "7";
}
console.log(`Tus intentos fueron\n ${[a]}.\n`);
console.log("Ganaste crack");