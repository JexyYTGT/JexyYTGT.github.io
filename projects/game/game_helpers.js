const output = document.getElementById("output");
const inputBox = document.getElementById("user-input");
let gameOver = false; // stops input after match ends

function print(text){
    const line = document.createElement("div");
    line.textContent = text;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

inputBox.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        const input = inputBox.value;
        inputBox.value = "";

        if(gameOver){
            print("> The match is over! Refresh to play again.");
            return;
        }

        print("> " + input);
        handleInput(input);
    }
});

// default handler
function handleInput(input) {
    console.log("No handler for input: " + input);
}

// override this in game.js
function waitForInput(handlerFunction){
    handleInput = handlerFunction;
}

function waitThenCall(target){
    setTimeout(target,2000);
}

function stayHere(){
    print("Sorry, I don't understand that.");
}
