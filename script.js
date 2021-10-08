
let cards=[]
let sum = 0
console.log(cards)
console.log(sum)
let hasBlackJack=false
let isAlive=false
let sumEl=document.getElementById("sum-el")
let messageEl=document.querySelector("#message-el")
let cardsEl=document.querySelector("#cards-el")
let playerEl=document.querySelector("#player-el")
let player={
	name: "Yunus",
	chips:150}
playerEl.textContent=player.name+": "+player.chips


function getRandomCard(){
	let randomCard=Math.floor(Math.random()*13)+1
	if(randomCard===1){
		return 11
	}
	else if(randomCard===11||randomCard===12||randomCard===13){
		return 10
	}
	else{
	return randomCard
	}
}
function startGame(){
	isAlive=true
	let firstCard=getRandomCard()
	let secondCard=getRandomCard()
	cards=[firstCard,secondCard]
	sum=firstCard+secondCard
	console.log(cards)
	console.log(sum)
	renderGame()
}
function renderGame(){
	cardsEl.textContent="Cards: "
	for(let i=0; i<cards.length;i++){
		cardsEl.textContent+=cards[i]+" "
	}
	sumEl.textContent="Sum: " + sum
	
	if(sum<21){
	message="Do you want a new card?"
}
	else if(sum===21){
	message="BlackJack!"
    hasBlackJack=true
}
	else{
	message="You lost!"
    isAlive=false
}
	messageEl.textContent=message

}

function newCard(){
	if(isAlive===true&&hasBlackJack===false){
	let newCard=getRandomCard()
	cards.push(newCard)
	sum+=newCard
	renderGame()
	}
}