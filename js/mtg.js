document.getElementById("lucky").addEventListener("click", function () {
    let pages = ["goFish.html", "blackjack.html", "poker.html", "pokemon.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});

document.getElementById("myForm").addEventListener("submit", handleSubmit);

// Function to handle form submission
function handleSubmit(event) {
    console.log('submission')
    event.preventDefault(); // Prevent the default form submission

    // Get the value of the input field
    const cardValue = document.getElementById("cardInput").value;
    const setValue = document.getElementById("setInput").value;

    // Call a function to process the input and get the output
    const output = processInput(cardValue, setValue);
}

// Function to process the input and return the output
function processInput(cardIn, setIn) {
    card = capitalizeWordsExcept(cardIn);
    set = capitalizeWordsExcept(setIn);
    console.log(card);
    console.log(set);
    let link = 'https://www.mtggoldfish.com/price/'
    link += set + '/' + card + '#online'
    console.log(link);
    window.location.href = link;
}

function capitalizeWordsExcept(str) {
    // Split the string into words
    let words = str.split(' ');

    // Define words to exclude from capitalization
    const excludedWords = ['of', 'to', 'the', 'and'];

    // Capitalize each word that is not in the excluded list
    for (let i = 0; i < words.length; i++) {
        if (!excludedWords.includes(words[i].toLowerCase())) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
    }

    // Join the words back together into a single string
    return words.join('+');
}

function increment() {
    var input = document.getElementById('numberInput');
    var value = parseInt(input.value, 10);
    input.value = value + 1;
}

function decrement() {
    var input = document.getElementById('numberInput');
    var value = parseInt(input.value, 10);
    if (value > 0) {
        input.value = value - 1;
    }
}