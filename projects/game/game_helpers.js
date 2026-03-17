const output = document.getElementById("output");
const inputBox = document.getElementById("user-input");

let gameOver = false;  // stops input after match ends
let handleInput = function(input) {
    console.log("No handler for input: " + input);
};

// print text to terminal
function print(text) {
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

// input listener — attach only once
inputBox.addEventListener("keydown", function(event) {
    if(event.key === "Enter") {
        const input = inputBox.value;
        inputBox.value = "";

        if(gameOver) {
            print("> The match is over! Refresh to play again.");
            return;
        }

        print("> " + input);
        handleInput(input);
    }
});

// overwrite the current input handler
function waitForInput(handlerFunction) {
    handleInput = handlerFunction;
}

// call a function after a short delay
function waitThenCall(target) {
    setTimeout(target, 2000);
}

// default fallback
function stayHere() {
    print("Sorry, I don't understand that.");
}
