// Code your solutions in this file
function writeCards( name, event) {
  let arr= []
  for( let i = 0; i < name.length; i++){
    arr.push('Thank you, ' + name[i] + ', for the wonderful ' + event + ' gift!')
  }
  return arr
}

function countdown(number){
  while(number> 0){
    console.log(number);
    number -= 1;
  }
  console.log(number);
}
