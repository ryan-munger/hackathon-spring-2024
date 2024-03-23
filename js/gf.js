
var deck = -1
var playerHand = [];
var compHand = [];

window.addEventListener("DOMContentLoaded", initGoFish);

function getCardFront(){
    let i = deck.length-1; //get the card from top of deck
    card = '<div class="cardFront">' +
    '<p id="top">'+ deck[i].name + deck[i].icon +'</p>' +
    '<p id="mid">'+ deck[i].icon + '</p>' +
    '<p id="bot">'+ deck[i].name + deck[i].icon +'</p>' +
    '</div>';
    return card;
}

function getCardBack(){
    return '<div class="cardBack"></div>';
}

function dealCards(player, number){
    var content = "";
    if (player=='p'){
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardFront();
            playerHand.push(deck.pop()) //remove top card from deck
        }
        document.getElementById("playerHand").innerHTML += content;
    }
        
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardBack();
            compHand.push(deck.pop()) //remove top card from deck
        }
        document.getElementById("computerHand").innerHTML += content;
    }
    checkDeck();
    return deck;
}

function checkForMatches(hand) {
    matches=[];
    i=0;
    j=0;
    size=Math.floor(hand.length/2);
    left=hand.splice(0, size);
    right=hand.splice(size+1,(hand.length%2==0)?size:size+1);
    console.log(left + ", " + right);
}

function checkDeck() {
    if (!document.getElementById("centerDeck").innerHTML && deck.length>0){
        document.getElementById("centerDeck").innerHTML += getCardBack();
    }
    else {
        document.getElementById("centerDeck").innerHTML=='';
    }
}


function initGoFish(){
    deck = shuffleDeck(generateDeck());
    dealCards('p', 7);
    dealCards('c', 7);
}
