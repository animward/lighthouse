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
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Should pass
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Should pass
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // Should pass
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // Should pass
  assertEqual(eqArrays([], []), true); // Should pass
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // Should pass
  assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // Should pass
  assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "C"]), false); // Should pass