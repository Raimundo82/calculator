const defaultResult = 0
let currentResult = defaultResult
let logEntries = []

function getUserInput() {
    return parseInt(userInput.value)
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
    writeToLog(operator, resultBeforeCalc, calcNumber)
}

function resultCalculation(operator, calcNumber) {
    switch (operator) {
        case '+':
            currentResult += calcNumber
            break;
        case '-':
            currentResult -= calcNumber
            break;
        case '*':
            currentResult *= calcNumber
            break;
        case '/':
            currentResult /= calcNumber
            break;
    }
}

function writeToLog(operator, resultBeforeCalc, calcNumber) {
    const logEntry = {
        operation: operator,
        prevResult: resultBeforeCalc,
        enteredNumber: calcNumber,
        result: currentResult
    }
    logEntries.push(logEntry)
    console.log(logEntries)
}

function add() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    resultCalculation('+', enteredNumber)
    createAndWriteOutput('+', initialResult, enteredNumber)
}

function subtract() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    resultCalculation('-', enteredNumber)
    createAndWriteOutput('-', initialResult, enteredNumber)
}

function multiply() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    resultCalculation('*', enteredNumber)
    createAndWriteOutput('*', initialResult, enteredNumber)
}

function divide() {
    const enteredNumber = getUserInput()
    const initialResult = currentResult
    resultCalculation('/', enteredNumber)
    createAndWriteOutput('/', initialResult, enteredNumber)
}

function clear() {
    currentResult = 0
    outputResult(0, '0')
    clearInput()
    logEntries = []
}


addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
clearBtn.addEventListener('click', clear)