class Drop {
    constructor(x, y, containerID = "rain", speed = 10, dropGenerator = Drop.defaultDropGenerator) {
        this.dom = dropGenerator();
        this.x = x;
        this.y = y;
        this.speed = speed;
        const container = document.getElementById(containerID);
        container.appendChild(this.dom);
    }

    move(x, y) {
        this.dom.style.top = "-50px";
        this.dom.style.transform = `translate(${x}px, ${y}px)`;
        this.x = x;
        this.y = y;
    }

    static defaultDropGenerator() {
        let drop = document.createElement("div");
        drop.style.padding = 0;
        drop.style.margin = 0;
        drop.style.position = "absolute";
        drop.style.fontSize = "2rem";
        drop.innerHTML = (Math.floor(Math.random() * 2)); // for binary rain
        return drop;
    }
}

class Rain {
    constructor(containerID = "rain", numDrops = 100, speed = 5, acceleration = 9.8, deltat = 20, rampUpTime = 50) {
        this.numDrops = numDrops;
        this.speed = speed;
        this.acceleration = acceleration;
        this.deltat = deltat; // in milliseconds
        this.rampUpTime = rampUpTime;
        this.currentNumDrops = 0;
        this.rainTimer = null;
        this.containerID = containerID;
        this.container = document.getElementById(containerID);
    }

    rainSingleDrop() {
        if (this.currentNumDrops == this.numDrops) {
            return;
        }
        let drop = new Drop(this.containerID),
            x = Math.floor(Math.random() * this.container.clientWidth),
            y = 0;
        this.currentNumDrops++;

        drop.move(x, y);

        window.requestAnimationFrame(() => this.animateDrop(drop))
    }

    animateDrop(drop) {
        let t = this.deltat * Math.pow(10, -3),
            x = drop.x,
            y = drop.y;
        drop.speed += this.acceleration * t;
        y += drop.speed;
        if (drop.y > window.innerHeight) {
            x = Math.floor(Math.random() * this.container.clientWidth);
            y = -10;
            drop.speed = this.speed;
        }
        drop.move(x, y);
        window.requestAnimationFrame(() => {
            this.animateDrop(drop);
        });
    }

    rain() {
        this.rainTimer = setInterval(this.rainSingleDrop.bind(this), this.rampUpTime);
    }

    stop() {
        clearInterval(this.rainTimer);
    }
}