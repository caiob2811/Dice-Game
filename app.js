let button = document.querySelector('button')

button.addEventListener('click', function(event) {
    event.preventDefault()

    let randomNumber1 = Math.floor(Math.random() * 6) + 1
    let randomNumber2 = Math.floor(Math.random() * 6) + 1

    let randomNumberSrc1 = 'img/dice' + randomNumber1 + '.png'

    let img1 = document.querySelectorAll('img')[0]
    img1.setAttribute('src', randomNumberSrc1)

    let randomNumberSrc2 = 'img/dice' + randomNumber2 + '.png'
    let img2 = document.querySelectorAll('img')[1]
    img2.setAttribute('src', randomNumberSrc2)

    if( randomNumberSrc1  > randomNumberSrc2) {
      document.querySelector('h1').innerHTML = '🏆 Jogador 1 Venceu'
    } else if (randomNumberSrc2 > randomNumberSrc1) {
        document.querySelector('h1').innerHTML = '🏆 Jogador 2 Venceu'
    } else {
         document.querySelector('h1').innerHTML = 'Empate'
    }
})