document.addEventListener('DOMContentLoaded', function() {
    // Drawer toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const closeDrawer = document.getElementById('closeDrawer');
    const drawer = document.getElementById('drawer');
    const overlay = document.getElementById('overlay');
    
    menuToggle.addEventListener('click', function() {
        drawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeDrawer.addEventListener('click', function() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', function() {
        drawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Video card click functionality (would normally open a video player)
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on a link or button inside the card
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
                return;
            }
            
            const videoTitle = this.querySelector('.video-title').textContent;
            alert(`Playing: ${videoTitle}`);
            // In a real implementation, this would open a video player
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
