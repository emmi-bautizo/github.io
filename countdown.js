
const EVENT_DATE = new Date(2026, 6, 6, 13, 0, 0);


let interval = null;

function updateCountdown() {
    const now = new Date();
    const diff = EVENT_DATE - now;

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");
    const message = document.getElementById("event-message");

    if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";

        message.textContent = "¡Hoy es el gran día!";
        clearInterval(interval);
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
interval = setInterval(updateCountdown, 1000);
