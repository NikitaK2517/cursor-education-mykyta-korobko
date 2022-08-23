//create 3 variables
const firstPrice = 15.678;
const secondPrice = 123.965;
const thirdPrice = 90.2345;

//Math-max/min
const minPrice = Math.min(firstPrice, secondPrice, thirdPrice);
const maxPrice = Math.max(firstPrice, secondPrice, thirdPrice);
console.log(`Min price: ${minPrice}`);
console.log(`Max price: ${maxPrice}`); 

//sum all prices
const sumPrice = firstPrice + secondPrice + thirdPrice;
console.log(`Summ price: ${sumPrice}`);

//rouding price
const roudingPrice = ["First price - " + Math.floor(firstPrice), " Second price - " + Math.floor(secondPrice), " Third price - " + Math.floor(thirdPrice)];
const roudingTotalPrice = Math.floor(firstPrice + secondPrice + thirdPrice);
console.log(`Rouding all price: ${roudingPrice}`);
console.log(`Rouding total price: ${roudingTotalPrice}`);

//rouding to hundreds
const roudingHundredPrice = Math.floor((roudingTotalPrice) / 100) * 100;
console.log(`Rouding hundred price: ${roudingHundredPrice}`);

//boolean price
const isTotalPriceEven = Math.floor(roudingTotalPrice) % 2 === 0;
const isTotalPriceOdd = Math.floor(roudingTotalPrice) % 2 === 1;
console.log(`The total price is even: ${isTotalPriceEven}`);
console.log(`The total price is odd: ${isTotalPriceOdd}`);

//change after payment
const customerPayment = 500;
const changePayment = (customerPayment - sumPrice).toFixed(2);
console.log(`Change after payment 500 UAH: ${changePayment}`);

// rouding 2 elemenst after comma
const roudingPriceComma = (sumPrice / 3).toFixed(2);
console.log(`Rouding all price: ${roudingPriceComma}`);

//random discount
const randomDiscount = Math.round(Math.random() * 100);
console.log(`Random discount: ${randomDiscount}`);

//random discount for client
const randomDiscountClient = ((sumPrice) - (sumPrice * randomDiscount) / 100).toFixed(2);
console.log(`Total discount for payment: ${randomDiscount}% is ${randomDiscountClient}`);

//cost of production
const clearCost = sumPrice / 2;
const costOfProduction = (clearCost - (sumPrice * randomDiscount) / 100).toFixed(0);
console.log(`Cost of production: ${costOfProduction}`);

console.log(`
    Min price: ${minPrice}
    Max price: ${maxPrice}
    Summ price: ${sumPrice}
    Rouding all price: ${roudingPrice}
    Rouding total price: ${roudingTotalPrice}
    Rouding hundred price: ${roudingHundredPrice}
    The total price is even: ${Math.floor(roudingTotalPrice) % 2 === 0 ? true : false}
    The total price is odd: ${Math.floor(roudingTotalPrice) % 2 === 1 ? true : false}
    Change after payment 500 UAH: ${changePayment}
    Rouding all price: ${roudingPriceComma}
    Random discount: ${randomDiscount}
    Total discount for payment: ${randomDiscount}% is ${randomDiscountClient}
    Cost of production: ${costOfProduction}`);
