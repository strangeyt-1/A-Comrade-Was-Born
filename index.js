
//player 1

let randomNumber = Math.ceil(Math.random() * 6)
let randomDiceNumber = randomNumber + ' dice' + '.jpeg'

let randomImageSource = './images/' + randomDiceNumber
let image = document.querySelectorAll('img')[0]
image.setAttribute('src', randomImageSource);

//player 2
let randomNumber2 = Math.ceil(Math.random() * 6)
let randomDiceNumber2 = randomNumber2 + ' dice' + '.jpeg'

let randomImageSrc2 = './images/' + randomDiceNumber2
let image1 = document.querySelectorAll('img')[1]
image1.setAttribute('src', randomImageSrc2)


// conditional statements
if (randomNumber > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player1 wins🎈'
  } else if (randomNumber2 > randomNumber) {
    document.querySelector('h1').innerHTML = 'Player2 wins🎈'
  } else {
    document.querySelector('h1').innerHTML = 'Draw👫'
  }