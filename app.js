//Rest Operator

function sum(...nums){
    return nums.reduce((sum, n) => sum + n);
}

const sumAll = (...values) => {
    return values.reduce((sum, n) => sum + n);
}

function makeFamily(parent1, parent2, ...kids){
    return{
        parents: [parent1, parent2],
        children: kids.length ? kids: 0
    }
}

const filterByType = (type, ...vals) => {
    return vals.filter(v => typeof v === type);
}

//Spread Operator

//Spread inside of function calls

const nums = [4,5,6,78,8,9,33,666]

const things = [23, 45, true, false, 0, 'hello', 'goodbye', undefined]

 //iterates over the array and enters each value as an individual argument

 filterByType('number', ...things);

 //works on any iterable, including strings

 console.log(..."hello");
 //prints h e l l o

//Spread inside of arrays

const palette = ['yellow', 'green', 'purple', 'brown'];

//Can copy arrays using spread, like .splice()

// const paletteCopy = palette.slice();
const paletteCopy = [...palette]

//Can spread multiple times

const greenTeas = ['snow jasmine', 'fragrant leaf'];
const oolongTeas = ['honey orchid', 'winter sprout'];
const herbalTeas = ['african solstice', 'marshmallowroot'];
const coffees = ['gutemala red cat', 'snow leopard blend'];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas];

const caffeinatedDrinks = [...greenTeas, ...oolongTeas, ...coffees, 'Earl Grey'];

//Can spread other iterables like strings and use them to create a new array

const vowels ='aeiou';
const vowelArr = [...vowels, 'sometimes y'];


