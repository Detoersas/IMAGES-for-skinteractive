document.addEventListener('DOMContentLoaded', function() {
    // Set the release date (Approx. 20 days from when the code is run)
    // IMPORTANT: You must manually adjust this date if the launch date changes!
    const releaseDate = new Date();
    // Setting the date 20 days from now
    releaseDate.setDate(releaseDate.getDate() + 20);

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const distance = releaseDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result - using padStart to ensure '00' format
        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownInterval);
            // You could change this to a confetti or 'Game is Live' message
            document.getElementById("countdown").innerHTML = "<h2 style='color: #00ff00;'>RELEASED: PLAY NOW</h2>";
        }
    }, 1000);
});
