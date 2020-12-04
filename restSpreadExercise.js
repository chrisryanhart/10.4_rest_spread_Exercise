
// let ints = ,2,3,4,5,6;

// function filterOutOdds(...input) {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

1,2,3,4

// function filterOutOdds(...input){
//     return input.filter(num => num % 2 ===0);
// }

const filterOutOdds = (...input) => input.filter(num => num % 2 ===0);


// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

function findMin(...input){
    return input.reduce((sum,currVal) => sum < currVal ? sum : currVal,0);
}

//accepts 2 objects and returns a new object with all the pairs

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})



//accept 

const arr5 = [1,2,3];
// doubleAndReturnArgs([1,2,3], 5,6);
// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// function doubleAndReturnArgs(arr,...arg){
//     return arg.reduce(function(sum, currVal) {
//         sum.push(currVal*2);
//         return sum;
//     },[...arr]);
// }

// const doubleAndReturnArgs = (arr,...arg) => arg.reduce((sum, currVal) => (sum.push(currVal*2), [...arr]));
 
// Solution approach:
// const doubleAndReturnArgs = (arr,...args) => [...arr,...args.map(val => val*2)]



//Slice and Dice


//  removeRandom(items)
const items = [1,2,3,4];
const items2 = [5,6,7,8];

const removeRandom = items => {
    const randomIndex = Math.floor(Math.random()*items.length);
    const itemsCopy = [...items];
    itemsCopy.splice(randomIndex,1);
    return itemsCopy;
}


//new array with every item in array 1 & 2
// extend(items,items2)

const extend = (array1, array2) => [...array1,...array2];

//new obj with 

// addKeyVal(obj, 'c', 3)

const obj = {a: 1, b:2};
const obj3 = {c: 3, d:4};

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});

/** Return a new object with a key removed. */

//removeKey(obj,'b')


const removeKey = (obj, key) =>{
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
}

/** Combine two objects and return a new object. */
// combine(obj,obj3)

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

// update(obj,'a',2)

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}
