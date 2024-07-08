document.addEventListener("DOMContentLoaded", function() {
    const videos = [
        document.getElementById('video1'),
        document.getElementById('video2'),
        document.getElementById('video3'),
        document.getElementById('video4')
    ];

    for (let i = 0; i < videos.length - 1; i++) {
        videos[i].addEventListener('ended', function() {
            videos[i + 1].play();
        });
    }

    // Optionally, start the first video automatically
    videos[0].play();
});