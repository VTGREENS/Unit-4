//  ? Review DOM selector
let listItem = document.querySelectorAll(".list-item")
// console.log(listItem)
listItem[0].textContent = "Get milk and bread"

listItem.forEach(i => i.style.color = "red")

// ! Included in the list bu unable to be accessed until after initialization
console.log(listItem[5])

// NodeList Access
// let listItem = document.getElementsByClassName("list-item")

// for (i of listItem) {
//     i.style.color = "red"
// }

//  ? How to create an element?

let li = document.createElement("li")
li.textContent = "Get more project time"
// li.style.color = "red"
li.className = "list-item"

// HTMLCollection
console.log(document.getElementsByClassName("list-item"))

// Node List
console.log(document.querySelectorAll(".list-item"))

/* 

- HTML Collection selector DOES update DOM-created elements
-NodeList selector DOES NOT update DOM-Created elements

- EX: editing the styling of items
*/

let list = document.getElementsByClassName("list")[0]
list.appendChild(li)

// ? Event Listeners

/* 
- Allows us to listen for an event and trigger a function when it occurs
- utilizes .addEventListener method on a target element
    -takes an event as a string (first parameter)
    -takes a call back function for when the event occurs
        .addEventListener("event", (event) => { callback fx })
*/

let input = document.querySelector(".input")
console.log(input)

// ? Ex of an event listener that displays text being typed
// input.addEventListener("keyup", (event) => {
//     console.log(event.target.value)
// })

let btnA = document.querySelector(".submit")

btnA.addEventListener("click", (e) => {
    // 1- create new element
    let li = document.createElement("li")
    //  2- Append the value of what's in input to the element
    li.textContent = input.value
    //  3- Give new element a class name for styling purposes
    li.className = "list-item"
    //  4- Append new item for our list
    list.appendChild(li)
    //  5- Clear the input field
    input.value = ""
})

// Challenge
/* 
! Build out an event listener on remove button to console log event on click
! 1:55
*/

let rmvBtn = document.querySelector(".remove")

let allItems = document.getElementsByClassName("list-item")

rmvBtn.addEventListener("click", (e) => {
    for (i of allItems) {
        if (i.textContent == input.value) {
            i.remove()
        } else {
            null
        }
    }
    input.value = ""
    // list.removeChild(list.lastElementChild)
})

function forBtn() {
    console.log("Button clicked!")
}
