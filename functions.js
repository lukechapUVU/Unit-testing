function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
        } else if (i % 3 === 0) {
        console.log("Fizz");
        } else if (i % 5 === 0) {
        console.log("Buzz");
        } else {
        console.log(i);
        }
    }
}

function fizzbuzz(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("fizzbuzz");
      } else if (i % 3 === 0) {
        result.push("fizz");
      } else if (i % 5 === 0) {
        result.push("buzz");
      } else {
        result.push(i);
      }
    }
    return result; 
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function uppercaseString(str) {
    return str.toUpperCase();
}


function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}


function validateKey(obj, key) {
    return Object.keys(obj).includes(key);
}

function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
}
