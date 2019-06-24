function writeCards(array, event) {
    let cards = []
    for (let i = 0; i < array.length; i++) {
        cards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
    }
    return cards;
}

function countdown(n){
    while (n > 0) {
        console.log(n)
        n -= 1
    }
    console.log(n)
}