function pattern(n) {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      let ch = String.fromCharCode("A".charCodeAt(0) + j);
      row += ch + " ";
    }
    console.log(row);
  }
}
pattern(4);
// A
// AB
// ABC
// ABCD
