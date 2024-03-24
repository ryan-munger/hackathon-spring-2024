    
function generateDeck() {
    const suits = ['hearts', 'diamonds', 'spades', 'clubs'];
    const values = ['2','3','4','5','6','7','8','9','10','J','K','Q','A'];
    var cardDeck = [];

    for (let suit=0; suit<suits.length; suit++){
        for (let val=0; val<values.length; val++){
            var name = values[val];
            if(values[val] == 'A'){
                cardDeck.push(
                    {
                        'name': values[val]
                        , 'suit': suits[suit]
                        , 'value': 11
                        , 'color': (suits[suit]<2)?'red':'black'
                        , 'icon':'&'+((suits[suit]=='diamonds')?'diams':suits[suit])+';'
                        , 'centerDeco':''
                    }
                )
            } else {
                cardDeck.push(
                    {
                        'name': values[val]
                        , 'suit': suits[suit]
                        , 'value': (val >= 10) ? 10 : val + 2
                        , 'color': (suits[suit]<2)?'red':'black'
                        , 'icon':'&'+((suits[suit]=='diamonds')?'diams':suits[suit])+';'
                        , 'centerDeco':''
                    }
                )
            }
        }
    }
    return cardDeck;
}

function shuffleDeck(deck){
    newDeck = [];
    while (deck.length>0){
        i = Math.floor(Math.random() * deck.length);
        newDeck.push(deck[i]);
        x = deck.splice(i, 1);
    }
    return newDeck;

}