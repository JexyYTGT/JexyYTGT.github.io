// game.js
// Global variables
let portugalScore = 0;
let argentinaScore = 0;
let triesLeft = 3; // total tries for the match

print("test change1")
// Start the game
function start() {
    print("Supa Strikas!");
    print("Portugal vs Argentina in the World Cup Final.");
    print("You are Cristiano Ronaldo who is 41 years old, playing your last chance to win the World Cup.");
    print("Press any key to begin.");

    function processInput(input) {
        drinkChoice();
    }

    waitForInput(processInput);
}
//Drink Choice
function drinkChoice() {
    print("Before heading to the locker room, you stop by a table with drinks.");
    print("You can choose between Gatorade or Water.");
    print("Type 'gatorade' or 'water'.");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "gatorade") {
            print("You grab the Gatorade. You're feeling energized for the match!");
            lockerRoom();
        } else if (input === "water") {
            print("You take the water. Staying calm and focused.");
            lockerRoom();
        } else {
            stayHere();
            waitThenCall(drinkChoice);
        }
    }

    waitForInput(processInput);
}

// Locker Room
function lockerRoom() {
    print("You're in the locker room preparing for the match.");
    print("Your teammates look nervous but ready. (Rafael Leao, Bernardo Silva, Bruno Fernandes, Vintinha, Nuno Mendes, and more 1st team Portugal players)");
    print("Type 'tunnel' to go to the tunnel.");

    function processInput(input) {
        if (input.toLowerCase() === "tunnel") {
            tunnel();
        } else {
            stayHere();
            waitThenCall(lockerRoom);
        }
    }

    waitForInput(processInput);
}

// Tunnel
function tunnel() {
    print("You stand in the tunnel. You walk with your team and beside the Argentinian players. You hear the crowd chanting Ronaldo and Messi outside.");
    print("After some time, Argentinian players are stretching on the other side.");
    print("Type 'field' to walk onto the pitch (field).");

    function processInput(input) {
        if (input.toLowerCase() === "field") {
            field();
        } else {
            stayHere();
            waitThenCall(tunnel);
        }
    }

    waitForInput(processInput);
}

// Main Field
function field() {
    if (triesLeft === 3) {
        print("Kick-off! After about 45 minutes, the ref decided to add 3 minutes of extra time! The ball passes to you. First attempt starts now!");
        print("What do you do, future World Cup Winner?");
    } else {
        print(`Score: Portugal ${portugalScore} - Argentina ${argentinaScore}`);
        print(`You have ${triesLeft} tries left to beat Argentina.`);
    }

    print("Type 'shoot' to take a shot or 'pass' to play safe.");

    function processInput(input) {
        input = input.toLowerCase();

        if (input === "shoot") {
            shoot();
        } else if (input === "pass") {
            argentinaAttack();
        } else {
            stayHere();
            waitThenCall(field);
        }
    }

    waitForInput(processInput);
}

// Shooting
function shoot() {
    if (triesLeft === 3) {
        print("You sprint and take a shot in added time...");
    } else {
        print(`Attempt #${4 - triesLeft}: you see the goal and strike!`);
    }

    if (Math.random() < 0.5) {
        portugalScore++;
        print("GOAL FOR PORTUGAL! The stadium is so loud it hurts your ears!");
    } else {
        print("Missed! The goalkeeper dives and saves it! (we all hate Martinez)");
    }

    nextTurn();
}

// Argentina Attack
function argentinaAttack() {
    print("Argentina launches a dangerous counterattack!");
    if (Math.random() < 0.4) {
        argentinaScore++;
        print("Argentina scores! The stadium screams so loud you have to cover your ears! (Not your fans screaming...)");
    } else {
        print("Portugal defends well! You stop an opposing midfielder's cross!");
    }

    nextTurn();
}

// Handle next turn / halftime
function nextTurn() {
    triesLeft--;

    if (triesLeft === 2) {
        print("\n--- HALF-TIME ---");
        print("Press anything to continue to the second half.");
        function processInput(input) {
            print("Second half begins! You have 2 tries to beat Argentina.");
            field();
        }
        waitForInput(processInput);
    } else if (triesLeft > 0) {
        field();
    } else {
        endGame();
    }
}

// End of the match
function endGame() {
    gameOver = true;
    print("\n--- FULL-TIME ---");
    print(`Final Score: Portugal ${portugalScore} - Argentina ${argentinaScore}`);

    if (portugalScore > argentinaScore) {
        print("Portugal wins the World Cup! You made history!");
    } else if (portugalScore === argentinaScore) {
        print("It's a tie! The match goes to penalties (penalties never coming haha).");
    } else {
        print("Argentina wins the World Cup. Better luck next time...");
    }

    print("You finished the game! Refresh to play again!");
}
