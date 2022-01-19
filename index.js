'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

/**
 * identity: returns the same value
 * 
 * @param {any value} returns value
 */
function identity (val) {
    return val;
};

/**
 * typeof: returns type of a value
 * 
 * @param {any value} returns a string representing type of value
 */
function typeOf(val) {
    if (Array.isArray(val)) {
        return 'array';
    }
    if (val === null) {
        return 'null';
    }
    return typeof val;
};

/**
 * first: returns 1st x items out of array
 * 
 * @param {array} the array being manipulated
 * @param {number} x items needed from front of the array
 */
function first(arr, num) {
    if (!Array.isArray(arr)) {
        return [];
    }
    if (typeof num !== 'number') {
        return arr[0];
    } else if (num < 0) {
        return [];
    } else if (num > arr.length) {
        return arr;
    } else {
        return arr.slice(0, num);
    }
};
/**
 * last: returns last x values from an array
 * 
 * @param {array} the array to copy values from
 * @param {number} number of values wanted from end of array
 */
function last(arr, num) {
    if (!Array.isArray(arr)) {
        return [];
    }
    if (typeof num !== 'number') {
        return arr[arr.length - 1];
    } else if (num < 0) {
        return [];
    } else if (num > arr.length) {
        return arr;
    } else {
        return arr.slice(0 - num);
    }
};

/**
 * indexOf: returns the index of the first occurence of a value in an array or returns -1
 * 
 * @param {array} an array of values
 * @param {value} the value sought in the array to return the index
 */
function indexOf(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

/**
 * contains: return true if  an array contains a certain value, else return false
 * 
 * @param {array} an array containing a value
 * @param {value} the value sought for in the array
 */
function contains(arr, val) {
    return indexOf(arr, val) !== -1 ? true: false;
};

/**
 * each: iterate through a collection and activate a function on each element with the current 
 * element, index or key, and array or object values
 * 
 * @param {array or object} collection: to be iterated on and have it's values passed to a function passed in
 * @param {function} a function that takes in an element, index or key, and array or object as its parameters
 */
function each(coll, func) {
    if (Array.isArray(coll)) {
        for (let i = 0; i < coll.length; i++) {
            func(coll[i], i, coll);
        }
    } else {
        for (let key in coll) {
            func(coll[key], key, coll);
        }
    }
};
/**
 * unique: return a new array of all elements from an array with the duplicate values removed
 * 
 * @param {array} array will be iterated through and only have 1 copy of each unique element copied into the new returned array
 */
function unique(arr) {
    const uniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (indexOf(uniq, arr[i]) === -1) {
            uniq.push(arr[i]);
        }
    }
    return uniq;
}

/**
 * filter: returns a new array with only elements from the original array that resolved to true from a passed in function
 * 
 * @param {array} an array whose values will be tested
 * @param {function} a function that takes in elements from the array and resolves to true or false
 */
function filter(arr, func) {
    const truthy = [];
    each(arr, (val, i, arr) => func(val, i, arr) ? truthy.push(val) : false);
    return truthy;
};

/**
 * reject: returns a new array with only elements from the original array that resolved to false from a passed in function
 * 
 * @param {array} the array the function
 * @param {func} a function that takes in elements from the array and resolves to true or false
 */
function reject(arr, func) {
    const falsey = [];
    each(arr, (val, i, arr) => func(val, i, arr) ? true : falsey.push(val));
    return falsey;
};

/**
 * partition: takes an array and a function that turns values into a boolean, and will return an array that contains an array of all the values that 
 * resolved to true and all the values that resoolved to false
 * 
 * @param {array} an array that will be partitioned
 * @param {function} a function that returns true or false when given element, key, array
 */
function partition(arr, func) {
    const truthy = [];
    const falsey = [];
    each(arr, (val, i, arr) => func(val, i, arr) ? truthy.push(val) : falsey.push(val));
    return [truthy, falsey];
}

/**
 * map: takes in a collection and a function, and returns a new collection whose values are the result
 * of processing all the values from the original array with the provided function
 * 
 * @param {collection} an array or object that will be used to create the new array or object
 * @param {function} a function that returns a value that will "replace" each element from the original collection
 */
function map(coll, func) {
    const mapped = [];
    each(coll, (el, i, coll) => mapped.push(func(el, i, coll)));
    return mapped;
};

/**
 * pluck: takes in an array of objects and a key and returns an array of every value at said key of each object in the array
 * 
 * @param {array} an array of objects to be iterated over
 * @param {string} a string representing the key that will be used to access a value from each object in the array
 */
function pluck(arrOfObj, prop) {
    return map(arrOfObj, (obj, i, arr) => obj[prop]);
};

/**
 * every: returns a boolean representing whether every value in a collection returns true when tested with a function
 * 
 * @param {array or object} collection whose values get tested 
 * @param {function} a function that returns true or false
 */
function every(coll, func) {
    let every = true;
    if (typeof func === 'function') {
        each(coll, (el, i, coll) => func(el, i, coll) ? true : every = false);
    } else {
        each(coll, (el, i, coll) => el ? true : every = false);
    }
    return every;
}

/**
 * every: returns a boolean representing whether at least 1 value in a collection returns true when tested with a function
 * 
 * @param {array or object} collection whose values get tested 
 * @param {function} a function that returns true or false
 */
function some(coll, func) {
    let some = false;
    if (typeof func === 'function') {
        each(coll, (el, i, coll) => func(el, i, coll) ? some = true : false);
    } else {
        each(coll, (el, i, coll) => el ? some = true : false);
    }
    return some;
};

/**
 * reduce: reduces an array of values down to just one value using results from the function calls of the passed in function
 * 
 * @param {array} an array of values to be reduced
 * @param {function} takes a function that takes in a previous result, a current element, and an index
 * @param {seed} an optional seed that will take the place of the first element of the array if defined
 */
function reduce(arr, func, seed, i = 0) {
    if (seed === undefined) {
        seed = arr[0];
        i++;
    }
    let res = func(seed, arr[i], i);
    i++;
    if (arr.length === i) {
        return res;
    }
    return reduce(arr, func, res, i);
}

/**
 * extend: takes in an infinte amount of objects and recurssively adds thgem to the first object passed in and returns it
 * 
 * @param {objects...} objects that will all have their key value pairs added to the first object
 */
function extend (...objects) {
    console.log(objects.length, objects);
    if (objects.length > 1) {
        for (let key in objects[objects.length - 1]) {
            delete objects[objects.length - 2][key];
            objects[objects.length - 2][key] = objects[objects.length - 1][key];
        }
        return extend(...objects.slice(0, objects.length-1));
    } else if (objects.length === 1) {
        return objects[0];
    }
};

module.exports.each = each;
