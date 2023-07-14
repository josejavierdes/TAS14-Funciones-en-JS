let firstNumber = Number(prompt("Escribe el primer numero:"));
let secondNumber = Number(prompt("Escribe el segundo numero:"));

function addNumbers(a, b){
    let sum = a+b;
    return sum
}

let result =  addNumbers(firstNumber, secondNumber);


document.getElementById("text").textContent = "La suma de " + firstNumber + " y " + secondNumber + " es ";

document.getElementById("text2").textContent = result;