function findUnion(arr1, arr2, n, m)
{
  //your code here
  const setval = new Set();
  for (let i = 0; i < n; i++) {
    setval.add(arr1[i]);
  }
  for (let i = 0; i < m; i++) {
    setval.add(arr2[i]);
  }
  return Array.from(setval).sort((a, b) => a - b);
}
const arr1 = [1, 2, 3, 4, 4];
const arr2 = [2, 3, 4, 5, 6, 7, 8];
console.log(findUnion(arr1, arr2, arr1.length, arr2.length))
