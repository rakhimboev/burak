// cluster => database => collection => document




// G task
const highest = (arr: number[]) => {
  let max: number = 0;

  for (let i: number = 1; i < arr.length; i++) {
    if (arr[i] > arr[max]) {
      max = i;
    }
  }
  console.log(max);
};

highest([5, 21, 12, 21, 8]);
highest([5, 5, 5, 7]);
