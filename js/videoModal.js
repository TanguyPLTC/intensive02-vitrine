document.addEventListener('DOMContentLoaded', () => {
    let videoSrc;
    const videoBtn = document.querySelector('.video-btn');
    videoBtn.addEventListener('click', () => {
        videoSrc = videoBtn.dataset.src;
    });

    const video = document.getElementById('video')
    const videoModal = document.getElementById('videoModal')
    videoModal.addEventListener('shown.bs.modal', () => {
        video.src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
    });

    videoModal.addEventListener('hide.bs.modal', () => {
        video.src = videoSrc;
    });
});