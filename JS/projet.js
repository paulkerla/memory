const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let counter = 0;
let success = 0;
const counterElement = document.querySelector('.counter')


cards.forEach(card => card.addEventListener('click', flipCard));
function flipCard() {
    if (lockBoard===true) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.numero === secondCard.dataset.numero;
    isMatch ? disableCards() : unflipCards();
    incrementCounter();
    checkForEndGame();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    success ++
    

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function incrementCounter()
{
    counter ++;
    counterElement.textContent = counter;

}
function checkForEndGame()
{
    if (success===6)
    {
        alert(`Félicitation, vous avez fini en ${counter} coups`)
    }
}
document.addEventListener('keydown',function(event)
{
    if (event.key === ' ')
    {
        location.reload(); //permet de rafraichir la page
    }
})