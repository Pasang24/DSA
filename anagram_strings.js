// two strings are said to be anagram if both have same the same characters but in different order
// eg: EARTH and HEART are anagram string because both have the same characters but in different order

// function to check if two strings are anagram
function checkAnagram(str1, str2) {
  let length1 = str1.length;
  let length2 = str2.length;
  if (length1 !== length2) return false;

  let characterMap = {};

  // we are counting the number of occurence of characters in str1
  for (let i = 0; i < length1; i++) {
    if (str1[i] in characterMap) {
      characterMap[str1[i]] += 1;
    } else {
      characterMap[str1[i]] = 1;
    }
  }

  // we are checking if the number of occurence of characters in str2 match str1
  for (let i = 0; i < length2; i++) {
    if (str2[i] in characterMap) {
      characterMap[str2[i]] -= 1;
    } else {
      return false;
    }
  }

  // checking if every character in the characterMap has a count of zero
  for (let character in characterMap) {
    if (characterMap[character] !== 0) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagram("HEART", "EARTH"));
console.log(checkAnagram("cat", "tac"));
console.log(checkAnagram("catt", "tacc"));
