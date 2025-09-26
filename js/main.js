document.addEventListener("DOMContentLoaded", function() {
    const videoModal = document.getElementById("videoModal");
    const video = document.getElementById("videoPlayer");

    // Attach click events to all demo buttons
    document.querySelectorAll(".demo-btn").forEach(btn => {
        btn.addEventListener("click", function() {
            video.src = this.dataset.video;  // Set video from data-video attribute
            const modal = new bootstrap.Modal(videoModal);
            modal.show();
        });
    });

    // Stop video when modal closes
    videoModal.addEventListener("hidden.bs.modal", function () {
        video.pause();
        video.src = "";
    });
});
