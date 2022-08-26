//user input numbers
let startNumber = parseInt(prompt('Введіть ціле число N, від якого будемо рахувати сумму чисел'), 10);
while (isNaN(startNumber)) {
    startNumber = parseInt(prompt('Ви ввели не вірно, повторіть спробу. Введіть ціле число', 10), 10);
};

let endNumber = parseInt(prompt('Введіть ціле число M, до якого будемо рахувати сумму чисел'), 10);
while (isNaN(endNumber) || endNumber <= startNumber) {
    endNumber = parseInt(prompt('Ви ввели не вірно, повторіть спробу. Введіть ціле число', 20), 10);
};

//user even numbers cofirmation
const skipEvenNumber = confirm('Пропускати при розрахунку парні числа?');

//create calculation
let summOfNumbers = 0;

for (let i = startNumber; i <= endNumber; i++) {
   if (skipEvenNumber && i % 2 === 0) {
      continue
   }
   summOfNumbers += i;
};

document.writeln(`<p>Між вашим мінімальним цілим числом N: ${startNumber}<br> Та вашим максимальним цілим числом M: ${endNumber}<br> Виходить така сума: ${summOfNumbers}</p>`);