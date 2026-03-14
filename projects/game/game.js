let portugalScore = 0;
let argentinaScore = 0;

function start(){
    print("Supa Strikas!");
    print("Portugal vs Argentina in the World Cup Final.");
    print("Press anything to begin.");

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
        } else{
            stayHere();
            waitThenCall(lockerRoom);
        }
    }

    waitForInput(processInput);
}

function tunnel(){
    print("You stand in the tunnel.");
    print("Type 'field' to start the match.");

    function processInput(input){
        if(input.toLowerCase() === "field"){
            field();
        } else{
            stayHere();
            waitThenCall(tunnel);
        }
    }

    waitForInput(processInput);
}

function field(){
    print("Score: Portugal " + portugalScore + " - Argentina " + argentinaScore);
    print("Type 'shoot' or 'pass'.");

    function processInput(input){
        input = input.toLowerCase();

        if(input === "shoot"){
            shoot();
        }
        else if(input === "pass"){
            argentinaAttack();
        }
        else{
            stayHere();
            waitThenCall(field);
        }
    }

    waitForInput(processInput);
}

function shoot(){
    print("You shoot!");

    if(Math.random() < 0.5){
        portugalScore++;
        print("GOAL FOR PORTUGAL!");
    } else{
        print("Missed!");
    }

    field();
}

function argentinaAttack(){
    print("Argentina attacks!");

    if(Math.random() < 0.4){
        argentinaScore++;
        print("Argentina scores!");
    } else{
        print("Portugal defends!");
    }

    field();
}
