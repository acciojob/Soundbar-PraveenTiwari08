//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function() {
    const buttonsContainer = document.getElementById("buttons");
    const audioElement = document.getElementById("audio");

    buttonsContainer.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("btn")) {
            const soundFile = target.getAttribute("data-sound");
            playSound(soundFile);
        } else if (target.classList.contains("stop")) {
            stopSound();
        }
    });

    function playSound(soundFile) {
        audioElement.src = `sounds/${soundFile}`;
        audioElement.play();
    }

    function stopSound() {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
});
