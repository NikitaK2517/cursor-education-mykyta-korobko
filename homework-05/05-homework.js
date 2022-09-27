// array with random number
function getRandomArray(length, min, max) {
    const arr = [...Array(length)];
    return arr.map(() => getRandomNumber(min, max));
}

// filter even numbers
function filterEvenNumbers(...numbers) {
    let result = numbers.filter(newArr);

    function newArr(item) {
        return item % 2 === 0;
    }
    return result;
}

// divided by five
function getDividedByFive(...numbers) {
    return numbers.filter((number) => {return number % 5 === 0})
}

// get median of numbers
function getMedian(...numbers) {
    const middleOfArr = Math.floor(numbers.length / 2);
    const median = filterIntegers(numbers).sort((a,b) => a - b).reduce((prev, curr, ind, arr) => {
        if (arr.length % 2) {
            return arr[middleOfArr];
        } else {
            return (arr[middleOfArr - 1] + arr[middleOfArr]) / 2;
        }
    });
    return median;   
}

// count positive numbers
function countPositiveNumbers(...numbers) {
    return numbers.filter(i => (i > 0)).length;
}

// get average
function getAverage(...numbers) {
    let averageValue = numbers.reduce((prevValue, nextValue) => {
        return prevValue + nextValue
    }, 0);
    return averageValue / numbers.length;
}

// random number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// filter integer
function filterIntegers(intArr) {
    return intArr.filter(Number.isInteger);
}

document.writeln(`<p>Функція №1: ${getRandomArray(15, 1, 100)}</p><br>
                  <p>Функція №2: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}</p><br>
                  <p>Функція №3: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 15)}</p><br>
                  <p>Функція №4: ${getMedian(12, 1, 15, 7, 8)}</p><br>
                  <p>Функція №5: ${countPositiveNumbers(1, -2, 3, -4, -5, 6)}</p><br>
                  <p>Функція №6: ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}</p>`);