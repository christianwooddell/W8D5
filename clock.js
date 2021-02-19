class Clock {
    constructor() {
        let date = new Date() 
        this.hours = date.getHours();
        this.minutes = date.getMinutes();
        this.seconds = date.getSeconds();
        
        this.printTime()
        setInterval (this._tick.bind(this), 1000);
    }

    printTime() {
        console.log(`the time is: ${this.hours}:${this.minutes}:${this.seconds}!`)
    }

    _tick() {
        this.seconds++ 
        if (this.seconds === 60) {
            this.seconds = 0 
            this.minutes++;
            if (this.minutes === 60) {
                this.minutes = 0
                this.hours++;
                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }
        console.clear();
        this.printTime();
    };
}

const clock = new Clock();