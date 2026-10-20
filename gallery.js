document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        
        const videoElement = item.querySelector('.gallery-video');
        if (videoElement) {
            videoElement.setAttribute('preload', 'auto');
            
            item.addEventListener('mouseenter', () => {
                // Play silently on hover
                videoElement.volume = 0.2; 
                videoElement.play().catch(error => {
                    // Gracefully handle autoplay restriction
                    console.warn("Autoplay restricted. Click to initiate feed.", error);
                });
            });
            item.addEventListener('mouseleave', () => {
                videoElement.pause();
                videoElement.currentTime = 0; // Reset to start when mouse leaves
            });
        }
    });
});
