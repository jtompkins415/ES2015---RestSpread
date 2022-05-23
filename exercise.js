// Refactor this function:

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (arr) => {
     return arr.filter(num => num % 2 === 0);
}


//findMin

function findMin(...min){
    return min.reduce((min, n) => min < n ? min:n);
} 

//mergeObjects

function mergeObjects(object1, object2){
    let newObject = {...object1, ...object2};
    return newObject;
}

//doubleAndReturnArgs

function doubleAndReturnArgs(arr, ...nums){
    console.log(nums)
    let newArr = [...arr, ...nums.map((val) => val * 2)];
    return newArr;
}

//Slice and Dice

// function removeRandom(...items) {
//   items.splice(Math.floor(Math.random() * (items.length -1)),1);
//   return items
// }

const removeRandom = (...items) => {items.splice(Math.floor(Math.random() * (items.length -1)),1); return items};

// function extend(array1, array2){
//     let newArr = [...array1, ...array2];
//     return newArr; 
// }

const extend = (array1, array2) => {return [...array1,...array2]};

// function addKeyVal(obj, key, val) {
//     let newObj = {...obj, [key]:val};
//     return newObj;
// }

const addKeyVal = (obj, key, val) => ({...obj, [key]:val});

// function removeKey(obj, key){
//     let newObj = {...obj};
//     delete newObj[key];
//     return newObj;
// }

const removeKey = (obj,key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj; 
}

// function combine(obj1, obj2){
//     let newObj = {...obj1, ...obj2};
//     return newObj;
// }

const combine = (obj1,obj2) => ({...obj1, ...obj2});

// function update(obj, key, value){
//     let newObj = {...obj};
//     newObj[key] = value;
//     return newObj;
// }

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}