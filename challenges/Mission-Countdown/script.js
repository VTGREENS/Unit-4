// Timeout Button
let startTimeoutBtn = document.getElementById("start-timeout");
// Interval Button
let startIntervalBtn = document.getElementById("start-interval");
// Timeout H2
let timeOutDisplay = document.getElementById("timeout-display")
// Interval H2
let intervalDisplay = document.getElementById("interval-display")

startIntervalBtn.style.display = "none"


// Timeout Button work
startTimeoutBtn.addEventListener("click",(e)=> {
    startTimeoutBtn.style.display = "none"
    timeOutDisplay.textContent = "Getting Ready..." 
    setTimeout(() =>{
    timeOutDisplay.style.color = "green"
    timeOutDisplay.textContent = "Ready"
    startIntervalBtn.style.display= "block"
}, 5000)
})

// Count Variable
startIntervalBtn.addEventListener('click', (e) => {
let count = 5
setInterval(() => {
    intervalDisplay.textContent = count --
    if(count < 0){
        intervalDisplay.textContent = "Go!"
    }
}, 1000);
})

// Paulternate

// let startTimeout = document.getElementById("start-timeout")
// let timeoutDisplay = document.getElementById("timeout-display")
// let startInterval = document.getElementById("start-interval")
// let intervalDisplay = document.getElementById("interval-display")
// startInterval.style.display = "none"

// startTimeout.addEventListener("click", (e) => {
//     timeoutDisplay.textContent = "Getting ready!"
//     setTimeout(() => {
//         timeoutDisplay.textContent = "READY????"
//         startInterval.style.display = "block"
//         startTimeout.style.display = "none"
//     }, 1);
// })

// let isRunning = false

// startInterval.addEventListener("click", (e) => {
//     let count = 5
    
//     if (!isRunning) {
//         let myInterval = setInterval(() => {
//             isRunning = true
//             // startInterval.disabled = true
//             if (count > 0) {
//                 intervalDisplay.style.color = "red"
//                 intervalDisplay.textContent = count
//                 count --
//             } else {
//                 intervalDisplay.style.color = "green"
//                 intervalDisplay.textContent = "GO!"
//                 clearInterval(myInterval)
//                 isRunning = false
//                 // startInterval.disabled = false
//             }
//         }, 1000)
//     }
// })









