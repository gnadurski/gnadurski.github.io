let buffer = '0'
let result = 0
let activeOperator = '='
let isOldNumber = false
const display = document.querySelector('.screen')

/*function rerender() {
    display.innerText = buffer
}*/

function clearScreen() {
    display.innerText = '0'
    result = 0
    buffer = '0'
    activeOperator = '='
}

function removeDigit() {
    if (display.innerText.length === 1) {
        display.innerText = '0'
    } else {
        display.innerText = display.innerText.substring(0, display.innerText.length - 1)
    }

}

function handleOperation(operator) {
    switch (operator) {
        case '+':
            result += parseInt(buffer)
            break
        case '-':
            result -= parseInt(buffer)
            break
        case '×':
            result *= parseInt(buffer)
            break
        case '÷':
            if (display.innerText !== '0') {
                result /= parseInt(buffer)
            }
            break
        case '=':
            result = parseInt(buffer)
            break
    }
    display.innerText = result
    isOldNumber = true
}

document.querySelectorAll('.digit').forEach(item => {
    item.addEventListener('click', event => {
        if (isOldNumber || display.innerText === '0') {
            display.innerText = event.target.innerText
            isOldNumber = false
        } else {
            display.innerText += event.target.innerText
        }
    })
})

document.querySelector('.clear').addEventListener('click', clearScreen)

document.querySelector('.backspace').addEventListener('click', removeDigit)

document.querySelectorAll('.operator').forEach(item => {

    item.addEventListener('click', event => {
        buffer = parseInt(display.innerText)

        if (event.target.innerText === '=' || event.target.innerText === activeOperator || activeOperator === '=') {
            handleOperation(activeOperator)
        }
        activeOperator = event.target.innerText
    })
})