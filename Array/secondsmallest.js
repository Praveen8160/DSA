const arr = [8, 40, 45, 5, 5, 65];
function secondSmallest(arr) {
  if (arr.length < 2) {
    return { smallest: null, ssmallest: null };
  }

  let smallest = Infinity;
  let ssmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      ssmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < ssmallest && arr[i] > smallest) {
      ssmallest = arr[i];
    }
  }

  return { smallest, ssmallest: ssmallest === Infinity ? null : ssmallest };
}
console.log(secondSmallest(arr));
