/* The point of blackjack is to get hand that exactly sums upto 21.
And if you never get 21, atleast get as close as possible to 21. But never above 21. Because if so, you'll be out.
Suppose you have two starting cards '6' and '9' in your hand. You are still in game.
If you have a 'king' and an 'ace'. Exactly equal to 21 and you win
Suppose you have 2 cards '10 & 6' and you ask for another one and you get '6'. now you are out of the game (10 + 6 + 6 = 22 )*/

// now we will check if a player has a blackjack or not or what is the scenario. 
// 1. create a variable hasBlackJack and assign it to fasle
// 2. flip its value in appropriate code block
// Till now we are only tracking if the player has blackjack or not

// now track if the player got more than 22 or not
// 1. create a vaiable isAlive and assign it to true
// 2. Flip its value to false in appropriate code block 

// 1. declare a variable message and assign its value to empty string.
// 2. reassign the message variable to the string we are logging out
// 3. log it out

// 1. create a function startGame()
// 2. move the conditions inside function

// 1. store the message-el paragraph in variable messageEl
// 2. display the message in message-el using message-el.textContent

// 1. store the sum paragraph in a variable called sumEl
// 2. render the sum on the page using this format -> "Sum: 14"

// 1. store the cards paragraph in a variable called cardsEl
// 2. render the sum on the page using this format -> "Sum: 10 14"

// 1. create a runNewCard() function that logs out "drawing a new card from deck"

// 1. create a card variable in runNewCard and hard code its va;ue to a number(2 - 11)
// 2. add the new card to the sum variable
// 3. Call startGame

// 1. rename startGame() function as renderGame() only in js.
// 2. create a startGame() function that calls renderGame()

// till now no matter how many times we click on new card, we will always get first and second card
// this is because of 'cardsEl.textContent = "Cards: "  + firstCard + " " + secondCard'
// we need to store all of our variables in one card. for this we'll use an array.

// as the newCard is created and added to the sum. now push the newCard to the cards array.

// 1. create a for loop that renders out all the cards in the cards array instead of just two cards

// we have hard cord values (assign values) to first and second card. Also fix the value of card.
// 1. create a function getRandomCard() that returns a random number
// 2. use getRandomCard() to set the values of first card and second card and card as well

// 1. modify the cards as
// if 1 -> 11
// if 11 - 13 -> 10

// if we console.log below assigned variables. that means as you enter the casino, the game has already started.
// we do not want that. we want the game to be started as we click on START GAME. so
// 1. assign firstCard and secondCard and sum inside startGame ()
// 2. set isAlive to false then reassign it to true inside startGame ()
// 3. cards array shouls not be set before game start
// 4. same with the sum. assign sum to zero

// after the game is over, we are still getting a new card + we can start the game with one card.
// we need to fix this

// 1. only allow the player to get a new card if he is alive and doesnot have a blackjack



let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
//let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function startGame() {
    isAlive = true 
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber == 1) {
        return 11
    }
    else {
        return randomNumber
    }
    
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++ ){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum: "  + sum
    if (sum <= 20) {
        message = 'Do you want to draw a new card?'
    }
    
    else if (sum == 21) {
        message = 'You have got a Blackjack!'
        hasBlackJack = true
    }
    
    else {
        message = 'You are out of the game'
        isAlive = false
    }
    messageEl.textContent = message
    
}

function runNewCard(){
     

    if (isAlive == true &&  hasBlackJack == false) {
    
    let card = getRandomCard()
    
    sum += card
    cards.push(card)

    renderGame()
    }
    
}



