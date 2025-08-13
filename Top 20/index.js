// Task 1: Reverse a string without using built-in methods

// logic here reverse without using built-in methods
// my first approach is create function and pass parameter as string
// and create a variable to hold the reversed string
// then use for loop to iterate through the string in reverse order
// for (let i=str.length - 1; i >= 0; i--) {
//     reversed += str[i]; 
// }
//     return reversed;
// }


// function reverseString(str) {
//     let reversed = '';
//     for(let i=str.length-1; i>=0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("Hello World"));
 // Output: "dlroW olleH"


// Task 2: Check if a string is a palindrome without using built-in methods


//  task 2// logic here check if a string is a palindrome without using built-in methods
// my first approach is create function and pass parameter as string
// and create a variable to hold the reversed string
// then use for loop to iterate through the string in reverse order
// for (let i=str.length - 1; i >= 0; i--) {
//     reversed += str[i];  
// }
// and then compare the original string with the reversed string
//const k=str.toLowerCase();
// return k === reverseString(k);
// if they are equal, return true, otherwise return false


// function isPalindrome(arr) {
// function reverseString(str) {
//     let reversed = '';
//     for(let i=str.length-1; i>=0; i--){
//         reversed += str[i];
//     }
//    return reversed;
// }

//     const res= arr.toLowerCase();
//     return res === reverseString(res);
    
// }
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false

// task 3: Count the occurrences of each character in a string.

// logic here count the occurrences of each character in a string
// my first approach is create function and pass parameter as string
// and create an object to hold the character counts
// then use for loop to iterate through the string
// for (let i=0; i < str.length; i++) {
//     const char = str[i];
//     if (char in charCount) {
//         charCount[char]++;
//     } else { charCount[char] = 1; }  
// }
// return the character count object


// function countCharacters(str) {

//     let charCount = {};
//     for(let i=0; i<str.length; i++){
//         const char = str[i];
//         if (char in charCount) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }
//     return charCount;
// }

// console.log(countCharacters("hello"));
// Output: { h: 1, e: 1, l: 3,


// tas4 // Find the longest word in a string.

// logic here find the longest word in a string
// my first approach is create function and pass parameter as string
// and split the string into an array of words
// then use for loop to iterate through the array of words
// and compare the length of each word with the current longest wor


// function findLongestWord(str) {
//     let words=str.split(' ');
//     let LongestWord= '';
//     for(let i=0; i<words.length; i++){
//         if(words[i].length>LongestWord.length){
//             LongestWord = words[i];
//         }

//     }
//     return LongestWord;
// }

// console.log(findLongestWord("The quick brown fox jumpss over the lazy dog"));
// Output: "jumps"


// task 5: Remove duplicates from an array.
// logic here remove duplicates from an array
// my first approach is create function and pass parameter as array
// and create a new array to hold the unique elements
// then use for loop to iterate through the array
// and check if the current element is already in the unique array
// if it is not, add it to the unique array

// optimal approach is to use a Set to keep track of seen elements
// function removeDuplicates(arr) {
//     let seen = new Set(); // Create a Set to keep track of seen elements
//     let uniqueArr = [];   // Array to store unique elements
//     for (let i = 0; i < arr.length; i++) { // Loop through each element in the input array
//         if (!seen.has(arr[i])) {           // If the element is not in the Set
//             seen.add(arr[i]);              // Add it to the Set
//             uniqueArr.push(arr[i]);        // And also to the result array
//         }
//     }
//     return uniqueArr; // Return the array of unique elements
// }

// console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1]));
// Output: [1, 2, 3, 4, 5]


// other approach
// function k(arr){
//     return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(k([1, 2, 3, 2, 4, 5, 1]));
// // Output: [1, 2, 3, 4, 5]

// function p(arr){
//     return [...new Set(arr)]; // Using Set to remove duplicates
// }
// console.log(p([1, 2, 3, 2, 4, 5, 1]));
// // Output: [1, 2, 3, 4, 5]

// function q(arr){
//     return arr.reduce((unique, item) => {
//         if (!unique.includes(item)) {
//             unique.push(item);
//         }
//         return unique;
//     }, []);
// }

// console.log(q([1, 2, 3, 2, 4, 5, 1]));
// // Output: [1, 2, 3, 4, 5]
