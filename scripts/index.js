const game = new clickFarm(15)

//Choose button
const btnStartWithSound = document.getElementById('start-with-sound')
const btnStartWithoutSound = document.getElementById('start-without-sound')
const btnReset = document.getElementById('reset')
const btnHorse = document.getElementById('horse')
const btnCow = document.getElementById('cow')
const btnDog = document.getElementById('dog')
const btnCat = document.getElementById('cat')
const btnChicken = document.getElementById('chicken')
const btnPig = document.getElementById('pig')
const btnDuck = document.getElementById('duck')
const btnRabbit = document.getElementById('rabbit')

//Show score and time left
const displayScore = document.querySelector('.score span')
const displayTimeLeft = document.querySelector('.time span')

//Choose game over message
const gameOverMessage = document.querySelector('.game-over-message')

//Enable Buttons
function enableButtons() {
btnHorse.removeAttribute('disabled')
btnCow.removeAttribute('disabled')
btnDog.removeAttribute('disabled')
btnCat.removeAttribute('disabled')
btnChicken.removeAttribute('disabled')
btnPig.removeAttribute('disabled')
btnDuck.removeAttribute('disabled')
btnRabbit.removeAttribute('disabled')
}

//Disable Buttons
function disableButtons() {
    btnHorse.setAttribute('disabled', true)
    btnCow.setAttribute('disabled', true)
    btnDog.setAttribute('disabled', true)
    btnCat.setAttribute('disabled', true)
    btnChicken.setAttribute('disabled', true)
    btnPig.setAttribute('disabled', true)
    btnDuck.setAttribute('disabled', true)
    btnRabbit.setAttribute('disabled', true)
    btnStartWithSound.setAttribute('disabled', true)
    btnStartWithoutSound.setAttribute('disabled', true)
}


//Display New Image
function displayNewImage(choice) {
    let element = document.getElementById('img')
    element.setAttribute('src', `./images/${choice}`)
}

//Change Image Over Time
function changeImage() {
    let count = 0
    const intervalId = setInterval(function () {
        count ++
        if(count < 6) {displayNewImage(game.getImage())}
        else {clearInterval}
    }, 3000)
}


//Create Timer
function createTimer(duration, display) {
        var timer = duration, minutes, seconds;
        intervalId = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = "Time" + " " + "Left:" + " " + minutes + ":" + seconds;
            if (--timer < 0) {
                clearInterval(intervalId)
                let element = document.getElementById('img')
                element.setAttribute('src', `./images/gameover.jpg`);
                disableButtons()
                bgAudio.pause()
                if(game.score > 349) {display.textContent = "WOW! YOU'RE REALLY FAST! LET'S PLAY AGAIN!"}
                else if (game.score > 0 && game.score < 350) {display.textContent = "GOOD JOB! LET'S PLAY AGAIN!"}
                else if(game.score < 1) {display.textContent = "YOU CAN DO BETTER THAN THAT... LET'S TRY AGAIN!"}
            }
        }, 1000);
}

//Start Timer
function startTimer() {
    var duration = 15; // Converter para segundos
    display = document.querySelector('#timer'); // selecionando o timer
    createTimer(duration, display); // iniciando o timer
}


//Check Correct Click
function checkClick() {
const userChoice = event.target.innerText.toLowerCase()
game.checkAnswer(userChoice)
displayScore.innerHTML = game.score
}


//Start Game
function startGameWithSound() {
    enableButtons()
    displayNewImage(game.getImage())
    changeImage()    
    startTimer()
    btnStartWithSound.setAttribute('disabled', true)
    btnStartWithoutSound.setAttribute('disabled', true)
    if(audioActive === true) {
        bgAudio.play()
        bgAudio.volume = .2
    }
}

function startGameWithoutSound() {
    enableButtons()
    displayNewImage(game.getImage())
    changeImage()    
    startTimer()

}

btnStartWithSound.onclick = startGameWithSound

btnStartWithoutSound.onclick = startGameWithoutSound

btnReset.addEventListener("click",()=> location.reload())

window.addEventListener('load',()=>{
    const btns = document.querySelectorAll('.choice-button')
    for(btn of btns){
        btn.addEventListener('click', checkClick)
    }
}) 

const bgAudio = document.getElementById('background-sound')

let audioActive = true

bgAudio.volume = .2


