// Question on Recursion in freecodecamp
//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers

function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) {
    return [endNum];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
}
console.log(rangeOfNumbers(1, 7));
