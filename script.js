document.addEventListener('DOMContentLoaded', function() {
    // FIXED TARGET DATE: October 20, 2026, at 6:30 PM (18:30:00)
    const releaseDate = new Date("Oct 20, 2026 18:30:00").getTime(); 

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = releaseDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown").innerHTML = "<h2 style='color: var(--color-accent); text-shadow: 0 0 25px var(--color-accent);'>Game releasing SOON</h2>";
        }
    }, 1000);
});
