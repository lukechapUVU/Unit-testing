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

if (fizzbuzz(15).length !== 15 
    || fizzbuzz(15)[0] !== 1 
    || fizzbuzz(15)[1] !== 2 
    || fizzbuzz(15)[2] !== "fizz" 
    || fizzbuzz(15)[3] !== 4
    || fizzbuzz(15)[4] !== "buzz"
    || fizzbuzz(15)[5] !== "fizz"
    || fizzbuzz(15)[6] !== 7
    || fizzbuzz(15)[7] !== 8
    || fizzbuzz(15)[8] !== "fizz"
    || fizzbuzz(15)[9] !== "buzz"
    || fizzbuzz(15)[10] !== 11 
    || fizzbuzz(15)[11] !== "fizz" 
    || fizzbuzz(15)[12] !== 13 
    || fizzbuzz(15)[13] !== 14 
    || fizzbuzz(15)[14] !== "fizzbuzz") {
    throw new Error('Fizzbuzz failed')
} 
if (fizzbuzz(10).length !== 10 
    || fizzbuzz(10)[0] !== 1 
    || fizzbuzz(10)[1] !== 2 
    || fizzbuzz(10)[2] !== "fizz" 
    || fizzbuzz(10)[3] !== 4
    || fizzbuzz(10)[4] !== "buzz"
    || fizzbuzz(10)[5] !== "fizz"
    || fizzbuzz(10)[6] !== 7
    || fizzbuzz(10)[7] !== 8
    || fizzbuzz(10)[8] !== "fizz"
    || fizzbuzz(10)[9] !== "buzz") {
    throw new Error('Fizzbuzz failed')
} 
if (fizzbuzz(5).length !== 5 
    || fizzbuzz(5)[0] !== 1 
    || fizzbuzz(5)[1] !== 2 
    || fizzbuzz(5)[2] !== "fizz" 
    || fizzbuzz(5)[3] !== 4
    || fizzbuzz(5)[4] !== "buzz") {
    throw new Error('Fizzbuzz failed')
} 

function reverseString(str) {
    return str.split("").reverse().join("");
}

const reversedStr = "dlroW olleH"
if(reverseString('Hello World') !== reversedStr) {
    throw new Error('Could not reverse string') 
}

function uppercaseString(str) {
    return str.toUpperCase();
}

const allCapsStr = 'THIS IS SO COOL!'
if(uppercaseString('this is so cool!') !== allCapsStr) {
    throw new Error('Could not uppercase string')
}

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, "");
}

noVowelStr = 'ld McDnld hd  frm'
if(removeVowels('ld McDnld hd a farm') !== noVowelStr) {
    throw new Error('Could not remove vowels') 
}

function validateKey(obj, key) {
    return Object.keys(obj).includes(key);
}

const myObj = {
    name: "John",
    age: 25
};
const correctKey = "age";
const incorrectKey = "height";
if(!validateKey(myObj, correctKey)) {
    throw new Error('Correct key was marked incorrect')
}
if(validateKey(myObj, incorrectKey)) {
    throw new Error('Incorrect key was marked correct')
}

function sumArray(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
}

const numbersArray = [1, 2, 3, 4, 5];
const sum = 15;
if(sumArray(numbersArray) !== 15) {
    throw new Error('Array sum does not match')
}
