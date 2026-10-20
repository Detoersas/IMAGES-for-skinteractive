document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        
        // Ensures videos play silently and loop on hover, providing a visual 'life' to the image assets
        const videoElement = item.querySelector('.gallery-video');
        if (videoElement) {
            videoElement.setAttribute('preload', 'auto');
            
            item.addEventListener('mouseenter', () => {
                videoElement.volume = 0.2; // Keep volume low for ambient feel
                videoElement.play().catch(error => {
                    console.warn("Autoplay prevented. Click the video to start.", error);
                });
            });
            item.addEventListener('mouseleave', () => {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset to start when mouse leaves
            });
        }
    });
});
