// Code your solutions in this file
var names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(array, event) {
  var new_array = []
  for (let i = 0; i < array.length; i++) {
    new_array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }

  return new_array;
}

function countdown() {
var countdown = 10
  while (countdown >= 0) {
      console.log(countdown--);
  }
}
