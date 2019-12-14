document.addEventListener('DOMContentLoaded', startCalculator)

// Define variables used in functions that don't have their own function 
let tempStr = "";
let entries = [];
let total = 0;

// how to show temporaryStr in display????


// add funtion to startCalculator()
    // define function to start calculator- attach the listners which will decide
    // what is clicked on and which function to run depending on the 'type of key clicked on.
    function startCalculator(){
    listenersToNumbers();
    /*
    listenersToOperators();
    listenersToClearing();
    listenersToTotal();
    */
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
// will put the number into the temporary string and put to updateDisplay function 
function numClicked(event){
    let number = event.target.innerHTML
    tempStr = tempStr + number // add number/s to tempStr- don't recreate the variable with let or const or var
    console.log(tempStr);
    updateDisplay() // this is always how to call a function 
}

    // create display function for this down bottom so it can be called on multiple times
        // display the temporary string 
            // get display element by className
            // set innerhtml to tempStr

function updateDisplay(){
    let display = document.getElementById("display")
    display.innerHTML = tempStr
    console.log(tempStr)
}



// function to decide which operator is chosen when clicked on 
function listenersToOperators(){
    let operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", opClicked);
    }
}

// switch case to apply which operator to temporaryStr 
    //percent, divisi, multip, subtract, sum, equals
function opClicked(){
    switch(operators[i]) {
        case '%': 
            document.getElementById("percentage").innerHTML = "%";
            // push tempArray to entries
            // push percentage element to entries
            break; 
        case '/': 
            document.getElementById("division").innerHTML = "/";
            // push tempArray to entries
            // push division element to entries
            break;
        case 'x': 
            document.getElementById("multiply").innerHTML = "*";
            // push tempArray to entries
            // push multipication element to entries
            break;
        case '-': 
            document.getElementById("subtract").innerHTML = "-";
            // push tempArray to entries
            // push subtraction element to entries 
            break;
        case '+': 
            document.getElementById("sum").innerHTML = "+";
            // push push tempArray to entries
            // push sum element to entries
            break;
        case '=': 
            document.getElementById("equals").innerHTML = "=";
            //let total == ;// the return value of entries
            // push 'total' to display 
            break;
    }
}


/*
// function to decide when a clearing value is clicked on
function listenersToClear(){
    let cleared= document.getElementsByClassName("clear");
    for (let i = 0; i < cleared.length; i++) {
        cleared[i].addEventListener("click", clearClicked);
    }
}

function clearClicked(){
    switch(cleared[i]) {
        case 'AC': 
            // empty tempArray
            // empty display ;
            // empty total
            break; 
        case 'CE': 
            // empty display 
            // remove last item in entries array "pop()"
            break;
}
}



// if equals sign is clicked on 
function listenersToTotal(){
    let equals = document.getElementsByClassName("operatorTotal");
    for (let i = 0; i < equals.length; i++) {
        equals[i].addEventListener("click", getTotal);
    }
}


function getTotal(){ 
    // when equals sign is clicked on entries[0] is (operator) to entries[2]
}




function display(){
    // when new number is passed to temporary string it needs to be pushed into the display aswell 
    // display updates when numbers are clicked on, cleared when an operator is chosen and when the equals sign is clicked on
}




// numbers are entered and put in an array called tempArray 
// when the operator is used the tempArray is pushed to entries and strung together '.join()'
// to CE a value you pop() from temp array
*/