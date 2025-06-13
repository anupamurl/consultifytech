document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('genaianimation')) {
        loadEnterpriseAIBanner();
    }
});

function loadEnterpriseAIBanner() {
    const container = document.getElementById('genaianimation');
    if (!container) return;
    
    container.innerHTML = `
        <video autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;">
            <source src="images/video/brain.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
}