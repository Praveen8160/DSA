const arr = [80, 40,45,54,5,65];
function secondLargest(arr) {
  let largest = -Infinity;
  let slargest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 2) {
      return { largest: null, secondLargest: null };
    }
    if (largest < arr[i]) {
      slargest = largest;
      largest = arr[i];
    } else if (largest > arr[i] && slargest < arr[i]) {
      slargest = arr[i];
    }
  }
  return { largest, slargest: slargest === -Infinity ? null : slargest };
}
console.log(secondLargest(arr));
