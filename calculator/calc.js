let displayValue ="";

function appendNumbers(number){
    displayValue += number;
    document.getElementById('display').value = displayValue
}

function appendOperator(operator){
    displayValue += operator;
    document.getElementById('display').value = displayValue
}

function clearDisplay(){
    displayValue = ""
    document.getElementById('display').value = displayValue
}

function deleteLast(){
    displayValue = displayValue.slice(0, -1)
    document.getElementById('display').value = displayValue
}

function calculate(){
    try {
        const result = eval(displayValue)
        displayValue = result.toString()
        document.getElementById('display').value = displayValue
        
    } catch (error) {
        displayValue = 'Error'
        document.getElementById('display').value = displayValue
    }
}