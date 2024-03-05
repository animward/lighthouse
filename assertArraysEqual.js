// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};

const eqArrays = function(arr1, arr2) {
    // Check if the arrays have the same length
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // Check each element for equality
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
        // Use break to exit the loop when an unequal pair is found
        break;
      }
    }
  
    return true;
  };

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [3, 2, 1];

assertArraysEqual(array1, array2); // Should pass
assertArraysEqual(array1, array3); // Should fail
