/*
    then the rest of the effect is simple
        all you have to do is randomize the creation of the rain drops
            remove drops as they end their life
            create new ones
*/


/*
    the next step is to replicate it for many drops
*/

let height = window.innerHeight;

function createDrop() {
    let drop = document.createElement("div");
    drop.style.padding = 0;
    drop.style.margin = 0;
    drop.innerHTML = (Math.floor(Math.random() * 2));
    return drop;
}

// the next goal is to make the 1 move from top to bottom
function moveDrop(drop, x, y) {
    drop.style.transform = `translate(${x}px, ${y}px)`;
}

function rainSingleDrop() {
    let speed = 1, // units of pixels per second
        acceleration = 1,
        deltat = 20 * Math.pow(10, -3),
        timer,
        x,
        y = 0;
    let drop = createDrop();
    console.log(drop)
    x = Math.floor(Math.random() * window.innerWidth);
    moveDrop(drop, x, 0);
    document.body.appendChild(drop);
    timer = setInterval(() => {
        speed += acceleration * deltat;
        y += speed;
        if (y > height) {
            clearInterval(timer);
            drop.remove();
        }
        moveDrop(drop, x, y);
    }, 50)
}
function rain() {
    setInterval(rainSingleDrop, 500)
}

rain()