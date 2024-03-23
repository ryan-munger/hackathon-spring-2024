    
function generateDeck() {
    const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
    const values = ['1','2','3','4','5','6','7','8','9','J','K','Q','A'];
    var cardDeck = [];

    for (let suit=0; suit<suits.length; suit++){
        for (let val=0; val<values.length; val++){
            var name = values[val];
            cardDeck.push(
                {
                    'name': values[val]
                    , 'suit': suits[suit]
                    , 'value': val+1
                    , 'icon':'&'+suits[suit]+';'
                    , 'centerDeco':''
                }
            )
        }
    }
    return cardDeck;
}

function shuffleDeck(){
    console.log(deck);
}