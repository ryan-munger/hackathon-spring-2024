
var deck = -1
var playerHand = [];
var compHand = [];
var matches=[];

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
        //checkForMatches(playerHand);
        //console.log(matches);
        //console.log(playerHand);
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

function checkForMatches(hand) {
    mid = hand.length;
    if (l==r){
        if (hand[0]==hand[1]){
            matches.push([hand[i],hand[j]]);
            hand.splice(i,1);
            hand.splice(j-1,1);
            size=hand.length-1;
        }
    }
    else if (hand.length>2){
        checkForMatches(hand.slice(0, Math.floor(hand.length/2)))
        checkForMatches(hand.slice(Math.floor(hand.length/2)));
    }
}
    


function merg(A){
    if(A.length>1){ //if s>r return. else:
        size=Math.floor(A.length/2);
        merg(A.slice(0, size));
        merg(A.slice(size));
    }
}

function checkDeck() {
    if (!document.getElementById("centerDeck").innerHTML && deck.length>0){
        document.getElementById("centerDeck").innerHTML += getCardBack();
    }
    else {
        document.getElementById("centerDeck").innerHTML=='';
    }
}



// Function to merge two sorted parts of array 
function merge(arr, left, middle, right) { 
      
    // Length of both sorted aub arrays 
    let l1 = middle - left + 1; 
    let l2 = right - middle; 
    // Create new subarrays 
    let arr1 = new Array(l1); 
    let arr2 = new Array(l2); 
      
    // Assign values in subarrays 
    for (let i = 0; i < l1; ++i) { 
        arr1[i] = arr[left + i]; 
    } 
    for (let i = 0; i < l2; ++i) { 
        arr2[i] = arr[middle + 1 + i]; 
    } 
    
  
    // To travesrse and modify main array 
    let i = 0, 
        j = 0, 
        k = left; 
          
    // Assign the smaller value for sorted output 
    while (i < l1 && j < l2) { 
        if (arr1[i] < arr2[j]) { 
            arr[k] = arr1[i]; 
            ++i; 
        } else { 
            arr[k] = arr2[j]; 
            j++; 
        } 
        k++; 
    } 
    // Update the remaining elements 
    while (i < l1) { 
        arr[k] = arr1[i]; 
        i++; 
        k++; 
    } 
    while (j < l2) { 
        arr[k] = arr1[j]; 
        j++; 
        k++; 
    } 
} 
  
// Function to implement merger sort in javaScript 
function mergeSort(arr, left, right) { 
    if (left >= right) { 
        return; 
    } 
      
    // Middle index to create subarray halves 
    let middle = left + parseInt((right - left) / 2); 
      
    // Apply mergeSort to both the halves 
    mergeSort(arr, left, middle); 
    mergeSort(arr, middle + 1, right); 
      
    // Merge both sorted parts 
    merge(arr, left, middle, right); 
} 
  
// Input array 
const arr =  [ 38, 27, 43, 10] 
  
// Display input array 
console.log("Original array: " + arr); 
  
// Apply merge sort function 
mergeSort(arr, 0, arr.length - 1); 
  
// Display output 
console.log("After sorting: " + arr);



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