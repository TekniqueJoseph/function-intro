const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function add() {
    const enteredNumber = getUserNumberInput() 
    const calcDesc = `${currentResult} + ${enteredNumber}`  
    currentResult = currentResult + parseInt(enteredNumber);
    outputResult(currentResult, calcDesc);
}

addBtn.addEventListener('click', add);







