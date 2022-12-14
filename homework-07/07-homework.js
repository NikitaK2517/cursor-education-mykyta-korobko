const ukraine = { 
  tax: 0.195, 
  middleSalary: 1789, 
  vacancies: 11476 
};
const latvia = { 
  tax: 0.25, 
  middleSalary: 1586, 
  vacancies: 3921 
};
const lithuania = { 
  tax: 0.15, 
  middleSalary: 1509, 
  vacancies: 1114 
};

// get taxes
function getMyTaxes(salary) {
  return +(this.tax * salary).toFixed(2);
}
console.log(getMyTaxes.call(ukraine, 1500));

// get middle taxes
function getMiddleTaxes() {
  return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(getMiddleTaxes.call(latvia));

// get total taxes
function getTotalTaxes() {
  return +(this.tax * this.middleSalary * this.vacancies);
}
console.log(getTotalTaxes.call(lithuania));

// get profit from random salary in range from 1500 to 2000  
function getMySalary(country) {
  let timer = 0;
  let timerId = setInterval(() => {
      const obj = {
          salary: getRandomNumber(1500,2000),
          taxes() {
              return getMyTaxes.call(country, this.salary);
          },
          profit() {
              return this.salary - this.taxes();
          }
      }
      console.log({salary: obj.salary, taxes: obj.taxes(), profit: obj.profit()});
     
      if(timer === 10) {
          clearInterval(timerId);
      }
      timer++
  },10000);
}

getMySalary(ukraine);


function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}