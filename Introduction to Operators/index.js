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


}

function LooseEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}
function StrictEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}

let number = [4, 2, 13, 99, 0, 100, 5, 1, '1'];


LooseEquality(number[7], number[7]);
LooseEquality(number[8], number[8]);

StrictEquality(number[8], number[7]);
