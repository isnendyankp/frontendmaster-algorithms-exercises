/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  // base case, return if length 1 or 0
  if (nums.length < 2) {
    return nums;
  }

  // break into two smaller arrays
  const length = nums.length;
  const middle = Math.floor(length / 2);
  

  // call mergesort on left and right

  // return the merge of left and right
};

const merge = (sortedArray1, sortedArray2) => {
  // code goes here
};

// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
