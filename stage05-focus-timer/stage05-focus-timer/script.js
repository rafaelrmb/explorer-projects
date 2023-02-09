/* Constants*/
const FIVE_MINUTES = 5;
const SIXTY_SECONDS = 60;
const FOREST_SOUND = new Audio('./assets/sounds/forest.wav');
const RAIN_SOUND = new Audio('./assets/sounds/rain.wav');
const CAFETERIA_SOUND = new Audio('./assets/sounds/cafeteria.wav');
const FIREPLACE_SOUND = new Audio('./assets/sounds/fireplace.wav');
const ALARM_SOUND = new Audio('./assets/sounds/alarm.mp3');

/* Elements */
/* Timer Buttons */
const playButton = document.querySelector(".controls .start");
const stopButton = document.querySelector(".controls .stop");
const addTimeButton = document.querySelector(".controls .add-minutes");
const descreaseTimeButton = document.querySelector(".controls .decrease-minutes");

/* Timer display */
const timerDisplayMinutes = document.querySelector(".timer-display .minutes");
const timerDisplaySeconds = document.querySelector(".timer-display .seconds");
const timerDisplay = document.querySelector(".timer-display");

/* Audio buttons */
const forestSoundButton = document.querySelector(".audio-container .forest");
const rainSoundButton = document.querySelector(".audio-container .rain");
const cafeteriaSoundButton = document.querySelector(".audio-container .cafeteria");
const fireplaceSoundButton = document.querySelector(".audio-container .fireplace");
const allAudioButtons = document.querySelectorAll(".audio-container button");

/* Timer interval */
let timerInterval;

/* Light mode buttons */
const darkModeButton = document.querySelector(".dark-mode-button");
const lightModeButton = document.querySelector(".light-mode-button");

/* Events*/
/* Light mode events */
darkModeButton.addEventListener("click", () => {
    toggleLightMode();
});

lightModeButton.addEventListener("click", () => {
    toggleLightMode();
});

/* ------------------ Timer events ----------------------------------*/
timerDisplay.addEventListener("click", () => {
    setDisplayTime();
});

playButton.addEventListener("click", () => {
    playButton.classList.add("active");
    startTimer();
});

stopButton.addEventListener("click", () => {
    playButton.classList.remove("active");
    updateDisplay(FIVE_MINUTES, 0)
    endTimer();
});

addTimeButton.addEventListener("click", () => {
    addFiveMinutes(getCurrentMinutesNumber(), getCurrentSecondsNumber());
});

descreaseTimeButton.addEventListener("click", () => {
    decreaseFiveMinutes(getCurrentMinutesNumber(), getCurrentSecondsNumber());
});

/* ------------------ Sounds buttons events ----------------------------------*/
forestSoundButton.addEventListener("click", () => {
    checkIfSoundIsActive(forestSoundButton) ?
        pauseSound(FOREST_SOUND) :
        playSound(FOREST_SOUND);
});

rainSoundButton.addEventListener("click", () => {
    checkIfSoundIsActive(rainSoundButton) ?
        pauseSound(RAIN_SOUND) :
        playSound(RAIN_SOUND);
});

cafeteriaSoundButton.addEventListener("click", () => {
    checkIfSoundIsActive(cafeteriaSoundButton) ?
        pauseSound(CAFETERIA_SOUND) :
        playSound(CAFETERIA_SOUND);
})

fireplaceSoundButton.addEventListener("click", () => {
    checkIfSoundIsActive(fireplaceSoundButton) ?
        pauseSound(FIREPLACE_SOUND) :
        playSound(FIREPLACE_SOUND);
})

/* Functions */
/* ------------------ Timer functions ----------------------------------*/
function startTimer() {
    let minutes = getCurrentMinutesNumber()
    let seconds = getCurrentSecondsNumber();

    if (!checkIfHasTimeLeft(minutes, seconds)) {
        return;
    }

    timerInterval = setInterval(() => {
        if (seconds <= 0) {
            minutes--;
            seconds = SIXTY_SECONDS;
        }

        seconds--;
        updateDisplay(minutes, seconds);

        if (minutes == 0 && seconds == 0) {
            ALARM_SOUND.play();
            endTimer();
        }
    }, 1000);
}

function endTimer() {
    clearInterval(timerInterval);
}

function updateDisplay(minutes, seconds) {
    timerDisplayMinutes.textContent = minutes;
    timerDisplaySeconds.textContent = seconds;

    if (seconds < 10) {
        timerDisplaySeconds.textContent = `0${seconds}`;
    };

    if (minutes < 10) {
        timerDisplayMinutes.textContent = `0${minutes}`;
    };
}

function addFiveMinutes(minutes, seconds) {
    updateDisplay(minutes + FIVE_MINUTES, seconds);
}

function decreaseFiveMinutes(minutes, seconds) {
    checkIfHasTimeLeft(minutes, seconds) ?
        updateDisplay(minutes - FIVE_MINUTES, seconds)
        : false;

}

function checkIfHasTimeLeft(minutes, seconds) {
    if (minutes === 0 && seconds === 0) {
        alert("You have reached the end of the timer!");
        return false;
    }
    return true;
}

function getCurrentMinutesNumber() {
    return Number(timerDisplayMinutes.textContent);
}

function getCurrentSecondsNumber() {
    return Number(timerDisplaySeconds.textContent);
}

function setDisplayTime() {
    let userChosenTime = Math.floor(Number(prompt("Digite um número maior que 0: ")));
    userChosenTime > 0 && !isNaN(userChosenTime) ?
        updateDisplay(userChosenTime, 0) : updateDisplay(0, 0);
}

/* ------------------ Sound button functions ----------------------------------*/
function playSound(sound) {
    sound.play();
    sound.loop = true;
}

function pauseSound(sound) {
    sound.pause();
}

function checkIfSoundIsActive(element) {
    if (element.classList.contains("active")) {
        element.classList.remove('active');
        return true;
    } else {
        element.classList.add('active');
        return false;
    }
}

/* ------------------ Light mode functions ----------------------------------*/
function toggleLightMode() {
    document.body.classList.toggle("light-mode");

    darkModeButton.toggleAttribute('hidden');
    lightModeButton.toggleAttribute('hidden');

    allAudioButtons.forEach(button => {
        button.classList.toggle("light-mode");
    });
}