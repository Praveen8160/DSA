function triangle(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    for (let j = 0; j < i * 2 + 1; j++) {
      row += "*";
    }
    for (let j = 0; j < n - i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
function reversetriangle(n) {
  for (let i = 0; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    for (let j = 0; j < 2 * n - (i * 2 + 1); j++) {
      row += "*";
    }
    for (let j = 0; j < i; j++) {
      row += " ";
    }
    console.log(row);
  }
}
triangle(4);
reversetriangle(5);
