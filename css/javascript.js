let audioStarted = false;
let audio = document.getElementById("hidden-audio");
audio.volume = 0.1;
//now hear me out..
function startAudio() {
    if (!audioStarted) {
        audio.play().catch(() => {}); 
        audioStarted = true;
    }
}

window.addEventListener('mousemove', startAudio);
