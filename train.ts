// cluster => database => collection => document => dataset
// res.send | json | redirect | end | render

/*
  Project standards:
  -Logging standards
  -Naming standards:
    functions, methods, variables => camelCase
    classes => PascalCase
    folders, files => kebab-case
    css => snake_case
  -Error handlings

*/

/*
  API types:
  -Traditional api
  -Rest API
  GraphQL API
*/

/*
Traditional frontend  => BSSR => EJS
Modern frontend => SPA => ReactJS
*/

/*
cookie ability:
  join in request
  self destroy
*/

/*  Validatons:
  -Front end validation
  -Backend validation
  -Database validation

*/

/*~~~~~~~~~~~~~~~~~~~~~~~G-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// const highest = (arr: number[]) => {
//   let max: number = 0;

//   for (let i: number = 1; i < arr.length; i++) {
//     if (arr[i] > arr[max]) {
//       max = i;
//     }
//   }
//   console.log(max);
// };

// highest([5, 21, 12, 21, 8]);
// highest([5, 5, 5, 7]);

/*~~~~~~~~~~~~~~~~~~~~~~~H-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// const getPositive = (arr: number[]) => {
//   const positiveNumbers: number[] = arr.filter((num) => num > 0);
//   const positiveString: string = positiveNumbers.join("");

//   console.log(positiveString);
// };

// getPositive([1, -4, 2]);
// getPositive([7, -1, 8, 9, -8]);

/*~~~~~~~~~~~~~~~~~~~~~~~I-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function getDigits(input: string): string {
//   let str: string = "";

//   for (let char of input) {
//     if (/[0-9]/.test(char)) {
//       str += char;
//     }
//   }
//   return str;
// }

// let result: string = getDigits("m14i1t");
// console.log(result);

// result = getDigits("7u8z9b");
// console.log(result);

/*~~~~~~~~~~~~~~~~~~~~~~~J-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function findLongestWord(input: string): string {
//   let words: string[] = input.split(" ");
//   let long: string = "";

//   for (let word of words) {
//     if (word.length > long.length) {
//       long = word;
//     }
//   }
//   return long;
// }

// let result: string = findLongestWord("I come from Uzbekistan");
// console.log(result);

// result = findLongestWord("I come from future");
// console.log(result);

/*~~~~~~~~~~~~~~~~~~~~~~~K-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function countVowels(input: string): number {
//   let count: number = 0;

//   for (let a of input.toLowerCase()) {
//       if ('aeiou'.includes(a)) {
//           count++;
//       }
//   }
//   return count;
// }

// let result: number = countVowels("string");
// console.log(result);

// result = countVowels("taqsir");
// console.log(result);

/*~~~~~~~~~~~~~~~~~~~~~~~L-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function reverseSentence(input: string): string {
//   const words: string[] = input.split(" ");

//   const reversed: string[] = words.map((word) =>
//     word.split("").reverse().join("")
//   );
//   return reversed.join(" ");
// }

// let result: string = reverseSentence("we like coding");
// console.log(result);

// result = reverseSentence("hello world");
// console.log(result);

/*~~~~~~~~~~~~~~~~~~~~~~~Man-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function getSquareNumbers(
//   numbers: number[]
// ): { number: number; square: number }[] {
//   const squares: { number: number; square: number }[] = [];

//   for (let num of numbers) {
//     squares.push({ number: num, square: num * num });
//   }
//   return squares;
// }

// let result: { number: number; square: number }[] = getSquareNumbers([7, 8, 9]);
// console.log(result);

// result = getSquareNumbers([1, 2, 3]);
// console.log(result);

/*~~~~~~~~~~~~~~~~~~~~~~~N-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function palindromCheck(input: string): boolean {
//   const reverse: string = input.split('').reverse().join('');
//   return input === reverse;
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));

/*~~~~~~~~~~~~~~~~~~~~~~~O-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function calculateSumOfNumbers(arr: any[]): number {
//   let sum: number = 0;

//   for (let item of arr) {
//     if (typeof item === "number") {
//       sum += item;
//     }
//   }

//   return sum;
// }

// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));

/*~~~~~~~~~~~~~~~~~~~~~~~P-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

// function objectToArray(obj: { [key: string]: any }): any[][] {
//   const result: any[][] = [];

//   for (let key in obj) {
//       result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(objectToArray({a: 10, b: 20})); 

/*~~~~~~~~~~~~~~~~~~~~~~~Q-TASK~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function hasProperty(obj: { [key: string]: any }, str: string): boolean {
  return obj.hasOwnProperty(str);
}

console.log(hasProperty({name: "BMW", model: "M3"}, "model"));
console.log(hasProperty({name: "BMW", model: "M3"}, "year")); 