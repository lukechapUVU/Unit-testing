const { fizzbuzz, reverseString, uppercaseString, removeVowels, validateKey, sumArray } = require('./functions')

const fizzbuzz5 = [
    1, 2, 'fizz', 4, 'buzz'
]
const fizzbuzz10 = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz'
]

const fizzbuzz15 = [
    1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz'
]

test('fizzbuzz(5) should replace [2] with fizz and [4] with buzz', () => {
    expect(fizzbuzz(5)).toEqual(fizzbuzz5)
})

test('fizzbuzz(10) should replace [2], [5], [8] with fizz and [4], [9] with buzz', () => {
    expect(fizzbuzz(10)).toEqual(fizzbuzz10)
})

test('fizzbuzz(15) should replace [2], [5], [8], [11] with fizz, [4], [9] with buzz, and [14] with fizzbuzz', () => {
    expect(fizzbuzz(15)).toEqual(fizzbuzz15)
})

test('reverseString Hello World to dlroW olleH', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})

test('this is so cool to THIS IS SO COOL!', () => {
    expect(uppercaseString('this is so cool!')).toBe('THIS IS SO COOL!')
})

test('Old McDonald had a farm to ld McDnld hd  frm', () => {
    expect(removeVowels('Old McDonald had a farm')).toBe('ld McDnld hd  frm')
})

const myObj = {
    name: "John",
    age: 25
};

test('correct key should be age', () => {
    expect(validateKey(myObj, 'age')).toBe(true)
})

test('correct key should be age', () => {
    expect(validateKey(myObj, 'height')).toBe(false)
})

test('sumArray 1 through 5', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
})