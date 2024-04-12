
var deck = {}
var playerHand = [];
var compHand = [];
var playerMatches=[];

window.addEventListener("DOMContentLoaded", initGoFish);

function getCardFront(cd){ //returns the html for the front of a card
    card = '<div class="cardFront">' +
    '<p id="top">'+ cd.name + cd.icon +'</p>' +
    '<p id="mid">'+ cd.icon + '</p>' +
    '<p id="bot">'+ cd.name + cd.icon +'</p>' +
    '</div>';
    return card;
}

function getCardBack(){
    return '<div class="cardBack"></div>';
}

function moveCard(){
    pass
}

function dealCardsFromDeck(player, number){ 
    //will distribute a specified number of cards 
    //to the specified player's hand
    var content = "";
    if (player=='p'){
        for (let i=0; i<number;i++){ 
            card = deck.pop(); //choose card from top of deck
            content += getCardFront(card);
            playerHand.push(card) //deal card to player
        }
        checkDeck()
        document.getElementById("playerHand").innerHTML += content;
    }
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            card = deck.pop();
            content += getCardBack();
            compHand.push(card) //remove top card from deck
        }
        checkDeck();
        document.getElementById("computerHand").innerHTML += content;
    }
}


function resetHand(player){
    var content = "";
    if (player=='p'){
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardFront(card);
            playerHand.push(deck.pop()) //remove top card from deck
        }
    }
}


function dealCards(player, number){
    var content = "";
    if (player=='p'){
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardFront();
            playerHand.push(deck.pop()) //remove top card from deck
        }
        checkDeck()
        document.getElementById("playerHand").innerHTML += content;
    }
        
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardBack();
            compHand.push(deck.pop()) //remove top card from deck
        }
        document.getElementById("computerHand").innerHTML += content;
    }

}

function manageMatches(player, hand){
    matches = checkForMatches(hand);
        console.log(matches);
        console.log("------");
        if (matches){
            //get the matched cards and move them to the matches container
            for (var i=0; i<matches.length;i++){
                console.log(matches[i]);
                hand.splice(hand.indexOf(matches[i]), 1);
            }
            console.log("------");
            console.log(hand);
        }
    
}

function checkForMatches(hand) {
    var matches = []
    size=hand.length;
    for (var i=0; i<size-1; i++){
        for (var j=i+1; j<size; j++){
            if (hand[i].value==hand[j].value){
                if (matches.indexOf(hand[i])==-1){
                    matches.push(hand[i]); 
                    matches.push(hand[j])
                }
            }
        }
    }
    return matches;
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
    dealCardsFromDeck('p', 7);
    dealCardsFromDeck('c', 7);
}

document.getElementById("lucky").addEventListener("click", function() {
    let pages = ["blackjack.html", "poker.html", "mtg.html", "pokemon.html", "yugioh.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});