// Code your solutions in this file
function writeCards(names, adj) {
  let arry = []
  for (let i = 0; i < names.length; i++) {
    arry.push(`Thank you, ${names[i]}, for the wonderful ${adj} gift!`);
  }
  return arry;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
