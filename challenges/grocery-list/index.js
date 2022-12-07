// 1- change "My Title"-> "My Grocery List"
let header = document.getElementById("myTitle");
header.innerHTML = "My Grocery List";

// 2- Change <p> font color to red
let pTag = document.getElementById("market32List");
pTag.style.color = "red";

// 3-  Remove the bullets on the ul's 
let uList = document.getElementById("foods");
uList.style.listStyle = "none";
