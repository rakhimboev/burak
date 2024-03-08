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

function findLongestWord(input: string): string {
  let words: string[] = input.split(" ");
  let long: string = "";

  for (let word of words) {
    if (word.length > long.length) {
      long = word;
    }
  }
  return long;
}

let result: string = findLongestWord("I come from Uzbekistan");
console.log(result);

result = findLongestWord("I come from future");
console.log(result);
