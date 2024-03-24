
var deck = {}
var playerHand = [];
var compHand = [];
var playerMatches=[];

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
        checkDeck()
        document.getElementById("playerHand").innerHTML += content;
        manageMatches('p', playerHand);
    }
        
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            content += getCardBack();
            compHand.push(deck.pop()) //remove top card from deck
        }
        document.getElementById("computerHand").innerHTML += content;
    }
    return deck;
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
    dealCards('p', 7);
    dealCards('c', 7);
}

document.getElementById("lucky").addEventListener("click", function() {
    let pages = ["blackjack.html", "poker.html", "mtg.html", "pokemon.html", "yugioh.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});