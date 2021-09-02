function add(a , b){
    return a + b;
}

function subtract(a , b){
    return a - b;
}

function multiply(a , b){
    return a * b;
}

function divide(a , b){
    return a / b;
}

function operate(operator , a , b){
    a = Number(a)
    b = Number(b)
    if(operator == "+") return add(a , b);
    if(operator == "-") return subtract(a , b);
    if(operator == "*") return multiply(a , b);
    if(operator == "/") {
        if(b == 0) return null;
        else return divide(a , b);
    }
    return null;
}