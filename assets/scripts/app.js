const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(usrInput.value)
}

// Gets and writes calculation log
function createAndWriteLog(operator, resultBeforeCalc, calcNum) {
    const calcDesc = `${resultBeforeCalc} ${operator}  ${calcNum}`
    outputResult(currentResult, calcDesc); // from vendor file
}

function add() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteLog('+', initialResult, enteredNumber)
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry)
    console.log(logEntries)
}

function subtract() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteLog('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteLog('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserNumberInput() 
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteLog('/', initialResult, enteredNumber)

}

// event listeners
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// let numbers = [10, 3, -1];

// function solve() {
//     numbers.push(8)
//     numbers.push(2)
// }
// solve()
// console.log(numbers)

