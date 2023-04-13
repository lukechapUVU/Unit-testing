const fizzbuzz = require('./functions')
const reverseString = require('./functions')
const uppercaseString = require('./functions')
const removeVowels = require('./functions')
const validateKey = require('./functions')
const sumArray = require('./functions')

test('reverseString Hello World to dlroW olleH', () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
})

test('sumArray 1 through 5', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
})
