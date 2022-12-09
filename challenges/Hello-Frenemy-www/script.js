// Variables
h2 = document.querySelector("#computer-response");
form = document.querySelector("#name-form");
userInput = document.querySelector("#user-input")

// Enemy List
let enemyList = ['darth vader', 'voldemort', 'palpatine', 'lex luthor'];

// Event Listener
form.addEventListener("submit", (e) => {
    e.preventDefault()

// Update User input
updateUserInput = userInput.value

// Enemy response If/Else statements
if (enemyList[0].includes(updateUserInput)) {
    h2.textContent = (`${updateUserInput}... No, that's impossible!`)
} else if (enemyList.includes(updateUserInput)) {
    h2.textContent = (`Go away, ${updateUserInput}`)
} else {
    h2.textContent = (`Hello, ${updateUserInput}`)
}

})




// Going further

    // Going Further
//     let result = enemies.find(enemy => enemy.toLowerCase().includes(input.value.toLowerCase()))
    
//     if (result) {
//         response.textContent = `Go Away ${input.value}`
//         response.style.color = "red"
//     } else {
//         response.textContent = `Welcome ${input.value}`
//         response.style.color = "lightblue"
//     }

//     input.value = ""
// })


