let count = 0;
let check = 5;
function first() {
  if (count == 5) {
    return;
  }
  console.log(count);
  count++;
  first();
  console.log(check);// every function call this console fall in waitting 
  check++;
}
first();
