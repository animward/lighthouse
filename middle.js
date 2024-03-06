// TEST/ASSERTION FUNCTIONS
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
  
const assertArraysEqual = function(arr1, arr2){
    if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};
  
  // ACTUAL FUNCTION
  const middle = function(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
  
    if (length <= 2) {
      return [];
    } else if (length % 2 === 1) {
      return [array[middleIndex]];
    } else {
      return [array[middleIndex - 1], array[middleIndex]];
    }
  }
  
  // TEST CODE
  // Test cases for various scenarios
  assertArraysEqual(middle([1]), []); // Should pass
  assertArraysEqual(middle([1, 2]), []); // Should pass
  assertArraysEqual(middle([1, 2, 3]), [2]); // Should pass
  assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // Should pass
  assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // Should pass
  assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // Should pass