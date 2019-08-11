let height = window.innerHeight;

function createDrop() {
    let drop = document.createElement("div");
    drop.style.padding = 0;
    drop.style.margin = 0;
    drop.style.position = "absolute"
    drop.innerHTML = (Math.floor(Math.random() * 2));
    return drop;
}

function moveDrop(drop, x, y) {
    drop.style.top = "0px";
    drop.style.transform = `translate(${x}px, ${y}px)`;
}

function rainSingleDrop() {
    let speed = 10, // units of pixels per second
        acceleration = 9.8,
        deltat = 20 * Math.pow(10, -3),
        x,
        y = 0;
    let drop = createDrop();
    x = Math.floor(Math.random() * window.innerWidth);
    moveDrop(drop, x, 0);
    document.body.appendChild(drop);
    window.requestAnimationFrame(() => {
        animateDrop(drop, x, y, speed, acceleration, deltat);
    })
}
function rain() {
    setInterval(rainSingleDrop, 500)
}

function animateDrop(drop, x, y, speed, acceleration, deltat) {
    speed += acceleration * deltat;
    y += speed;
    if (y > height) {
        moveDrop(drop, x, 0);
        window.requestAnimationFrame(() => {
            animateDrop(drop, x, -10, 10, acceleration, deltat);
        });
    } else {
        moveDrop(drop, x, y);
        window.requestAnimationFrame(() => {
            animateDrop(drop, x, y, speed, acceleration, deltat);
        });
    }
}
rain()