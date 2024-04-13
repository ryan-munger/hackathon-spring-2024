

var deck = {}
var playerHand = [];
var compHand = [];
var playerMatches=[];
id=null;
const delay = 250;
const cardPositions = { 
    "p": {
        7: [66, 83]
    },
    "c":{
        7: [26, 23] 
    }
}

window.addEventListener("DOMContentLoaded", initGoFish);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getCardFront(cd){ //returns the html for the front of a card
    card = '<div id="' + cd.name+cd.suit +  '" class="cardFront">' +
    '<p id="top">'+ cd.name + cd.icon +'</p>' +
    '<p id="mid">'+ cd.icon + '</p>' +
    '<p id="bot">'+ cd.name + cd.icon +'</p>' +
    '</div>';
    return card;
}

function getCardBack(){
    return '<div class="cardBack"></div>';
}

async function moveCardFromDeck(player, num){
    var elem = document.getElementById("cardInPlayContainer");
    elem.innerHTML=getCardBack();
    var posY = 50;
    var posX = 50;
    var targetX = cardPositions[player][num][0];
    var targetY = cardPositions[player][num][1];
    elem.style.left = posX + '%';
    elem.style.top = posY + '%';
    clearInterval(id);
    id = setInterval(frame, 8);
    async function frame() {
        if (player == "p"){
            if (posX<=targetX && posY<=targetY){
                posX+=1;
                posY+=2;
                elem.style.left = posX + '%';
                elem.style.top = posY + '%'; 
            }
            else if (posX<=targetX ) {
                posX+=1;
                elem.style.left = posX + '%';
            } 
            else if (posY <=targetY ){ 
                posY+=1; 
                elem.style.top = posY + '%';  
            }
            else{
                clearInterval(id);
            }
        }
        else {
            if (posX>=targetX && posY>=targetY){
                posX-=1;
                posY-=2;
                elem.style.left = posX + '%';
                elem.style.top = posY + '%'; 
            }
            else if (posX>=targetX ) {
                posX-=1;
                elem.style.left = posX + '%';
            } 
            else if (posY >=targetY ){ 
                posY-=1; 
                elem.style.top = posY + '%';  
            }
            else{
                clearInterval(id);
            }
        }
        await sleep(num*delay)
    }
}

async function dealCardsFromDeck(player, number){ 
    //will distribute a specified number of cards 
    //to the specified player's hand
    if (player=='p'){
        for (let i=0; i<number;i++){ 
            let card = deck.pop(); //choose card from top of deck
            content = getCardFront(card);
            checkDeck();
            await sleep(delay);
            moveCardFromDeck(player, number);
            playerHand.push(card) //deal card to player
            await sleep(delay);
            document.getElementById("playerHand").innerHTML += content; //show card in player's hand on screen
            document.getElementById("cardInPlayContainer").innerHTML='';
        }
    }
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            let card = deck.pop();
            content = getCardBack();
            checkDeck();
            await sleep(delay);
            moveCardFromDeck(player, number);
            compHand.push(card) //remove top card from deck
            await sleep(delay);
            document.getElementById("computerHand").innerHTML += content;
            document.getElementById("cardInPlayContainer").innerHTML='';
        }
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


function checkForMatches(hand1, hand2) {
    var matches = []
    for (var i=0; i<hand1.length-1; i++){
        for (var j=i+1; j<hand2.length; j++){
            if (hand1[i].value==hand2[j].value){
                if (matches.indexOf(hand1[i])==-1){
                    matches.push(hand1[i]);
                    matches.push(hand2[j]);
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


async function initGoFish(){
    deck = shuffleDeck(generateDeck());
    await dealCardsFromDeck('p', 7);
    await dealCardsFromDeck('c', 7);
    await sleep(delay);
    matches = checkForMatches(playerHand, playerHand);

    for (let i=0; i<matches.length; i++){
        let card = document.getElementById(matches[i].name+matches[i].suit);
        card.style.backgroundColor = "gold";
        card.style.translate = "0px -10px";
    }

}

document.getElementById("lucky").addEventListener("click", function() {
    let pages = ["blackjack.html", "poker.html", "mtg.html", "pokemon.html", "yugioh.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});