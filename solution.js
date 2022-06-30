const snackServings = 5;
const guest = 20;
console.log(snackServings);
console.log(guest);
console.log(
  `Q0: The sum of snackServing and guest is: ${snackServings + guest}`
);
console.log(
  `Q1: The result of subtracting guests from snackServings: ${
    snackServings - guest
  }`
);
console.log(
  `Q2: The result of subtracting snackServings from guest: ${
    guest - snackServings
  }`
);
console.log(
  `Q3: The result of multiply guests and snackServings: ${
    snackServings * guest
  }`
);

console.log(
  `Q4: The result of divide snackServings by results: ${snackServings / guest}`
);

const drinks = 10;
const resultOne = (snackServings * guest) / drinks;
console.log(
  `Q5: The result from multiply snackServings and guests and then dividing the result by drinks is: ${resultOne}`
);
const monkeys = 15;
const bananas = 9;

console.log(`Q6: Divide monkey by bananas: ${monkeys / bananas}`);

const monkeyfights = 20;
const resultTwo = (monkeys + bananas) * monkeyfights;
console.log(
  `Q7: The results of adding monkeys and bananas and multiplying with monkey fights: ${resultTwo}`
);

let monkeyBusiness = 90;
console.log(`Q8: Increment monkeyBusiness: ${++monkeyBusiness}`);
let boredom = 13;
console.log(`Q9: Decrement boredom: ${--boredom}`);
const happiness = monkeys - bananas;
console.log(`Q10: Add happiness and monkeyfights: ${happiness + monkeyfights}`);
console.log(
  `Q11: the remainder when resultOne is divided by resultTwo: ${
    resultOne % resultTwo
  } `
);
