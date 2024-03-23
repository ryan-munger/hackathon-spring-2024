
window.addEventListener("DOMContentLoaded", initGoFish);

function initGoFish(){
    var deck = generateDeck();
    document.getElementById("gameContainer").innerHTML += getCardBack();
    document.getElementById("gameContainer").innerHTML += getCardFront(deck);
}

function getCardBack(){
    return '<div class="cardBack"></div>';
}

function getCardFront(deck){
    console.log(deck);
    console.log(deck[0].icon);
    let i = 50;
    return '<div class="cardFront">' +
    '<p id="top">'+ deck[i].name + deck[i].icon +'</p>' +
    '<p id="mid">'+ deck[i].icon + '</p>' +
    '<p id="bot">'+ deck[i].name + deck[i].icon +'</p>' +
    '</div>';
}

function removeCardFromDeck(card, deck){
    x=2;
}

