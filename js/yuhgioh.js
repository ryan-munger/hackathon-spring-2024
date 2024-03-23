document.getElementById("lucky").addEventListener("click", function () {
    let pages = ["goFish.html", "blackjack.html", "poker.html", "mtg.html", "pokemon.html"];
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

    // Call a function to process the input and get the output
    const output = processInput(cardValue);
}

// Function to process the input and return the output
function processInput(card) {
    let link = 'https://db.ygorganization.com/search#card:'
    link += card;
    console.log(link);
    window.location.href = link;
}

