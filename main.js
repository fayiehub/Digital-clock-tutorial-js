class digitalClock {
    constructor(element){
        this.element = element;
        //console.log(this.element);
    }
    start() {
        this.update();

        setInterval(() => {
            this.update();
        }, 500);
    }
    update() {
        const parts = this.getTimeParts();
        const minutesFormatted = parts.minutes.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minutesFormatted}`;
        const amPm = parts.isAm ? "AM": "PM";

        this.element.querySelector(".clock-time").textContent = timeFormatted;
        this.element.querySelector(".clock-ampm").textContent = amPm;
    }

    getTimeParts() {
        const now = new Date();
        return {
            hour: now.getHours() % 12 || 12,
            minute: now.getMinutes(), isAm: now.getHours() < 12
        };
    }
}

const clockElement = document.querySelector(".clock");
const clockObject = new digitalClock(clockElement);

clockObject.start();

// const element = document.querySelector(".clock");
// const clockObject = new digitalClock(clockElement);