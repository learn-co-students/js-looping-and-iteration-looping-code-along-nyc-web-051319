// Code your solutions in this file
function writeCards(name, event) {
  let messages = [];
  for (let i = 0; i < name.length; i++) {
    messages.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return messages;
}

function countdown(int) {
  while(int >= 0){
    console.log(int--);
  }

}
