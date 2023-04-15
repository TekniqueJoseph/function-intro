const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(usrInput.value)
}

function createAndWriteLog(operator, resultBeforeCalc, calcNum) {
    const calcDesc = `${resultBeforeCalc} ${operator}  ${calcNum}`
    outputResult(currentResult, calcDesc);
}

function add() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber)

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);




