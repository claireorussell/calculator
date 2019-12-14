document.addEventListener('DOMContentLoaded', startCalculator)

// Define variables used in functions that don't have their own function 
let tempStr = "";
let entries = [];
let answer = 0;



// define function to start calculator- attach the listners which will decide
function startCalculator() {
    listenersToNumbers();
    listenersToOperators();
    listenersToClear();
    listenersToTotal();
}

// function for chosenNumber 
// define variable numbers, find vairable using getElementByClassName... 
// loop through numbers class=number use eventlistner to give number a value at [i]
//numbers[i].addEventListener("click", numClick 
//use same syntax to find the right operator 

// function to decide which number is chose nwhen clicked on 
function listenersToNumbers() {
    let numbers = document.getElementsByClassName("num");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", numClicked);
    }
}
// will put the number into the temporary string and put to updateDisplay function 
function numClicked(event) { // event listner function
    let number = event.target.innerHTML // let the variable number equal the innerhtml of the element the event involves (number button clicked on calculator)
    tempStr = tempStr + number // add number/s to tempStr- don't recreate the variable with let or const or var
    updateDisplay() // this is always how to call a function 
}

// create display function for this down bottom so it can be called on multiple times
// display the temporary string 
// get display element by className
// set innerhtml to tempStr

function updateDisplay() {
    let display = document.getElementById("display")
    display.innerHTML = tempStr
}



// function to decide which operator is chosen when clicked on 
function listenersToOperators() {
    let operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", opClicked);
    }
}

// Push operator to temporaryStr so it can be used to calculate total
function opClicked(event) {
    let operator = event.target.innerHTML //variable operator will look at the innHTML of whichever element is clicked if it is an operator class
    entries.push(tempStr)// push tempArray to entries
    entries.push(operator)
    tempStr = ""
    console.log(entries)
    updateDisplay()
}



// if equals sign is clicked on
function listenersToTotal() {
    let equals = document.getElementById("equals")
    equals.addEventListener("click", getTotal);
}

// when equal sign is clicked on
//switch entries[1] is the operator in case of operator '+' .... answer = entries[0] + entries[2]
// tempStr = answer
function getTotal(event) {
    switch (entries[1]) {
        case '/':
            answer = entries[0] / entries[2]
            tempStr = answer
            updateDisplay()
            entries = []
            break;
        case 'x':
            answer = entries[0] * entries[2]
            tempStr = answer
            updateDisplay()
            entries = []
            break;
        case '-':
            answer = entries[0] - entries[2]
            tempStr = answer
            updateDisplay()
            entries = []
            break;
        case '+':
            answer = +entries[0] + +entries[2]
            tempStr = answer
            updateDisplay()
            entries = []
            break;

    }
}


// function to decide when a clearing value is clicked on
function listenersToClear() {
    let cleared = document.getElementsByClassName("clear");
    for (let i = 0; i < cleared.length; i++) {
        cleared[i].addEventListener("click", clearClicked);
    }
}

function clearClicked(event) {
    let clearing = event.target.innerHTML
    switch (clearing) {
        case 'AC':
            tempStr = "" // empty stringArray
            entries = [] // empty array
            updateDisplay()
            break;
        case 'CE':
            tempStr = ""
            updateDisplay()
            break;
    }
}

