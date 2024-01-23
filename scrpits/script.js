document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");

    playPauseBtn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.innerHTML = "Pause";
            playPauseBtn.classList.remove("play");
            playPauseBtn.classList.add("pause");
        } else {
            audio.pause();
            playPauseBtn.innerHTML = "Play";
            playPauseBtn.classList.remove("pause");
            playPauseBtn.classList.add("play");
        }
    });
});

