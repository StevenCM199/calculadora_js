const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const screen = document.getElementById('screen'); 

let screenValue = 0; 

let val1 = '';
let val2 = '';
let currentOperator = ''; 
let result = ''; 

function writeOnScreen(num){
    if(screenValue == 0 || result != ''){
        screenValue = num;
        result = ''; 
    } else{
        screenValue += num; 
    }
    screen.innerHTML = screenValue; 
}

function clearScreen(){
    screenValue = 0; 
    screen.innerHTML = screenValue; 
}

function calcSum(){
    currentOperator = 'sum';
    val1 = screenValue; 
    screenValue = 0;
    screen.innerHTML = screenValue; 
}

function calcSub(){
    currentOperator = 'sub';
    val1 = screenValue; 
    screenValue = 0;
    screen.innerHTML = screenValue; 
}

function calcMul(){
    currentOperator = 'mul';
    val1 = screenValue; 
    screenValue = 0;
    screen.innerHTML = screenValue; 
}

function calcDiv(){
    currentOperator = 'div';
    val1 = screenValue; 
    screenValue = 0;
    screen.innerHTML = screenValue; 
}


function equalResult(){
    val2 = screenValue;
    screenValue = 0; 

    switch(currentOperator){
        case 'sum': result = parseInt(val1) + parseInt(val2); 
        break;
        case 'sub': result = parseInt(val1) - parseInt(val2);
        break;
        case 'mul': result = parseInt(val1) * parseInt(val2);
        break;
        case 'div': result = parseInt(val1) / parseInt(val2);
        break;
        default: return;
    }

    currentOperator = ''; 
    screenValue = result; 
    screen.innerHTML = result;
}

