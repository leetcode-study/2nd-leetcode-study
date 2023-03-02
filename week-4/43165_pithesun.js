function dfsVisit(prevsum, prev, numbers, target) {
  let sum = prevsum + prev;
  let cur = numbers[0];

  if (numbers.length === 0) {
    //console.log("sum", sum);
    if (sum === target) {
      return 1;
    }
    return 0;
  }

  return (
    dfsVisit(sum, cur, numbers.slice(1), target) +
    dfsVisit(sum, -cur, numbers.slice(1), target)
  );
}


function solution(numbers, target) {
    return dfsVisit(0, 0, numbers, target);
}
