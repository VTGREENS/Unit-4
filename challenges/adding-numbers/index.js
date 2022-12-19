console.log("it works- adding numbers");

// TODO: Be able to grab the input1 and input2 values
// TODO: function to be called when the user clicks on the submit(form EventListener)

let number1 = document.getElementById("number1");
console.log(number1);
let number2 = document.getElementById("number2");
console.log(number2);
let sumDisplay = document.getElementById("sum-display");
let form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
console.log("handle submit worked");

// ? Make an if statement to alert us if it detects a NaN (Not a Number): isNan()

if (isNaN(number1.value) || isNaN(number2.value)){
    sumDisplay.innerText = ("You have typed in an invalid value: needs to be a number");
    return
}

let total = +number1.value + +number2.value;
sumDisplay.innerText = total;

}







