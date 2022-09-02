//1
function getMaxDigit(number) {
  let digit = number.toString().split("");
  let max = +digit[0];
  for (let i = 0; i <= digit.length; i++) {
    if (+digit[i] > max) {
      max = +digit[i];
    }
  }
  return max;
}

//2
function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

//3
function upperFirstLetter(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

//4
function sumAfterTax(salary) {
  let tax = 18 + 1.5;
  return salary - (salary * (tax / 100));
}

//5
function randomNumber(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

//6
function calсSameLetters(letter, word) {
  let arr = word.toLowerCase().split("");
  let counter = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === letter) {
      counter++;
    }
  }
  return counter;
}

//7
function convertCurrency(amount) {
  let rate = 40.05;
  if (amount.toLowerCase().includes('uah')) {
      return (parseInt(amount, 10) / rate).toFixed(2) + '$';
  } else if (amount.includes('$')) {
      return (parseInt(amount, 10) * rate).toFixed(2) + 'UAH';
  } else {
      return 'Your currency is not valid, try again'
  }
}

//8
function getRandomPassword(length = 8) {
  let pass = '';
  let min = 0;
  let max = 9;
    for (let i = 0; i < length; i++) {
      pass += Math.floor(min + Math.random() * (max + 1 - min));
    }
    return pass;
}

//9
function deleteLetters(letter, word) {
  let arr = word.toLowerCase().split('');
  let normalLetter = letter.toLowerCase();
  let counter = '';
  for (let i = 0; i < arr.length; i++) {
      counter += (arr[i] === normalLetter) ? '' : arr[i];
  }
  return counter;
}

//10
function isPalindrome(string) {
  const strWithout = string.toLowerCase().replace((/\s/g), "");
  const reversedStr = strWithout.split("").reverse().join("");
  return (reversedStr === strWithout);
}

//11
function deleteDuplicateLetter(string) {
  let arr = string.toLowerCase().split("");
  let counter = "";
  for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
      counter += arr[i];
  }
  return counter;
}



document.writeln(`<p>Функція №1: ${getMaxDigit(349361)}</p><br>
                  <p>Функція №2: ${pow(5, 3)}</p><br>
                  <p>Функція №3: ${upperFirstLetter("anDreY")}</p><br>
                  <p>Функція №4: ${sumAfterTax(1000)}</p><br>
                  <p>Функція №5: ${randomNumber(1, 10)}</p><br>
                  <p>Функція №6: ${calсSameLetters("а", "Асталавіста")}</p><br>
                  <p>Функція №7: ${convertCurrency("100$")}</p><br>
                  <p>Функція №8: ${getRandomPassword()}</p><br>
                  <p>Функція №9: ${deleteLetters("a", "blablabla")}</p><br>
                  <p>Функція №10: ${isPalindrome("мадам")}</p><br>
                  <p>Функція №11: ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}</p><br>`);
