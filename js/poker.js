// Function to handle form submission
function handleSubmit(event) {
    console.log('submission')
    event.preventDefault(); // Prevent the default form submission

    // Get the value of the input field
    const inputValue = document.getElementById("textInput").value;

    // Call a function to process the input and get the output
    const output = processInput(inputValue);

    // Display the output in the modal
    document.getElementById("modalOutput").textContent = output;
    document.getElementById("myModal").style.display = "block";
}

// Function to process the input and return the output
function processInput(input) {
    let hand = processHand(input);
    const firstTwoChars = hand.substring(0, 2).split('').sort((a, b) => b.localeCompare(a)).join('');
    const sortedHand = firstTwoChars + hand.substring(2);
    console.log(sortedHand);
    return checkPokerHand(sortedHand);
}

// Add event listener to form submission
document.getElementById("myForm").addEventListener("submit", handleSubmit);

// Close the modal when the close button is clicked
document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
});

function checkPokerHand(hand) {
    const group1 = ['Top Tier', 'AA', 'KK', 'QQ', 'JJ', 'KAs'];
    const group2 = ['Very Strong', 'QAs', 'TT', 'KA'];  
    const group3 = ['Strong', 'JAs', 'QKs', '99'];
    const group4 = ['Playable', 'TAs', 'QA', 'KJs', 'QJs', 'TJs', '88', '77'];
    const group5 = ['Marginal', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s', 'QK', 'TQs', 'J9s', 'T9s', '66', '55'];
    const group6 = ['Weak', 'A9', 'A8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2', 'KJ', 'QJ', 'TJ', 'T8s', '98s', '87s', '76s', '65s'];
    const group7 = ['Very Weak', 'TKs', 'Q9s', 'J8s', '97s', '86s', '75s', '54s', '44', '33', '22'];
    //const group8 = ['Trash', K9s-K2s, Q8s-Q2s, J7s-J2s, T7s-T2s, 96s-92s, 85s-82s, 74s-72s, 64s-62s, 53s-52s, 43s-42s, 32s];
    // group 8 can just be an else
    const sklansky = [group1, group2, group3, group4, group5, group6, group7]
    let groupNum = 7;

    outerloop: for (let i = 0; i < sklansky.length; i++) {
        for (let j = 1; j < sklansky[i].length; j++) {
            //console.log(hand.toLowerCase() == sklansky[i][j].toLowerCase())
            if (hand.toLowerCase() == sklansky[i][j].toLowerCase()) {
                groupNum = i;
                break outerloop;
            }
        }
    }
    if (groupNum == 7) {
        return 'Your hand on the Sklansky scale is: Trash. I suggest you fold.';
    }
    let output = 'Your hand on the Sklansky scale is: ' + sklansky[groupNum][0] + '. '
    if(groupNum < 3){
        output += 'I suggest you play this hand.'
    } else if(groupNum > 4){
        output += 'I suggest you fold this hand.'
    } else {
        output += 'This hand is a toss up. It is up to you!'
    }
    return output;
}

function processHand(hand) {
    hand = hand.trim().toLowerCase();
    if (hand.length == 4) {
        // suited hand
        if (hand[1] == hand[3]) {
            hand = hand[0] + hand[2] + 's';
        } else {
            hand = hand[0] + hand[2];
        }
    }
    return (hand)
}
// function test() {
//     // Test the function
//     let hand = '3hQs';
//     //console.log(processHand(hand));
//     hand = processHand(hand);
//     const firstTwoChars = hand.substring(0, 2).split('').sort((a, b) => b.localeCompare(a)).join('');
//     const sortedHand = firstTwoChars + hand.substring(2);
//     //console.log(sortedHand);
//     console.log(checkPokerHand(sortedHand));
// }

