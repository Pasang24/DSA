// we will declare two sorted arrays and then merge those arrays such the merged array will also be sorted
const data1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
const data2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

function merge(arr1, arr2) {
  // we will merge the two arrays and store it in this array
  let mergedArr = [];
  // i and j are two pointers which keep track of the current element in arr1 and arr2 respectively
  let i = 0,
    j = 0;
  let arr1Length = arr1.length;
  let arr2Length = arr2.length;

  // keep track of i and j pointers and see if they exceed their respective array length
  while (i < arr1Length && j < arr2Length) {
    // if the ith element of arr1 is less than equal to jth element of arr2 then add the ith element of arr1 in the merged array
    if (arr1[i] <= arr2[j]) {
      mergedArr.push(arr1[i++]);
      // if not then just push the jth element of arr2 array to the merged array
    } else {
      mergedArr.push(arr2[j++]);
    }
  }

  //even after we come out of the above while loop there might be some cases where we skip some elements

  // there could be case where the j pointer exceeds the arr2 length but the i pointer is still less than arr1 length
  // so we use another while loop to include those elements
  while (i < arr1Length) {
    mergedArr.push(arr1[i++]);
  }

  // similarly there could be case where i pointer exceeds the arr1 length but the j pointer is still less than arr2 length
  // so we use another while loop to include those elements
  while (j < arr2Length) {
    mergedArr.push(arr2[j++]);
  }

  return mergedArr;
}

console.log(data1);
console.log(data2);
console.log("Merged array: ", merge(data2, data1));
