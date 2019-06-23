function writeCards(names, gift) {
  const returnArray = []
  for (let i = 0; i < names.length; i++) {
    returnArray.push(`Thank you, ${names[i]}, for the wonderful ${gift} gift!`);
  }
  return returnArray;
}

function countdown(num) {
  let i = num

  while (i >= 0) {
    console.log(i)
    i--
  }
}
