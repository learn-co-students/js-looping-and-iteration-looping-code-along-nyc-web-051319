// Code your solutions in this file

function writeCards(names, holiday) {
  let cards = []
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${holiday} gift!`);
  }
  return cards;
}

function countdown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
