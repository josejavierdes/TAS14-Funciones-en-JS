let firstGrade = Number(prompt("Escribe la primera nota:"));
let secondGrade = Number(prompt("Escribe la segunda nota:"));
let thirdGrade = Number(prompt("Escribe la tercera nota:"));

function checkIfApproved(a, b, c){
    let sum = a+b+c;
    let average = sum/3;

    if (average>=70){

        document.getElementById("text3").style.color = "green";
        return "APROBADO"
    }
    return "REPROBADO"
}

let result =  checkIfApproved(firstGrade, secondGrade, thirdGrade);


document.getElementById("text").textContent = "Tus notas son:";

document.getElementById("text2").textContent = firstGrade + "  / " + secondGrade + "  /  " + thirdGrade;

document.getElementById("text3").textContent = result;

