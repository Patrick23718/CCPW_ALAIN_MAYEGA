const resultat = document.getElementById('resultat');
let operande_a = 0;
let operation = null;
let currentInput = "";

function render(){
    resultat.textContent = currentInput;
}
function writeOnClick(e){
    switch(e.target.id){
        case "C":
            currentInput = " ";
            break;
        case "CE":
            currentInput = currentInput.slice(0, currentInput.length -2);
            break;
        default:
            currentInput = currentInput + e.target.textContent;
    }
    render();
}
function setOnClick(e){
    switch(e.target.id){
        case "Delete":
            operande_a = 0;
            currentInput = " ";
            operation = null;
            break;
        default:
            operande_a = Number(currentInput);
            currentInput = " ";
            operation = e.target.textContent;
    }
    render();
}
function egalOnClick(e){
    switch(operation){
        case "+":
            currentInput = operande_a +Number(currentInput) + " ";
            break;
        case "-":
            currentInput = operande_a - Number(currentInput) + " ";
            break;
        case "*":
            currentInput = operande_a * Number(currentInput) + " ";
            break;
        case "/":
            currentInput = operande_a / Number(currentInput) + " ";
            break;
    }
    render();
}
function setDigit(){
    const writeDOM = document.getElementsByClassName('write');
    const setDOM = document.getElementsByClassName('set');
    for(let i=0; i < writeDOM.length;i++){
        writeDOM[i].addEventListener("click",writeOnClick);
    }
    for(let i=0; i < setDOM.length;i++){
        setDOM[i].addEventListener("click",setOnClick);
    }
    document.getElementById("egal").addEventListener("click", egalOnClick);
}
setDigit();