/*
FIZZBUZZ LOOP CHALLENGE (pair coding)
************
- write a conditional that:
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - prints out the number if none of the above are true.
- create a loop that counts to 100.
- Pass each iteration through a conditional.
*/
// Loop we made/ works great.
for ( i = 1; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0 ){
        console.log("Fizz Buzz")

    }else if (i % 3 == 0) {
        console.log("Fizz");

    }else if (i % 5 == 0){
        console.log("Buzz");
    
    }else console.log(i);   
}


// Function style

function fizzBuzz(count){
    //   start      stop      step
    for (i = 0; i <= count; i = i + 1) {
    //     if (i % 15 == 0){
    //     console.log("Fizz Buzz");

    //     }else if (i % 3 == 0) {
    //         console.log("Fizz");

    //     }else if (i % 5 == 0){
    //         console.log("Buzz");
    // } else {
    //     console.log(i);
    // }
    
    // ternary
    
    i % 15 == 0 ? console.log("Fizz Buzz")
    : i % 3 == 0 ? console.log("fizz")
    : i % 5 == 0 ? console.log("Buzz")
    : console.log(i)
}
}
fizzBuzz(0, 100, 2)

// ? Lil' extra garbage
let arr = ["Jonas", "Isaac", "Leif",]

arr[0] = "Lauren"

function length(arr) {
    let count = 1
    for (i in arr) {
        count++
    }
    return count
}

length(arr)
arr[arr[length(arr)]] = "Paul"
console.log(arr)

arr.push("Elena")