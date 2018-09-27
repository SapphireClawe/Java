function simpleOperators (numberA, numberB){
  let adding = numberA + numberB;
  let subtract = numberA - numberB;
  let multiply = numberA * numberB;
  let divide = numberA / numberB
  console.log(adding);
  console.log(subtract);
  console.log(multiply);
  console.log(divide);
}

function skipCounting (skipCount, times, startingNumber){
  let number = startingNumber;
  for (let i=1; i<=5; i++){
    skipCount += skipCount;
    console.log(skipCount);
  }
}

let number = [4, 7, 13, 99];
simpleOperators (number[0], number[1]);
simpleOperators (number[2], number[3]);
skipCount (3, 6, 113);
let skipCount = 15;
