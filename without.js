// FUNCTION IMPLEMENTATION
const without = function(source, itemsToRemove) {
  // Use filter to create a new array with elements not present in itemsToRemove
  return source.filter(element => !itemsToRemove.includes(element));
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("Assertion Passed: Arrays are equal");
  } else {
    console.log("Assertion Failed: Arrays are not equal");
  }
};

// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have the same length
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check each element for equality
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// TEST CASES
const testArray1 = [1, 2, 3];
const testArray2 = ["1", "2", "3"];
const testArray3 = ["hello", "world", "lighthouse"];

// Test Case 1
const result1 = without(testArray1, [1]);
assertArraysEqual(result1, [2, 3]); // Should pass

// Test Case 2
const result2 = without(testArray2, [1, 2, "3"]);
assertArraysEqual(result2, ["1", "2"]); // Should pass

// Test Case 3
const result3 = without(testArray3, ["lighthouse"]);
assertArraysEqual(result3, ["hello", "world"]); // Should pass

// Test Case 4 (Original array should not be modified)
without(testArray3, ["lighthouse"]);
assertArraysEqual(testArray3, ["hello", "world", "lighthouse"]); // Should pass
