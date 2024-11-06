const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function Insertvalue(arr, val, pos) {
  if (pos > arr.length - 1) {
    throw new Error("enter avlid input");
  }
  //   arr.splice(pos, 0, val);

  for (i = arr.length - 1; i >= pos; i--) {
    arr[i + 1] = arr[i];
    if (i == pos) {
      arr[i] = val;
    }
  }
}
const arr = [20, 30, 40, 50, 60, 70];
rl.question("Enter value: ", (val) => {
  rl.question("enter postion", (pos) => {
    try {
      console.log(arr);
      Insertvalue(arr, parseInt(val), parseInt(pos));
      console.log(arr);
    } catch (error) {
      console.error(error.message);
    } finally {
      rl.close();
    }
  });
});
