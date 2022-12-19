console.log("it works chuck-norris");

asyncChuckFetch();
// TODO create a function that will conduct the fetch

async function asyncChuckFetch(){
    try{
        const url ="https://api.chucknorris.io/jokes/random"
        const response = await fetch(url);
        const joke = await response.json();
        console.log(joke.value);
        displayHistory(joke.value)

    }catch(err){
        console.error(err.message);
    }

}

// 1. Grab the parent and store it in a variable (ul is the parent).
// 2. Create a new element that will be placed on the parent (li).
// 3. Replace innerText of new element
// 4. Append the child to the parent
function displayHistory(joke){
    let historyList = document.getElementById("history"); // Parent
    let reviseJoke = document.createElement("li")//child
    reviseJoke.innerText = joke
    historyList.append(reviseJoke);
}