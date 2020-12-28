function multiples(boundary) {
  /* 
  create a variable accumulatedSum
  loop from 1 < boundary
  check if i%3===0 or i%5===0
  sum += i
  */

  let accumulatedSum = 0;

  for (let i = 0; i < boundary; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      accumulatedSum += i;
    }
  }

  return accumulatedSum;
}

console.log(multiples(1000));
