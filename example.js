/*
    You can change these attributes and see a different kind of shower!

    numDrops -> the maximum number of drops that you will see
    rampUpTime -> how fast you arrive at numDrops
    deltatTime -> alters smoothness of the animation
    dropSpeed -> the initial speed of the drop
    dropAcceleration -> the acceleration with which the drop falls
*/

const numDrops = 100,
      rampUpTime = 50, // in milliseconds
      deltatTime = 20, // in milliseconds
      dropSpeed = 5,
      dropAcceleration = 9.8,
      deltat = deltatTime * Math.pow(10, -3);

let currentNumDrops = 0;


/*
    You can change what constitutes a drop in this function
*/
function createDrop() {
    let drop = document.createElement("div");
    drop.style.padding = 0;
    drop.style.margin = 0;
    drop.style.position = "absolute";
    drop.style.fontSize = "2rem";
    // drop.innerHTML = (Math.floor(Math.random() * 2)); // for binary rain
    drop.innerHTML = "🐒"
    currentNumDrops++;
    return drop;
}

function moveDrop(drop, x=0, y=0) {
    drop.style.top = "-50px";
    drop.style.transform = `translate(${x}px, ${y}px)`;
}

function rainSingleDrop() {
    let v = dropSpeed, // units of pixels per second
        x=0,
        y=-10;

    if (currentNumDrops == numDrops) {
        return;
    }

    let drop = createDrop();
    x = Math.floor(Math.random() * window.innerWidth);

    moveDrop(drop, x);
    document.body.appendChild(drop);

    window.requestAnimationFrame(() => {
        animateDrop(drop, x, y, v, dropAcceleration, deltat);
    })
}

function animateDrop(drop, x, y, speed, acceleration, deltat) {
    speed += acceleration * deltat;
    y += speed;
    if (y > window.innerHeight) {
        moveDrop(drop, x, 0);
        window.requestAnimationFrame(() => {
            x = Math.floor(Math.random() * window.innerWidth);
            animateDrop(drop, x, -10, dropSpeed, acceleration, deltat); // reset drop
        });
    } else {
        moveDrop(drop, x, y);
        window.requestAnimationFrame(() => {
            animateDrop(drop, x, y, speed, acceleration, deltat);
        });
    }
}

function rain() {
    setInterval(rainSingleDrop, rampUpTime);
}

rain()