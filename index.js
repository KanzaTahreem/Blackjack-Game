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


let firstCard = 7;
let secondCard = 11;
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

if (sum <= 20) {
    message = 'Do you want to draw a new card? 🙂'
}

else if (sum == 21) {
    message = 'You have got a Blackjack! 🥳'
    hasBlackJack = true
}

else {
    message = 'You are out of the game 😭'
    isAlive = false
}

console.log(message)