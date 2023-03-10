"use strict"

//use cssRoot.style.setProperty("key", "value");
const cssRoot = document.querySelector(':root');

// when run this app in mobile is return true
const isMobile = localStorage.mobile || window.navigator.maxTouchPoints > 1;

Math.rnd = (start = 0, end = 1, int_floor = false) => {
    const result = start + (Math.random() * (end - start));
    return int_floor ? Math.floor(result) : result;
}

/* e.x 
(0 start) -------.------ (10 end) input . = 5
(10 min) ----------------.---------------- (30 max) output . = 20
*/
Math.map = (point, start, end, min, max) => {
    return ((max - min) * (point - start) / (end - start)) + min;
}
Math.toRad = (deg) => {
    return deg * Math.PI / 180;
}
Math.toDeg = (red) => {
    return red * 180 / Math.PI;
}

class Animation {
    constructor(fps) {
        this.fps = fps;
        this.run = false;
        this.fun;
        this.unUsed = false;
    }

    animate(fun) {
        setTimeout(() => {
            if (this.run) {
                fun();
                this.animate(fun);
            }
        }, 1000 / this.fps);
    }

    ready(fun) {
        this.fun = fun;
    }

    start() {
        if (!this.unUsed) {
            this.unUsed = true;
            this.run = true;
            this.animate(this.fun);
        }
    }

    stop() {
        this.run = false;
        this.unUsed = false;
    }
}

