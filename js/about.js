document.getElementById("lucky").addEventListener("click", function() {
    let pages = ["goFish.html", "blackjack.html", "poker.html"];
    let randomNumber = Math.floor(Math.random() * pages.length);
    window.location.href = pages[randomNumber];
});