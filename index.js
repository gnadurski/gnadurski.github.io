let numberInBuffer = 0
let activeOperator = 'none'

function refreshScreen(newNumberDisplayed) {
    document.querySelector(".screen").innerText = newNumberDisplayed
}

function beginOperation(operator) {
    numberInBuffer = parseInt(document.querySelector('.screen').innerText)
    activeOperator = operator
    refreshScreen('0')
}

function showResult(currentlyDisplayed) {
    let secondNumber = parseInt(currentlyDisplayed)
    let result
    if (activeOperator === '+') {
        result = numberInBuffer + secondNumber
    } else if (activeOperator === '-') {
        result = numberInBuffer - secondNumber
    } else if (activeOperator === 'x') {
        result = numberInBuffer * secondNumber
    } else if (activeOperator === '÷') {
        if (secondNumber !== 0) {
            result = numberInBuffer / secondNumber
        } else {
            result = 'div 0'
        }
    }
    refreshScreen(result)
    activeOperator = 'none'
    numberInBuffer = result
}

document.querySelectorAll('.digit').forEach(item => {
    item.addEventListener('click', event => {
        let numberDisplayed = document.querySelector('.screen').innerText
        if (numberDisplayed === '0') {
            numberDisplayed = event.target.innerText
        } else {
            numberDisplayed += event.target.innerText
        }
        refreshScreen(numberDisplayed)
    })
})

document.querySelector('.clear').addEventListener('click', event => {
    refreshScreen('0')
    numberInBuffer = 0
    activeOperator = 'none'
})

document.querySelector('.backspace').addEventListener('click', event => {
    let numberDisplayed = document.querySelector('.screen').innerText
    if (numberDisplayed.length > 1) {
        numberDisplayed = numberDisplayed.substr(0, numberDisplayed.length - 1)
        refreshScreen(numberDisplayed)
    } else {
        refreshScreen('0')
    }

})

document.querySelectorAll('.operator').forEach(item => {
    item.addEventListener('click', event => {
        if (activeOperator === 'none') {
            beginOperation(event.target.innerText)
        } else {
            showResult(document.querySelector('.screen').innerText)
        }
    })
})


console.log(document.querySelector('.operator').innerText)
console.log(activeOperator)