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
  let number = startingNumber - skipCount;
  for (let i=1; i<=times; i++){
    number += skipCount;
    console.log(number);
  }
}

function howManyTimes (numberStart, numberEnd, skipCount) {
  while (numberStart < numberEnd) {
    console.log(numberStart += skipCount);
  }
}


function LooseEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}
function StrictEquality (firstOperand, secondOperant) {
  console.log(firstOperand === secondOperant);
}

let number = [4, 2, 13, 99, 0, 100, 5, 1, '1'];


LooseEquality(number[7], number[7]);
LooseEquality(number[8], number[7]);

StrictEquality(number[8], number[7]);


for (let i=0; i<number.length; i++) {
  if (number[i] !=5) {
    console.log(number[1], "Is index number: ", i, "with a total array index of ", number.length)
  }else {console.log("5 is at the index", i); i=number.length}
}
