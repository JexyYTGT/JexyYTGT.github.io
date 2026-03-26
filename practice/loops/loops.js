let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");


//final submit

//fill in code for canvas1 here
for(let x = 0; x <= 800; x += 75){
    for(let y = 50; y <= 150; y += 50){
        ctx.fillRect(x, y, 50, 20);
    }
}

canvas = document.getElementById("canvas2");
ctx = canvas.getContext("2d");

//fill in code for canvas2 here
for(let x = 0; x <= 800; x += 75){
    for(let y = 50; y <= 700; y += 50){
        if(x < y){
            ctx.fillRect(x, y, 50, 20);
        }
    }
}

canvas = document.getElementById("canvas3");
ctx = canvas.getContext("2d");

//fill in code for canvas3 here

for(let x = 0; x <= 800; x += 75){
    for(let y = 50; y <= 700; y += 50){
        if(x !== y){
            ctx.fillRect(x, y, 50, 20);
        }
    }
}

canvas = document.getElementById("canvas4");
ctx = canvas.getContext("2d");

//fill in code for canvas4 here

for(let x = 0; x <= 700; x += 100){
    for(let y = 0; y <= 700; y += 100){
            ctx.fillRect(x, y, 50, 50);
    }
}
