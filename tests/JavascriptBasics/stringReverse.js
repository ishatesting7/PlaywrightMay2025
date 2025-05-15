let str = "I am new to Playwright with Javascript";

let str1 = "Hello"

/*

3 Functions - Assignment
------------------------
1 Function - It will complete string and will do reverse completely
Output - "tpircsavaJ htiw thgirwyalP ot wen ma I"

2 Function - We need to reverse Individual word instead of whole sentence
Output = "I ma wen ot thgirwyalP htiw tpircsavaJ"

3 Function - Reverse the placing of word in the sentence
Output - "Javascript with Playwright to new am I"
*/

function reverseFullString(input) {
    return input.split('').reverse().join('');
  }
  
  // Example:
  console.log(reverseFullString("I am new to Playwright with Javascript"));
  // Output: "tpircsavaJ htiw thgirwyalP ot wen ma I"
  

  function reverseEachWord(input) {
    return input
      .split(' ')
      .map(word => word.split('').reverse().join(''))
      .join(' ');
  }
  
  // Example:
  console.log(reverseEachWord("I am new to Playwright with Javascript"));
  // Output: "I ma wen ot thgirwyalP htiw tpircsavaJ"
  function reverseWordOrder(input) {
    return input.split(' ').reverse().join(' ');
  }
  
  // Example:
  console.log(reverseWordOrder("I am new to Playwright with Javascript"));
  // Output: "Javascript with Playwright to new am I"

//   function reverseFullString(input) {
//     let reversed = '';
//     for (let i = input.length - 1; i >= 0; i--) {
//       reversed += input[i];
//     }
//     return reversed;
//   }

//   function reverseEachWord(input) {
//     return input.replace(/\S+/g, word =>
//       [...word].reverse().join('')
//     );
//   }
//   function reverseWordOrder(input) {
//     const words = [...input.match(/\S+/g)];
//     return words.reverse().join(' ');
//   }
//   const sentence = "I am new to Playwright with Javascript";

//   console.log(reverseFullString(sentence));
//   // "tpircsavaJ htiw thgirwyalP ot wen ma I"
  
//   console.log(reverseEachWord(sentence));
//   // "I ma wen ot thgirwyalP htiw tpircsavaJ"
  
//   console.log(reverseWordOrder(sentence));
//   // "Javascript with Playwright to new am I"
      