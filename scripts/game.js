/**
 * 1. The player press/clicks the start button
 * 2. One random image/animal is shown
 * 3. "Time Left" starts running
 * 4. While "Time Left" > 0, the player press/click on the correct button according to the image/animal.
 * 4.a. Every correct click, score increase 5 points. Every wrong choice, score decrease 40 points.
 * 5. Check if "Time Left" is still >0
 * 6. If "Time Left" = 0, game ends
 * 7. Message "Game Over"
 */

class clickFarm {
    constructor() {
        this.time = 30
        this.score = 0
        this.image = ''
        this.interval = 1000
        this.imageArr = ['cat.jpg', 'chicken.jpg', 'cow.jpg', 'dog.jpg', 'duck.jpg', 'horse.jpg', 'pig.jpg', 'rabbit.jpg']
        this.randomTimeArr = [3000,4000,5000,6000]
        this.gameOver = false

    }

    getRandomTime(){
        let randomNumber2 = Math.floor(Math.random() * this.randomTimeArr.length)
        this.interval = this.randomTimeArr[randomNumber2]
        return this.interval
    }

    getImage(){
        let randomNumber = Math.floor(Math.random() * this.imageArr.length)
        this.image = this.imageArr[randomNumber]
        return this.image
    }

    checkAnswer(answer) {
        if(answer === this.image.split('.')[0]) this.score += 10
        if(answer !== this.image.split('.')[0]) this.score -= 20 
        return this.score
    }



}