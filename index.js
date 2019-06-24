// Code your solutions in this file

function writeCards(names, event) {
    for (i = 0, i < names.length, i++){
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift.`)
    }
}

function countdown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}
