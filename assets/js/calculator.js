var clear = document.getElementById("clear").addEventListener("click", clearsDisplay);
var togglesign = document.getElementById("togglesign").addEventListener("click", toggleSign);
var percent = document.getElementById("percent").addEventListener("click", percent);
var divide = document.getElementById("divide").addEventListener("click",setOperator);
var times = document.getElementById("times").addEventListener("click",setOperator);
var minus = document.getElementById("minus").addEventListener("click",setOperator);
var plus = document.getElementById("plus").addEventListener("click",setOperator);
var equals = document.getElementById("equals").addEventListener("click",evaluate);
var decimal = document.getElementById("decimal").addEventListener("click",makeANumber);
var number9 = document.getElementById("number9").addEventListener("click", makeANumber);
var number8 = document.getElementById("number8").addEventListener("click", makeANumber);
var number7 = document.getElementById("number7").addEventListener("click", makeANumber);
var number6 = document.getElementById("number6").addEventListener("click", makeANumber);
var number5 = document.getElementById("number5").addEventListener("click", makeANumber);
var number4 = document.getElementById("number4").addEventListener("click", makeANumber);
var number3 = document.getElementById("number3").addEventListener("click", makeANumber);
var number2 = document.getElementById("number2").addEventListener("click", makeANumber);
var number1 = document.getElementById("number1").addEventListener("click", makeANumber);
var number0 = document.getElementById("number0").addEventListener("click", makeANumber);
var display = document.getElementById("display");

var numberArray = []; //numbers should be pushed here before an operator is pushed
var storageNumber1;
var storageNumber2;
var numberToggle = 0;
var operator = 0;
let displayText;
let result;
let operationCount = 0;

var numberTranslation = { //translates the id of each button to the actual number (removes the word "number" from the text)
    number0 : 0,
    number1 : 1,
    number2 : 2,
    number3 : 3,
    number4 : 4,
    number5 : 5,
    number6 : 6,
    number7 : 7,
    number8 : 8,
    number9 : 9,
    decimal : '.',
}

function updateDisplay() { //sets displayHTML to displayText Variable
    display.innerHTML = displayText;
}

function clearsDisplay() { //sets displayText to 0 and clears the numberArray
    displayText = 0;
    numberArray = [];
    operator = 0;
    numberToggle = 0;
    operationCount = 0;
    updateDisplay();
}

function makeANumber() { //puts numbers into array and sets the displayText equal... does not store the number
    let x = numberTranslation[this.id];
    if (x == ".") {
        let dot = numberArray.includes(".");
        if (dot) {
            return //if there is already a decimal in the array do nothing
        }
    }

    numberArray.push(x); //puts x in array
    displayText = (numberArray.join('')); //changes display text
    updateDisplay();
    }

function togglesNumber() { //stores current number... clears array... toggles storedNumber value
    if (numberToggle == 0) {
        storesNumber();
        numberToggle = 1;
    }
}

function setOperator(){
    if (operationCount == 0) { //if this is the first time an operator has been pressed... toggle the storageplace
        togglesNumber();
        operationCount++;
    } else { //if this isn't the first time an operator has been pressed
        evaluate(); //store the number in the current array
        console.log("this is what it thinks the second storage number is: " + storageNumber2)
    }
    
    
    if (operator !== 0){ //check to see if this is the first time an operator has been pressed
        evaluate();
        if (this.id == "divide"){
            operator = 4;
        } else if (this.id == "times"){
            operator = 3;
        } else if (this.id == "minus"){
            operator = 2;
        } else if (this.id == "plus"){
            operator = 1;
        }
    } else if (this.id == "divide"){
        operator = 4;
    } else if (this.id == "times"){
        operator = 3;
    } else if (this.id == "minus"){
        operator = 2;
    } else if (this.id == "plus"){
        operator = 1;
    }
}

function storesNumber() {
    if (numberToggle == 0) {
        storageNumber1 = numberArray.join(''); //when an operator is pressed this stores the current number and should clear the number array
        numberArray = [];
    } else if (numberToggle == 1) {
        storageNumber2 = numberArray.join('');
        numberArray = [];
    }
}


function evaluate() {
    storesNumber();
    operationCount++;
    if (operator == 1){
        addition();
    } else if (operator == 2) {
        subtraction();
    } else if (operator == 3) {
        multiplication();
    } else if (operator == 4) {
        division();
    }
}

function addition(){
    console.log("first number " + storageNumber1);
    console.log("second number " + storageNumber2);
    storageNumber1 = (Number(storageNumber1) + Number(storageNumber2));
    storageNumber2 = 0;
    console.log("after changes " + storageNumber1);
    console.log("after changes " + storageNumber2);
    displayText = storageNumber1;
    toggleNumber = 1;
    operator = 0;
    updateDisplay();
}

function subtraction(){
    console.log("first number " + storageNumber1);
    console.log("second number " + storageNumber2);
    storageNumber1 = (Number(storageNumber1) - Number(storageNumber2));
    storageNumber2 = 0;
    console.log("after changes " + storageNumber1);
    console.log("after changes " + storageNumber2);
    displayText = storageNumber1;
    toggleNumber = 1;
    operator = 0;
    updateDisplay();
}

function multiplication() {
    console.log("first number " + storageNumber1);
    console.log("second number " + storageNumber2);
    storageNumber1 = (Number(storageNumber1) * Number(storageNumber2));
    storageNumber2 = 0;
    console.log("after changes " + storageNumber1);
    console.log("after changes " + storageNumber2);
    displayText = storageNumber1;
    toggleNumber = 1;
    operator = 0;
    updateDisplay();
}

function division() {
    console.log("first number " + storageNumber1);
    console.log("second number " + storageNumber2);
    if (storageNumber2 == 0) {
        displayText = "ERROR! Cannot divide by zero!";
        updateDisplay();
    } else {
    storageNumber1 = (Number(storageNumber1) / Number(storageNumber2));
    storageNumber2 = 0;
    console.log("after changes " + storageNumber1);
    console.log("after changes " + storageNumber2);
    displayText = storageNumber1;
    toggleNumber = 1;
    operator = 0;
    updateDisplay();
    }
}

function toggleSign() {
    if (numberArray[0] == "-") {
        numberArray.shift();
    } else {
    numberArray.unshift("-");
    }
    displayText = (numberArray.join(''))
    updateDisplay();
}

function percent() {
    let currentNumber = numberArray.join("")
    if (currentNumber <= 9 && currentNumber > 0) {
        numberArray.unshift(".0");
        evaluate();
    } else {
        numberArray.unshift(".");
        evaluate();
    }
}