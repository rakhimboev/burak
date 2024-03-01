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

const getPositive = (arr: number[]) => {
  const positiveNumbers: number[] = arr.filter((num) => num > 0);
  const positiveString: string = positiveNumbers.join("");

  console.log(positiveString);
};

getPositive([1, -4, 2]);
getPositive([7, -1, 8, 9, -8]);
