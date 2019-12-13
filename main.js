document.addEventListener('DOMContentLoaded', startCalculator)

// Define variables used in functions that don't have their own function 
let temporaryStr = '';
let entries = [];
let total = 0;

// how to show temporaryStr in display????


// add funtion to startCalculator()
    // define function to start calculator- attach the listners which will decide
    // what is clicked on and which function to run depending on the 'type of key clicked on.
    function startCalculator(){
    listenersToNumbers();
    listenersToOperators();
    listenersToClearing();
    listenersToTotal();
}

// function for chosenNumber 
    // define variable numbers, find vairable using getElementByClassName... 
    // loop through numbers class=number use eventlistner to give number a value at [i]
        //numbers[i].addEventListener("click", numClick 
    //use same syntax to find the right operator 

// function to decide which number is chose nwhen clicked on 
function listenersToNumbers(){
    let numbers = document.getElementsByClassName("num");
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click", numClicked);
    }
}
function numClicked(number){
    if (!isNaN(numbers[i]) || number == '.') {
        numbers[i].push(temporaryStr);
        numbers[i].push(display)
    
} // will put the number into the temporary string and put to display  




// function to decide which operator is chosen when clicked on 
function listenersToOperators(){
    let operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", opClicked);
    }
}

function opClicked{
    // switch case to apply which operator
    }




// function to decide when a clearing value is clicked on
function listenersToClear(){
    let cleared= document.getElementsByClassName("clear");
    for (let i = 0; i < cleared.length; i++) {
        cleared[i].addEventListener("click", clearClicked);
    }
}

function clearClicked(){

}




// if equals sign is clicked on 
function listenersToTotal(){
    let equals = document.getElementsByClassName("operatorTotal");
    for (let i = 0; i < equals.length; i++) {
        equals[i].addEventListener("click", total);
    }
}


function total(){ 
    // when equals sign is clicked on entries[0] is (operator) to entries[2]
}




function display(){
    // when new number is passed to temporary string it needs to be pushed into the display aswell 
    // display updates when numbers are clicked on, cleared when an operator is chosen and when the equals sign is clicked on
}