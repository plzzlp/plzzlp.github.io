document.addEventListener('DOMContentLoaded', function() {
    // Drawer functionality
    const hamburger = document.querySelector('.hamburger');
    const drawer = document.querySelector('.drawer');
    const drawerOverlay = document.querySelector('.drawer-overlay');
    const mainContent = document.querySelector('.main-content');
    
    // Toggle drawer
    hamburger.addEventListener('click', function() {
        document.body.classList.toggle('drawer-open');
    });
    
    // Close drawer when clicking overlay
    drawerOverlay.addEventListener('click', function() {
        document.body.classList.remove('drawer-open');
    });
    
    // Video player functionality
    const playButtons = document.querySelectorAll('.play-button');
    const videoModal = document.querySelector('.video-modal');
    const modalVideo = videoModal.querySelector('video');
    const closeButton = document.querySelector('.close-button');
    const videoTitle = videoModal.querySelector('.video-title');
    const videoViews = videoModal.querySelector('.views');
    const videoLikes = videoModal.querySelector('.likes');
    const videoDescription = videoModal.querySelector('.video-description');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const videoCard = this.closest('.video-card');
            const videoSource = videoCard.querySelector('source').src;
            const title = videoCard.querySelector('h3').textContent;
            const views = videoCard.querySelector('.video-meta span:nth-child(1)').textContent.split(' ')[1];
            const likes = videoCard.querySelector('.video-meta span:nth-child(2)').textContent.split(' ')[1];
            
            modalVideo.src = videoSource;
            videoTitle.textContent = title;
            videoViews.textContent = views;
            videoLikes.textContent = likes;
            videoDescription.textContent = `This tutorial will teach you how to play ${title}. Follow along with the video and practice regularly to master this skill.`;
            
            videoModal.style.display = 'flex';
            modalVideo.play();
        });
    });
    
    closeButton.addEventListener('click', function() {
        videoModal.style.display = 'none';
        modalVideo.pause();
        modalVideo.currentTime = 0;
    });
    
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
            modalVideo.currentTime = 0;
        }
    });
    
    // Chord player functionality
    const chordCards = document.querySelectorAll('.chord-card');
    const chordAudio = document.getElementById('chord-audio');
    
    chordCards.forEach(card => {
        card.addEventListener('click', function() {
            const soundFile = this.getAttribute('data-sound');
            chordAudio.src = soundFile;
            chordAudio.play();
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // Menu item active state
    const menuItems = document.querySelectorAll('.drawer-menu li');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Close drawer on mobile after selection
            if (window.innerWidth < 1024) {
                document.body.classList.remove('drawer-open');
            }
        });
    });
    
    // Search functionality (placeholder)
    const searchIcon = document.querySelector('.header-icons .fa-search');
    
    searchIcon.addEventListener('click', function() {
        alert('Search functionality will be implemented soon!');
    });
    
    // Notifications (placeholder)
    const bellIcon = document.querySelector('.header-icons .fa-bell');
    
    bellIcon.addEventListener('click', function() {
        alert('You have no new notifications');
    });
    
    // Premium button
    const premiumBtn = document.querySelector('.premium-btn');
    
    premiumBtn.addEventListener('click', function() {
        alert('Premium features coming soon!');
    });
    
    // Favorite button in modal
    const favoriteBtn = document.querySelector('.favorite-btn');
    
    favoriteBtn.addEventListener('click', function() {
        this.innerHTML = this.innerHTML.includes('Added') ? 
            '<i class="fas fa-heart"></i> Add to Favorites' : 
            '<i class="fas fa-check"></i> Added to Favorites';
    });
});