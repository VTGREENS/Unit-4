console.log("Running from the Index.js file");

// user getElementById to change the text of the id="header" to "Hello World"

/* 
1. create a variable to store the header element
2. document.getElementById([id name])

*/

let header = document.getElementById("header");
console.log(header.innerText); // output: DOCUMENT OBJECT MODEL (DOM)
// innerText is the text inbetween the two tags
console.log("Inner HTML", document.getElementById("header").innerHTML);

header.innerHTML = "I Hate That <em>Cliche!</em>";


// Difference between inner Text and innerHTML
// InnerHTML will convert HTML code while innerText will treat it as a string literal

// ? Change the color of the header to blue
header.style.color = "blue";
header.style.fontSize = "45px";

// ! getElementsByClassName

let errorList = document.getElementsByClassName("error-list");
console.log(errorList);

// ? Change the first bullet point inner text to "The First Error Had Changed"
errorList[0].innerText = "The First Error Has Changed";

// ? Change the 2nd Error to be red
errorList[1].style.color = "red";

// ? Create a for loop that will loop through the error lust and change all the color to purple.


for (let i = 0; i < errorList.length; i++) {
    errorList[i].style.color = "purple";  
} 

// ? Loop through doing a For of....

for (error of errorList) {
    error.style.color = "blue";
  }

//   ! getElementsByTagName

let pTags = document.getElementsByTagName("p");
console.log(pTags);
// pTags[0].style.fontStyle = "italic";

// ? Make the first li tag italic
// use style font-style : "italic"

let liTags = document.getElementsByTagName("li");
console.log(liTags);
liTags[0].style.fontStyle = "italic";

// ! querySelector
//  - querySelector -  it will only give you the first element that meets the requirements.

// ? Store the first H1 tag using querySelector
let querySelectorHeader = document.querySelector("h1");
console.log("querySelector header", querySelectorHeader, querySelectorHeader.innerText);

// ? console.log the interText of para as the ID

let querySelectorIdExample = document.querySelector("#para");
console.log("querySelectorIdExample.innerText", querySelectorIdExample.innerText);

let querSelectorClassExample = document.querySelector(".error-list");
console.log("querSelectorClassExample", querSelectorClassExample.innerText);

// ! querySelectorAll
// - querySelectorAll will give you all the elements that match the requirements

let querySelectorAllHeaders = document.querySelectorAll("h1");
console.log("querySelectorAllHeaders", querySelectorAllHeaders);

let querySelectorAllHeader3 = document.querySelectorAll("h3");
console.log("querySelectorAllHeader3", querySelectorAllHeader3);






