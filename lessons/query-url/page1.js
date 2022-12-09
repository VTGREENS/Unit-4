console.log("page 1 works");

let pageLink = document.getElementById("page-Link");

let player1score = 1900

let product = "tomato"

pageLink.href = `./page2.html?player1=${player1score}&product=${product}`;

function goToNextPage(){
    window.location.href = `./page2.html?player1=${player1score}&product=${product}`
}