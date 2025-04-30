// arrays are basically a data structure which is used to store data of similar types with the same variable name
// each value in the array is accessed with the help of index

let data = [9, 45, 2, 8, 45, 23, 7, 0, 11, 41, 77];

// arrays have 0 basaed indexing which means 1st element will have index 0, 2nd will have index 1 and so on

console.log(data[0]); // accessing 1st element and printing it to terminal
console.log(data[1]); // accessing 2nd element and printing it to terminal

// traversing an array with for loop
const length = data.length;
for (let i = 0; i < length; i++) {
  console.log(`Element ${i + 1}: ${data[i]}`);
}

// we can access the last element with the help of the length
console.log(data[length - 1]); //  the last element will have an index 1 less than the length
