function start(){
    print("Supa Strikas!");
    print("Type anything to begin.");

    function processInput(input){
        lockerRoom();
    }

    waitForInput(processInput);
}

function lockerRoom(){
    print("You are in the locker room.");
    print("Type 'tunnel' to go to the tunnel.");

    function processInput(input){
        if(input.toLowerCase() === "tunnel"){
            tunnel();
        } else {
            stayHere();
            waitThenCall(lockerRoom);
        }
    }

    waitForInput(processInput);
}
