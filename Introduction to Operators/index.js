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
    number += skipCount;
    console.log(number);
  }
}

// function simpleComparison
while (number <= 100) {
  let number = 0;
  console.log(number);
  number += skipCount;

}

console.log(1 == 1);
console.log('1' == 1);

let number = [4, 2, 13, 99];
simpleOperators (number[2], number[3]);
let skipCount = 15;
