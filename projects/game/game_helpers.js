// Get elements from the page
const output = document.getElementById("output");
const inputBox = document.getElementById("user-input");

// Print text to the terminal
function print(text){
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);

    // auto scroll
    output.scrollTop = output.scrollHeight;
}

// Listen for when the user presses Enter
inputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        const input = inputBox.value;
        inputBox.value = "";

        print("> " + input); // show what player typed
        handleInput(input);
    }
});

// This function will be overridden by the current game state
function handleInput(input) {
    console.log("No handler for input: " + input);
}

// This is the function you should call in your game code.
// Its input is a function that takes a string and decides what to do with it
function waitForInput(handlerFunction){
    handleInput = handlerFunction;
}

function waitThenCall(target){
    setTimeout(target,2000);
}

function stayHere(){
    print("\nSorry, I don't understand your input. I'll assume you want to stay here.");
}
