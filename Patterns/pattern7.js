function pattern7(n) {
  for (let i = 0; i <= n * 2 - 1; i++) {
    let row = "";
    if (i <= n) {
      for (let j = 0; j < i; j++) {
        row += "*";
      }
      console.log(row);
    } else {
      for (let j = 0; j <= 2 * n - (i + 1); j++) {
        row += "*";
      }
      console.log(row);
    }
  }
}
pattern7(9);
