
var deck = -1
var playerHand = [];
var compHand = [];
var matches=[];

window.addEventListener("DOMContentLoaded", initBlack);

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

function dealCards(player, number, front){
    var content = "";
    if (player=='p'){
        for (let i=0; i<number;i++){ //choose card from top of deck
            if(front == true){
                content += getCardFront();
            } else {
                content += getCardBack();
            }
            playerHand.push(deck.pop()) //remove top card from deck
        }
        checkDeck()
        document.getElementById("playerHand").innerHTML += content;
        //checkForMatches(playerHand);
        //console.log(matches);
        //console.log(playerHand);
    }
        
    else {
        for (let i=0; i<number;i++){ //choose card from top of deck
            if(front == true){
                content += getCardFront();
            } else {
                content += getCardBack();
            }
            compHand.push(deck.pop()) //remove top card from deck
        }
        document.getElementById("computerHand").innerHTML += content;
    }
    return deck;
}


function checkDeck() {
    if (!document.getElementById("centerDeck").innerHTML && deck.length>0){
        document.getElementById("centerDeck").innerHTML += getCardBack();
    }
    else {
        document.getElementById("centerDeck").innerHTML=='';
    }
}

function initBlack(){
    deck = generateDeck();
    for(let i = 0; i < 6; i++){
        deckTemp = generateDeck();
        deck = deck.concat(deckTemp);
    }
    deck = shuffleDeck(deck);
    // player gets 2 face ups, dealer gets one of each
    dealCards('p', 2, true);
    dealCards('c', 1, true);
    dealCards('c', 1, false)
    console.log(deck);
}

function stand() {
    dealerPlay();
}

function hit() {
    dealCards('p', 1, true);
    checkBust();
    console.log(compHand)
}

function dealerPlay(){
    let card1 = '<div class="cardFront">' +
    '<p id="top">'+ compHand[0].name + compHand[0].icon +'</p>' +
    '<p id="mid">'+ compHand[0].icon + '</p>' +
    '<p id="bot">'+ compHand[0].name + compHand[0].icon +'</p>' +
    '</div>';
    let card2 = '<div class="cardFront">' +
    '<p id="top">'+ compHand[1].name + compHand[1].icon +'</p>' +
    '<p id="mid">'+ compHand[1].icon + '</p>' +
    '<p id="bot">'+ compHand[1].name + compHand[1].icon +'</p>' +
    '</div>';
    let content = card1 + card2;
    document.getElementById("computerHand").innerHTML = content;
    for(let i = 0; i < 30; i++) {
        dealCards('c', 1, true); 
        let total = 0;
        for(let i = 0; i < compHand.length; i++){
            total += compHand[i].value;
            console.log(compHand[i].value)
        }
        if(total > 21) {
            win();
            return true
        } else if(total > 17) {
            console.log(compHand)
            console.log('dtol ' + total)
            break;
        }
    }
    evalWinner();
}

function evalWinner(){
    let totalP = 0;
    for(let i = 0; i < playerHand.length; i++){
        totalP += playerHand[i].value;
    }
    let totalD = 0;
    for(let i = 0; i < compHand.length; i++){
        totalD += compHand[i].value;
    }
    if(totalP > totalD){
        win();
    } else {
        lose(false);
    }
}

function checkBust(player) {
    //console.log(playerHand);
    if(player = 'p'){
        let total = 0;
        for(let i = 0; i < playerHand.length; i++){
            total += playerHand[i].value;
        }
        if (total > 21) {
            for(let i = 0; i < playerHand.length; i++){
                if(playerHand[i].name == 'A'){
                    playerHand[i].value = 1;
                }
            }
            total = 0;
            for(let i = 0; i < playerHand.length; i++){
                total += playerHand[i].value;
            }
            if (total > 21) {
                lose(true);
            }
        }
    } else {
        console.log('checking')
        let total = 0;
        for(let i = 0; i < compHand.length; i++){
            total += compHand[i].value;
        }
        if(total > 21){
            win(true);
        }
    } 
}

function reloadPage() {
    location.reload();
}

function lose(bust) {
    console.log(playerHand)
    console.log(compHand)
    if(bust){
        document.getElementById("message").innerHTML = "Bust! You lose! <button class='reload' onclick='reloadPage()'>Play Again</button>";
    } else {
        document.getElementById("message").innerHTML = "You Lose by Worse Hand! <button class='reload' onclick='reloadPage()'>Play Again</button>";
    }
}

function win(bust) {
    if(bust){
        document.getElementById("message").innerHTML = "You Win by Dealer Bust! <button class='reload' onclick='reloadPage()'>Play Again</button>";
    } else {
        document.getElementById("message").innerHTML = "You Win by Better Hand! <button class='reload' onclick='reloadPage()'>Play Again</button>";
    }
}

document.getElementById("lucky").addEventListener("click", function() {
    let pages = ["blackjack.html", "poker.html", "mtg.html", "pokemon.html", "yugioh.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});